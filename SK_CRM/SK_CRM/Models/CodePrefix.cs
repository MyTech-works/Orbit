using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    [Table("SK.CodePrefix", Schema = "dbo")]
    public class CodePrefix
    {
        [Key]
        public long PrefixRefId { get; set; }
        [Required]
        [Display(Name = "Type")]
        public long PrefixTypeId { get; set; }
        [Required]
        [Display(Name = "Series Prefix")]
        public string SeriesPrefix { get; set; }
        [Required]
        [Display(Name = "Status")]
        public bool IsActive { get; set; }
        [Required]
        [Display(Name = "Starting")]
        public long StartingNumber { get; set; }
        [Required]
        [Display(Name = "Ending")]
        public long EndingNumber { get; set; }
        [Required]
        [Display(Name = "Last Used No.")]
        public long LastUsedNo { get; set; }
        [Display(Name = "Created Date")]
        public DateTime CreatedDate { get; set; }
    }
}