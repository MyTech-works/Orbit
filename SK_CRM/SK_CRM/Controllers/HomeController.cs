using SK_CRM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace SK_CRM.Controllers
{
    public class HomeController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


        [HttpPost]
        public async Task<JsonResult> UploadFile(string base64string, string formname, string type)
        {
            try
            {
                string guid = string.Empty;
                switch (formname.ToLower())
                {
                    case "company":
                        guid = Session["CompanyGuid"].ToString();
                        break;
                    case "product":
                        guid = Session["ProductGuid"].ToString();
                        break;
                }
                tempFileUpload tempFileUpload = new tempFileUpload()
                {
                    Base64String = base64string,
                    CreatedDate = DateTime.Now,
                    Guid = guid,
                    FormName = formname,
                    Type = type
                };
                db.tempFileUpload.Add(tempFileUpload);
                await db.SaveChangesAsync();
                return Json(new { success = true, msg = "Successfully added" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new
                {
                    success = false,
                    msg = ex.Message.ToString()
                }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}