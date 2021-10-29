using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SK_CRM.Models
{
    [Table("SK.ProductDetails", Schema = "dbo")]
    public class ProductDetails
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [Display(Name = "Code")]
        public string ProductCode { get; set; }
        [Required]
        [Display(Name = "Product Name")]
        public string ProductName { get; set; }

        [Required]
        [Display(Name = "Short Description")]
        public string Description { get; set; }

        [Required]
        [Display(Name = "Product Description")]
        [AllowHtml]
        public string ProductDescription { get; set; }
        [Required]
        [Display(Name = "Unit Price")]
        public decimal UnitPrice { get; set; }
        [Required]
        [Display(Name = "Bal. Stock Qty.")]
        public decimal BalanceStockQty { get; set; }
        [Required]
        [Display(Name = "Not Active")]
        public bool IsNotActive { get; set; }

        [Display(Name = "Image")]
        public string ProductImage { get; set; }
        
        [Display(Name = "CreatedOn")]
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        [Display(Name = "Modified Date")]
        public DateTime ModifiedDate { get; set; } = DateTime.Now;

        [Display(Name = "IsDeleted")]
        public bool IsDeleted { get; set; } = false;
    }
}