$( document ).ready(function() {

$('.menu-item-has-children li a').click(function() {
    $('.nav-trigger').prop('checked', false); // Unchecks it
});
});
