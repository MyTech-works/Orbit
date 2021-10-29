using System;
using System.Collections.Generic;

namespace SK_CRM.Models.AggregateModel.Product
{
    public class ProductDetailsModel
    {
        public ProductDetails product { get; set; }

        public List<MultipleFileUpload> uploads { get; set; }
    }

    public class ProductDetailsAllModel
    {
        public List<ProductDetails> products { get; set; }

        public List<MultipleFileUpload> uploads { get; set; }

        public int TotalProducts { get; set; }
        public int NotActiveProducts { get; set; }
        public int ActiveProducts { get; set; }
        public decimal StockProducts { get; set; }

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
        public List<tempQuotationProducts> quotationProducts { get; set; }
    }
}