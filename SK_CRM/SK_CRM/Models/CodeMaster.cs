using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    [Table("SK.CodeMaster", Schema = "dbo")]
    public class CodeMaster
    {
        [Key]
        public long CodemasterId { get; set; }
        [Required]
        [Display(Name = "RefId")]
        public long TypevalueRefId { get; set; }
        [Required]
        [Display(Name = "Type")]
        public string Type { get; set; }
        [Required]
        [Display(Name = "Typevalue")]
        public string Typevalues { get; set; }
        [Required]
        [Display(Name = "Order")]
        public int OrderBy { get; set; }
        [Required]
        [Display(Name = "Status")]
        public bool IsActive { get; set; }
        [Display(Name = "Created Date")]
        public DateTime CreatedDate { get; set; }

        public int? BuyCount { get; set; }
        public int? FreeCount { get; set; }
    }

    public class FilterOrderStatus
    {
        public int IsSelected { get; set; }
        public long RefId { get; set; }
        public string Typevalues { get; set; }
    }

    public class ItemMasterDetails
    {
        public int IsSelected { get; set; }
        public long ItemId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
    }
}