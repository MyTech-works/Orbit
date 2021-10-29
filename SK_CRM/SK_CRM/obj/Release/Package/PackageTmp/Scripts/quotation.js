/*
 * 1. Quotation Main Heading
 * 2. Basic Custom Fields
 * 3. Quotation From 
*/
//1. Quotation Main Heading

var QH = {

    GenerateDynamicLabel_Heading: function (attributeName, obj) {
        var LabelName = $("span[name='" + attributeName + "']")[0].textContent.trim();
        var editlabel = '<div class="css-rxk9pl invoiceTitle-editable"><div class="css-16vu25q"><div class="sc-ifAKCX clTHSn css-jbjo08"><div class="css-1nazh5j">'
            + '<div class="css-16vu25q"><input type="text" name="' + attributeName + '" class="sc-EHOje lopTvF" value="' + LabelName + '" onfocusout="QH.onchangeRevertLabel_Heading(\'' + attributeName + '\');">'
            + '</div></div></div></div></div>';

        $("span[name='" + attributeName + "']")[0].outerHTML = editlabel;
        var tempvalue = $("input[name='" + attributeName + "']").val();
        $("input[name='" + attributeName + "']").val("").focus().val(tempvalue);
    },

    onchangeRevertLabel_Heading: function (attributename) {

        var tempvalue = $("input[name='" + attributename + "']").val();
        var dynamicspan = '<span name="' + attributename + '" class="sc-htoDjs hlRWqB" onclick="QH.GenerateDynamicLabel_Heading(\'' + attributename + '\', this);">' + tempvalue + '</span>';

        $(".invoiceTitle-editable")[0].outerHTML = dynamicspan;
    }
}

//2. Add Custom Fields

$(function () {

    // Material Select Initialization

    $("#addBasicInfoDynamicRow").click(function () {
        var customlength = $(".lablefield input[name*='customHeaders']").length;
        console.log(customlength);
        var dynamicbasicrow = '<div class="css-tcumpn"><div class="css-lkfkdq"><div direction="row" class="sc-bZQynM fUSEot css-wrp5f9">'
            + '<div class="css-rxk9pl"><div class="css-16vu25q"><div class="sc-ifAKCX clTHSn css-jbjo08"><div class="css-1nazh5j">'
            + '<div class="css-16vu25q lablefield"><input type="text" name="customHeaders[' + customlength + '].label" placeholder="Field Name " class="sc-EHOje lopTvF" value="">'
            + '</div></div></div></div></div></div><div class="css-1kko9g6"><div class="sc-ifAKCX clTHSn css-jbjo08">'
            + '<div class="css-1nazh5j"><div class="css-16vu25q valuefield">'
            + '<input label="" direction="row" placeholder="Value" name="customHeaders[' + customlength + '].value" class="sc-EHOje lopTvF" value=""></div>'
            + '</div></div></div><button class="sc-dnqmqq bOKwUj sc-cBdUnI kSxcxF btncustombasicclose" type="button" onclick="BL.fnCustomBasicInfoClose(this);">'
            + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="x" transform="translate(8 8)">'
            + '<path id="Line_109" d="M0 0L0.001 11.313" class="cls-1" data-name="Line 109" transform="rotate(135 2.343 5.656)" fill="none" stroke="#733dd9" stroke-linecap="round" stroke-width="1"></path>'
            + '<path id="Line_110" d="M0.001 0L0 11.313" class="cls-1" data-name="Line 110" transform="rotate(-135 1.658 4)" fill="none" stroke="#733dd9" stroke-linecap="round" stroke-width="1">'
            + '</path></g></svg></button></div></div>';
        $("#divbasicinfo").append(dynamicbasicrow);
    });

    $("#addbilledbyDynamicRow").click(function () {
        var customlength = $(".billedbylabel input[name*='billedBy']").length;
        console.log(customlength);
        var dynamicbasicrow = '<div class="css-1i4g89v"><div class="css-i6ssx"><div class="css-rxk9pl"><div class="css-16vu25q">'
            + '<div class="sc-ifAKCX clTHSn css-jbjo08"><div class="css-1nazh5j"><div class="css-16vu25q">'
            + '<input class="sc-EHOje lopTvF billedbylabel" placeholder="Label " name="billedBy.customFields[' + customlength + '].label"  value="">'
            + '</div></div></div></div></div></div><div class="css-mr5som"><div class="css-rxk9pl">'
            + '<div class="css-16vu25q"><div class="sc-ifAKCX clTHSn css-jbjo08"><div class="css-1nazh5j">'
            + '<div class="css-16vu25q"><input placeholder="Value" name="billedBy.customFields[' + customlength + '].value" class="sc-EHOje lopTvF" value="">'
            + '</div></div></div></div></div></div><button class="sc-dnqmqq bOKwUj sc-cBdUnI kSxcxF" type="button" onclick="BL.fnCustomBilledByClose(this);">'
            + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">'
            + '<g id="x" transform="translate(8 8)"><path id="Line_109" d="M0 0L0.001 11.313" class="cls-1" data-name="Line 109" transform="rotate(135 2.343 5.656)" fill="none" stroke="#733dd9" stroke-linecap="round" stroke-width="1"></path>'
            + '<path id="Line_110" d="M0.001 0L0 11.313" class="cls-1" data-name="Line 110" transform="rotate(-135 1.658 4)" fill="none" stroke="#733dd9" stroke-linecap="round" stroke-width="1"></path>'
            + '</g></svg></button></div>';
        $("#divbilledbyCustomField").append(dynamicbasicrow);
    });

});

