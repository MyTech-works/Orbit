using SK_CRM.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SK_CRM.Controllers
{
    [Authorize]
    public class adminController : Controller
    {
        // GET: admin

        private readonly CommonServices _commonServices = new CommonServices();
        public ActionResult Index()
        {
            ViewBag.Menu = "Dashboard";
            _commonServices.CreateRole();
            return View();
        }

        public ActionResult GetAdminSideMenuBar()
        {
            try
            {
                ViewBag.userProfileImage = string.Empty;
                return PartialView("~/Views/admin/_PartialAdminSideMenu.cshtml");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //Get: admin partial sidemenu bar
        public ActionResult GetAdminMainHeader()
        {
            try
            {
                ViewBag.userProfileImage = string.Empty;
                ViewBag.CompanyLogo = string.Empty;
                return PartialView("~/Views/admin/_PartialAdminMainHeader.cshtml");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}