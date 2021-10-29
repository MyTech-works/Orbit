$(".right_side_toggle").on('click', function(){
  $('#right_side_bar').toggleClass('show');
});
$(document).on('click', '.advance-filter', function () {
    $('#divFilterOrderDelivery').toggleClass('show');
});
$(document).on('click', '#FilterOrderDeliveryclose', function () {
    $('#divFilterOrderDelivery').toggleClass('show');
});
