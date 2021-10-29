using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SK_CRM.Models
{
    public class tempFileUpload
    {
        [Key]
        public long RefId { get; set; }

        public string Base64String { get; set; }

        public string Guid { get; set; }

        public DateTime CreatedDate { get; set; }

        public string FormName { get; set; }
        public string Type { get; set; }
    }
}