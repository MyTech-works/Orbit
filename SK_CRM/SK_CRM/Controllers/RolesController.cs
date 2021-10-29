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
using Microsoft.AspNet.Identity.EntityFramework;
using SK_CRM.Services;
using Microsoft.AspNet.Identity;

namespace SK_CRM.Controllers
{
    [Authorize]
    public class RolesController : Controller
    {
        ApplicationDbContext context;
        private readonly CommonServices _commonServices = new CommonServices();

        public RolesController()
        {
            context = new ApplicationDbContext();
        }

        /// <summary>
        /// Get All Roles
        /// </summary>
        /// <returns></returns>
        public ActionResult Index(string searchtext)
        {
            try
            {
                //long MenuId = 34;
                //string UserID = User.Identity.GetUserId();
                //UserID = UserID ?? "";

                //if (!_commonServices.CheckUserMenuPermission(MenuId, UserID))
                //{
                //    return RedirectToAction("Index", "ErrorHandler");
                //}
                //ViewBag.RBSPersmission = _commonServices.GetMenuPermission(MenuId, UserID);
                //searchtext = searchtext == null ? "" : searchtext;
                //ViewBag.searchtext = searchtext;
                //var Roles = context.Roles.ToList();
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult _PartialGetAllRoles(int currentpage = 1, int pagesize = 10)
        {
            int totalcount = context.Roles.Select(p => p.Id).Count();
            int skipcount = (currentpage - 1) * pagesize;
            AllRolesModel companysModel = new AllRolesModel()
            {
                roles = context.Roles.OrderBy(x => x.Id).Skip(skipcount).Take(pagesize).ToList(),
                currentPage = currentpage,
                pageSize = pagesize,
                totalCount = totalcount,
                skipCount = skipcount,
                pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount,
                pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount
            };
            return PartialView(companysModel);
        }
        /// <summary>
        /// Create  a New role
        /// </summary>
        /// <returns></returns>
        public ActionResult Create()
        {
            try
            {
                //string UserID = User.Identity.GetUserId();
                //UserID = UserID ?? "";

                //if (!_commonServices.CheckUserMenuPermission(35, UserID))
                //{
                //    return RedirectToAction("Index", "ErrorHandler");
                //}

                var Role = new IdentityRole();
                return View(Role);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Create a New Role
        /// </summary>
        /// <param name="Role"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Create(IdentityRole Role)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(Role.Name))
                {
                    ModelState.AddModelError("Name", "Name Required.");
                }
                if (ModelState.IsValid)
                {
                    context.Roles.Add(Role);
                    context.SaveChanges();
                    return RedirectToAction("Index");
                }
                return View(Role);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        // GET: Roles/Details/5
        public ActionResult Details(string id)
        {
            try
            {
                if (id == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                IdentityRole role = context.Roles.Find(id);
                if (role == null)
                {
                    return HttpNotFound();
                }
                return View(role);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // GET: Roles/Edit/5
        public ActionResult Edit(string id)
        {
            try
            {
                if (id == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                IdentityRole role = context.Roles.Where(obj => obj.Id.ToString() == id).FirstOrDefault();
                if (role == null)
                {
                    return HttpNotFound();
                }
                return View(role);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // POST: Roles/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(IdentityRole Role)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(Role.Name))
                {
                    ModelState.AddModelError("Name", "Name Required.");
                }
                if (ModelState.IsValid)
                {
                    context.Entry(Role).State = EntityState.Modified;
                    context.SaveChanges();
                    return RedirectToAction("Index");
                }

                return View(Role);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                context.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
