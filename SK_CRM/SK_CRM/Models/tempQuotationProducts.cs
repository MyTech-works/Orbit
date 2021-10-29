using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    public class tempQuotationProducts
    {
        [Key]
        public int RefId { get; set; }
        public int QuotationProductId { get; set; }
        public string Guid { get; set; }
        public int productId { get; set; }
        public decimal Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }

        public bool IsDeleted { get; set; }
        [Display(Name = "CreatedOn")]
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}