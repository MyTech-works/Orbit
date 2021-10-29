using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    [Table("SK.CompanyDetails", Schema = "dbo")]
    public class company
    {
        [Key]
        public int CompanyId { get; set; }
        [Required]
        [Display(Name = "Code")]
        public string CompanyCode { get; set; }
        [Required]
        [Display(Name = "Name")]
        public string CompanyName { get; set; }
        [Required]
        [Display(Name = "Area and Street")]
        public string Address { get; set; }
        [Required]
        [Display(Name = "Locality")]
        public string Locality { get; set; }
        [Required]
        [Display(Name = "City/Town/District")]
        public string City { get; set; }
        [Required]
        [Display(Name = "Pincode")]
        public string Pincode { get; set; }
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
        public string AltEmail { get; set; }
        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Contact Number")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Contact number required")]
        public string ContactNumber { get; set; }
        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Alt. Contact Number")]
        public string AltContactNumber { get; set; }
        [Required]
        [Display(Name = "Website")]
        public string Website { get; set; }
        [Display(Name = "TIN No.")]
        public string TINNumber { get; set; }
        [Display(Name = "GST No.")]
        public string GSTINNumber { get; set; }
        [Display(Name = "Quotation Header")]
        public string QuotationHeader { get; set; }
        [Display(Name = "Logo")]
        public string CompanyLogo { get; set; }
        [Display(Name = "Watermark")]
        public string Watermark { get; set; }
        [Display(Name = "GST Detection %")]
        public decimal GSTDetectionPercentage { get; set; }

        [Display(Name = "Created On")]
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        [Display(Name = "Modified Date")]
        public DateTime ModifiedDate { get; set; } = DateTime.Now;

        [Display(Name = "IsDeleted")]
        public bool IsDeleted { get; set; } = false;
    }
}