$('.hero-carousel').slick( {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true
});

$('.skill-name').on('click', function() {
  $(this).next('.skill-text').slideToggle();
});

$('.is-hidden').waypoint(function() {
	$(this.element).removeClass('is-hidden').addClass('is-active');
}, {
	offset: '50%'
});

$('.is-hidden-immediate').waypoint(function() {
	$(this.element).removeClass('is-hidden-immediate').addClass('is-active-immediate');
});

$('#hamburger').on('click', function() {
	$('nav').slideToggle();
});

$(window).on('resize', function() {
	if ($(window).width() >= 1230 && !$('nav').is(':visible')) {
		$('nav').show();
	} else if ($(window).width() < 1230 && $('nav').is(':visible')) {
		$('nav').hide();
	}
});