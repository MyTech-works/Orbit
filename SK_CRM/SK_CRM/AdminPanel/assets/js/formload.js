////$(document).ready(function () {
////    $('.main-menu ul li a.side-menu-a').click(function (e) {
////        var menu = $(this).find("span.menu-title").attr("data-i18n");
////        $(".side-menu-a").each(function () {
////            $(this).closest("li").removeClass("active");
////        });
////        $(this).closest("li").addClass("active");
////        $('#div-load-partial-view').load("/PartialView/" + menu);
////    });
////});

$(document).ready(function () {
    $(".action-buttons").click(function (e) {
        $(this).closest(".dropdown-menu").addClass("show");
    });

    $('#add-new-customer-sidebar').modal({
        backdrop: 'static',
        keyboard: false
    })

    
});

//div-load-partial-view


//Common Functions
var common = {
    commonupload: function (base64string, formname, type) {
        $.ajax({
            url: '/Home/UploadFile',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: '{base64string: "' + base64string + '", formname: "' + formname + '", type: "' + type + '" }',
            success: function (response) {
                console.log(response.msg);
            },
            failure: function (response) {
                console.log(response.responseText);
            },
            error: function (response) {
                console.log(response.responseText);
            }
        });
    },

    mandatoryCheck: function (controls, delimiter) {
        if (delimiter == null || delimiter == "") {
            delimiter = "|";
        }
        var Result = "";
        var arraylist = controls.split(delimiter);
        $.each(arraylist, function (i, value) {
            //debugger

            var controltype = $("#" + value)[0].nodeName.toLowerCase();

            var controlvalue = "";
            var errorspan = '';
            switch (controltype) {
                case "input":
                    var controlattr = $("#" + value).attr("type").toLowerCase();
                    if (controlattr == "checkbox") {
                        controlvalue = $("#" + value)[0].checked;
                    }
                    else {
                        controlvalue = $("#" + value).val();
                    }

                    if (controlvalue == "" && (controlattr == "text" || controlattr == "file" || controlattr == "hidden" || controlattr == "email")) {
                        $("#" + value).addClass("error");
                        errorspan = '<span id="' + value + '-error" class="error">This field is required.</span>';
                        if ($("#" + value + "-error").length == 0) {
                            $("#" + value).parent().append(errorspan);
                        }

                        if (controlattr == "hidden") {
                            $("#" + value).parent().find("input").each(function () {
                                if (!$(this).hasClass("error")) {
                                    $(this).addClass("error");
                                }
                            });
                        }
                        Result = "Mandatory data missing, Kindly check and update";
                    }
                    else if ((controlvalue == 0 || controlvalue == "") && (controlattr == "number" || controlattr == "tel")) {
                        $("#" + value).addClass("error");
                        errorspan = '<span id="' + value + '-error" class="error">This field is required.</span>';
                        if ($("#" + value + "-error").length == 0) {
                            $("#" + value).parent().append(errorspan);
                        }
                        Result = "Mandatory data missing, Kindly check and update";
                    }
                    else if (controlvalue == false && controlattr == "checkbox") {
                        $("#" + value).addClass("error");
                        errorspan = '<span id="' + value + '-error" class="error">This field is required.</span>';
                        if ($("#" + value + "-error").length == 0) {
                            $("#" + value).parent().append(errorspan);
                        }
                        Result = "Mandatory data missing, Kindly check and update";
                    }
                    else {
                        $("#" + value).removeClass("error");
                        $("#" + value + "-error").remove();
                        if (controlattr == "hidden") {
                            $("#" + value).parent().find("input").each(function () {
                                if ($(this).hasClass("error")) {
                                    $(this).removeClass("error");
                                }
                            });
                        }
                    }

                    break;

                case "textarea":
                    controlvalue = $("#" + value).val();
                    if (controlvalue == "") {
                        $("#" + value).addClass("error");
                        errorspan = '<span id="' + value + '-error" class="error">This field is required.</span>';
                        if ($("#" + value + "-error").length == 0) {
                            $("#" + value).parent().append(errorspan);
                        }
                        Result = "Mandatory data missing, Kindly check and update";
                    }
                    else {
                        $("#" + value).removeClass("error");
                        $("#" + value + "-error").remove();
                    }
                    break;
                case "select":
                    controlvalue = $("#" + value).val();
                    if (controlvalue == "0" || controlvalue == 0) {
                        $("#" + value).addClass("error");
                        errorspan = '<span id="' + value + '-error" class="error">This field is required.</span>';
                        if ($("#" + value + "-error").length == 0) {
                            $("#" + value).parent().append(errorspan);
                        }
                        Result = "Mandatory data missing, Kindly check and update";
                    }
                    else {
                        $("#" + value).removeClass("error");
                        $("#" + value + "-error").remove();
                    }
                    break;
            }
        });
        if (Result != "") {
            $("#mandatory-missing").click();
        }
        return Result;
    },

    ckMandatoryCheck: function (controls, delimiter) {
        if (delimiter == null || delimiter == "") {
            delimiter = "|";
        }
        var Result = "";
        var arraylist = controls.split(delimiter);
        $.each(arraylist, function (i, value) {
            //debugger
            var controlvalue = CKEDITOR.instances[value].getData()
            if (controlvalue == "" || jQuery.trim(controlvalue).length == 0) {
                Result = "Mandatory data missing CK editor, Kindly check and update";
            }

        });
        if (Result != "") {
            $("#mandatory-missing").click();
        }
        return Result;
    },

    showHideSpinner: function (control, type) {
        var $this = $("#" + control);
        if (type == "show") {
            if ($this.find("i").hasClass("hide-spinner")) {
                if (!$this.hasClass("disabled")) {
                    $this.addClass("disabled");
                }
                $this.find("i").removeClass("hide-spinner");
                $this.find("i").attr("disabled", true);
            }
        }
        else {
            if (!$this.find("i").hasClass("hide-spinner")) {
                if ($this.hasClass("disabled")) {
                    $this.removeClass("disabled");
                }
                $this.find("i").addClass("hide-spinner");
                $this.find("i").attr("disabled", false);
            }
        }
    }
}

