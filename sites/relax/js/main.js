$(document).ready(function () {
	'use strict';
    $(window).on('load',function () {
        $('.loadd').fadeOut(1000, function () {
            $('body').css('overflow','auto');
        });
    });
	$('.headder').height( ($(window).height()) - ($('.navigation-bar').height()) );
	$(window).resize(function () {
		$('.headder').height( ($(window).height()) - ($('.navigation-bar').height()) );
	});
	$('.navigation-bar .navbar-light .navbar-nav .active a').attr('style','color: #1abc9c !important');
    $('.navigation-bar .navbar button').click(function () {
        $(this).toggleClass('active');
    });
	$(window).scroll(function () {
		
		if ( $(window).scrollTop() >= $('.navigation-bar .navbar').height() + 100 ){
			$('.navigation-bar .navbar').addClass('navigation-bar-top');
			$('.navigation-bar .navbar-light .navbar-brand').css('color','#2c3e50');
			$('.navigation-bar .navbar-light .navbar-nav .nav-link').css('color','#2c3e50');
			$('.navigation-bar .navbar-light .navbar-nav .active a').attr('style','color: #1abc9c !important');
            $('.navigation-bar .navbar-light .navbar-nav .nav-link button').css('border','1px solid #2c3e50');
            $('.navigation-bar .navbar-light .navbar-nav .nav-link button').css('color','#2c3e50');
		} else {
			$('.navigation-bar .navbar').removeClass('navigation-bar-top');
			$('.navigation-bar .navbar-light .navbar-brand').css('color','#fff');
			$('.navigation-bar .navbar-light .navbar-nav .nav-link').css('color','#fff');
			$('.navigation-bar .navbar-light .navbar-nav .active a').attr('style','color: #1abc9c !important');
            $('.navigation-bar .navbar-light .navbar-nav .nav-link button').css('border','1px solid #fff');
            $('.navigation-bar .navbar-light .navbar-nav .nav-link button').css('color','#fff');
		}
	});
    $(window).on('scroll', function () {
        if($(window).scrollTop() >= 200){$('.count').css('opacity','1');}else{$('.count').css('opacity','1');}
        if($(window).scrollTop() >= 400){$('.work').css('opacity','1');}else{$('.work').css('opacity','1');}
        if($(window).scrollTop() >= 950){$('.features').css('opacity','1');}else{$('.features').css('opacity','1');}
        if($(window).scrollTop() >= 1800){$('.testimonials').css('opacity','1');}else{$('.testimonials').css('opacity','1');}
        if($(window).scrollTop() >= 2300){$('.search').css('opacity','1');}else{$('.search').css('opacity','1');}
    });
    
});
