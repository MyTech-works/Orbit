using Microsoft.AspNet.Identity.EntityFramework;
using SK_CRM.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity.Validation;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;

namespace SK_CRM.Services
{
    public class CommonServices : Controller
    {
        private readonly ApplicationDbContext db = new ApplicationDbContext();
        public string LoadImage(string base64string, string guid)
        {
            //data:image/gif;base64,
            //this image is a single pixel (black)
            byte[] bytes = Convert.FromBase64String(base64string);

            Image image;
            using (MemoryStream ms = new MemoryStream(bytes))
            {
                image = Image.FromStream(ms);
            }
            image.Save(guid, System.Drawing.Imaging.ImageFormat.Png);
            return guid;
        }

        public string RenderPartialViewToString(string controlName, object viewData)
        {
            ViewPage viewPage = new ViewPage() { ViewContext = new ViewContext() };

            viewPage.ViewData = new ViewDataDictionary(viewData);
            viewPage.Controls.Add(viewPage.LoadControl(controlName));

            StringBuilder sb = new StringBuilder();
            using (StringWriter sw = new StringWriter(sb))
            {
                using (HtmlTextWriter tw = new HtmlTextWriter(sw))
                {
                    viewPage.RenderControl(tw);
                }
            }

            return sb.ToString();
        }

        public string GetTenDigitRandomNumbers()
        {
            Random generator = new Random();
            return generator.Next(0, 1000000).ToString("D10");
        }

        public string GetExceptionDetails(Exception ex)
        {
            var stringBuilder = new StringBuilder();

            while (ex != null)
            {
                switch (ex)
                {
                    case DbEntityValidationException dbEx:
                        var errorMessages = dbEx.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);
                        var fullErrorMessage = string.Join("; ", errorMessages);
                        var message = string.Concat(ex.Message, " The validation errors are: ", fullErrorMessage);

                        stringBuilder.Insert(0, dbEx.StackTrace);
                        stringBuilder.Insert(0, message);
                        break;

                    default:
                        stringBuilder.Insert(0, ex.StackTrace);
                        stringBuilder.Insert(0, ex.Message);
                        break;
                }

                ex = ex.InnerException;
            }

            return stringBuilder.ToString();
        }

        public bool CheckUserMenuPermission(long MenuId = 0, string UserID = "")
        {
            try
            {
                EmployeeMenu employeeMenu = db.EmployeeMenus.Where(obj => obj.MenuId == MenuId && obj.IsDeleted == false && obj.IsNotActive == false).FirstOrDefault();
                if (employeeMenu != null)
                {

                    SqlParameter[] dataParams = { new SqlParameter("@MenuId", MenuId), new SqlParameter("@UserID", UserID) };
                    string response = db.Database.SqlQuery<string>("spCheckRBSPermissionWithUserID @MenuId, @UserID", dataParams).FirstOrDefault();

                    if (response.ToLower() == "granted")
                    {
                        return true;
                    }
                }

                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public MenuRBS GetMenuPermission(long MenuId = 0, string UserID = "")
        {
            try
            {
                SqlParameter[] dataParams = { new SqlParameter("@MenuId", MenuId), new SqlParameter("@UserID", UserID) };
                MenuRBS response = db.Database.SqlQuery<MenuRBS>("spGetRBSPermissionWithMenuID @MenuId, @UserID", dataParams).FirstOrDefault();
                return response;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public EmployeeMenu GetEmployeeMenuByID(long MenuId)
        {
            EmployeeMenu employeeMenu = db.EmployeeMenus.Where(x => x.MenuId == MenuId).FirstOrDefault();
            return employeeMenu;
        }
        public ActionResult Goto404Error()
        {
            return RedirectToAction("Index", "ErrorHandler");
        }

        
        public bool CreateRole()
        {

            try
            {
                IdentityRole superadmin = db.Roles.Where(obj => obj.Name == "superadmin").FirstOrDefault();
                if (superadmin == null)
                {
                    IdentityRole Rolenew = new IdentityRole();
                    Rolenew.Name = "superadmin";
                    db.Roles.Add(Rolenew);
                    db.SaveChanges();
                }

                IdentityRole admin = db.Roles.Where(obj => obj.Name == "admin").FirstOrDefault();
                if (admin == null)
                {
                    IdentityRole Roleadmin = new IdentityRole();
                    Roleadmin.Name = "admin";
                    db.Roles.Add(Roleadmin);
                    db.SaveChanges();
                }

                IdentityRole user = db.Roles.Where(obj => obj.Name == "employee").FirstOrDefault();
                if (user == null)
                {
                    IdentityRole Roleuser = new IdentityRole();
                    Roleuser.Name = "employee";
                    db.Roles.Add(Roleuser);
                    db.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public bool IsCheckActiveInternet()
        {
            return System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable();
        }
    }
}