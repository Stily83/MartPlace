$(function () {
 
	$('.slider').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
	});
	

	$('select, option, input').styler();
	
	
	$(".rate-star").rateYo({
		starWidth: "15px",
		readOnly: true,
		rating: 5,
	});

});