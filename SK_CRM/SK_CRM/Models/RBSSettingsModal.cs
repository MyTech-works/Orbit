using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    public class RBSSettingsModal
    {
        public List<RBSSettingsGrid> rBSSettingsGrids { get; set; }
        public List<RBSRoles> rBSRoles { get; set; }

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
    public class RBSSettingsGrid
    {
        public long MenuId { get; set; }
        public string MenuName { get; set; }
        public int IsMainMenu { get; set; }
        public bool IsRead { get; set; }
        public bool IsAdd { get; set; }
        public bool IsEdit { get; set; }
        public bool IsDelete { get; set; }
        public long RowNumber { get; set; }
        public int NoofSubMenus { get; set; }
        public long MainMenuId { get; set; }
    }

    public class RBSRoles
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public long RowNumber { get; set; }
    }

    public class RBSUser
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public long RowNumber { get; set; }
    }

}