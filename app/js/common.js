$(function() {

	// banner main

	$('.slider__big').slick({
		dots: true,
		arrows: true,
		infinite: false,
		nextArrow: $('.slider__big-arr-right'),
		prevArrow: $('.slider__big-arr-left'),
	});

	$('.slider__big').on('afterChange', function(slick, currentSlide) {
		$('.slider__big-item-img img').removeClass('anim');
		$('.slick-active .slider__big-item-img img').addClass('anim');
	});

	$('.menu__opener').on( 'mouseenter mouseleave', function(){
		$(this).find('.hover__menu').slideToggle();
	})

});
