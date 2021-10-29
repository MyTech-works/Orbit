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
using SK_CRM.Models.AggregateModel.Company;
using System.Data.SqlClient;
using SK_CRM.Services;

namespace SK_CRM.Controllers
{
    [Authorize]
    public class companyController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private CommonServices _services = new CommonServices();
        private long MenuID;
        // GET: company
        public async Task<ActionResult> Index()
        {
            MenuID = 2;
            EmployeeMenu menu = _services.GetEmployeeMenuByID(MenuID);
            ViewBag.Menu = menu.MenuName;
            return View();
        }

        // GET: company/Details/5
        public async Task<ActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            company company = await db.companyDetails.FindAsync(id);
            if (company == null)
            {
                return HttpNotFound();
            }
            return View(company);
        }

        // GET: company/Create
        public ActionResult Create()
        {
            MenuID = 3;
            EmployeeMenu menu = _services.GetEmployeeMenuByID(MenuID);
            ViewBag.Menu = menu.MenuName;
            Session["CompanyGuid"] = Guid.NewGuid();
            return View();
        }

        // POST: company/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "CompanyId,CompanyCode,CompanyName,Address,Email,AltEmail,ContactNumber,AltContactNumber,Website,TINNumber,GSTINNumber,QuotationHeader,CompanyLogo,Watermark,GSTDetectionPercentage,CreatedDate,ModifiedDate,IsDeleted")] company company)
        {
            if (ModelState.IsValid)
            {
                db.companyDetails.Add(company);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(company);
        }

        // GET: company/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            company company = await db.companyDetails.FindAsync(id);
            Session["CompanyGuid"] = Guid.NewGuid();
            if (company == null)
            {
                return HttpNotFound();
            }
            return View(company);
        }

        // POST: company/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "CompanyId,CompanyCode,CompanyName,Address,Email,AltEmail,ContactNumber,AltContactNumber,Website,TINNumber,GSTINNumber,QuotationHeader,CompanyLogo,Watermark,GSTDetectionPercentage,CreatedDate,ModifiedDate,IsDeleted")] company company)
        {
            if (ModelState.IsValid)
            {
                db.Entry(company).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(company);
        }

        // GET: company/Delete/5
        public async Task<ActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            company company = await db.companyDetails.FindAsync(id);
            if (company == null)
            {
                return HttpNotFound();
            }
            return View(company);
        }

        // POST: company/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(Guid id)
        {
            company company = await db.companyDetails.FindAsync(id);
            db.companyDetails.Remove(company);
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

        [HttpPost]

        public async Task<JsonResult> addCompany(string CompanyName, string Address, string Email, string AltEmail, string ContactNumber, string AltContactNumber,
            string Website, string TINNumber, string GSTINNumber, string QuotationHeader, string GSTDetectionPercentage, string Locality, string City, string Pincode)
        {

            List<tempFileUpload> tempFiles = new List<tempFileUpload>();
            string guid = Session["CompanyGuid"].ToString();
            if (!string.IsNullOrWhiteSpace(guid))
            {
                tempFiles = await db.tempFileUpload.Where(x => x.Guid == guid && x.FormName == "Company").ToListAsync();
            }

            SqlParameter[] prefixParameters = {
                new SqlParameter("@Type", "Company"),
                new SqlParameter("@EventType", "Prefix")
            };
            Address = Address.Replace(Environment.NewLine, "\n");
            company companyDetails = new company()
            {
                CompanyCode = await db.Database.SqlQuery<string>("GetPrefixCode @Type, @EventType", prefixParameters).FirstOrDefaultAsync(),
                CompanyName = CompanyName,
                Address = Address,
                AltContactNumber = AltContactNumber,
                AltEmail = AltEmail,
                CompanyLogo = tempFiles.Where(x => x.Type == "CompanyLogo").Select(x => x.Base64String).FirstOrDefault(),
                ContactNumber = ContactNumber,
                CreatedDate = DateTime.Now,
                Email = Email,
                GSTDetectionPercentage = Convert.ToDecimal(GSTDetectionPercentage),
                GSTINNumber = GSTINNumber,
                ModifiedDate = DateTime.Now,
                QuotationHeader = QuotationHeader,
                TINNumber = TINNumber,
                Watermark = tempFiles.Where(x => x.Type == "Watermark").Select(x => x.Base64String).FirstOrDefault(),
                Website = Website,
                Pincode = Pincode,
                City = City,
                Locality =Locality
                
            };
            db.companyDetails.Add(companyDetails);
            await db.SaveChangesAsync();

            var origins = await db.tempFileUpload.Where(x => x.Guid == guid && x.FormName == "Company").ToListAsync();
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

        [HttpPost]

        public async Task<JsonResult> updateCompany(int CompanyId, string CompanyName, string Address, string Email, string AltEmail, string ContactNumber, string AltContactNumber,
            string Website, string TINNumber, string GSTINNumber, string QuotationHeader, string GSTDetectionPercentage, string Locality, string City, string Pincode)
        {

            List<tempFileUpload> tempFiles = new List<tempFileUpload>();
            string guid = Session["CompanyGuid"].ToString();
            if (!string.IsNullOrWhiteSpace(guid))
            {
                tempFiles = await db.tempFileUpload.Where(x => x.Guid == guid && x.FormName == "Company").ToListAsync();
            }
            Address = Address.Replace(Environment.NewLine, "\n");
            company companyDetails = await db.companyDetails.FindAsync(CompanyId);

            companyDetails.CompanyName = CompanyName;
            companyDetails.Address = Address;
            companyDetails.AltContactNumber = AltContactNumber;
            companyDetails.AltEmail = AltEmail;

            companyDetails.ContactNumber = ContactNumber;
            companyDetails.Email = Email;
            companyDetails.GSTDetectionPercentage = Convert.ToDecimal(GSTDetectionPercentage);
            companyDetails.GSTINNumber = GSTINNumber;
            companyDetails.ModifiedDate = DateTime.Now;
            companyDetails.QuotationHeader = QuotationHeader;
            companyDetails.TINNumber = TINNumber;
            companyDetails.Locality = Locality;
            companyDetails.Pincode = Pincode;
            companyDetails.City = City;

            string tempCompanyLogo = tempFiles.Where(x => x.Type == "CompanyLogo").Select(x => x.Base64String).FirstOrDefault();
            if (!string.IsNullOrWhiteSpace(tempCompanyLogo))
            {
                companyDetails.CompanyLogo = tempCompanyLogo;              
            }
            string tempwatermark = tempFiles.Where(x => x.Type == "Watermark").Select(x => x.Base64String).FirstOrDefault();
            if (!string.IsNullOrWhiteSpace(tempwatermark))
            {
                companyDetails.Watermark = tempwatermark;
            }

            companyDetails.Website = Website;

            db.Entry(companyDetails).State = EntityState.Modified;
            await db.SaveChangesAsync();

            var origins = await db.tempFileUpload.Where(x => x.Guid == guid && x.FormName == "Company").ToListAsync();
            db.tempFileUpload.RemoveRange(origins);
            await db.SaveChangesAsync();

            return Json(new { success = true, msg = "Successfully updated" }, JsonRequestBehavior.AllowGet);

        }
    }
}