var BL = {
    fnCustomBasicInfoClose: function (obj) {
        $(obj).closest(".css-tcumpn").remove();
    },

    fnCustomBilledByClose: function (obj) {
        $(obj).closest(".css-1i4g89v").remove();
    },

    GenerateDynamicLabel_Basic: function (attributeName, obj) {

        var LabelName = $("label[name='" + attributeName + "']")[0].textContent.trim();
        var editlabel = '<div class="css-rxk9pl" name="div' + attributeName + '">' +
            '   <div class="css-16vu25q">' +
            '       <div class="sc-ifAKCX clTHSn css-jbjo08">' +
            '          <div class="css-1nazh5j">' +
            '           <div class="css-16vu25q"><input type="text" name="' + attributeName + '" class="sc-EHOje lopTvF" onfocusout="BL.onchangeRevertLabel_Basic(\'' + attributeName + '\');" value="' + LabelName + '"></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        obj.outerHTML = editlabel;
        var tempvalue = $("input[name='" + attributeName + "']").val();
        $("input[name='" + attributeName + "']").val("").focus().val(tempvalue);
    },

    onchangeRevertLabel_Basic: function (attributename) {

        var tempvalue = $("input[name='" + attributename + "']").val();
        var dynamiclabel = '<label onclick="BL.GenerateDynamicLabel_Basic(\'' + attributename + '\', this);" name="' + attributename + '" class="sc-EHOje hIxLHm custombasicinfo-control">' + tempvalue + '</label>'

        $("div[name='div" + attributename + "']")[0].outerHTML = dynamiclabel;
    }
}

