using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    [Table("SK.CustomerDetails", Schema = "dbo")]
    public class customer
    {
        [Key]
        [Display(Name = "Id")]
        public int CustomerId { get; set; }
        [Required]
        [Display(Name = "Code")]
        public string CustomerCode { get; set; }
        [Required]
        [Display(Name = "Name")]
        public string CustomerName { get; set; }
        [Required]
        [Display(Name = "Email")]
        public string CustomerEmail { get; set; }
        [Required]
        [Display(Name = "Area and Street")]
        public string CustomerAddress { get; set; }
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
        [Display(Name = "Country")]
        public string Country { get; set; }
        [Required]
        [Display(Name = "Cont. Number")]
        public string ContactNumber { get; set; }
    }
}