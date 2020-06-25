$(function () {
 
	$('.slider').slick({
		// dots: true,
		// arrows: false,
		// prevArrow: '<button type="button" class="arrow arrow-prev"></button>',
		// nextArrow: '<button type="button" class="arrow arrow-next"></button>',
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
	});
	

	$('select, option').styler();
	
	
	$(".rate-star").rateYo({
		starWidth: "15px",
		readOnly: true,
		rating: 5,
	});

});