using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    public class AdminUserModel
    {
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }

    public class AdminPanelUserSideMenu
    {
        public long MenuId { get; set; }
        public string MenuName { get; set; }
        public long? MainMenuId { get; set; }
        public string URLPath { get; set; }
        public long OrderBy { get; set; }
        public string FontIcon { get; set; }
        public int IsMainMenu { get; set; }
        public bool IsRead { get; set; }
        public bool IsAdd { get; set; }
        public bool IsEdit { get; set; }
        public bool IsDelete { get; set; }
        public int NoofSubMenus { get; set; }
    }

    public class MenuRBS
    {
        public bool IsRead { get; set; }
        public bool IsAdd { get; set; }
        public bool IsEdit { get; set; }
        public bool IsDelete { get; set; }
    }
}