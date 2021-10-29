using Microsoft.AspNet.Identity;
using SK_CRM.Models;
using SK_CRM.Services;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace SK_CRM.Controllers
{
    [Authorize]
    public class EmployeeMenusController : Controller
    {
        private readonly ApplicationDbContext db = new ApplicationDbContext();
        private readonly CommonServices _commonServices = new CommonServices();

        // GET: EmployeeMenus
        public async Task<ActionResult> Index()
        {
            try
            {
                //long MenuId = 37;
                //string UserID = User.Identity.GetUserId();
                //UserID = UserID ?? "";

                //if (!_commonServices.CheckUserMenuPermission(MenuId, UserID))
                //{
                //    return RedirectToAction("Index", "ErrorHandler");
                //}
                //ViewBag.RBSPersmission = _commonServices.GetMenuPermission(MenuId, UserID);
                //SqlParameter[] param = { };
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult _PartialGetAllEmployeeMenus(int currentpage = 1, int pagesize = 10)
        {
            int totalcount = db.EmployeeMenus.Where(x => x.IsDeleted == false).Select(p => p.MenuId).Count();
            int skipcount = (currentpage - 1) * pagesize;
            AllEmployeeMenuModel companysModel = new AllEmployeeMenuModel()
            {
                employeeMenus = db.EmployeeMenus.Where(x => x.IsDeleted == false).OrderBy(x => x.MenuId).Skip(skipcount).Take(pagesize).ToList(),
                currentPage = currentpage,
                pageSize = pagesize,
                totalCount = totalcount,
                skipCount = skipcount,
                pagefirstNumber = totalcount > skipcount ? skipcount + 1 : totalcount,
                pageLastNumber = totalcount > skipcount + pagesize ? skipcount + pagesize : totalcount
            };
            return PartialView(companysModel);
        }

        // GET: EmployeeMenus/Details/5
        public async Task<ActionResult> Details(long? id)
        {
            try
            {
                if (id == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                EmployeeMenu employeeMenu = await db.EmployeeMenus.FindAsync(id);
                if (employeeMenu == null)
                {
                    return HttpNotFound();
                }
                return View(employeeMenu);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // GET: EmployeeMenus/Create
        public ActionResult Create()
        {
            try
            {
                string UserID = User.Identity.GetUserId();
                UserID = UserID ?? "";

                if (!_commonServices.CheckUserMenuPermission(38, UserID))
                {
                    return RedirectToAction("Index", "ErrorHandler");
                }

                ViewBag.MainMenus = db.EmployeeMenus.Where(obj => obj.IsDeleted == false && obj.IsNotActive == false && obj.MainMenuId == null).OrderBy(obj => obj.MenuName).ToList();
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // POST: EmployeeMenus/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "MenuId,MenuName,MainMenuId,URLPath,OrderBy,IsNotActive,FontIcon")] EmployeeMenu employeeMenu)
        {
            try
            {
                long orderby = 1;
                if (await db.EmployeeMenus.CountAsync() > 0)
                {
                    orderby = await db.EmployeeMenus.MaxAsync(item => item.OrderBy) + 1;
                }
                if (employeeMenu.IsNotActive)
                {
                    employeeMenu.NotActiveDate = DateTime.Now;
                }
                ModelState["OrderBy"].Errors.Clear();
                employeeMenu.OrderBy = orderby;
                employeeMenu.CreatedDate = DateTime.Now;
                employeeMenu.ModifiedDate = DateTime.Now;

                string UserID = User.Identity.GetUserId();
                employeeMenu.CreatedBy = UserID;
                employeeMenu.ModifiedBy = UserID;
                if (ModelState.IsValid)
                {
                    db.EmployeeMenus.Add(employeeMenu);
                    await db.SaveChangesAsync();
                    return RedirectToAction("Index");
                }
                ViewBag.MainMenus = db.EmployeeMenus.Where(obj => obj.IsDeleted == false && obj.IsNotActive == false && obj.MainMenuId == null).OrderBy(obj => obj.MenuName).ToList();
                return View(employeeMenu);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // GET: EmployeeMenus/Edit/5
        public async Task<ActionResult> Edit(long? id)
        {
            try
            {
                if (id == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                EmployeeMenu employeeMenu = await db.EmployeeMenus.FindAsync(id);
                if (employeeMenu == null)
                {
                    return HttpNotFound();
                }
                ViewBag.MainMenus = db.EmployeeMenus.Where(obj => obj.IsDeleted == false && obj.IsNotActive == false && obj.MainMenuId == null).OrderBy(obj => obj.MenuName).ToList();
                return View(employeeMenu);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // POST: EmployeeMenus/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "MenuId,MenuName,MainMenuId,URLPath,OrderBy,IsNotActive,FontIcon")] EmployeeMenu employeeMenu)
        {
            try
            {
                EmployeeMenu employeeMenu1 = await db.EmployeeMenus.FindAsync(employeeMenu.MenuId);
                employeeMenu1.ModifiedDate = DateTime.Now;
                employeeMenu1.MenuName = employeeMenu.MenuName;
                employeeMenu1.MainMenuId = employeeMenu.MainMenuId;
                employeeMenu1.URLPath = employeeMenu.URLPath;
                employeeMenu1.OrderBy = employeeMenu.OrderBy;
                employeeMenu1.IsNotActive = employeeMenu.IsNotActive;
                employeeMenu1.FontIcon = employeeMenu.FontIcon;

                if (employeeMenu.IsNotActive)
                {
                    employeeMenu1.NotActiveDate = DateTime.Now;
                }

                string UserID = User.Identity.GetUserId();
                employeeMenu1.ModifiedBy = UserID;
                if (ModelState.IsValid)
                {
                    db.Entry(employeeMenu1).State = EntityState.Modified;
                    await db.SaveChangesAsync();
                    return RedirectToAction("Index");
                }

                ViewBag.MainMenus = db.EmployeeMenus.Where(obj => obj.IsDeleted == false && obj.IsNotActive == false && obj.MainMenuId == null).OrderBy(obj => obj.MenuName).ToList();
                return View(employeeMenu);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // GET: EmployeeMenus/Delete/5
        public async Task<ActionResult> Delete(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EmployeeMenu employeeMenu = await db.EmployeeMenus.FindAsync(id);
            if (employeeMenu == null)
            {
                return HttpNotFound();
            }
            return View(employeeMenu);
        }

        // POST: EmployeeMenus/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(long id)
        {
            EmployeeMenu employeeMenu = await db.EmployeeMenus.FindAsync(id);
            employeeMenu.DeletedDate = DateTime.Now;

            string UserID = User.Identity.GetUserId();
            employeeMenu.DeletedBy = UserID;
            employeeMenu.IsDeleted = true;
            if (ModelState.IsValid)
            {
                db.Entry(employeeMenu).State = EntityState.Modified;
                await db.SaveChangesAsync();
            }
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
    }
}