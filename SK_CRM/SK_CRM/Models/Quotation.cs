using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SK_CRM.Models
{
    [Table("SK.QuotationDetails", Schema = "dbo")]
    public class Quotation
    {
        [Key]
        [Display(Name = "Id")]
        public int QuotationId { get; set; }
        [Required]
        [Display(Name = "Quot. No")]
        public string QuotationNo { get; set; }
        [Required]
        [Display(Name = "Date")]
        public DateTime QuotationDate { get; set; }
        [Required]
        [Display(Name = "Due Date")]
        public DateTime QuotationDueDate { get; set; }
        [Required]
        [Display(Name = "Billed By")]
        public int BilledByCompanyId { get; set; }
        [Required]
        [Display(Name = "Billed To")]
        public int BilledToCustomerId { get; set; }
        [Display(Name = "Ref. Person")]
        public int? RefPersonId { get; set; }

        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public string QuotationPath { get; set; }
    }
}