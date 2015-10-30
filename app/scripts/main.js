$(function() {
	console.log('DOM ready...');

	new WOW().init();

	// Mobile menu
	var $mobileMenu = $('.mobile-nav-menu'),
		$mobileOverlay = $('.mobile-overlay'),
		$mobileButton = $('.mobile-menu-btn, .mobile-overlay'),
		mActive = 'mobile-nav-menu-active',
		oActive = 'mobile-overlay-active',
		oHidden = 'o-hidden',
		$body = $('body');
	
	$mobileButton.click(function(e) {
		e.preventDefault();

		$mobileMenu.toggleClass(mActive);
		$mobileOverlay.toggleClass(oActive);
		$body.toggleClass(oHidden);
	});

	// Sliders
	$('.slider-desktop').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  autoplay: true,
  	  autoplaySpeed: 6000
	});
	$('.slider-mobile').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
  	  autoplaySpeed: 6000
	});
	$('.phone-slider-desktop').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3
	});
	$('.phone-slider-mobile').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

	// Map toggle
	var $mapBtn = $('.map-open'),
		$mapArea = $('.contacts-map-area');

	$mapBtn.click(function(e) {
		e.preventDefault();

		$mapArea.slideToggle('fast');
	});

	// Slider image effect
	var $makeSlide = $('.make-slider-img');

	$makeSlide.on('click', function() {
		$(this).addClass('animated wobble');
	}).mouseup(function() {
		$makeSlide.removeClass('animated wobble');
	});
});
