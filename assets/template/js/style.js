$(window).on('scroll', function() {
	if ($(window).scrollTop()) {
		$('div.nav').addClass('black');
	}
	else{
		$('div.nav').removeClass('black');
	}
})