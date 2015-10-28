$(function() {
	console.log('DOM ready...');

	$('.make-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  autoplay: true,
  	  autoplaySpeed: 6000
	});
});
