using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    public class MultipleFileUpload
    {
        [Key]
        public long FileUploadId { get; set; }
        [Required]
        public long RefId { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string ImagePath { get; set; }
        public long OrderBy { get; set; }
        public bool IsDeleted { get; set; }
        public string FormName { get; set; }

    }
}