//3. Quotation From & To
var QF = {

    GenerateDynamicLabel_QuotationFrom: function (attributeName, obj) {
        var LabelName = $("span[name='" + attributeName + "']")[0].textContent.trim();
        var editlabel = '<div id="diveditquotefrom" class="css-rxk9pl"><div class="css-16vu25q"><div class="sc-ifAKCX clTHSn css-jbjo08">'
            + '<div class="css-1nazh5j" > <div class="css-16vu25q"><input type="text" name="' + attributeName + '" class="sc-EHOje lopTvF" '
            + 'value = "' + LabelName + '" onfocusout="QF.onchangeRevertLabel_QuotationFrom(\'' + attributeName + '\');"></div></div></div></div></div> ';
        //var editlabel = '<div class="css-rxk9pl invoiceTitle-editable"><div class="css-16vu25q"><div class="sc-ifAKCX clTHSn css-jbjo08"><div class="css-1nazh5j">'
        //    + '<div class="css-16vu25q"><input type="text" name="' + attributeName + '" class="sc-EHOje lopTvF" value="' + LabelName + '" onchange="QH.onchangeRevertLabel_Heading(\'' + attributeName + '\');">'
        //    + '</div></div></div></div></div>';

        $("span[name='" + attributeName + "']")[0].outerHTML = editlabel;
        var tempvalue = $("input[name='" + attributeName + "']").val();
        $("input[name='" + attributeName + "']").val("").focus().val(tempvalue);
    },

    onchangeRevertLabel_QuotationFrom: function (attributename) {

        var tempvalue = $("input[name='" + attributename + "']").val();
        var dynamicspan = '<span name="' + attributename + '" class="sc-htoDjs gRPcCr ASGVk" onclick="QF.GenerateDynamicLabel_QuotationFrom(\'' + attributename + '\', this);">' + tempvalue + '</span>';

        $("#diveditquotefrom")[0].outerHTML = dynamicspan;
    },

    GenerateDynamicLabel_QuotationTo: function (attributeName, obj) {
        var LabelName = $("span[name='" + attributeName + "']")[0].textContent.trim();
        var editlabel = '<div id="diveditquoteto" class="css-rxk9pl"><div class="css-16vu25q"><div class="sc-ifAKCX clTHSn css-jbjo08">'
            + '<div class="css-1nazh5j" > <div class="css-16vu25q"><input type="text" name="' + attributeName + '" class="sc-EHOje lopTvF" '
            + 'value = "' + LabelName + '" onfocusout="QF.onchangeRevertLabel_QuotationTo(\'' + attributeName + '\');"></div></div></div></div></div> ';
        //var editlabel = '<div class="css-rxk9pl invoiceTitle-editable"><div class="css-16vu25q"><div class="sc-ifAKCX clTHSn css-jbjo08"><div class="css-1nazh5j">'
        //    + '<div class="css-16vu25q"><input type="text" name="' + attributeName + '" class="sc-EHOje lopTvF" value="' + LabelName + '" onchange="QH.onchangeRevertLabel_Heading(\'' + attributeName + '\');">'
        //    + '</div></div></div></div></div>';

        $("span[name='" + attributeName + "']")[0].outerHTML = editlabel;
        var tempvalue = $("input[name='" + attributeName + "']").val();
        $("input[name='" + attributeName + "']").val("").focus().val(tempvalue);
    },

    onchangeRevertLabel_QuotationTo: function (attributename) {

        var tempvalue = $("input[name='" + attributename + "']").val();
        var dynamicspan = '<span name="' + attributename + '" class="sc-htoDjs gRPcCr ASGVk" onclick="QF.GenerateDynamicLabel_QuotationTo(\'' + attributename + '\', this);">' + tempvalue + '</span>';

        $("#diveditquoteto")[0].outerHTML = dynamicspan;
    }
}




function fnQuotationSave() {
    alert("Save button Clicked JS..!")
}




$(function () {
    $('#btnQuotationSave').on("click", function () {
        alert("Save button Clicked..!")
    });
});


//// Check for the File API support.
//if (window.File && window.FileReader && window.FileList && window.Blob) {
//    document.getElementById('logoupload').addEventListener('change', handleFileSelect, false);
//} else {
//    alert('The File APIs are not fully supported in this browser.');
//}

function handleFileSelect(evt) {

    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function (theFile) {
        return function (e) {
            var binaryData = e.target.result;
            //Converting Binary Data to base 64
            var base64String = window.btoa(binaryData);
            //showing file converted to base64
            document.getElementById('base64logostring').value = base64String;

            var dynamicstring = '<div class="css-yym9h0 divlogomain">'
                + '	<div class="sc-bsbRJL dZQKAb">'
                + '			<div class="sc-hZSUBg ewoUxR">'
                + '				<div class="sc-cMhqgX iNBfja">'
                + '					<img src="data:image/png;base64,' + base64String + '" alt="" crossorigin="anonymous">'
                //+ '					<button class="sc-dnqmqq dbqCEg sc-esOvli kbAejz" type="button" id="btnlogoupload" >'
                //+ '						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">'
                //+ '							<circle id="Ellipse_47" data-name="Ellipse 47" cx="8" cy="8" r="8" transform="translate(16) rotate(90)" fill="#000"></circle>'
                //+ '							<line id="Line_109" data-name="Line 109" y2="7.206" transform="translate(10.547 10.548) rotate(135)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"></line>'
                //+ '							<line id="Line_110" data-name="Line 110" y2="7.206" transform="translate(5.453 10.548) rotate(-135)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"></line>'
                //+ '						</svg>'
                //+ '					</button>'
                + '				</div>'
                + '				<input accept="image/*" name="logo" hidden="" id="logoupload" onchange="handleFileSelect(event);" type="file" value="">'
                + '			</div>'
                + '		</div>'
                + '					<button class="sc-gzVnrw dkxiqD" type="button" id="btnlogoupload" onclick="fnlogoUpload();">Change Logo</button>'
                + '	</div>';
            $(".divlogomain")[0].outerHTML = dynamicstring;
        };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
}


function fnlogoUpload() {
    document.getElementById('logoupload').click();
}