using Microsoft.AspNet.Identity;
using SK_CRM.Models;
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
    public class RBSSettingsController : Controller
    {
        private readonly ApplicationDbContext db = new ApplicationDbContext();
        private readonly CommonServices _commonServices = new CommonServices();
        // GET: RBSSettings
        public ActionResult Index()
        {
            try
            {
                
                RBSSettingsModal rbsSettingsModal = new RBSSettingsModal()
                {
                    rBSRoles = new List<RBSRoles>(),
                    //rBSSettingsGrids = new List<RBSSettingsGrid>()
                };

                SqlParameter[] catParams = { };
                rbsSettingsModal.rBSRoles = db.Database.SqlQuery<RBSRoles>("GetAdminRBSRoles", catParams).ToList();

                //string RoleId = rbsSettingsModal.rBSRoles[0] == null ? "" : rbsSettingsModal.rBSRoles[0].Id;

                //SqlParameter[] catParams1 = { new SqlParameter("@RoleId", RoleId) };
                //rbsSettingsModal.rBSSettingsGrids = db.Database.SqlQuery<RBSSettingsGrid>("GetAdminRBSGridDetails @RoleId", catParams1).ToList();

                return View(rbsSettingsModal);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // GET: RBSSettings
        public ActionResult RBSUser()
        {
            try
            {
                
                List<RBSUser> rBSUsers = new List<RBSUser>();

                SqlParameter[] catParams = { };
                rBSUsers = db.Database.SqlQuery<RBSUser>("GetAdminRBSUsers", catParams).ToList();

                return View(rBSUsers);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpPost]
        public JsonResult UpdateAdminRBSRole(string RBSRoles)
        {
            try
            {
                string UserID = User.Identity.GetUserId();
                SqlParameter[] catParams1 = { new SqlParameter("@RBSRoles", RBSRoles), new SqlParameter("@UserID", UserID) };
                List<string> response = db.Database.SqlQuery<string>("spAdminUpdateRBSRoles @RBSRoles, @UserID", catParams1).ToList();
                return Json(new { success = true, msg = response[0] }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult GetRBSRoleGridDetails(string RoleId, int currentpage = 1, int pagesize = 10, string searchvalue = "")
        {
            try
            {
                RBSSettingsModal rBSSettingsModal = new RBSSettingsModal();
                
                RoleId = RoleId == null ? "" : RoleId;

                SqlParameter[] catParams1 = { new SqlParameter("@RoleId", RoleId), new SqlParameter("@searchvalue", searchvalue) };
                List<RBSSettingsGrid> gridlist = db.Database.SqlQuery<RBSSettingsGrid>("GetAdminRBSGridDetails @RoleId, @searchvalue", catParams1).ToList();

                int totalcount = gridlist.Count();
                int skipcount = (currentpage - 1) * pagesize;
                rBSSettingsModal.currentPage = currentpage;
                rBSSettingsModal.pageSize = pagesize;
                rBSSettingsModal.totalCount = totalcount;
                rBSSettingsModal.skipCount = skipcount;
                rBSSettingsModal.pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount;
                rBSSettingsModal.pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount;
                rBSSettingsModal.rBSSettingsGrids = gridlist.Skip(skipcount).Take(pagesize).ToList();

                return PartialView("~/Views/RBSSettings/_PartialRBSGrid.cshtml", rBSSettingsModal);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

       

        public ActionResult GetRBSUserGridDetails(string UserId, int currentpage = 1, int pagesize = 10, string searchvalue = "")
        {
            try
            {
                RBSSettingsModal rBSSettingsModal = new RBSSettingsModal();

                UserId = UserId ?? "";

                SqlParameter[] catParams1 = { new SqlParameter("@UserId", UserId), new SqlParameter("@searchvalue", searchvalue) };
                List<RBSSettingsGrid> gridlist = db.Database.SqlQuery<RBSSettingsGrid>("GetAdminRBSUserGridDetails @UserId, @searchvalue", catParams1).ToList();

                int totalcount = gridlist.Count();
                int skipcount = (currentpage - 1) * pagesize;
                rBSSettingsModal.currentPage = currentpage;
                rBSSettingsModal.pageSize = pagesize;
                rBSSettingsModal.totalCount = totalcount;
                rBSSettingsModal.skipCount = skipcount;
                rBSSettingsModal.pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount;
                rBSSettingsModal.pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount;
                rBSSettingsModal.rBSSettingsGrids = gridlist.Skip(skipcount).Take(pagesize).ToList();

                return PartialView("~/Views/RBSSettings/_PartialRBSUserGrid.cshtml", rBSSettingsModal);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public JsonResult UpdateAdminRBSUser(string RBSUsers)
        {
            try
            {
                string UserID = User.Identity.GetUserId();
                SqlParameter[] catParams1 = { new SqlParameter("@RBSUsers", RBSUsers), new SqlParameter("@UserID", UserID) };
                List<string> response = db.Database.SqlQuery<string>("spAdminUpdateRBSUsers @RBSUsers, @UserID", catParams1).ToList();
                return Json(new { success = true, msg = response[0] }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}