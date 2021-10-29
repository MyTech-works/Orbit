using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    public class QuotationProducts
    {
        [Key]
        public int RefId { get; set; }

        public int QuotationId { get; set; }
        public int ProductId { get; set; }

        public decimal Quantity { get; set; }

        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
    }
}