using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SK_CRM.Models.AggregateModel
{
    public class QuotationModel
    {
        public List<Quotation> quotations { get; set; }
        public List<company> companies { get; set; }
        public List<customer> customers { get; set; }

        public int currentPage { get; set; }
        public int pageSize { get; set; }
        public int totalCount { get; set; }

        public int skipCount { get; set; }
        public int pagefirstNumber { get; set; }
        public int pageLastNumber { get; set; }

        public int TotalPages => (int)Math.Ceiling(decimal.Divide(totalCount, pageSize));

        public bool ShowPrevious => currentPage > 1;
        public bool ShowNext => currentPage < TotalPages;

        public int MinPage => currentPage - 5 > 0 ? currentPage - 5 : 1;

        public int MaxPage => MinPage + 9 < TotalPages ? MinPage + 9 : TotalPages;
    }
}