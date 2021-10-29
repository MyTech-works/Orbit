using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SK_CRM.Models;
using System.IO;
using ImageResizer;
using OpenXmlPowerTools;
using DocumentFormat.OpenXml.Wordprocessing;
using DocumentFormat.OpenXml.Packaging;
using System.Xml.Linq;
using SK_CRM.Models.AggregateModel.Product;
using System.Data.SqlClient;
using SK_CRM.Services;
using System.Drawing;

namespace SK_CRM.Controllers
{
    [Authorize]
    public class productController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private readonly CommonServices _services = new CommonServices();
        private long MenuID;
        // GET: ProductDetails
        public async Task<ActionResult> Index(int currentpage = 1, int pagesize = 10)
        {
            MenuID = 5;
            EmployeeMenu menu = _services.GetEmployeeMenuByID(MenuID);
            ViewBag.Menu = menu.MenuName;
            //int totalcount = await db.productDetails.Where(x => x.IsDeleted == false).Select(p => p.Id).CountAsync();
            //int skipcount = (currentpage - 1) * pagesize;
            //ProductDetailsAllModel productDetails = new ProductDetailsAllModel()
            //{
            //    products = await db.productDetails.Where(x => x.IsDeleted == false).OrderByDescending(x => x.Id).Skip(skipcount).Take(pagesize).ToListAsync(),
            //    uploads = new List<MultipleFileUpload>(),
            //    currentPage = currentpage,
            //    pageSize = pagesize,
            //    totalCount = totalcount,
            //    skipCount = skipcount,
            //    pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount,
            //    pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount,

            //    ActiveProducts= await db.productDetails.Where(x => x.IsNotActive == false && x.IsDeleted == false).Select(p => p.Id).CountAsync(),
            //    NotActiveProducts = await db.productDetails.Where(x => x.IsNotActive == true && x.IsDeleted == false).Select(p => p.Id).CountAsync(),
            //    StockProducts= await db.productDetails.Where(x => x.IsNotActive == false && x.IsDeleted == false).Select(p => p.BalanceStockQty).SumAsync(),
            //    TotalProducts = totalcount
            //};

            //foreach (ProductDetails product in productDetails.products)
            //{
            //    List<MultipleFileUpload> file = await db.fileUpload.Where(x => x.Type == "Products" && x.IsDeleted == false && x.RefId == product.Id).ToListAsync();
            //    productDetails.uploads.AddRange(file);
            //}

            return View();
        }