var product = {
    productmandatoryControls: "ProductCode|ProductName|Description|UnitPrice|BalanceStockQty|imgProductImage",
    productupdatemandatoryControls: "ProductName|Description|UnitPrice|BalanceStockQty",
    productCKControls: 'ProductDescription',
    ProductName: '',
    Description: '',
    UnitPrice: 0,
    BalanceStockQty: 0,
    IsNotActive: false,
    ProductDescription: '',
    ProductId: 0,
    ProductCode: '',

    mandatoryCheck: function () {
        var result = common.mandatoryCheck(product.productmandatoryControls, "|");
        if (result == "") {

        }
    },

    fnGetControlValues: function () {
        product.ProductId = $("#Id").val();
        product.ProductCode = $("#ProductCode").val();
        product.ProductName = $("#ProductName").val();
        product.Description = $("#Description").val();
        product.UnitPrice = $("#UnitPrice").val();
        product.BalanceStockQty = $("#BalanceStockQty").val();
        product.IsNotActive = $("#IsNotActive")[0].checked;
        product.ProductDescription = CKEDITOR.instances['ProductDescription'].getData();;
    },

    fnSaveProduct: function () {

        var result = common.mandatoryCheck(product.productmandatoryControls, "|");
        if (result == "") {

            var ckresult = common.ckMandatoryCheck(product.productCKControls, "|");
            if (ckresult == "") {
                common.showHideSpinner("btnSave", "show");
                product.fnGetControlValues();
                debugger;
                $.ajax({
                    url: '/Product/addProduct',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: '{ProductName: "' + product.ProductName + '", ProductCode: "' + product.ProductCode + '", Description: "' + product.Description + '", UnitPrice: "' + product.UnitPrice
                        + '", BalanceStockQty: "' + product.BalanceStockQty + '", IsNotActive: "' + product.IsNotActive + '", ProductDescription: "' + product.ProductDescription + '" }',
                    success: function (response) {
                        if (response.success) {
                            $('#div-load-partial-view').load("/PartialView/_PartialGetAllProduct?currentpage=1&pagesize=10");
                            $("#product-success").click();
                        }
                        else {
                            alert(response.msg);
                            console.log(response.responseText);
                        }
                        common.showHideSpinner("btnSave", "hide");
                    },
                    failure: function (response) {
                        console.log(response.responseText);
                        common.showHideSpinner("btnSave", "hide");
                    },
                    error: function (response) {
                        console.log(response.responseText);
                        common.showHideSpinner("btnSave", "hide");
                    }
                });
            }
        }
    },

    fnUpdateProduct: function () {

        var result = common.mandatoryCheck(product.productupdatemandatoryControls, "|");
        if (result == "") {

            var ckresult = common.ckMandatoryCheck(product.productCKControls, "|");
            if (ckresult == "") {
                common.showHideSpinner("btnSave", "show");
                product.fnGetControlValues();
                debugger;
                $.ajax({
                    url: '/Product/updateProduct',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: '{ProductId: "' + product.ProductId + '", ProductCode: "' + product.ProductCode + '", ProductName: "' + product.ProductName + '", Description: "' + product.Description + '", UnitPrice: "' + product.UnitPrice
                        + '", BalanceStockQty: "' + product.BalanceStockQty + '", IsNotActive: "' + product.IsNotActive + '", ProductDescription: "' + product.ProductDescription + '" }',
                    success: function (response) {
                        if (response.success) {
                            $('#div-load-partial-view').load("/PartialView/_PartialGetAllProduct?currentpage=1&pagesize=10");
                            $("#product-updated").click();
                        }
                        else {
                            console.log(response.responseText);
                        }
                        common.showHideSpinner("btnSave", "hide");
                    },
                    failure: function (response) {
                        console.log(response.responseText);
                        common.showHideSpinner("btnSave", "hide");
                    },
                    error: function (response) {
                        console.log(response.responseText);
                        common.showHideSpinner("btnSave", "hide");
                    }
                });
            }
        }
    },

    fnProductNextButtonValidation: function () {
        var result = common.mandatoryCheck(product.productmandatoryControls, "|");
        if (result == "") {
            $("#btnProductNext").click();
        }
    },
    fnProductUpdateNextButtonValidation: function () {
        var result = common.mandatoryCheck(product.productupdatemandatoryControls, "|");
        if (result == "") {
            $("#btnProductNext").click();
        }
    },

    fnProductGridPagination: function (currentpage, event, obj) {
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        if (event == "search") {
            $('#div-load-partial-view').load("/PartialView/_PartialGetAllProduct?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);

        }
        else if (event == "page") {

            $(obj).addClass("active");
            $('#div-load-partial-view').load("/PartialView/_PartialGetAllProduct?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);

        }
        else if (event == "pagesize") {
            currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
            $('#div-load-partial-view').load("/PartialView/_PartialGetAllProduct?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);
        }
        else {
            if (event == "prev") {
                $(obj).closest(".pagination").find("li.active").prev().find("a").click();
            }
            else if (event == "next") {
                $(obj).closest(".pagination").find("li.active").next().find("a").click();
            }

        }
    },
    fnBacktoProductList: function () {
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        $('#div-load-partial-view').load("/PartialView/_PartialGetAllProduct?currentpage=1&pagesize=" + pagesize + "&searchvalue=" + searchvalue);
    }
}



var employeemenu = {
    

    fnEmployeeMenuGridPagination: function (currentpage, event, obj) {

        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        if (event == "page") {

            $(obj).addClass("active");
            //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#div-load-partial-view').load("/EmployeeMenus/_PartialGetAllEmployeeMenus?currentpage=" + currentpage + "&pagesize=" + pagesize);

        }
        else if (event == "pagesize") {
            currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
            //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#div-load-partial-view').load("/EmployeeMenus/_PartialGetAllEmployeeMenus?currentpage=" + currentpage + "&pagesize=" + pagesize);
        }
        else {
            if (event == "prev") {
                $(obj).closest(".pagination").find("li.active").prev().find("a").click();
            }
            else if (event == "next") {
                $(obj).closest(".pagination").find("li.active").next().find("a").click();
            }

        }
    }
}

var role = {


    fnRoleGridPagination: function (currentpage, event, obj) {

        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        if (event == "page") {

            $(obj).addClass("active");
            //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#div-load-partial-view').load("/Roles/_PartialGetAllRoles?currentpage=" + currentpage + "&pagesize=" + pagesize);

        }
        else if (event == "pagesize") {
            currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
            //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#div-load-partial-view').load("/Roles/_PartialGetAllRoles?currentpage=" + currentpage + "&pagesize=" + pagesize);
        }
        else {
            if (event == "prev") {
                $(obj).closest(".pagination").find("li.active").prev().find("a").click();
            }
            else if (event == "next") {
                $(obj).closest(".pagination").find("li.active").next().find("a").click();
            }

        }
    }
}

var user = {


    fnUserGridPagination: function (currentpage, event, obj) {

        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        if (event == "page") {

            $(obj).addClass("active");
            //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#div-load-partial-view').load("/Account/_PartialGetUsers?currentpage=" + currentpage + "&pagesize=" + pagesize);

        }
        else if (event == "pagesize") {
            currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
            //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#div-load-partial-view').load("/Account/_PartialGetUsers?currentpage=" + currentpage + "&pagesize=" + pagesize);
        }
        else {
            if (event == "prev") {
                $(obj).closest(".pagination").find("li.active").prev().find("a").click();
            }
            else if (event == "next") {
                $(obj).closest(".pagination").find("li.active").next().find("a").click();
            }

        }
    }
}


var company = {
    companymandatoryControls: "CompanyName|Address|Email|ContactNumber|Website|imgCompanyLogo",
    companyupdatemandatoryControls: "CompanyName|Address|Email|ContactNumber|Website",
    companyadditionalmandatoryControls: "QuotationHeader",
    CompanyId: 0,
    CompanyCode: '',
    CompanyName: '',
    Address: '',
    Email: '',
    AltEmail: '',
    ContactNumber: '',
    AltContactNumber: '',
    Website: '',
    TINNumber: '',
    GSTINNumber: '',
    QuotationHeader: '',
    CompanyLogo: '',
    Watermark: '',
    GSTDetectionPercentage: '',
    Locality: '',
    City: '',
    Pincode: '',

    mandatoryCheck: function () {
        var result = common.mandatoryCheck(company.companymandatoryControls, "|");
        if (result == "") {

        }
    },

    fnGetControlValues: function () {
        company.CompanyId = $("#CompanyId").val();
        company.CompanyCode = $("#CompanyCode").val();
        company.CompanyName = $("#CompanyName").val();
        company.Address = $("#Address").val();
        company.Email = $("#Email").val();
        company.AltEmail = $("#AltEmail").val();
        company.ContactNumber = $("#ContactNumber").val();
        company.AltContactNumber = $("#AltContactNumber").val();
        company.Website = $("#Website").val();
        company.TINNumber = $("#TINNumber").val();
        company.GSTINNumber = $("#GSTINNumber").val();
        company.QuotationHeader = $("#QuotationHeader").val();
        company.CompanyLogo = $("#CompanyLogo").val();
        company.Watermark = $("#Watermark").val();
        company.GSTDetectionPercentage = $("#GSTDetectionPercentage").val();
        company.Locality = $("#Locality").val();
        company.City = $("#City").val();
        company.Pincode = $("#Pincode").val();
    },

    fnSaveCompany: function () {

        var result = common.mandatoryCheck(company.companymandatoryControls, "|");
        if (result == "") {
            var additional = common.mandatoryCheck(company.companyadditionalmandatoryControls, "|");

            if (additional == "") {
                common.showHideSpinner("btnCompanySave", "show");
                company.fnGetControlValues();
                debugger;
                $.ajax({
                    url: '/Company/addCompany',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: '{CompanyName: "' + company.CompanyName + '", Address: "' + company.Address + '", Email: "' + company.Email
                        + '", AltEmail: "' + company.AltEmail + '", ContactNumber: "' + company.ContactNumber + '", AltContactNumber: "' + company.AltContactNumber
                        + '", Website: "' + company.Website + '", TINNumber: "' + company.TINNumber + '", GSTINNumber: "' + company.GSTINNumber
                        + '", QuotationHeader: "' + company.QuotationHeader + '", GSTDetectionPercentage: "' + company.GSTDetectionPercentage
                        + '", Locality: "' + company.Locality + '", City: "' + company.City + '", Pincode: "' + company.Pincode + '" }',
                    success: function (response) {
                        if (response.success) {
                            $('#div-load-partial-view').load("/PartialView/_PartialGetAllCompanies?currentpage=1&pagesize=10");
                            $("#company-success").click();
                        }
                        else {
                            console.log(response.responseText);
                        }
                        common.showHideSpinner("btnCompanySave", "hide");
                    },
                    failure: function (response) {
                        console.log(response.responseText);
                        common.showHideSpinner("btnCompanySave", "hide");
                    },
                    error: function (response) {
                        console.log(response.responseText);
                        common.showHideSpinner("btnCompanySave", "hide");
                    }
                });
            }
        }
    },

    fnUpdateCompany: function () {

        var result = common.mandatoryCheck(company.companyupdatemandatoryControls, "|");
        if (result == "") {

            var additional = common.mandatoryCheck(company.companyadditionalmandatoryControls, "|");
            if (additional == "") {
                common.showHideSpinner("btnCompanySave", "show");

                company.fnGetControlValues();
                debugger;
                $.ajax({
                    url: '/company/updateCompany',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: '{CompanyId: "' + company.CompanyId + '", CompanyName: "' + company.CompanyName + '", Address: "' + company.Address + '", Email: "' + company.Email
                        + '", AltEmail: "' + company.AltEmail + '", ContactNumber: "' + company.ContactNumber + '", AltContactNumber: "' + company.AltContactNumber
                        + '", Website: "' + company.Website + '", TINNumber: "' + company.TINNumber + '", GSTINNumber: "' + company.GSTINNumber
                        + '", QuotationHeader: "' + company.QuotationHeader + '", GSTDetectionPercentage: "' + company.GSTDetectionPercentage
                        + '", Locality: "' + company.Locality + '", City: "' + company.City + '", Pincode: "' + company.Pincode + '" }',
                    success: function (response) {
                        if (response.success) {
                            $('#div-load-partial-view').load("/PartialView/_PartialGetAllCompanies?currentpage=1&pagesize=10");
                            $("#company-updated").click();
                        }
                        else {
                            console.log(response.responseText);
                        }
                        common.showHideSpinner("btnCompanySave", "hide");
                    },
                    failure: function (response) {
                        console.log(response.responseText);
                        common.showHideSpinner("btnCompanySave", "hide");
                    },
                    error: function (response) {
                        console.log(response.responseText);
                        common.showHideSpinner("btnCompanySave", "hide");

                    }
                });
            }
        }
    },

    fnCompanyNextButtonValidation: function () {
        var result = common.mandatoryCheck(company.companymandatoryControls, "|");
        if (result == "") {
            $("#btnCompanyNext").click();
        }
    },
    fnCompanyUpdateNextButtonValidation: function () {
        var result = common.mandatoryCheck(company.companyupdatemandatoryControls, "|");
        if (result == "") {
            $("#btnCompanyNext").click();
        }
    },

    fnCompanyGridPagination: function (currentpage, event, obj) {

        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        if (event == "search") {
            $('#divCompany').load("/PartialView/_PartialGetAllCompanies?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);

        }
        else if (event == "page") {

            $(obj).addClass("active");
            //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#divCompany').load("/PartialView/_PartialGetAllCompanies?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);

        }
        else if (event == "pagesize") {
            currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
            //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#divCompany').load("/PartialView/_PartialGetAllCompanies?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);
        }
        else {
            if (event == "prev") {
                $(obj).closest(".pagination").find("li.active").prev().find("a").click();
            }
            else if (event == "next") {
                $(obj).closest(".pagination").find("li.active").next().find("a").click();
            }

        }
    },
    fnBacktoCompanyList: function () {
        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        $('#divCompany').load("/PartialView/_PartialGetAllCompanies?currentpage=1&pagesize=" + pagesize + "&searchvalue=" + searchvalue);
    }
}

var quotation = {
    quotationmandatoryControls: "QuotationDate|QuotationDueDate|BilledByCompanyId|BilledToCustomerId",
    quotationupdatemandatoryControls: "QuotationDate|QuotationDueDate|BilledByCompanyId|BilledToCustomerId",
    QuotationId: 0,
    QuotationNo: '',
    QuotationDate: '',
    QuotationDueDate: '',
    BilledByCompanyId: 0,
    BilledToCustomerId: 0,
    RefPersonId: 0,

    mandatoryCheck: function () {
        var result = common.mandatoryCheck(quotation.quotationmandatoryControls, "|");
        if (result == "") {

        }
    },

    fnGetControlValues: function () {
        quotation.QuotationId = $("#QuotationId").val();
        quotation.QuotationNo = $("#QuotationNo").val();
        quotation.QuotationDate = $("#QuotationDate").val();
        quotation.QuotationDueDate = $("#QuotationDueDate").val();
        quotation.BilledByCompanyId = $("#BilledByCompanyId").val();
        quotation.BilledToCustomerId = $("#BilledToCustomerId").val();
        quotation.RefPersonId = $("#RefPersonId").val();
    },

    fnSaveQuotation: function () {

        var result = common.mandatoryCheck(quotation.quotationmandatoryControls, "|");
        if (result == "") {
            var isQuanitity = true;
            var ProductsArray = [];
            $('#tbodyQuotationProduct tr td .chkquote-product').each(function () {
                if ($(this)[0].checked) {
                    var itemid = $(this)[0].value;
                    var quantity = $(this).parent().parent().find(".productquantity").val();
                    if (quantity >= 0 && quantity != "") {
                        if (ProductsArray.indexOf(itemid + "|" + quantity, 0) < 0) {
                            ProductsArray.push(itemid + "|" + quantity);
                        }
                    }
                    else {
                        isQuanitity = false;
                    }
                }
            });
            if (isQuanitity) {
                var QuotationProducts = ProductsArray.toString();
                QuotationProducts = QuotationProducts == null ? "" : QuotationProducts;
                if (QuotationProducts != "") {
                    common.showHideSpinner("btnSave", "show");
                    quotation.fnGetControlValues();
                    $.ajax({
                        url: '/Quotations/addQuotation',
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        data: '{QuotationDate: "' + quotation.QuotationDate + '", QuotationDueDate: "' + quotation.QuotationDueDate + '", BilledByCompanyId: "' + quotation.BilledByCompanyId
                            + '", BilledToCustomerId: "' + quotation.BilledToCustomerId + '", RefPersonId: "' + quotation.RefPersonId + '", QuotationProducts: "' + QuotationProducts + '" }',
                        success: function (response) {
                            if (response.success) {
                                $('#div-load-partial-view').load("/PartialView/_PartialGetAllQuotations?currentpage=1&pagesize=10");
                                $("#quotation-success").click();
                            }
                            else {
                                console.log(response.responseText);
                            }
                            common.showHideSpinner("btnSave", "hide");
                        },
                        failure: function (response) {
                            console.log(response.responseText);
                            common.showHideSpinner("btnSave", "hide");
                        },
                        error: function (response) {
                            console.log(response.responseText);
                            common.showHideSpinner("btnSave", "hide");
                        }
                    });
                }
                else {
                    $("#quotation-products").click();
                }
            }
            else {
                alert("Please select product quantity");
            }
        }
    },

    fnUpdateQuotation: function () {

        var result = common.mandatoryCheck(quotation.quotationmandatoryControls, "|");
        if (result == "") {
            var isQuanitity = true;
            var ProductsArray = [];
            $('#tbodyQuotationProduct tr td .chkquote-product').each(function () {
                if ($(this)[0].checked) {
                    var itemid = $(this)[0].value;
                    var quantity = $(this).parent().parent().find(".productquantity").val();
                    if (quantity >= 0 && quantity != "") {
                        if (ProductsArray.indexOf(itemid + "|" + quantity, 0) < 0) {
                            ProductsArray.push(itemid + "|" + quantity);
                        }
                    }
                    else {
                        isQuanitity = false;
                        ProductsArray = [];
                    }
                }
            });
            if (isQuanitity) {
                var QuotationProducts = ProductsArray.toString();
                QuotationProducts = QuotationProducts == null ? "" : QuotationProducts;
                if (QuotationProducts != "") {
                    common.showHideSpinner("btnSave", "show");
                    quotation.fnGetControlValues();
                    $.ajax({
                        url: '/Quotations/updateQuotation',
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        data: '{QuotationId: "' + quotation.QuotationId + '", QuotationDate: "' + quotation.QuotationDate + '", QuotationDueDate: "' + quotation.QuotationDueDate + '", BilledByCompanyId: "' + quotation.BilledByCompanyId
                            + '", BilledToCustomerId: "' + quotation.BilledToCustomerId + '", RefPersonId: "' + quotation.RefPersonId + '", QuotationProducts: "' + QuotationProducts + '" }',
                        success: function (response) {
                            if (response.success) {
                                $('#div-load-partial-view').load("/PartialView/_PartialGetAllQuotations?currentpage=1&pagesize=10");
                                $("#quotation-updated").click();
                            }
                            else {
                                console.log(response.responseText);
                            }
                            common.showHideSpinner("btnSave", "hide");
                        },
                        failure: function (response) {
                            console.log(response.responseText);
                            common.showHideSpinner("btnSave", "hide");
                        },
                        error: function (response) {
                            console.log(response.responseText);
                            common.showHideSpinner("btnSave", "hide");
                        }
                    });
                }
                else {
                    $("#quotation-products").click();
                }
            }
            else {
                alert("Please select product quantity");
            }
        }
    },

    fnQuotationNextButtonValidation: function () {
        var result = common.mandatoryCheck(quotation.quotationmandatoryControls, "|");
        var billedTo = $("#BilledToCustomerId").val();
        if (billedTo == "") {
            $("#divPartialCustomerLoad").find(".select2-selection--single").css('border', '1px solid red');
        }
        else {
            $("#divPartialCustomerLoad").find(".select2-selection--single").css('border', '1px solid #aaa');
        }
        if (result == "") {
            $("#btnProductNext").click();
        }
    },
    fnQuotationUpdateNextButtonValidation: function () {
        var result = common.mandatoryCheck(quotation.quotationupdatemandatoryControls, "|");
        if (result == "") {
            $("#btnProductNext").click();
        }
    },

    fnQuotationProductNextButtonValidation: function () {

        $("#btnProductNext").click();

    },
    fnQuotationProductUpdateNextButtonValidation: function () {
        $("#btnProductNext").click();
    },

    fnQuotationGridPagination: function (currentpage, event, obj) {

        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        if (event == "search") {
            $('#div-load-partial-view').load("/PartialView/_PartialGetAllQuotations?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);

        }
        else if (event == "page") {

            $(obj).addClass("active");
            //window.location.href = "/quotation?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#div-load-partial-view').load("/PartialView/_PartialGetAllQuotations?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);

        }
        else if (event == "pagesize") {
            currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
            //window.location.href = "/quotation?currentpage=" + currentpage + "&pagesize=" + pagesize;
            $('#div-load-partial-view').load("/PartialView/_PartialGetAllQuotations?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue);
        }
        else {
            if (event == "prev") {
                $(obj).closest(".pagination").find("li.active").prev().find("a").click();
            }
            else if (event == "next") {
                $(obj).closest(".pagination").find("li.active").next().find("a").click();
            }

        }
    },
    fnBacktoQuotationList: function () {
        $('#div-load-partial-view').load("/PartialView/_PartialGetAllQuotations?currentpage=1&pagesize=10");
    },

    fnSelectAllProducts: function () {

        var chkvalue = $("#chkSelectAllProduct")[0].checked;
        var ProductsArray = [];

        if (chkvalue) {
            $("#tbodyQuotationProduct tr td .chkquote-product").each(function () {
                if (!$(this)[0].checked) {
                    $(this)[0].checked = true;
                }
                quotation.fnQuotationProductSelectOnchange($(this), "all");

            });
        }
        else {
            $("#tbodyQuotationProduct tr td .chkquote-product").each(function () {
                if ($(this)[0].checked) {
                    $(this)[0].checked = false;
                    var productid = $(this).val();
                    if (ProductsArray.indexOf(productid, 0) < 0) {
                        ProductsArray.push(productid);
                    }
                }
                quotation.fnQuotationProductSelectOnchange($(this), "all");

            });
            var productidlist = ProductsArray.toString();
            if (productidlist != "") {

                $.ajax({
                    url: '/quotations/removeQuotationProduct',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: '{productidlist: "' + productidlist + '" }',
                    success: function (response) {
                        if (response.success) {
                            console.log(response.msg);
                        }
                        else {
                            console.log(response.responseText);
                        }
                    },
                    failure: function (response) {
                        console.log(response.responseText);
                    },
                    error: function (response) {
                        console.log(response.responseText);
                    }
                });
            }
        }

    },

    fnQuotationProductGridPagination: function (currentpage, event, obj) {

        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        var isQuanitity = true;
        var ProductsArray = [];
        $('#tbodyQuotationProduct tr td .chkquote-product').each(function () {
            if ($(this)[0].checked) {
                var itemid = $(this)[0].value;
                var quantity = $(this).parent().parent().find(".productquantity").val();
                if (quantity >= 0 && quantity != "") {
                    if (ProductsArray.indexOf(itemid + "|" + quantity, 0) < 0) {
                        ProductsArray.push(itemid + "|" + quantity);
                    }
                }
                else {
                    isQuanitity = false;
                }
            }
        });
        if (isQuanitity) {
            var QuotationProducts = ProductsArray.toString();
            QuotationProducts = QuotationProducts == null ? "" : QuotationProducts;

            if (event == "search") {
                $('#divQuotationProducts').load("/PartialView/_PartialGetQuotationProducts?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue + "&Products=" + QuotationProducts);

            }
            else if (event == "page") {

                $(obj).addClass("active");
                $('#divQuotationProducts').load("/PartialView/_PartialGetQuotationProducts?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue + "&Products=" + QuotationProducts);

            }
            else if (event == "pagesize") {
                currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
                $('#divQuotationProducts').load("/PartialView/_PartialGetQuotationProducts?currentpage=" + currentpage + "&pagesize=" + pagesize + "&searchvalue=" + searchvalue + "&Products=" + QuotationProducts);
            }
            else {
                if (event == "prev") {
                    $(obj).closest(".pagination").find("li.active").prev().find("a").click();
                }
                else if (event == "next") {
                    $(obj).closest(".pagination").find("li.active").next().find("a").click();
                }

            }
        }
        else {
            alert("Please select product quantity");
        }
    },

    fnGenerateQuotation: function (id, obj, Path) {
        if (obj != null) {
            $(obj).parent().parent().parent().find(".spinnerload")[0].innerHTML = "<div class='spinner-grow' role='status'><span class='visually-hidden'>Loading...</span></div>";
        }
        
        var valFileDownloadPath = Path.replace(".pdf", ".docx");
        $("#aquotation").attr({
            target: "_blank",
            href: valFileDownloadPath
        });
        $("#aquotation")[0].click();
        if (obj != null) {
            $(obj).parent().parent().parent().find(".spinnerload")[0].innerHTML = "";
        }
       
    },

    fnGenerateQuotationPrint: function (id, obj, Path) {

        debugger
        if (obj != null) {
            $(obj).parent().find(".spinnerload")[0].innerHTML = "<div class='spinner-grow' role='status'><span class='visually-hidden'>Loading...</span></div>";
        }
        var valFileDownloadPath = Path;
        printJS(valFileDownloadPath);
        if (obj != null) {
            $(obj).parent().find(".spinnerload")[0].innerHTML = "";
        }
    },

    fnQuotationProductSelectOnchange: function (obj, event) {

        if ($(obj)[0].checked) {
            $(obj).parent().parent().find(".productquantity").attr("disabled", false);
            $(obj).parent().parent().find(".productquantity").val("1");
        }
        else {
            $(obj).parent().parent().find(".productquantity").attr("disabled", true);
            $(obj).parent().parent().find(".productquantity").val("");

            var productid = $(obj).parent().parent().find(".chkquote-product").val();

            if (event != "all") {
                if (productid != 0 && productid != null) {
                    var ProductsArray = [];
                    if (ProductsArray.indexOf(productid, 0) < 0) {
                        ProductsArray.push(productid);
                    }
                    var productidlist = ProductsArray.toString();
                    $.ajax({
                        url: '/quotations/removeQuotationProduct',
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        data: '{productidlist: "' + productidlist + '" }',
                        success: function (response) {
                            if (response.success) {
                                console.log(response.msg);
                            }
                            else {
                                console.log(response.responseText);
                            }
                        },
                        failure: function (response) {
                            console.log(response.responseText);
                        },
                        error: function (response) {
                            console.log(response.responseText);
                        }
                    });
                }
            }
        }
    },

    fnBacktoQuotationList: function () {
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        $('#div-load-partial-view').load("/PartialView/_PartialGetAllQuotations?currentpage=1&pagesize=10");
    }
}

var customer = {
    CustomerName: '',
    CustomerEmail: '',
    CustomerAddress: '',
    Country: '',
    ContactNumber: '',
    Locality: '',
    City: '',
    Pincode: '',
    customermandatoryControls: "customer-name|customer-email|customer-address|customer-country|customer-contact|customer-City|customer-Pincode",

    fnGetControlValues: function () {
        customer.CustomerName = $("#customer-name").val();
        customer.CustomerEmail = $("#customer-email").val();
        customer.CustomerAddress = $("#customer-address").val();
        customer.Country = $("#customer-country").val();
        customer.ContactNumber = $("#customer-contact").val();
        customer.Locality = $("#customer-Locality").val();
        customer.City = $("#customer-City").val();
        customer.Pincode = $("#customer-Pincode").val();
    },

    fnSaveCustomer: function () {
        var result = common.mandatoryCheck(customer.customermandatoryControls, "|");

        var country = $("#customer-country").val();
        if (country == "") {
            $("#divCountry").find(".select2-selection--single").css('border', '1px solid red');
        }
        else {
            $("#divCountry").find(".select2-selection--single").css('border', '1px solid #aaa');
        }
        if (result == "") {

            customer.fnGetControlValues();
            $.ajax({
                url: '/PartialView/addCustomer',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: '{CustomerName: "' + customer.CustomerName + '", CustomerEmail: "' + customer.CustomerEmail + '", CustomerAddress: "' + customer.CustomerAddress
                    + '", Country: "' + customer.Country + '", ContactNumber: "' + customer.ContactNumber + '", Locality: "' + customer.Locality
                    + '", City: "' + customer.City + '", Pincode: "' + customer.Pincode + '" }',
                success: function (response) {
                    if (response.success) {
                        $("#btnAddCustomerClose").click();
                        $('#divPartialCustomerLoad').load("/PartialView/_PartialGetAllCustomers");
                        $('#divPartialRefPersonLoad').load("/PartialView/_PartialGetAllRefPersons");
                        $("#customer-success").click();
                    }
                    else {
                        console.log(response.responseText);
                    }
                },
                failure: function (response) {
                    console.log(response.responseText);
                },
                error: function (response) {
                    console.log(response.responseText);
                }
            });
        }
        else {
            //$('#add-new-customer-sidebar').modal('show');
        }
    }
}


function fnEditRoleRBSGrid() {
    $('#myTable1 tbody tr').each(function () {

        if ($(this).hasClass("direct-menu")) {
            $(this).find(".chkread").attr('disabled', false);
            $(this).find(".chkadd").attr('disabled', false);
            $(this).find(".chkedit").attr('disabled', false);
            $(this).find(".chkdelete").attr('disabled', false);
        }
        else if ($(this).hasClass("sub-menu")) {
            $(this).find(".chkread").attr('disabled', false);
            $(this).find(".chkadd").attr('disabled', false);
            $(this).find(".chkedit").attr('disabled', false);
            $(this).find(".chkdelete").attr('disabled', false);
        }

    });

    //$("#spnEditRoleRBS").addClass("hide-div");
    $("#spnSaveRoleRBS").removeClass("hide-div");
}

function fnSaveRoleRBSGrid() {

    var RoleId = $("#ddlrole").val();
    RoleId = RoleId == undefined || RoleId == null ? "" : RoleId;
    //debugger
    if (RoleId != "") {
        var RBSRoles = "";
        var rows = $("#myTable1").dataTable().fnGetNodes();
        //debugger
        $(rows).each(function () {

            var isRead = $(this).find(".chkread")[0].checked;
            var isAdd = $(this).find(".chkadd")[0].checked;
            var isEdit = $(this).find(".chkedit")[0].checked;
            var isDelete = $(this).find(".chkdelete")[0].checked;
            var MenuId = $(this).find(".hdnRBSMenuId").val();

            // Sample JS object
            var object = MenuId + "|" + isRead + "|" + isAdd + "|" + isEdit + "|" + isDelete + "|" + RoleId + "#";


            //if (isAdd == true || isRead == true || isEdit == true || isDelete == true) {
            RBSRoles = RBSRoles + object;
            //}
        });

        //console.log(RBSRoles);

        if (RBSRoles != "") {
            $.ajax({
                url: '/RBSSettings/UpdateAdminRBSRole',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: '{RBSRoles: "' + RBSRoles + '" }',
                success: function (response) {
                    if (response.success) {
                        //AjaxLoadShow();
                        $('#div-load-partial-view').empty();
                        $('#div-load-partial-view').load("/RBSSettings/GetRBSRoleGridDetails", {
                            RoleId: RoleId
                        }, function () {
                            //AjaxLoadHide();
                        });
                        Alertpopup(response.msg, "insert");
                    }

                },
                failure: function (response) {
                    alert(response.msg);
                },
                error: function (response) {
                    alert(response.msg);
                }
            });
        }
    }
    else {
        alert("Please select role");
    }

}

function fnSaveUserRBSGrid() {

    var UserId = $("input[name='usersradiobutton']:checked").val();
    UserId = UserId == undefined || UserId == null ? "" : UserId;
    //debugger
    if (UserId != "") {
        var RBSUsers = "";
        var rows = $("#myTable1").dataTable().fnGetNodes();
        //debugger
        $(rows).each(function () {

            var isRead = $(this).find(".chkread")[0].checked;
            var isAdd = $(this).find(".chkadd")[0].checked;
            var isEdit = $(this).find(".chkedit")[0].checked;
            var isDelete = $(this).find(".chkdelete")[0].checked;
            var MenuId = $(this).find(".hdnRBSMenuId").val();

            // Sample JS object
            var object = MenuId + "|" + isRead + "|" + isAdd + "|" + isEdit + "|" + isDelete + "|" + UserId + "#";


            //if (isAdd == true || isRead == true || isEdit == true || isDelete == true) {
            RBSUsers = RBSUsers + object;
            //}
        });

        //console.log(RBSUsers);

        if (RBSUsers != "") {
            $.ajax({
                url: '/RBSSettings/UpdateAdminRBSUser',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: '{RBSUsers: "' + RBSUsers + '" }',
                success: function (response) {
                    if (response.success) {
                        //AjaxLoadShow();
                        $('#divRBSUserGrid').empty();
                        $('#divRBSUserGrid').load("/RBSSettings/GetRBSUserGridDetails", {
                            UserId: UserId
                        }, function () {
                            //AjaxLoadHide();
                        });
                        Alertpopup(response.msg, "insert");
                    }

                },
                failure: function (response) {
                    alert(response.msg);
                },
                error: function (response) {
                    alert(response.msg);
                }
            });
        }
    }
    else {
        alert("Please select user");
    }

}
function fnSelectAllRBS() {
    var rows = $("#myTable1 tbody tr");
    //debugger
    $(rows).each(function () {
        if (!$(this).hasClass("disabled-row")) {
            if ($("#chkselectall")[0].checked) {
                $(this).find(".chkread")[0].checked = true;
                $(this).find(".chkadd")[0].checked = true;
                $(this).find(".chkedit")[0].checked = true;
                $(this).find(".chkdelete")[0].checked = true;
            }
            else {
                $(this).find(".chkread")[0].checked = false;
                $(this).find(".chkadd")[0].checked = false;
                $(this).find(".chkedit")[0].checked = false;
                $(this).find(".chkdelete")[0].checked = false;
            }
        }
        else {
            $(this).find(".chkread")[0].checked = false;
            $(this).find(".chkadd")[0].checked = false;
            $(this).find(".chkedit")[0].checked = false;
            $(this).find(".chkdelete")[0].checked = false;
        }
    });
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


var RBS = {


    fnRoleGridPagination: function (currentpage, event, obj) {
        debugger
        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        var RoleId = $("#ddlrole").val();
        RoleId = RoleId == undefined || RoleId == null ? "" : RoleId;
        if (RoleId != "") {
            var searchvalue = $("#txtSearchValue").val();
            searchvalue = searchvalue == null ? "" : searchvalue;
            if (event == "search") {
                $('#divRBSSettings').load("/RBSSettings/GetRBSRoleGridDetails", { RoleId: RoleId, currentpage: currentpage, pagesize: pagesize, searchvalue: searchvalue });

            }
            else if (event == "page") {

                $(obj).addClass("active");
                //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
                $('#divRBSSettings').load("/RBSSettings/GetRBSRoleGridDetails", { RoleId: RoleId, currentpage: currentpage, pagesize: pagesize, searchvalue: searchvalue });

            }
            else if (event == "pagesize") {
                currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
                //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
                $('#divRBSSettings').load("/RBSSettings/GetRBSRoleGridDetails", { RoleId: RoleId, currentpage: currentpage, pagesize: pagesize, searchvalue: searchvalue });
                
            }
            else {
                if (event == "prev") {
                    $(obj).closest(".pagination").find("li.active").prev().find("a").click();
                }
                else if (event == "next") {
                    $(obj).closest(".pagination").find("li.active").next().find("a").click();
                }

            }
        }
        else {
            alert("Please select role first");
        }
    },

    fnRoleOnChange: function () {
        // AjaxLoadShow();
        $('#divRBSSettings').empty();
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        var RoleId = $("#ddlrole").val();
        $('#divRBSSettings').load("/RBSSettings/GetRBSRoleGridDetails", {
            RoleId: RoleId, searchvalue: searchvalue
        }, function () {
            //AjaxLoadHide();
        });
    },
    fnSaveRoleRBSGrid: function () {
        var RoleId = $("#ddlrole").val();
        RoleId = RoleId == undefined || RoleId == null ? "" : RoleId;
        //debugger
        if (RoleId != "") {
            var RBSRoles = "";
            var rows = $("#myTable1 tbody tr");
            //debugger
            $(rows).each(function () {

                var isRead = $(this).find(".chkread")[0].checked;
                var isAdd = $(this).find(".chkadd")[0].checked;
                var isEdit = $(this).find(".chkedit")[0].checked;
                var isDelete = $(this).find(".chkdelete")[0].checked;
                var MenuId = $(this).find(".hdnRBSMenuId").val();

                // Sample JS object
                var object = MenuId + "|" + isRead + "|" + isAdd + "|" + isEdit + "|" + isDelete + "|" + RoleId + "#";


                //if (isAdd == true || isRead == true || isEdit == true || isDelete == true) {
                RBSRoles = RBSRoles + object;
                //}
            });

            //console.log(RBSRoles);

            if (RBSRoles != "") {
                $.ajax({
                    url: '/RBSSettings/UpdateAdminRBSRole',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: '{RBSRoles: "' + RBSRoles + '" }',
                    success: function (response) {
                        if (response.success) {
                            //AjaxLoadShow();
                            $('#divRBSSettings').empty();
                            $('#divRBSSettings').load("/RBSSettings/GetRBSRoleGridDetails", {
                                RoleId: RoleId
                            }, function () {
                                //AjaxLoadHide();
                            });
                            $("#updated").click();
                        }
                        else {
                            console.log(response.msg);
                        }

                    },
                    failure: function (response) {
                        console.log(response.msg);
                    },
                    error: function (response) {
                        console.log(response.msg);
                    }
                });
            }
        }
        else {
            alert("Please select role");
        }

    },

    fnSaveUserRBSGrid: function () {
        var UserId = $("#ddlrole").val();
        UserId = UserId == undefined || UserId == null ? "" : UserId;
        //debugger
        if (UserId != "") {
            var RBSUsers = "";
            var rows = $("#myTable1 tbody tr");
            //debugger
            $(rows).each(function () {

                var isRead = $(this).find(".chkread")[0].checked;
                var isAdd = $(this).find(".chkadd")[0].checked;
                var isEdit = $(this).find(".chkedit")[0].checked;
                var isDelete = $(this).find(".chkdelete")[0].checked;
                var MenuId = $(this).find(".hdnRBSMenuId").val();

                // Sample JS object
                var object = MenuId + "|" + isRead + "|" + isAdd + "|" + isEdit + "|" + isDelete + "|" + UserId + "#";


                //if (isAdd == true || isRead == true || isEdit == true || isDelete == true) {
                RBSUsers = RBSUsers + object;
                //}
            });

            //console.log(RBSUsers);

            if (RBSUsers != "") {
                $.ajax({
                    url: '/RBSSettings/UpdateAdminRBSUser',
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    data: '{RBSUsers: "' + RBSUsers + '" }',
                    success: function (response) {
                        if (response.success) {
                            //AjaxLoadShow();
                            $('#divRBSSettings').empty();
                            $('#divRBSSettings').load("/RBSSettings/GetRBSUserGridDetails", {
                                UserId: UserId
                            }, function () {
                                //AjaxLoadHide();
                            });
                            $("#updated").click();
                        }
                        else {
                            console.log(response.msg);
                        }

                    },
                    failure: function (response) {
                        console.log(response.msg);
                    },
                    error: function (response) {
                        console.log(response.msg);
                    }
                });
            }
        }
        else {
            alert("Please select user");
        }

    },
    fnUserOnChange: function () {
        // AjaxLoadShow();
        $('#divRBSSettings').empty();
        var searchvalue = $("#txtSearchValue").val();
        searchvalue = searchvalue == null ? "" : searchvalue;
        var UserId = $("#ddlrole").val();
        $('#divRBSSettings').load("/RBSSettings/GetRBSUserGridDetails", {
            UserId: UserId, searchvalue: searchvalue
        }, function () {
            //AjaxLoadHide();
        });
    },

    fnUserGridPagination: function (currentpage, event, obj) {
        
        var pagesize = $("#ddlPageSize").val();
        pagesize = pagesize == null || pagesize == 0 ? 10 : pagesize;
        var UserId = $("#ddlrole").val();
        UserId = UserId == undefined || UserId == null ? "" : UserId;
        if (UserId != "") {
            var searchvalue = $("#txtSearchValue").val();
            searchvalue = searchvalue == null ? "" : searchvalue;
            if (event == "search") {
                $('#divRBSSettings').load("/RBSSettings/GetRBSUserGridDetails", { UserId: UserId, currentpage: currentpage, pagesize: pagesize, searchvalue: searchvalue });

            }
            else if (event == "page") {

                $(obj).addClass("active");
                //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
                $('#divRBSSettings').load("/RBSSettings/GetRBSUserGridDetails", { UserId: UserId, currentpage: currentpage, pagesize: pagesize, searchvalue: searchvalue });

            }
            else if (event == "pagesize") {
                currentpage = $("ul.pagination li.active").find("a").attr("data-dt-idx");
                //window.location.href = "/company?currentpage=" + currentpage + "&pagesize=" + pagesize;
                $('#divRBSSettings').load("/RBSSettings/GetRBSUserGridDetails", { UserId: UserId, currentpage: currentpage, pagesize: pagesize, searchvalue: searchvalue });

            }
            else {
                if (event == "prev") {
                    $(obj).closest(".pagination").find("li.active").prev().find("a").click();
                }
                else if (event == "next") {
                    $(obj).closest(".pagination").find("li.active").next().find("a").click();
                }

            }
        }
        else {
            alert("Please select user first");
        }
    },

}