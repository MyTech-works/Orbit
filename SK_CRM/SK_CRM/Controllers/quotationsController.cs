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
using System.Data.SqlClient;
using SK_CRM.Models.AggregateModel;
using System.IO;
using OpenHtmlToPdf;
using SK_CRM.Services;
using System.Diagnostics;
using Spire.Doc.Fields;
using Spire.Doc.Documents;
using Spire.Doc;
//using Create_WordPDF;
using WordToPDF;

namespace SK_CRM.Controllers
{
    [Authorize]
    public class quotationsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        //private Cls_WordPDF clsWordPDF { get; set; } = new Cls_WordPDF();
        private readonly CommonServices _services = new CommonServices();
        private long MenuID;
        // GET: quotations
        public async Task<ActionResult> Index()
        {
            MenuID = 8;
            EmployeeMenu menu = _services.GetEmployeeMenuByID(MenuID);
            ViewBag.Menu = menu.MenuName;
            return View(await db.Quotations.ToListAsync());
        }

        // GET: quotations/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Quotation quotation = await db.Quotations.FindAsync(id);
            if (quotation == null)
            {
                return HttpNotFound();
            }
            return View(quotation);
        }

        // GET: quotations/Details/5
        public async Task<ActionResult> preview(int? id)
        {
            MenuID = 8;
            EmployeeMenu menu = _services.GetEmployeeMenuByID(MenuID);
            ViewBag.Menu = menu.MenuName;
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Quotation quotation = await db.Quotations.FindAsync(id);
            if (quotation == null)
            {
                return HttpNotFound();
            }
            return View(quotation);
        }

        // GET: quotations/Create
        public ActionResult Create()
        {
            MenuID = 9;
            EmployeeMenu menu = _services.GetEmployeeMenuByID(MenuID);
            ViewBag.Menu = menu.MenuName;
            Session["QuotationGuid"] = Guid.NewGuid();
            return View();
        }

        // POST: quotations/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "QuotationId,QuotationNo,QuotationDate,QuotationDueDate,BilledByCompanyId,BilledToCustomerId,RefPersonId")] Quotation quotation)
        {
            MenuID = 9;
            EmployeeMenu menu = _services.GetEmployeeMenuByID(MenuID);
            ViewBag.Menu = menu.MenuName;
            if (ModelState.IsValid)
            {
                db.Quotations.Add(quotation);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(quotation);
        }

        // GET: quotations/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Session["QuotationGuid"] = Guid.NewGuid();

            string guid = Session["QuotationGuid"].ToString();

            List<QuotationProducts> quotationProducts = await db.quotationProducts.Where(x => x.QuotationId == id).ToListAsync();

            if (quotationProducts.Count > 0)
            {

                if (!string.IsNullOrWhiteSpace(guid))
                {
                    foreach (QuotationProducts item in quotationProducts)
                    {
                        int productid = item.ProductId;
                        decimal quantity = item.Quantity;
                        tempQuotationProducts tempQuotationCheck = await db.tempQuotationProducts.Where(x => x.Guid == guid && x.productId == productid).FirstOrDefaultAsync();
                        ProductDetails product = await db.productDetails.Where(x => x.Id == productid).FirstOrDefaultAsync();
                        if (tempQuotationCheck == null)
                        {

                            tempQuotationProducts tempQuotation = new tempQuotationProducts()
                            {
                                Guid = guid,
                                productId = item.ProductId,
                                Quantity = item.Quantity,
                                UnitPrice = item.UnitPrice,
                                TotalPrice = item.TotalPrice,
                                QuotationProductId = item.RefId
                            };

                            db.tempQuotationProducts.Add(tempQuotation);
                            await db.SaveChangesAsync();
                        }
                        else
                        {
                            tempQuotationCheck.Quantity = item.Quantity;
                            tempQuotationCheck.UnitPrice = item.UnitPrice;
                            tempQuotationCheck.TotalPrice = item.TotalPrice;
                            db.Entry(tempQuotationCheck).State = EntityState.Modified;
                            await db.SaveChangesAsync();
                        }
                    }

                }
            }

            Quotation quotation = await db.Quotations.FindAsync(id);
            if (quotation == null)
            {
                return HttpNotFound();
            }
            return View(quotation);
        }

        // POST: quotations/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "QuotationId,QuotationNo,QuotationDate,QuotationDueDate,BilledByCompanyId,BilledToCustomerId,RefPersonId")] Quotation quotation)
        {
            if (ModelState.IsValid)
            {
                db.Entry(quotation).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(quotation);
        }

        // GET: quotations/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Quotation quotation = await db.Quotations.FindAsync(id);
            if (quotation == null)
            {
                return HttpNotFound();
            }
            return View(quotation);
        }

        // POST: quotations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Quotation quotation = await db.Quotations.FindAsync(id);
            db.Quotations.Remove(quotation);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        public ActionResult _PartialQuotationAdd()
        {
            ViewBag.Companies = db.companyDetails.Where(x => x.IsDeleted == false).ToList();
            return PartialView();
        }

        public ActionResult _PartialQuotationEdit(int id)
        {
            ViewBag.Companies = db.companyDetails.Where(x => x.IsDeleted == false).ToList();
            Quotation quotation = db.Quotations.Find(id);
            return PartialView(quotation);
        }

        public ActionResult _PartialQuotationPreview(int id)
        {
            quotationpreviewModel quotationpreview = new quotationpreviewModel();
            quotationpreview.quotation = db.Quotations.Find(id);
            if (quotationpreview.quotation.BilledByCompanyId != 0)
            {
                quotationpreview.company = db.companyDetails.Where(x => x.CompanyId == quotationpreview.quotation.BilledByCompanyId).FirstOrDefault();
            }
            if (quotationpreview.quotation.BilledToCustomerId != 0)
            {
                quotationpreview.customer = db.customerDetails.Where(x => x.CustomerId == quotationpreview.quotation.BilledToCustomerId).FirstOrDefault();
            }

            if (quotationpreview.quotation.RefPersonId != 0)
            {
                quotationpreview.refPerson = db.customerDetails.Where(x => x.CustomerId == quotationpreview.quotation.RefPersonId).FirstOrDefault();
            }
            quotationpreview.quotationProducts = db.quotationProducts.Where(x => x.QuotationId == quotationpreview.quotation.QuotationId).ToList();
            quotationpreview.productDetails = new List<ProductDetails>();
            foreach (QuotationProducts quoteprod in quotationpreview.quotationProducts)
            {
                List<ProductDetails> productDetails = db.productDetails.Where(x => x.IsDeleted == false && x.Id == quoteprod.ProductId).ToList();
                if (productDetails.Count > 0)
                {
                    quotationpreview.productDetails.AddRange(productDetails);
                }
            }
            quotationpreview.uploads = new List<MultipleFileUpload>();
            foreach (ProductDetails product in quotationpreview.productDetails)
            {
                List<MultipleFileUpload> file = db.fileUpload.Where(x => x.FormName == "Product" && x.Type == "ProductImage" && x.IsDeleted == false && x.RefId == product.Id).ToList();
                if (file.Count > 0)
                {
                    quotationpreview.uploads.AddRange(file);
                }
            }
            return PartialView(quotationpreview);
        }

        [HttpPost]

        public async Task<JsonResult> addQuotation(string QuotationDate, string QuotationDueDate, int BilledByCompanyId, int BilledToCustomerId, int? RefPersonId, string QuotationProducts)
        {
            try
            {
                string guid = Session["QuotationGuid"].ToString();

                if (!string.IsNullOrWhiteSpace(QuotationProducts))
                {

                    if (!string.IsNullOrWhiteSpace(guid))
                    {
                        foreach (string item in QuotationProducts.Split(','))
                        {
                            int productid = Convert.ToInt32(item.Split('|')[0]);
                            decimal quantity = Convert.ToDecimal(item.Split('|')[1]);
                            tempQuotationProducts tempQuotationCheck = await db.tempQuotationProducts.Where(x => x.Guid == guid && x.productId == productid).FirstOrDefaultAsync();
                            ProductDetails product = await db.productDetails.Where(x => x.Id == productid).FirstOrDefaultAsync();
                            if (tempQuotationCheck == null)
                            {

                                tempQuotationProducts tempQuotation = new tempQuotationProducts()
                                {
                                    Guid = guid,
                                    productId = productid,
                                    Quantity = quantity,
                                    UnitPrice = product.UnitPrice,
                                    TotalPrice = quantity * product.UnitPrice
                                };

                                db.tempQuotationProducts.Add(tempQuotation);
                                await db.SaveChangesAsync();
                            }
                            else
                            {
                                tempQuotationCheck.Quantity = quantity;
                                tempQuotationCheck.UnitPrice = product.UnitPrice;
                                tempQuotationCheck.TotalPrice = quantity * product.UnitPrice;
                                tempQuotationCheck.IsDeleted = tempQuotationCheck.IsDeleted;
                                db.Entry(tempQuotationCheck).State = EntityState.Modified;
                                await db.SaveChangesAsync();
                            }
                        }

                    }
                }

                List<tempQuotationProducts> tempFiles = new List<tempQuotationProducts>();
                if (!string.IsNullOrWhiteSpace(guid))
                {
                    tempFiles = await db.tempQuotationProducts.Where(x => x.Guid == guid).ToListAsync();
                }

                SqlParameter[] prefixParameters = {
                new SqlParameter("@Type", "Quotation"),
                new SqlParameter("@EventType", "Prefix")
            };
                Quotation quotation = new Quotation()
                {
                    QuotationNo = await db.Database.SqlQuery<string>("GetQuotationPrefixCode @Type, @EventType", prefixParameters).FirstOrDefaultAsync(),
                    BilledByCompanyId = BilledByCompanyId,
                    BilledToCustomerId = BilledToCustomerId,
                    QuotationDate = Convert.ToDateTime(QuotationDate),
                    QuotationDueDate = Convert.ToDateTime(QuotationDueDate),
                    RefPersonId = RefPersonId,
                    CreateDate = DateTime.Now,
                    ModifiedDate = DateTime.Now
                };
                db.Quotations.Add(quotation);
                await db.SaveChangesAsync();
                int lastQuoteId = await db.Quotations.MaxAsync(item => item.QuotationId);

                foreach (tempQuotationProducts temp in tempFiles)
                {
                    if (!temp.IsDeleted)
                    {
                        QuotationProducts quotationProducts = new QuotationProducts()
                        {
                            QuotationId = lastQuoteId,
                            ProductId = temp.productId,
                            Quantity = temp.Quantity,
                            UnitPrice = temp.UnitPrice,
                            TotalPrice = temp.TotalPrice
                        };

                        db.quotationProducts.Add(quotationProducts);
                        await db.SaveChangesAsync();
                    }
                }


                var origins = await db.tempQuotationProducts.Where(x => x.Guid == guid).ToListAsync();
                db.tempQuotationProducts.RemoveRange(origins);
                await db.SaveChangesAsync();

                SqlParameter[] updateParameters = {
                        new SqlParameter("@Type", "Quotation"),
                        new SqlParameter("@EventType", "Update")
                    };

                string response = await db.Database.SqlQuery<string>("GetQuotationPrefixCode @Type, @EventType", updateParameters).FirstOrDefaultAsync();
                if (string.IsNullOrWhiteSpace(response))
                {
                    return Json(new { success = false, msg = "GetQuotationPrefixCode not updated" }, JsonRequestBehavior.AllowGet);
                }
                await GenerateQuotation(lastQuoteId);

                return Json(new { success = true, msg = "Successfully added" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]

        public async Task<JsonResult> updateQuotation(int QuotationId, string QuotationDate, string QuotationDueDate, int BilledByCompanyId, int BilledToCustomerId, int? RefPersonId, string QuotationProducts)
        {
            try
            {
                if (QuotationId != 0)
                {
                    string guid = Session["QuotationGuid"].ToString();

                    if (!string.IsNullOrWhiteSpace(QuotationProducts))
                    {

                        if (!string.IsNullOrWhiteSpace(guid))
                        {
                            foreach (string item in QuotationProducts.Split(','))
                            {
                                int productid = Convert.ToInt32(item.Split('|')[0]);
                                decimal quantity = Convert.ToDecimal(item.Split('|')[1]);
                                tempQuotationProducts tempQuotationCheck = await db.tempQuotationProducts.Where(x => x.Guid == guid && x.productId == productid).FirstOrDefaultAsync();
                                ProductDetails product = await db.productDetails.Where(x => x.Id == productid).FirstOrDefaultAsync();
                                if (tempQuotationCheck == null)
                                {

                                    tempQuotationProducts tempQuotation = new tempQuotationProducts()
                                    {
                                        Guid = guid,
                                        productId = productid,
                                        Quantity = quantity,
                                        UnitPrice = product.UnitPrice,
                                        TotalPrice = quantity * product.UnitPrice
                                    };

                                    db.tempQuotationProducts.Add(tempQuotation);
                                    await db.SaveChangesAsync();
                                }
                                else
                                {
                                    tempQuotationCheck.Quantity = quantity;
                                    tempQuotationCheck.UnitPrice = product.UnitPrice;
                                    tempQuotationCheck.TotalPrice = quantity * product.UnitPrice;
                                    tempQuotationCheck.IsDeleted = tempQuotationCheck.IsDeleted;
                                    db.Entry(tempQuotationCheck).State = EntityState.Modified;
                                    await db.SaveChangesAsync();
                                }
                            }

                        }
                    }

                    List<tempQuotationProducts> tempFiles = new List<tempQuotationProducts>();
                    if (!string.IsNullOrWhiteSpace(guid))
                    {
                        tempFiles = await db.tempQuotationProducts.Where(x => x.Guid == guid).ToListAsync();
                    }


                    Quotation quotation = await db.Quotations.FindAsync(QuotationId);
                    quotation.QuotationDate = Convert.ToDateTime(QuotationDate);
                    quotation.QuotationDueDate = Convert.ToDateTime(QuotationDueDate);
                    quotation.RefPersonId = RefPersonId;
                    quotation.BilledByCompanyId = BilledByCompanyId;
                    quotation.BilledToCustomerId = BilledToCustomerId;
                    quotation.ModifiedDate = DateTime.Now;
                    db.Entry(quotation).State = EntityState.Modified;
                    await db.SaveChangesAsync();

                    foreach (tempQuotationProducts temp in tempFiles)
                    {
                        if (temp.IsDeleted)
                        {
                            QuotationProducts quotedelete = await db.quotationProducts.FindAsync(temp.QuotationProductId);
                            db.quotationProducts.Remove(quotedelete);
                            await db.SaveChangesAsync();
                        }
                        else if (temp.QuotationProductId != 0)
                        {
                            QuotationProducts tempQuotationCheck = await db.quotationProducts.FindAsync(temp.QuotationProductId);
                            tempQuotationCheck.Quantity = temp.Quantity;
                            tempQuotationCheck.UnitPrice = temp.UnitPrice;
                            tempQuotationCheck.TotalPrice = temp.TotalPrice;
                            db.Entry(tempQuotationCheck).State = EntityState.Modified;
                            await db.SaveChangesAsync();
                        }
                        else
                        {
                            QuotationProducts quotationProducts = new QuotationProducts()
                            {
                                QuotationId = QuotationId,
                                ProductId = temp.productId,
                                Quantity = temp.Quantity,
                                UnitPrice = temp.UnitPrice,
                                TotalPrice = temp.TotalPrice
                            };
                            db.quotationProducts.Add(quotationProducts);
                            await db.SaveChangesAsync();
                        }


                    }


                    var origins = await db.tempQuotationProducts.Where(x => x.Guid == guid).ToListAsync();
                    db.tempQuotationProducts.RemoveRange(origins);
                    await db.SaveChangesAsync();
                    await GenerateQuotation(QuotationId);

                    return Json(new { success = true, msg = "Successfully updated" }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, msg = "Invalid request" }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]

        public async Task<JsonResult> removeQuotationProduct(string productidlist)
        {
            try
            {
                string guid = Session["QuotationGuid"].ToString();
                if (!string.IsNullOrWhiteSpace(guid))
                {
                    foreach (string id in productidlist.Split(','))
                    {
                        int productid = Convert.ToInt32(id);
                        tempQuotationProducts tempQuotationCheck = await db.tempQuotationProducts.Where(x => x.Guid == guid && x.productId == productid).FirstOrDefaultAsync();
                        if (tempQuotationCheck != null)
                        {
                            tempQuotationCheck.IsDeleted = true;
                            db.Entry(tempQuotationCheck).State = EntityState.Modified;
                            await db.SaveChangesAsync();
                        }
                    }
                }

                return Json(new { success = true, msg = "Successfully updated" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        
        [HttpPost]
        public ActionResult GenerateQuotationFromWord(long id)
        {
            string RouteURL = string.Empty;
            try
            {
                Quotation quotation = db.Quotations.Find(id);
                quotationpreviewModel quotationpreview = new quotationpreviewModel();
                quotationpreview.quotation = db.Quotations.Find(id);
                if (quotationpreview.quotation.BilledByCompanyId != 0)
                {
                    quotationpreview.company = db.companyDetails.Where(x => x.CompanyId == quotationpreview.quotation.BilledByCompanyId).FirstOrDefault();
                }
                if (quotationpreview.quotation.BilledToCustomerId != 0)
                {
                    quotationpreview.customer = db.customerDetails.Where(x => x.CustomerId == quotationpreview.quotation.BilledToCustomerId).FirstOrDefault();
                }

                if (quotationpreview.quotation.RefPersonId != 0)
                {
                    quotationpreview.refPerson = db.customerDetails.Where(x => x.CustomerId == quotationpreview.quotation.RefPersonId).FirstOrDefault();
                }
                quotationpreview.quotationProducts = db.quotationProducts.Where(x => x.QuotationId == quotationpreview.quotation.QuotationId).ToList();
                quotationpreview.productDetails = new List<ProductDetails>();
                foreach (QuotationProducts quoteprod in quotationpreview.quotationProducts)
                {
                    List<ProductDetails> productDetails = db.productDetails.Where(x => x.IsDeleted == false && x.Id == quoteprod.ProductId).ToList();
                    if (productDetails.Count > 0)
                    {
                        quotationpreview.productDetails.AddRange(productDetails);
                    }
                }
                quotationpreview.uploads = new List<MultipleFileUpload>();
                foreach (ProductDetails product in quotationpreview.productDetails)
                {
                    List<MultipleFileUpload> file = db.fileUpload.Where(x => x.FormName == "Product" && x.Type == "ProductImage" && x.IsDeleted == false && x.RefId == product.Id).ToList();
                    if (file.Count > 0)
                    {
                        quotationpreview.uploads.AddRange(file);
                    }
                }

                //string timeStampForPdfName = DateTime.Now.ToString("yyMMddHHmmssff");
                //string html_string = System.IO.File.ReadAllText(Request.PhysicalApplicationPath + "assets\\template\\quotation.config");

                Guid guid = Guid.NewGuid();


                string serverPath = System.Web.Hosting.HostingEnvironment.MapPath("~/tempfiles");
                //string pdfSavePath = Path.Combine(serverPath, quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf");
                string pdfpath = "/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf";
                //string txtpath = Path.Combine(serverPath, quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".txt");

                string contactnumbers = "";
                string emailaddress = "";
                string TINGSTNumber = "";
                if (!string.IsNullOrWhiteSpace(quotationpreview.company.ContactNumber))
                {
                    contactnumbers = quotationpreview.company.ContactNumber;
                }
                if (contactnumbers != "")
                {
                    if (!string.IsNullOrWhiteSpace(quotationpreview.company.AltContactNumber))
                    {
                        contactnumbers = contactnumbers + " | " + quotationpreview.company.ContactNumber;
                    }
                }
                else
                {
                    contactnumbers = quotationpreview.company.ContactNumber;
                }

                if (!string.IsNullOrWhiteSpace(quotationpreview.company.Email))
                {
                    emailaddress = quotationpreview.company.Email;
                }
                if (emailaddress != "")
                {
                    if (!string.IsNullOrWhiteSpace(quotationpreview.company.AltEmail))
                    {
                        emailaddress = emailaddress + Environment.NewLine + quotationpreview.company.AltEmail;
                    }
                }
                else
                {
                    emailaddress = quotationpreview.company.AltEmail;
                }

                if (!string.IsNullOrWhiteSpace(quotationpreview.company.TINNumber))
                {
                    TINGSTNumber = "TIN: " + quotationpreview.company.TINNumber;
                }
                if (TINGSTNumber != "")
                {
                    if (!string.IsNullOrWhiteSpace(quotationpreview.company.GSTINNumber))
                    {
                        TINGSTNumber = TINGSTNumber + " | GSTIN: " + quotationpreview.company.GSTINNumber;
                    }
                }
                else
                {
                    TINGSTNumber = "GSTIN: " + quotationpreview.company.GSTINNumber;
                }

                //string strBillingTo = string.Empty;

                //if (quotationpreview.customer != null)
                //{
                //    strBillingTo = "<div class='col-xl-6 p-0'>"
                //             + "<h6 class='mb-2'>Billing To:</h6>"
                //             + "<h6 class='mb-25'>" + quotationpreview.customer.CustomerName + "</h6>"
                //             + "<p class='card-text mb-25' id='customeraddress'>" + quotationpreview.customer.CustomerAddress + "</p>"
                //             + "<p class='card-text mb-25'>" + quotationpreview.customer.ContactNumber + "</p>"
                //             + "<p class='card-text mb-0'>" + quotationpreview.customer.CustomerEmail + "</p>"
                //             + "</div>";
                //}

                //string strRefPerson = string.Empty;
                //if (quotationpreview.refPerson != null)
                //{
                //    strRefPerson = "<div class='col-xl-6 p-0'>"
                //             + "<h6 class='mb-2'>Ref Person:</h6>"
                //             + "<h6 class='mb-25'>" + quotationpreview.refPerson.CustomerName + "</h6>"
                //             + "<p class='card-text mb-25' id='customeraddressref'>" + quotationpreview.refPerson.CustomerAddress + "</p>"
                //             + "<p class='card-text mb-25'>" + quotationpreview.refPerson.ContactNumber + "</p>"
                //             + "<p class='card-text mb-0'>" + quotationpreview.refPerson.CustomerEmail + "</p>"
                //             + "</div>";
                //}
                string strProducts = string.Empty;
                if (quotationpreview.quotationProducts.Count > 0)
                {
                    int i = 0;
                    foreach (QuotationProducts quotationproduct in quotationpreview.quotationProducts)
                    {
                        i = i + 1;
                        string serialno = i < 10 ? "0" + i : i.ToString();
                        ProductDetails product = quotationpreview.productDetails.Where(x => x.Id == quotationproduct.ProductId).FirstOrDefault();
                        MultipleFileUpload upload = quotationpreview.uploads.Where(x => x.RefId == product.Id).FirstOrDefault();
                        if (product != null)
                        {
                            strProducts += "<tr><td><span>" + serialno + "</span></td><td class='py-1'>";
                            if (upload == null)
                            {
                                strProducts += "<img src='' style='max-width: 100px;' onerror='this.onerror=null;this.src='default-image.jpg';' />";
                            }
                            else
                            {
                                strProducts += "<img src='" + upload.ImagePath + "' style='max-width: 100px;' />";
                            }
                            strProducts += "</td><td class='py-1' style='max-width: 300px;'><p class='card-text fw-bold mb-25'>"
                                + "<u><b>" + product.ProductName + "</b></u></p><p class='card-text text-nowrap'>" + product.ProductDescription
                                + "</p></td><td class='py-1'><span class='fw-bold'>" + quotationproduct.Quantity + "</span></td>"
                                + "<td class='py-1'><span class='fw-bold'>₹" + quotationproduct.UnitPrice + "</span></td>"
                                + "<td class='py-1'><span class='fw-bold'>₹" + quotationproduct.TotalPrice + "</span></td></tr>";
                        }
                    }
                }

                decimal subtotal = quotationpreview.quotationProducts.Sum(x => x.TotalPrice);
                decimal taxtds = quotationpreview.company.GSTDetectionPercentage;
                decimal taxAmount = ((subtotal * taxtds) / 100);
                decimal totalAmount = subtotal + taxAmount;

                string inputFile = Server.MapPath("~/tempfiles/quotationtemplate.docx");
                string outputFile = Server.MapPath("~/tempfiles/" + guid + "a.docx");

                // Copy Word document.
                System.IO.File.Copy(inputFile, outputFile, true);

                using (var safeStream = new SafeFileStream(outputFile, FileMode.Open, FileAccess.ReadWrite, FileShare.None))
                {
                    safeStream.Open();
                    using (var flatDocument = new FlatDocument((Stream)safeStream))
                    {
                        flatDocument.FindAndReplace("{QuotationHeader}", quotationpreview.company.QuotationHeader);
                        flatDocument.FindAndReplace("{CompanyName}", quotationpreview.company.CompanyName);
                        flatDocument.FindAndReplace("{emailaddress}", quotationpreview.company.Email);
                        flatDocument.FindAndReplace("{altemailaddress}", quotationpreview.company.AltEmail);
                        flatDocument.FindAndReplace("{Website}", quotationpreview.company.Website);
                        flatDocument.FindAndReplace("{contactnumbers}", contactnumbers);
                        flatDocument.FindAndReplace("{TINGSTNumber}", TINGSTNumber);
                        flatDocument.FindAndReplace("{QuotationNo}", quotationpreview.quotation.QuotationNo);
                        flatDocument.FindAndReplace("{QuotationDate}", quotationpreview.quotation.QuotationDate.ToString("MMM dd, yyyy"));
                        flatDocument.FindAndReplace("{CompanyAddress}", quotationpreview.company.Address);
                        flatDocument.FindAndReplace("{CompanyLocality}", quotationpreview.company.Locality);
                        flatDocument.FindAndReplace("{CompanyCity}", quotationpreview.company.City);
                        if (string.IsNullOrWhiteSpace(quotationpreview.company.Pincode))
                        {
                            flatDocument.FindAndReplace("{CompanyPincode}", "");
                        }
                        else
                        {
                            flatDocument.FindAndReplace("{CompanyPincode}", "Pin: " + quotationpreview.company.Pincode);
                        }
                        flatDocument.FindAndReplace("{BillToCustomerName}", quotationpreview.customer.CustomerName);
                        flatDocument.FindAndReplace("{BillToCustomerAddress}", quotationpreview.customer.CustomerAddress);
                        flatDocument.FindAndReplace("{BillToContactNumber}", quotationpreview.customer.ContactNumber);
                        flatDocument.FindAndReplace("{BillToCustomerEmail}", quotationpreview.customer.CustomerEmail);
                        flatDocument.FindAndReplace("{BillToLocality}", quotationpreview.customer.Locality);
                        flatDocument.FindAndReplace("{BillToCity}", quotationpreview.customer.City);
                        flatDocument.FindAndReplace("{GSTPercentage}", Convert.ToString(Convert.ToInt32(quotationpreview.company.GSTDetectionPercentage)));
                        if (string.IsNullOrWhiteSpace(quotationpreview.customer.Pincode))
                        {
                            flatDocument.FindAndReplace("{BillToPincode}", "");
                        }
                        else
                        {
                            flatDocument.FindAndReplace("{BillToPincode}", "Pin: " + quotationpreview.customer.Pincode);
                        }
                        flatDocument.FindAndReplace("{RefPerson}", quotationpreview.refPerson.CustomerName);
                        flatDocument.FindAndReplace("{RefContNo}", quotationpreview.refPerson.ContactNumber);
                    }
                }


                Document document = new Document(outputFile);
                //collect document object, it could get paragraph, table and so on.
                List<DocumentObject> replacement = new List<DocumentObject>();

                Section tempSection = document.AddSection();
                Paragraph p4 = tempSection.AddParagraph();

                string HtmlString = "<html>"
                     + "<head>"
                     + "<style>"
                     + "tr:nth-child(even) {"
                     + "  background-color: #dddddd;"
                     + "}"
                     + "</style>"
                     + "</head>"
                     + "<body>";

                if (quotationpreview.quotationProducts.Count > 0)
                {
                    HtmlString += "<table style='font-family: arial, sans-serif; border-collapse: collapse; width: 100%;table-layout: fixed; '>"
                             + "  <tr style='background-color: #dddddd;'>"
                             + "    <th style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px; width:20% !important' width='20%'>S.No.</th>"
                             + "    <th style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>Image</th>"
                             + "    <th style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;width:40% !important' width='40%'>Description</th>"
                             + "    <th style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>UnitPrice+GST</th>"
                             + "  </tr>";
                    int i = 0;
                    foreach (QuotationProducts quotationproduct in quotationpreview.quotationProducts)
                    {
                        i = i + 1;
                        string serialno = i < 10 ? "0" + i : i.ToString();
                        ProductDetails product = quotationpreview.productDetails.Where(x => x.Id == quotationproduct.ProductId).FirstOrDefault();
                        MultipleFileUpload upload = quotationpreview.uploads.Where(x => x.RefId == product.Id).FirstOrDefault();

                        decimal productamount = quotationproduct.UnitPrice;
                        decimal taxtds1 = quotationpreview.company.GSTDetectionPercentage;
                        decimal taxdetaction1 = ((productamount * taxtds1) / 100);


                        if (product != null)
                        {
                            if (i % 2 == 0)
                            {
                                HtmlString += "<tr style='background-color: #FFD580;'>";
                            }
                            else
                            {
                                HtmlString += "<tr>";
                            }


                            HtmlString += " <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>" + serialno + "</td>"
                                     + "    <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'><img src='";

                            if (upload != null)
                            {
                                HtmlString += upload.ImagePath;
                            }
                            HtmlString += "' style='max-width: 100px;' onerror='this.onerror=null;this.src='default-image.jpg';' /></td>"
                                     + "    <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;max-width:100px;width:40% !important' width='40%'><p class='card-text fw-bold mb-25' >"
                                     + "    <u><b>" + product.ProductName + "</b></u></p><p class='card-text text-nowrap'>" + product.ProductDescription
                                     + "    </p></td>"
                                     + "    <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>" + product.UnitPrice.ToString("0.00") + "<br/> GST " + Convert.ToInt32(quotationpreview.company.GSTDetectionPercentage) + "%<br/>" + taxdetaction1.ToString("0.00") + "</td>"
                                     + "    </tr>";
                        }
                    }
                }
                HtmlString += "<tr><td colspan='3' style='border: 1px solid #dddddd;text-align:right;font-weight:bold;'>Sub Total Inclusive GST 18%</td><td style='border: 1px solid #dddddd;font-weight:bold;'>" + quotationpreview.quotationProducts.Sum(x => x.TotalPrice).ToString("0.00") + " </td></tr>";

                HtmlString += "<tr><td colspan='3' style='text-align:right; border: 1px solid #dddddd;font-weight:bold;'>Total</td><td style='border: 1px solid #dddddd;font-weight:bold;'>" + quotationpreview.quotationProducts.Sum(x => x.TotalPrice).ToString("0") + "</td></tr>";
                HtmlString += "</table></body>"
                     + "</html>";
                p4.AppendHTML(HtmlString);

                foreach (var obj in tempSection.Body.ChildObjects)
                {
                    DocumentObject O = obj as DocumentObject;
                    replacement.Add(O);
                }

                TextSelection[] selections = document.FindAllString("{{{QuotationProducts}}}", false, true);
                List<TextRangeLocation> locations = new List<TextRangeLocation>();
                foreach (TextSelection selection in selections)
                {
                    locations.Add(new TextRangeLocation(selection.GetAsOneRange()));
                }
                locations.Sort();
                foreach (TextRangeLocation location in locations)
                {
                    ReplaceObj(location, replacement);
                }
                //remove the temp section
                document.Sections.Remove(tempSection);
                outputFile = Server.MapPath("~/tempfiles/" + guid + "b.docx");
                document.SaveToFile(outputFile, FileFormat.Docx);

                Document document1 = new Document(outputFile);
                //collect document object, it could get paragraph, table and so on.
                List<DocumentObject> replacement1 = new List<DocumentObject>();

                Section tempSection1 = document1.AddSection();
                Paragraph p5 = tempSection1.AddParagraph();

                string HtmlString1 = "<html>"
                     + "<head>"
                     + "<style>"
                     + "tr:nth-child(even) {"
                     + "  background-color: #dddddd;"
                     + "}"
                     + "</style>"
                     + "</head>"
                     + "<body>";

                if (quotationpreview.quotationProducts.Count > 0)
                {
                    HtmlString1 += "<table style='font-family: arial, sans-serif; border-collapse: collapse; width: 100%;table-layout: fixed; '>"
                             + "  <tr style='background-color: #dddddd;'>"
                             + "    <th style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px; width:20% !important' width='20%'>S. NO</th>"
                             + "    <th style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;width:40% !important' width='40%'>PRODUCT NAME</th>"
                             + "    <th style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>UNIT PRICE + GST</th>"
                             + "  </tr>";
                    int i = 0;
                    foreach (QuotationProducts quotationproduct in quotationpreview.quotationProducts)
                    {
                        i = i + 1;
                        string serialno = i < 10 ? "0" + i : i.ToString();
                        ProductDetails product = quotationpreview.productDetails.Where(x => x.Id == quotationproduct.ProductId).FirstOrDefault();
                        MultipleFileUpload upload = quotationpreview.uploads.Where(x => x.RefId == product.Id).FirstOrDefault();

                        decimal productamount = quotationproduct.UnitPrice;
                        decimal taxtds1 = quotationpreview.company.GSTDetectionPercentage;
                        decimal taxdetaction1 = ((productamount * taxtds1) / 100);


                        if (product != null)
                        {

                            if (i % 2 == 0)
                            {
                                HtmlString1 += "<tr style='background-color: #FFD580;'>";
                            }
                            else
                            {
                                HtmlString1 += "<tr>";
                            }


                            HtmlString1 += " <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>" + serialno + "</td>"
                                     + "    <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>" + product.ProductName + "</td>"
                                     + "    <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>" + product.UnitPrice.ToString("0.00") + "</td>"
                                     + "    </tr>";
                        }
                    }
                }
                HtmlString1 += "<tr><td colspan='2' style='border: 1px solid #dddddd;text-align:right;font-weight:bold;'>Inclusive GST 18%</td><td style='border: 1px solid #dddddd;font-weight:bold;'></td></tr>";

                HtmlString1 += "<tr><td colspan='2' style='text-align:right; border: 1px solid #dddddd;font-weight:bold;'>TOTAL</td><td style='border: 1px solid #dddddd;font-weight:bold;'>" + quotationpreview.quotationProducts.Sum(x => x.TotalPrice).ToString("0") + "</td></tr>";
                HtmlString1 += "</table></body>"
                     + "</html>";
                p5.AppendHTML(HtmlString1);

                foreach (var obj in tempSection1.Body.ChildObjects)
                {
                    DocumentObject O = obj as DocumentObject;
                    replacement1.Add(O);
                }

                TextSelection[] selections1 = document1.FindAllString("{{{TotalProducts}}}", false, true);
                List<TextRangeLocation> locations1 = new List<TextRangeLocation>();
                foreach (TextSelection selection in selections1)
                {
                    locations1.Add(new TextRangeLocation(selection.GetAsOneRange()));
                }
                locations1.Sort();
                foreach (TextRangeLocation location in locations1)
                {
                    ReplaceObj(location, replacement1);
                }
                //remove the temp section
                document1.Sections.Remove(tempSection1);



                outputFile = Server.MapPath("~/tempfiles/" + guid + ".docx");
                document1.SaveToFile(outputFile, FileFormat.Docx);
                document.SaveToFile(Server.MapPath("/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf"), FileFormat.PDF);

                //Process.Start(Server.MapPath("~/tempfiles/" + guid + ".docx"));

                if (System.IO.File.Exists(Server.MapPath("~/tempfiles/" + guid + "a.docx")))
                {
                    System.IO.File.Delete(Server.MapPath("~/tempfiles/" + guid + "a.docx"));
                }
                if (System.IO.File.Exists(Server.MapPath("~/tempfiles/" + guid + "b.docx")))
                {
                    System.IO.File.Delete(Server.MapPath("~/tempfiles/" + guid + "b.docx"));
                }
                if (System.IO.File.Exists(Server.MapPath("~/tempfiles/" + guid + "c.docx")))
                {
                    System.IO.File.Delete(Server.MapPath("~/tempfiles/" + guid + "c.docx"));
                }
                
                string pdfoutpath = Server.MapPath("/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf");//DocxToPDF("/tempfiles/" + guid + ".docx", "/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf", outputFile);
                if (System.IO.File.Exists(pdfoutpath))
                {
                    return Json(new { success = true, pdfpath = pdfpath, msg = "success" + RouteURL }, JsonRequestBehavior.AllowGet);
                }
                else
                    return Json(new { success = false, pdfpath = pdfpath, msg = "failed" + ", " + RouteURL + ", " + pdfoutpath }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, msg = ex.Message.ToString() + RouteURL }, JsonRequestBehavior.AllowGet);
            }
        }

        private static void ReplaceObj(TextRangeLocation location, List<DocumentObject> replacement)
        {
            //will be replaced
            TextRange textRange = location.Text;

            //textRange index
            int index = location.Index;

            //owener paragraph
            Paragraph paragraph = location.Owner;

            //owner text body
            Body sectionBody = paragraph.OwnerTextBody;

            //get the index of paragraph in section
            int paragraphIndex = sectionBody.ChildObjects.IndexOf(paragraph);

            int replacementIndex = -1;
            if (index == 0)
            {
                //remove
                paragraph.ChildObjects.RemoveAt(0);

                replacementIndex = sectionBody.ChildObjects.IndexOf(paragraph);
            }
            else if (index == paragraph.ChildObjects.Count - 1)
            {
                paragraph.ChildObjects.RemoveAt(index);
                replacementIndex = paragraphIndex + 1;

            }
            else
            {
                //split owner paragraph
                Paragraph paragraph1 = (Paragraph)paragraph.Clone();
                while (paragraph.ChildObjects.Count > index)
                {
                    paragraph.ChildObjects.RemoveAt(index);
                }
                int i = 0;
                int count = index + 1;
                while (i < count)
                {
                    paragraph1.ChildObjects.RemoveAt(0);
                    i += 1;
                }
                sectionBody.ChildObjects.Insert(paragraphIndex + 1, paragraph1);

                replacementIndex = paragraphIndex + 1;
            }

            //insert replacement
            for (int i = 0; i <= replacement.Count - 1; i++)
            {
                sectionBody.ChildObjects.Insert(replacementIndex + i, replacement[i].Clone());
            }
        }

        public string DocxToPDF(string docxfile, string pdfpath, string outputFile)
        {
            try
            {
                string RouteURL = string.Empty;
                if (!Request.Url.AbsoluteUri.Replace(Request.RawUrl, "").Contains("localhost"))
                {
                    RouteURL = Request.Url.AbsoluteUri.Replace(Request.RawUrl, "");
                }
                string pdfoutpath;
                if (string.IsNullOrWhiteSpace(RouteURL))
                {
                    Word2Pdf objWorPdf = new Word2Pdf();
                    pdfoutpath = Server.MapPath(pdfpath);
                    objWorPdf.InputLocation = outputFile;
                    objWorPdf.OutputLocation = pdfoutpath;
                    objWorPdf.Word2PdfCOnversion();
                }
                else
                {
                    Word2Pdf objWorPdf = new Word2Pdf();
                    pdfoutpath = Path.Combine(RouteURL, pdfpath);
                    objWorPdf.InputLocation = Path.Combine(RouteURL, docxfile);
                    objWorPdf.OutputLocation = pdfoutpath;
                    objWorPdf.Word2PdfCOnversion();
                }

                return pdfoutpath;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }

       
        public async Task<string> GenerateQuotation(long id)
        {
            string RouteURL = string.Empty;
            try
            {
                Quotation quotation = await db.Quotations.FindAsync(id);
                quotationpreviewModel quotationpreview = new quotationpreviewModel();
                quotationpreview.quotation = await db.Quotations.FindAsync(id);
                if (quotationpreview.quotation.BilledByCompanyId != 0)
                {
                    quotationpreview.company = await db.companyDetails.Where(x => x.CompanyId == quotationpreview.quotation.BilledByCompanyId).FirstOrDefaultAsync();
                }
                if (quotationpreview.quotation.BilledToCustomerId != 0)
                {
                    quotationpreview.customer = await db.customerDetails.Where(x => x.CustomerId == quotationpreview.quotation.BilledToCustomerId).FirstOrDefaultAsync();
                }

                if (quotationpreview.quotation.RefPersonId != 0)
                {
                    quotationpreview.refPerson = await db.customerDetails.Where(x => x.CustomerId == quotationpreview.quotation.RefPersonId).FirstOrDefaultAsync();
                }
                quotationpreview.quotationProducts = await db.quotationProducts.Where(x => x.QuotationId == quotationpreview.quotation.QuotationId).ToListAsync();
                quotationpreview.productDetails = new List<ProductDetails>();
                foreach (QuotationProducts quoteprod in quotationpreview.quotationProducts)
                {
                    List<ProductDetails> productDetails = await db.productDetails.Where(x => x.IsDeleted == false && x.Id == quoteprod.ProductId).ToListAsync();
                    if (productDetails.Count > 0)
                    {
                        quotationpreview.productDetails.AddRange(productDetails);
                    }
                }
                quotationpreview.uploads = new List<MultipleFileUpload>();
                foreach (ProductDetails product in quotationpreview.productDetails)
                {
                    List<MultipleFileUpload> file = await db.fileUpload.Where(x => x.FormName == "Product" && x.Type == "ProductImage" && x.IsDeleted == false && x.RefId == product.Id).ToListAsync();
                    if (file.Count > 0)
                    {
                        quotationpreview.uploads.AddRange(file);
                    }
                }

                //string timeStampForPdfName = DateTime.Now.ToString("yyMMddHHmmssff");
                //string html_string = System.IO.File.ReadAllText(Request.PhysicalApplicationPath + "assets\\template\\quotation.config");

                Guid guid = Guid.NewGuid();


                string serverPath = System.Web.Hosting.HostingEnvironment.MapPath("~/tempfiles");
                //string pdfSavePath = Path.Combine(serverPath, quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf");
                string pdfpath = "/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf";
                //string txtpath = Path.Combine(serverPath, quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".txt");

                string contactnumbers = "";
                string emailaddress = "";
                string TINGSTNumber = "";
                if (!string.IsNullOrWhiteSpace(quotationpreview.company.ContactNumber))
                {
                    contactnumbers = quotationpreview.company.ContactNumber;
                }
                if (contactnumbers != "")
                {
                    if (!string.IsNullOrWhiteSpace(quotationpreview.company.AltContactNumber))
                    {
                        contactnumbers = contactnumbers + " | " + quotationpreview.company.ContactNumber;
                    }
                }
                else
                {
                    contactnumbers = quotationpreview.company.ContactNumber;
                }

                if (!string.IsNullOrWhiteSpace(quotationpreview.company.Email))
                {
                    emailaddress = quotationpreview.company.Email;
                }
                if (emailaddress != "")
                {
                    if (!string.IsNullOrWhiteSpace(quotationpreview.company.AltEmail))
                    {
                        emailaddress = emailaddress + Environment.NewLine + quotationpreview.company.AltEmail;
                    }
                }
                else
                {
                    emailaddress = quotationpreview.company.AltEmail;
                }

                if (!string.IsNullOrWhiteSpace(quotationpreview.company.TINNumber))
                {
                    TINGSTNumber = "TIN: " + quotationpreview.company.TINNumber;
                }
                if (TINGSTNumber != "")
                {
                    if (!string.IsNullOrWhiteSpace(quotationpreview.company.GSTINNumber))
                    {
                        TINGSTNumber = TINGSTNumber + " | GSTIN: " + quotationpreview.company.GSTINNumber;
                    }
                }
                else
                {
                    TINGSTNumber = "GSTIN: " + quotationpreview.company.GSTINNumber;
                }

                //string strBillingTo = string.Empty;

                //if (quotationpreview.customer != null)
                //{
                //    strBillingTo = "<div class='col-xl-6 p-0'>"
                //             + "<h6 class='mb-2'>Billing To:</h6>"
                //             + "<h6 class='mb-25'>" + quotationpreview.customer.CustomerName + "</h6>"
                //             + "<p class='card-text mb-25' id='customeraddress'>" + quotationpreview.customer.CustomerAddress + "</p>"
                //             + "<p class='card-text mb-25'>" + quotationpreview.customer.ContactNumber + "</p>"
                //             + "<p class='card-text mb-0'>" + quotationpreview.customer.CustomerEmail + "</p>"
                //             + "</div>";
                //}

                //string strRefPerson = string.Empty;
                //if (quotationpreview.refPerson != null)
                //{
                //    strRefPerson = "<div class='col-xl-6 p-0'>"
                //             + "<h6 class='mb-2'>Ref Person:</h6>"
                //             + "<h6 class='mb-25'>" + quotationpreview.refPerson.CustomerName + "</h6>"
                //             + "<p class='card-text mb-25' id='customeraddressref'>" + quotationpreview.refPerson.CustomerAddress + "</p>"
                //             + "<p class='card-text mb-25'>" + quotationpreview.refPerson.ContactNumber + "</p>"
                //             + "<p class='card-text mb-0'>" + quotationpreview.refPerson.CustomerEmail + "</p>"
                //             + "</div>";
                //}
                //string strProducts = string.Empty;
                //if (quotationpreview.quotationProducts.Count > 0)
                //{
                //    int i = 0;
                //    foreach (QuotationProducts quotationproduct in quotationpreview.quotationProducts)
                //    {
                //        i = i + 1;
                //        string serialno = i < 10 ? "0" + i : i.ToString();
                //        ProductDetails product = quotationpreview.productDetails.Where(x => x.Id == quotationproduct.ProductId).FirstOrDefault();
                //        MultipleFileUpload upload = quotationpreview.uploads.Where(x => x.RefId == product.Id).FirstOrDefault();
                //        if (product != null)
                //        {
                //            strProducts += "<tr><td><span>" + serialno + "</span></td><td class='py-1'>";
                //            if (upload == null)
                //            {
                //                strProducts += "<img src='' style='max-width: 100px;' onerror='this.onerror=null;this.src='default-image.jpg';' />";
                //            }
                //            else
                //            {
                //                strProducts += "<img src='" + upload.ImagePath + "' style='max-width: 100px;' />";
                //            }
                //            strProducts += "</td><td class='py-1' style='max-width: 300px;'><p class='card-text fw-bold mb-25'>"
                //                + "<u><b>" + product.ProductName + "</b></u></p><p class='card-text text-nowrap'>" + product.ProductDescription
                //                + "</p></td><td class='py-1'><span class='fw-bold'>" + quotationproduct.Quantity + "</span></td>"
                //                + "<td class='py-1'><span class='fw-bold'>₹" + quotationproduct.UnitPrice + "</span></td>"
                //                + "<td class='py-1'><span class='fw-bold'>₹" + quotationproduct.TotalPrice + "</span></td></tr>";
                //        }
                //    }
                //}

                decimal subtotal = quotationpreview.quotationProducts.Sum(x => x.TotalPrice);
                decimal taxtds = quotationpreview.company.GSTDetectionPercentage;
                decimal taxAmount = ((subtotal * taxtds) / 100);
                decimal totalAmount = subtotal + taxAmount;

                string inputFile = Server.MapPath("~/tempfiles/quotationtemplate.docx");
                string outputFile = Server.MapPath("~/tempfiles/" + guid + "a.docx");

                // Copy Word document.
                System.IO.File.Copy(inputFile, outputFile, true);

                using (var safeStream = new SafeFileStream(outputFile, FileMode.Open, FileAccess.ReadWrite, FileShare.None))
                {
                    safeStream.Open();
                    using (var flatDocument = new FlatDocument((Stream)safeStream))
                    {
                        flatDocument.FindAndReplace("{QuotationHeader}", quotationpreview.company.QuotationHeader);
                        flatDocument.FindAndReplace("{CompanyName}", quotationpreview.company.CompanyName);
                        flatDocument.FindAndReplace("{emailaddress}", quotationpreview.company.Email);
                        flatDocument.FindAndReplace("{altemailaddress}", quotationpreview.company.AltEmail);
                        flatDocument.FindAndReplace("{Website}", quotationpreview.company.Website);
                        flatDocument.FindAndReplace("{contactnumbers}", contactnumbers);
                        flatDocument.FindAndReplace("{TINGSTNumber}", TINGSTNumber);
                        flatDocument.FindAndReplace("{QuotationNo}", quotationpreview.quotation.QuotationNo);
                        flatDocument.FindAndReplace("{QuotationDate}", quotationpreview.quotation.QuotationDate.ToString("MMM dd, yyyy"));
                        flatDocument.FindAndReplace("{CompanyAddress}", quotationpreview.company.Address);
                        flatDocument.FindAndReplace("{CompanyLocality}", quotationpreview.company.Locality);
                        flatDocument.FindAndReplace("{CompanyCity}", quotationpreview.company.City);
                        if (string.IsNullOrWhiteSpace(quotationpreview.company.Pincode))
                        {
                            flatDocument.FindAndReplace("{CompanyPincode}", "");
                        }
                        else
                        {
                            flatDocument.FindAndReplace("{CompanyPincode}", "Pin: " + quotationpreview.company.Pincode);
                        }
                        flatDocument.FindAndReplace("{BillToCustomerName}", quotationpreview.customer.CustomerName);
                        flatDocument.FindAndReplace("{BillToCustomerAddress}", quotationpreview.customer.CustomerAddress);
                        flatDocument.FindAndReplace("{BillToContactNumber}", quotationpreview.customer.ContactNumber);
                        flatDocument.FindAndReplace("{BillToCustomerEmail}", quotationpreview.customer.CustomerEmail);
                        flatDocument.FindAndReplace("{BillToLocality}", quotationpreview.customer.Locality);
                        flatDocument.FindAndReplace("{BillToCity}", quotationpreview.customer.City);
                        flatDocument.FindAndReplace("{GSTPercentage}", Convert.ToString(Convert.ToInt32(quotationpreview.company.GSTDetectionPercentage)));
                        if (string.IsNullOrWhiteSpace(quotationpreview.customer.Pincode))
                        {
                            flatDocument.FindAndReplace("{BillToPincode}", "");
                        }
                        else
                        {
                            flatDocument.FindAndReplace("{BillToPincode}", "Pin: " + quotationpreview.customer.Pincode);
                        }
                        flatDocument.FindAndReplace("{RefPerson}", quotationpreview.refPerson.CustomerName);
                        flatDocument.FindAndReplace("{RefContNo}", quotationpreview.refPerson.ContactNumber);
                    }
                }


                Document document = new Document(outputFile);
                //collect document object, it could get paragraph, table and so on.
                List<DocumentObject> replacement = new List<DocumentObject>();

                Section tempSection = document.AddSection();
                Paragraph p4 = tempSection.AddParagraph();

                string HtmlStringHead = "<html>"
                     + "<head>"
                     + "<style>"
                     + "tr:nth-child(even) {"
                     + "  background-color: #dddddd;"
                     + "}"
                     + "</style>"
                     + "</head>"
                     + "<body>";
                string HtmlString1 = string.Empty;
                string HtmlString = string.Empty;
                if (quotationpreview.quotationProducts.Count > 0)
                {
                    HtmlString += "<table 'width=100%' style='font-family: arial, sans-serif; border-collapse: collapse; width: 100%;table-layout: fixed; '>"
                             + "  <tr style='background-color: #dddddd;'>"
                             + "    <th  style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px; width=1% !important' >S.No.</th>"
                             + "    <th  style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;!important'>Image</th>"
                             + "    <th  style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px; !important' >Description</th>"
                             + "    <th  style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;!important' >Unit Price + GST</th>"
                             + "  </tr><br/><br/>";
                    HtmlString1 += "<table 'width=100%' style='font-family: arial, sans-serif; border-collapse: collapse; width: 100%;table-layout: fixed; '>"
                             + " <thead> <tr style='background-color: #dddddd;'>"
                             + "    <th  style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px; '>S. NO</th>"
                             + "    <th   style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;width:40% !important' width='40%'>PRODUCT NAME</th>"
                             + "    <th style='font-weight: bold;border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>UNIT PRICE + GST</th>"
                             + "  </tr> </thead><tbody>";
                    int i = 0;
                    foreach (QuotationProducts quotationproduct in quotationpreview.quotationProducts)
                    {
                        i = i + 1;
                        string serialno = i < 10 ? "0" + i : i.ToString();
                        ProductDetails product = quotationpreview.productDetails.Where(x => x.Id == quotationproduct.ProductId).FirstOrDefault();
                        MultipleFileUpload upload = quotationpreview.uploads.Where(x => x.RefId == product.Id).FirstOrDefault();

                        decimal productamount = quotationproduct.UnitPrice;
                        decimal taxtds1 = quotationpreview.company.GSTDetectionPercentage;
                        decimal taxdetaction1 = ((productamount * taxtds1) / 100);


                        if (product != null)
                        {
                            if (i % 2 == 0)
                            {
                                HtmlString += "<tr style='background-color: #FFD580;'>";
                                HtmlString1 += "<tr style='background-color: #FFD580;'>";
                            }
                            else
                            {
                                HtmlString += "<tr>";
                                HtmlString1 += "<tr>";
                            }


                            HtmlString += " <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:1% !important' width='20%'>" + serialno + "</td>"
                                     + "    <td  style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'><img src='";

                            if (upload != null)
                            {
                                HtmlString += upload.ImagePath;
                            }
                            HtmlString += "' style='max-width: 150px;' onerror='this.onerror=null;this.src='default-image.jpg';' /></td>"
                                     + "    <td  style='border: 1px solid #dddddd; text-align: left; padding: 5px;max-width:100px;width:40% !important' width='40%'><p class='card-text fw-bold mb-25' >"
                                     + "    <u><b>" + product.ProductName + "</b></u></p><p class='card-text text-nowrap'>" + product.ProductDescription
                                     + "    </p></td>"
                                     + "    <td width='20%' style='border: 1px solid #dddddd; text-align: left; padding: 5px;width:20% !important' width='20%'>" + product.UnitPrice.ToString("0.00") + "<br/> GST " + Convert.ToInt32(quotationpreview.company.GSTDetectionPercentage) + "%<br/>" + taxdetaction1.ToString("0.00") + "</td>"
                                     + "    </tr>";

                            HtmlString1 += " <td  style='border: 1px solid #dddddd; text-align: left; padding: 5px;'  >" + serialno + "</td>"
                                     + "    <td  style='border: 1px solid #dddddd; text-align: left; padding: 5px;' >" + product.ProductName + "</td>"
                                     + "    <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;' >" + product.UnitPrice.ToString("0.00") + "</td>"
                                     + "    </tr>";
                        }
                    }
                }
                HtmlString += "<tr>"
                        + "    <td style=' text-align: left; padding: 5px;'  ></td>"
                        + "    <td style=' text-align: left; padding: 5px;'  ></td>"
                    + "<td style='border: 1px solid #dddddd;text-align:right;font-weight:bold;'>Sub Total Inclusive GST 18%</td><td style='border: 1px solid #dddddd;font-weight:bold;'>" + quotationpreview.quotationProducts.Sum(x => x.TotalPrice).ToString("0.00") + " </td></tr>";

                HtmlString += "<tr>"
                       + "    <td style=' text-align: left; padding: 5px;'  ></td>"
                       + "    <td style=' text-align: left; padding: 5px;'  ></td>"
                   + "<td style='text-align:right; border: 1px solid #dddddd;font-weight:bold;'>Total</td><td style='border: 1px solid #dddddd;font-weight:bold;'>" + quotationpreview.quotationProducts.Sum(x => x.TotalPrice).ToString("0") + "</td></tr>";
                HtmlString += "</table>";

                //HtmlString1 += "</tbody><tfoot><tr><td colspan='3' style='border: 1px solid #dddddd;text-align:right;font-weight:bold;'>Inclusive GST 18%</td><td style='border: 1px solid #dddddd;font-weight:bold;'></td></tr>";

                //HtmlString1 += "<tr><td colspan='2' style='text-align:right; border: 1px solid #dddddd;font-weight:bold;'>TOTAL</td><td style='border: 1px solid #dddddd;font-weight:bold;'>" + quotationpreview.quotationProducts.Sum(x => x.TotalPrice).ToString("0") + "</td></tr>";
                //HtmlString1 += "</tfoot></table>";

                HtmlString1 += "</tbody><tfoot><tr> "
                                    + "    <td style=' text-align: left; padding: 5px;'  ></td>"
                                     + "    <td  style='border: 1px solid #dddddd; text-align: right; padding: 5px;'   >Inclusive GST 18%</td>"
                                     + "    <td style='border: 1px solid #dddddd; text-align: left; padding: 5px;' >" + quotationpreview.quotationProducts.Sum(x => x.TotalPrice).ToString("0.00") + "</td>"
                                     + "    </tr>";
                HtmlString1 += "</tfoot></table>";

                string HtmlHeadFooter = "</body></html>";
                string HtmlData = HtmlStringHead + HtmlString + HtmlString1 + HtmlHeadFooter;
                p4.AppendHTML(HtmlData);

                foreach (var obj in tempSection.Body.ChildObjects)
                {
                    DocumentObject O = obj as DocumentObject;
                    replacement.Add(O);
                }

                TextSelection[] selections = document.FindAllString("{{{QuotationProducts}}}", false, true);
                List<TextRangeLocation> locations = new List<TextRangeLocation>();
                foreach (TextSelection selection in selections)
                {
                    locations.Add(new TextRangeLocation(selection.GetAsOneRange()));
                }
                locations.Sort();
                foreach (TextRangeLocation location in locations)
                {
                    ReplaceObj(location, replacement);
                }
                //remove the temp section
                document.Sections.Remove(tempSection);
                outputFile = Server.MapPath("~/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".docx");
                document.SaveToFile(outputFile, FileFormat.Docx);

               
                document.SaveToFile(Server.MapPath("/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf"), FileFormat.PDF);

                if (System.IO.File.Exists(Server.MapPath("~/tempfiles/" + guid + "a.docx")))
                {
                    System.IO.File.Delete(Server.MapPath("~/tempfiles/" + guid + "a.docx"));
                }
                if (System.IO.File.Exists(Server.MapPath("~/tempfiles/" + guid + "b.docx")))
                {
                    System.IO.File.Delete(Server.MapPath("~/tempfiles/" + guid + "b.docx"));
                }
                if (System.IO.File.Exists(Server.MapPath("~/tempfiles/" + guid + "c.docx")))
                {
                    System.IO.File.Delete(Server.MapPath("~/tempfiles/" + guid + "c.docx"));
                }

                string pdfoutpath = Server.MapPath("/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf");//DocxToPDF("/tempfiles/" + guid + ".docx", "/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf", outputFile);
                if (System.IO.File.Exists(pdfoutpath))
                {
                    Quotation updatequotation = await db.Quotations.FindAsync(id);
                    updatequotation.QuotationPath = "/tempfiles/" + quotationpreview.company.CompanyName + "-Quotation_" + guid.ToString() + ".pdf";
                    db.Entry(updatequotation).State = EntityState.Modified;
                    await db.SaveChangesAsync();

                    return pdfpath;
                }
                else
                    return pdfpath;
            }
            catch (Exception ex)
            {
                return "";
            }
        }

    }

    public class TextRangeLocation : IComparable<TextRangeLocation>
    {
        public TextRangeLocation(TextRange text)
        {
            this.Text = text;
        }
        public TextRange Text
        {
            get { return m_Text; }
            set { m_Text = value; }
        }
        private TextRange m_Text;
        public Paragraph Owner
        {
            get { return this.Text.OwnerParagraph; }
        }
        public int Index
        {
            get { return this.Owner.ChildObjects.IndexOf(this.Text); }
        }
        public int CompareTo(TextRangeLocation other)
        {
            return -(this.Index - other.Index);
        }
    }
}
