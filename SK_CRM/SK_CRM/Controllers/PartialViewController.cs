using ImageResizer;
using Microsoft.AspNet.Identity;
using SK_CRM.Models;
using SK_CRM.Models.AggregateModel;
using SK_CRM.Models.AggregateModel.Company;
using SK_CRM.Models.AggregateModel.Product;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace SK_CRM.Controllers
{
    public class PartialViewController : Controller
    {
        private readonly ApplicationDbContext db = new ApplicationDbContext();

        // GET: PartialView
        public ActionResult Index()
        {
            return View();
        }
        #region admin
        public ActionResult _PartialAdminDashboard()
        {
            return PartialView();
        }
        #endregion admin

        #region Product
        public ActionResult _PartialGetAllProduct(int currentpage = 1, int pagesize = 10, string searchvalue = "")
        {
            ViewBag.Menu = "ProductList";
            ViewBag.searchvalue = searchvalue;
            int totalcount = db.productDetails
                .Where(x => x.IsDeleted == false && 
                    (searchvalue == "" ||
                        (x.ProductCode.Contains(searchvalue) || x.ProductName.Contains(searchvalue) || x.ProductDescription.Contains(searchvalue))))
                .Select(p => p.Id).Count();
            int skipcount = (currentpage - 1) * pagesize;
            ProductDetailsAllModel productDetails = new ProductDetailsAllModel()
            {
                products = db.productDetails
                .Where(x => x.IsDeleted == false &&
                    (searchvalue == "" ||
                        (x.ProductCode.Contains(searchvalue) || x.ProductName.Contains(searchvalue) || x.ProductDescription.Contains(searchvalue))))
                .OrderByDescending(x => x.Id).Skip(skipcount).Take(pagesize).ToList(),
                uploads = new List<MultipleFileUpload>(),
                currentPage = currentpage,
                pageSize = pagesize,
                totalCount = totalcount,
                skipCount = skipcount,
                pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount,
                pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount,

                ActiveProducts = db.productDetails
                .Where(x => x.IsNotActive == false && x.IsDeleted == false &&
                    (searchvalue == "" ||
                        (x.ProductCode.Contains(searchvalue) || x.ProductName.Contains(searchvalue) || x.ProductDescription.Contains(searchvalue))))
                .Select(p => p.Id)
                .DefaultIfEmpty(0)
                .Count(),
                NotActiveProducts = db.productDetails
                .Where(x => x.IsNotActive == true && x.IsDeleted == false &&
                    (searchvalue == "" ||
                        (x.ProductCode.Contains(searchvalue) || x.ProductName.Contains(searchvalue) || x.ProductDescription.Contains(searchvalue))))
                .Select(p => p.Id)
                .DefaultIfEmpty(0)
                .Count(),
                StockProducts = db.productDetails
                .Where(x => x.IsNotActive == false && x.IsDeleted == false &&
                    (searchvalue == "" ||
                        (x.ProductCode.Contains(searchvalue) || x.ProductName.Contains(searchvalue) || x.ProductDescription.Contains(searchvalue))))
                .Select(p => p.BalanceStockQty)
                .DefaultIfEmpty(0)
                .Sum(),
                TotalProducts = totalcount
            };
            productDetails.ActiveProducts = productDetails.TotalProducts == 0 ? 0 : productDetails.ActiveProducts;
            productDetails.NotActiveProducts = productDetails.TotalProducts == 0 ? 0 : productDetails.NotActiveProducts;
            foreach (ProductDetails product in productDetails.products)
            {
                List<MultipleFileUpload> file = db.fileUpload.Where(x => x.FormName == "Product" && x.Type == "ProductImage" && x.IsDeleted == false && x.RefId == product.Id).ToList();
                if (file.Count > 0)
                {
                    productDetails.uploads.AddRange(file);
                }
            }
            return PartialView(productDetails);
        }

        public ActionResult _PartialAddProduct()
        {
            ProductDetails product = new ProductDetails();

            return PartialView(product);
        }

        public ActionResult _PartialGetQuotationProducts(int currentpage = 1, int pagesize = 10, string searchvalue = "", string Products = "")
        {
            ViewBag.searchvalue = searchvalue;
            List<ProductDetails> products = db.productDetails.ToList();
            string guid = Session["QuotationGuid"].ToString();

            if (!string.IsNullOrWhiteSpace(Products))
            {

                if (!string.IsNullOrWhiteSpace(guid))
                {
                    foreach (string item in Products.Split(','))
                    {
                        int productid = Convert.ToInt32(item.Split('|')[0]);
                        decimal quantity = Convert.ToDecimal(item.Split('|')[1]);
                        tempQuotationProducts tempQuotationCheck = db.tempQuotationProducts.Where(x => x.Guid == guid && x.productId == productid).FirstOrDefault();
                        ProductDetails product = db.productDetails.Where(x => x.Id == productid).FirstOrDefault();
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
                            db.SaveChanges();
                        }
                        else
                        {
                            tempQuotationCheck.Quantity = quantity;
                            tempQuotationCheck.UnitPrice = product.UnitPrice;
                            tempQuotationCheck.TotalPrice = quantity * product.UnitPrice;
                            tempQuotationCheck.IsDeleted = false;
                            db.Entry(tempQuotationCheck).State = EntityState.Modified;
                            db.SaveChanges();
                        }
                    }
                }
            }


            if (!string.IsNullOrWhiteSpace(searchvalue))
            {
                products = products.Where(x => x.ProductCode.Contains(searchvalue) || x.ProductName.Contains(searchvalue) || x.ProductDescription.Contains(searchvalue)).ToList();
            }

            int totalcount = products.Where(x => x.IsDeleted == false).Select(p => p.Id).Count();
            int skipcount = (currentpage - 1) * pagesize;
            ProductDetailsAllModel productDetails = new ProductDetailsAllModel()
            {
                products = products.Where(x => x.IsDeleted == false).OrderByDescending(x => x.Id).Skip(skipcount).Take(pagesize).ToList(),
                uploads = new List<MultipleFileUpload>(),
                currentPage = currentpage,
                pageSize = pagesize,
                totalCount = totalcount,
                skipCount = skipcount,
                pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount,
                pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount,

                ActiveProducts = products.Where(x => x.IsDeleted == false && x.IsNotActive == false).Select(p => p.Id).DefaultIfEmpty(0).Count(),
                NotActiveProducts = products.Where(x => x.IsDeleted == false && x.IsNotActive == true).Select(p => p.Id).DefaultIfEmpty(0).Count(),
                StockProducts = db.productDetails.Where(x => x.IsDeleted == false).Select(p => p.BalanceStockQty).DefaultIfEmpty(0).Sum(),
                TotalProducts = totalcount,
                quotationProducts = db.tempQuotationProducts.Where(x => x.Guid == guid).ToList()
            };
            foreach (ProductDetails product in productDetails.products)
            {
                List<MultipleFileUpload> file = db.fileUpload.Where(x => x.FormName == "Product" && x.Type == "ProductImage" && x.IsDeleted == false && x.RefId == product.Id).ToList();
                if (file.Count > 0)
                {
                    productDetails.uploads.AddRange(file);
                }
            }
            return PartialView(productDetails);
        }
        #endregion Product

        public ActionResult LoadProductImages(int ProductId)
        {
            try
            {
                List<MultipleFileUpload> files = db.fileUpload.Where(x => x.FormName == "Product" && x.Type == "ProductImage" && x.IsDeleted == false && x.RefId == ProductId).ToList();

                return PartialView("~/Views/PartialView/_PartialProductImages.cshtml", files);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public ActionResult UpdateImageDefault(string Image, long ItemId, long FileUploadId)
        {
            try
            {
                SqlParameter[] sqlParameters = { new SqlParameter("@Image", Image), new SqlParameter("@ItemId", ItemId), new SqlParameter("@FileUploadId", FileUploadId) };
                string response = db.Database.SqlQuery<string>("spUpdateImageDefault @Image, @ItemId, @FileUploadId", sqlParameters).FirstOrDefault();

                return Json(new { success = true, msg = "success" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public async Task<ActionResult> DeleteImageforItem(long FileUploadId)
        {
            try
            {
                MultipleFileUpload productDetails = await db.fileUpload.FindAsync(FileUploadId);
                db.fileUpload.Remove(productDetails);
                await db.SaveChangesAsync();

                return Json(new { success = true, msg = "success" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        #region Company
        public ActionResult _PartialGetAllCompanies(int currentpage = 1, int pagesize = 10, string searchvalue = "")
        {
            int totalcount = db.companyDetails.Where(x => x.IsDeleted == false && (searchvalue == "" || (x.CompanyName + x.CompanyCode + x.ContactNumber + x.Email).Contains(searchvalue))).Select(p => p.CompanyId).Count();
            int skipcount = (currentpage - 1) * pagesize;
            AllCompanysModel companysModel = new AllCompanysModel()
            {
                companies = db.companyDetails.Where(x => x.IsDeleted == false && (searchvalue == "" || (x.CompanyName + x.CompanyCode + x.ContactNumber + x.Email).Contains(searchvalue))).OrderByDescending(x => x.CompanyId).Skip(skipcount).Take(pagesize).ToList(),
                currentPage = currentpage,
                pageSize = pagesize,
                totalCount = totalcount,
                skipCount = skipcount,
                pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount,
                pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount
            };
            return PartialView(companysModel);
        }

        #endregion Company

        #region Quotation
        public ActionResult _PartialGetAllQuotations(int currentpage = 1, int pagesize = 10, string searchvalue = "")
        {
            int totalcount = db.Quotations.Where(x => (searchvalue == "" || (x.QuotationNo).Contains(searchvalue))).Select(p => p.QuotationId).Count();
            int skipcount = (currentpage - 1) * pagesize;
            QuotationModel quotationModel = new QuotationModel()
            {
                quotations = db.Quotations.Where(x => (searchvalue == "" || (x.QuotationNo).Contains(searchvalue))).OrderByDescending(x => x.QuotationId).Skip(skipcount).Take(pagesize).ToList(),
                currentPage = currentpage,
                pageSize = pagesize,
                totalCount = totalcount,
                skipCount = skipcount,
                pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount,
                pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount
            };
            quotationModel.customers = new List<customer>();
            quotationModel.companies = new List<company>();

            foreach (Quotation quotation in quotationModel.quotations)
            {
                customer customer = db.customerDetails.Where(x => x.CustomerId == quotation.BilledToCustomerId).FirstOrDefault();
                if (customer != null)
                {
                    quotationModel.customers.Add(customer);
                }

                company company = db.companyDetails.Where(x => x.CompanyId == quotation.BilledByCompanyId).FirstOrDefault();
                if (company != null)
                {
                    quotationModel.companies.Add(company);
                }
            }
            return PartialView(quotationModel);
        }



        #endregion Quotations

        #region Customer
        public async Task<JsonResult> addCustomer(string CustomerName, string CustomerEmail, string CustomerAddress, string Country, string ContactNumber,
            string Locality, string City, string Pincode)
        {
            SqlParameter[] prefixParameters = {
                new SqlParameter("@Type", "Customer"),
                new SqlParameter("@EventType", "Prefix")
            };

            CustomerAddress = CustomerAddress.Replace(Environment.NewLine, "\n");
            customer customer = new customer()
            {
                CustomerCode = await db.Database.SqlQuery<string>("GetPrefixCode @Type, @EventType", prefixParameters).FirstOrDefaultAsync(),
                CustomerName = CustomerName,
                ContactNumber = ContactNumber,
                Country = Country,
                CustomerAddress = CustomerAddress,
                CustomerEmail = CustomerEmail,
                City = City,
                Locality = Locality,
                Pincode = Pincode
            };
            db.customerDetails.Add(customer);
            await db.SaveChangesAsync();

            SqlParameter[] updateParameters = {
                        new SqlParameter("@Type", "Customer"),
                        new SqlParameter("@EventType", "Update")
                    };

            string response = await db.Database.SqlQuery<string>("GetPrefixCode @Type, @EventType", updateParameters).FirstOrDefaultAsync();
            if (string.IsNullOrWhiteSpace(response))
            {
                return Json(new { success = false, msg = "GetPrefixCode not updated" }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { success = true, msg = "Successfully added" }, JsonRequestBehavior.AllowGet);

        }

        public ActionResult _PartialGetAllCustomers()
        {
            List<customer> customers = db.customerDetails.OrderBy(x => x.CustomerName).ToList();
            return PartialView(customers);
        }

        public ActionResult _PartialGetAllRefPersons()
        {
            List<customer> customers = db.customerDetails.OrderBy(x => x.CustomerName).ToList();
            return PartialView(customers);
        }

        #endregion Customer

        public ActionResult _PartialSideMenus()
        {
            try
            {
                string UserID = User.Identity.GetUserId();
                List<AdminPanelUserSideMenu> adminPanelUserSideMenus = new List<AdminPanelUserSideMenu>();
                SqlParameter[] catParams1 = { new SqlParameter("@UserID", UserID) };
                adminPanelUserSideMenus = db.Database.SqlQuery<AdminPanelUserSideMenu>("GetAdminSideBar @UserID", catParams1).ToList();

                return PartialView(adminPanelUserSideMenus);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}