using DocumentFormat.OpenXml.Wordprocessing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    public class RBSRolePermission
    {
        [Key]
        [Display(Name = "Ref Id")]
        public long RefId { get; set; }

        [Required]
        [Display(Name = "RoleId")]
        public string RoleId { get; set; }

        [Display(Name = "Menu Id")]
        public long MenuId { get; set; }

        [Display(Name = "Created By")]
        public string CreatedBy { get; set; }

        [Display(Name = "Created Date")]
        public DateTime CreatedDate { get; set; }

        [Display(Name = "Modified By")]
        public string ModifiedBy { get; set; }

        [Display(Name = "Modified Date")]
        public DateTime ModifiedDate { get; set; }

        [Display(Name = "Deleted Date")]
        public DateTime? DeletedDate { get; set; }

        [Display(Name = "Is Deleted")]
        public bool IsDeleted { get; set; }

        [Display(Name = "DeletedBy")]
        public string DeletedBy { get; set; }

        [Display(Name = "Read")]
        public bool IsRead { get; set; }

        [Display(Name = "Add")]
        public bool IsAdd { get; set; }
        [Display(Name = "Edit")]
        public bool IsEdit { get; set; }
        [Display(Name = "Delete")]
        public bool IsDelete { get; set; }
    }
}