        // GET: ProductDetails/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProductDetails productDetails = await db.productDetails.FindAsync(id);
            if (productDetails == null)
            {
                return HttpNotFound();
            }
            return View(productDetails);
        }

        // GET: ProductDetails/Create
        public ActionResult Create()
        {
            MenuID = 6;
            EmployeeMenu menu = _services.GetEmployeeMenuByID(MenuID);
            ViewBag.Menu = menu.MenuName;
            Session["ProductGuid"] = Guid.NewGuid();
            return View();
        }

        // POST: ProductDetails/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]

        public async Task<JsonResult> addProduct(string ProductCode,string ProductName, string Description, decimal UnitPrice, decimal BalanceStockQty, bool IsNotActive, string ProductDescription)
        {

            List<tempFileUpload> tempFiles = new List<tempFileUpload>();
            string guid = Session["ProductGuid"].ToString();
            if (!string.IsNullOrWhiteSpace(guid))
            {
                tempFiles = await db.tempFileUpload.Where(x => x.Guid == guid && x.FormName == "Product").ToListAsync();
            }
            if (tempFiles.Count() > 0)
            {
                SqlParameter[] prefixParameters = {
                new SqlParameter("@Type", "Product"),
                new SqlParameter("@EventType", "Prefix")
            };
                Description = Description.Replace(Environment.NewLine, "\n");
                ProductDetails productDetails = new ProductDetails()
                {
                    ProductCode = ProductCode,
                    ProductName = ProductName,
                    BalanceStockQty = BalanceStockQty,
                    CreatedDate = DateTime.Now,
                    Description = Description,
                    Id = 0,
                    IsDeleted = false,
                    IsNotActive = IsNotActive,
                    ModifiedDate = DateTime.Now,
                    ProductDescription = ProductDescription,
                    ProductImage = string.Empty,
                    UnitPrice = UnitPrice
                };
                db.productDetails.Add(productDetails);
                await db.SaveChangesAsync();
                long lastProductId = await db.productDetails.MaxAsync(item => item.Id);
                long orderby = 0;
                MultipleFileUpload lastorderby = await db.fileUpload.Where(x => x.RefId == lastProductId).OrderByDescending(item => item.OrderBy).FirstOrDefaultAsync();
                if (lastorderby != null)
                {
                    orderby = lastorderby.OrderBy;
                }
                foreach (tempFileUpload tempFile in tempFiles.Where(x => x.Type == "ProductImage" && x.FormName == "Product"))
                {
                    MultipleFileUpload multipleFileUpload = new MultipleFileUpload
                    {
                        RefId = lastProductId,
                        Type = tempFile.Type,
                        ImagePath = tempFile.Base64String,
                        FormName = tempFile.FormName,
                        OrderBy = orderby + 1
                    };
                    db.fileUpload.Add(multipleFileUpload);
                    await db.SaveChangesAsync();
                }

                var origins = await db.tempFileUpload.Where(x => x.Guid == guid && x.FormName == "Product").ToListAsync();
                db.tempFileUpload.RemoveRange(origins);
                await db.SaveChangesAsync();

                SqlParameter[] updateParameters = {
                        new SqlParameter("@Type", "Product"),
                        new SqlParameter("@EventType", "Update")
                    };

                string response = await db.Database.SqlQuery<string>("GetPrefixCode @Type, @EventType", updateParameters).FirstOrDefaultAsync();
                if (string.IsNullOrWhiteSpace(response))
                {
                    return Json(new { success = false, msg = "GetPrefixCode not updated" }, JsonRequestBehavior.AllowGet);
                }
                return Json(new { success = true, msg = "Successfully added" }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new { success = false, msg = "Image not found, re-upload it." }, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]

        public async Task<JsonResult> updateProduct(int ProductId, string ProductCode, string ProductName, string Description, decimal UnitPrice, decimal BalanceStockQty, bool IsNotActive, string ProductDescription)
        {

            List<tempFileUpload> tempFiles = new List<tempFileUpload>();
            string guid = Session["ProductGuid"].ToString();
            if (!string.IsNullOrWhiteSpace(guid))
            {
                tempFiles = await db.tempFileUpload.Where(x => x.Guid == guid).ToListAsync();
            }

            ProductDetails productDetails = await db.productDetails.FindAsync(ProductId);
            Description = Description.Replace(Environment.NewLine, "\n");
            productDetails.ProductCode = ProductCode;
            productDetails.ProductName = ProductName;
            productDetails.BalanceStockQty = BalanceStockQty;
            productDetails.Description = Description;
            productDetails.IsNotActive = IsNotActive;
            productDetails.ModifiedDate = DateTime.Now;
            productDetails.ProductDescription = ProductDescription;
            productDetails.UnitPrice = UnitPrice;

            db.Entry(productDetails).State = EntityState.Modified;
            await db.SaveChangesAsync();
            long lastProductId = ProductId;
            long orderby = 0;
            MultipleFileUpload lastorderby = await db.fileUpload.Where(x => x.RefId == lastProductId).OrderByDescending(item => item.OrderBy).FirstOrDefaultAsync();
            if (lastorderby != null)
            {
                orderby = lastorderby.OrderBy;
            }
            foreach (tempFileUpload tempFile in tempFiles)
            {
                MultipleFileUpload multipleFileUpload = new MultipleFileUpload
                {
                    RefId = lastProductId,
                    Type = tempFile.Type,
                    ImagePath = tempFile.Base64String,
                    FormName = tempFile.FormName,
                    OrderBy = orderby + 1
                };
                db.fileUpload.Add(multipleFileUpload);
                await db.SaveChangesAsync();
            }

            var origins = await db.tempFileUpload.Where(x => x.Guid == guid && x.FormName == "Product").ToListAsync();
            db.tempFileUpload.RemoveRange(origins);
            await db.SaveChangesAsync();
            return Json(new { success = true, msg = "Successfully updated" }, JsonRequestBehavior.AllowGet);

        }

        // GET: ProductDetails/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Session["ProductGuid"] = Guid.NewGuid();
            ProductDetails productDetails = await db.productDetails.FindAsync(id);
            if (productDetails == null)
            {
                return HttpNotFound();
            }
            return View(productDetails);
        }

        // POST: ProductDetails/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,ProductName,Description,ProductImage,ProductCode,ProductDescription,UnitPrice,BalanceStockQty,IsNotActive")] ProductDetails productDetails)
        {
            if (ModelState.IsValid)
            {

                ProductDetails product = await db.productDetails.FindAsync(productDetails.Id);
                product.ModifiedDate = DateTime.Now;
                product.ProductDescription = productDetails.ProductDescription;
                product.ProductName = productDetails.ProductName;
                product.ProductCode = productDetails.ProductCode;
                product.Description = productDetails.Description;
                product.UnitPrice = productDetails.UnitPrice;
                product.BalanceStockQty = productDetails.BalanceStockQty;
                product.IsNotActive = productDetails.IsNotActive;
                db.Entry(productDetails).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(productDetails);
        }

        // GET: ProductDetails/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProductDetails productDetails = await db.productDetails.FindAsync(id);
            if (productDetails == null)
            {
                return HttpNotFound();
            }
            return View(productDetails);
        }

        // POST: ProductDetails/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            ProductDetails productDetails = await db.productDetails.FindAsync(id);
            db.productDetails.Remove(productDetails);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public static void ConvertDocToHtml()
        {
            string DocxFilePath = @"D:\Quotation\Quotation.docx";
            string HTMLFilePath = @"D:\Quotation\Quotation.html";
            byte[] byteArray = System.IO.File.ReadAllBytes(DocxFilePath);
            using (MemoryStream memoryStream = new MemoryStream())
            {
                memoryStream.Write(byteArray, 0, byteArray.Length);
                using (WordprocessingDocument doc = WordprocessingDocument.Open(memoryStream, true))
                {
                    HtmlConverterSettings settings = new HtmlConverterSettings()
                    {
                        PageTitle = "My Page Title"
                    };
                    XElement html = HtmlConverter.ConvertToHtml(doc, settings);

                    System.IO.File.WriteAllText(HTMLFilePath, html.ToStringNewLineOnAttributes());
                }
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
