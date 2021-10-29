using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    public class EmployeeMenu
    {
        [Key]
        [Display(Name = "Menu Id")]
        public long MenuId { get; set; }

        [Required]
        [Display(Name = "Menu Name")]
        public string MenuName { get; set; }

        [Display(Name = "Main Menu")]
        public long? MainMenuId { get; set; }

        [Display(Name = "URL Path")]
        public string URLPath { get; set; }

        [Required]
        [Display(Name = "Order By")]
        public long OrderBy { get; set; }

        [Display(Name = "Is NotActive")]
        public bool IsNotActive { get; set; }

        [Display(Name = "NotActive Date")]
        public DateTime? NotActiveDate { get; set; }

        [Display(Name = "Created Date")]
        public DateTime CreatedDate { get; set; }

        [Display(Name = "Modified Date")]
        public DateTime ModifiedDate { get; set; }

        [Display(Name = "Is Deleted")]
        public bool IsDeleted { get; set; }

        [Display(Name = "Deleted Date")]
        public DateTime? DeletedDate { get; set; }

        [Display(Name = "Font Icon")]
        public string FontIcon { get; set; }

        [Display(Name = "Created By")]
        public string CreatedBy { get; set; }

        [Display(Name = "Modified By")]
        public string ModifiedBy { get; set; }

        [Display(Name = "DeletedBy")]
        public string DeletedBy { get; set; }
    }

    public class EmployeeMenuGrid
    {
        [Display(Name = "Menu Id")]
        public long MenuId { get; set; }

        [Display(Name = "Menu Name")]
        public string MenuName { get; set; }

        [Display(Name = "Main Menu")]
        public string MainMenu { get; set; }

        [Display(Name = "URL Path")]
        public string URLPath { get; set; }

        [Display(Name = "Order By")]
        public long OrderBy { get; set; }

        [Display(Name = "Is NotActive")]
        public bool IsNotActive { get; set; }

        [Display(Name = "NotActive Date")]
        public DateTime? NotActiveDate { get; set; }

        [Display(Name = "Created Date")]
        public DateTime CreatedDate { get; set; }

        [Display(Name = "Modified Date")]
        public DateTime ModifiedDate { get; set; }

        [Display(Name = "Is Deleted")]
        public bool IsDeleted { get; set; }

        [Display(Name = "Font Icon")]
        public string FontIcon { get; set; }
    }

    public class AllEmployeeMenuModel
    {
        public List<EmployeeMenu> employeeMenus { get; set; }

        public int currentPage { get; set; }
        public int pageSize { get; set; }
        public int totalCount { get; set; }

        public int skipCount { get; set; }
        public int pagefirstNumber { get; set; }
        public int pageLastNumber { get; set; }

        public int TotalPages => (int)Math.Ceiling(decimal.Divide(totalCount, pageSize));

        public bool ShowPrevious => currentPage > 1;
        public bool ShowNext => currentPage < TotalPages;

        public int MinPage => currentPage - 5 > 0 ? currentPage - 5 : 1;

        public int MaxPage => MinPage + 9 < TotalPages ? MinPage + 9 : TotalPages;
    }

    public class AllRolesModel
    {
        public List<IdentityRole> roles { get; set; }

        public int currentPage { get; set; }
        public int pageSize { get; set; }
        public int totalCount { get; set; }

        public int skipCount { get; set; }
        public int pagefirstNumber { get; set; }
        public int pageLastNumber { get; set; }

        public int TotalPages => (int)Math.Ceiling(decimal.Divide(totalCount, pageSize));

        public bool ShowPrevious => currentPage > 1;
        public bool ShowNext => currentPage < TotalPages;

        public int MinPage => currentPage - 5 > 0 ? currentPage - 5 : 1;

        public int MaxPage => MinPage + 9 < TotalPages ? MinPage + 9 : TotalPages;
    }

    public class UserwithRole
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string PhoneNumber { get; set; }
    }

    public class AllUsersModel
    {
        public List<UserwithRole> users { get; set; }
        public List<IdentityRole> roles { get; set; }

        public int currentPage { get; set; }
        public int pageSize { get; set; }
        public int totalCount { get; set; }

        public int skipCount { get; set; }
        public int pagefirstNumber { get; set; }
        public int pageLastNumber { get; set; }

        public int TotalPages => (int)Math.Ceiling(decimal.Divide(totalCount, pageSize));

        public bool ShowPrevious => currentPage > 1;
        public bool ShowNext => currentPage < TotalPages;

        public int MinPage => currentPage - 5 > 0 ? currentPage - 5 : 1;

        public int MaxPage => MinPage + 9 < TotalPages ? MinPage + 9 : TotalPages;
    }
}