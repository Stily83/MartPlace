$(function () {
 
	$('.slider').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
	});
	
	$('.slider-follower').slick({
		prevArrow: $('.prev-btn'),
		nextArrow: $('.next-btn'),
		slidesToShow: 3,
		slidesToScroll: 3,
	});
	

	$('select, option, input').styler();
	
	
	$(".rate-star").rateYo({
		starWidth: "15px",
		readOnly: true,
		rating: 5,
	});


	$('.burger').on('click', function(){
		$('.burger').toggleClass('active'),
		$('.header-menu__list').toggleClass('active')
	});

	$('.user-toggle').on('click', function(){
		$('.header-box').toggleClass('active')
	});

	var mixer = mixitup('.sort-content');
});