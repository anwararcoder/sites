$(document).ready( function () {
	'use strict';
	$('.slid-height').height( $(window).height() - $('.header-pic-top').height() );
	$('.header-pic-top .open-searchh').click( function () {
		$('.header-pic-top .overlay .box .icon input').toggleClass('opend-searchh');
	});
	$(window).on('scroll', function () {
		if( $(window).scrollTop() > ( $('.header-pic-top').height() + $('.carousel').height() ) ){
			$('.navbar').addClass('static-top');
		}
		else{
			$('.navbar').removeClass('static-top');
		}
	});
	
});
