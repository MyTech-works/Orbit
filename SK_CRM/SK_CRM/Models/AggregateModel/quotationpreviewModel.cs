using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SK_CRM.Models.AggregateModel
{
    public class quotationpreviewModel
    {
        public Quotation quotation { get; set; }
        public company company { get; set; }

        public customer customer { get; set; }

        public List<QuotationProducts> quotationProducts { get; set; }

        public List<ProductDetails> productDetails { get; set; }
        public List<MultipleFileUpload> uploads { get; set; }
        public customer refPerson { get; set; }
    }
}