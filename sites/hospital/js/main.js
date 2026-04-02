$(document).ready(function() {
    'use strict';
	$('.header').height( $(window).height() - ( $('.social-link-top').height()+$('.navigationbar').height() ) );

	
	
	$('.doctors .owl-carousel').owlCarousel({
		items: 3,
		rtl: true,
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			650: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	$('.information .owl-carousel').owlCarousel({
		items: 4,
		rtl: true,
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	
	$('.sections .owl-carousel').owlCarousel({
		items: 3,
		rtl: true,
		loop: true,
		margin: 20,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			650: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	
	$('.show-pop-one').click(function (){
		$('.pop-up.one').fadeIn();
	});
	$('.pop-up.one').click(function (){
		$(this).fadeOut();
	});
	$('.exit-popup').click(function (){
		$('.pop-up.one').fadeOut();
	});
	$('.pop-up.one .inner').click(function (e){
		e.stopPropagation();
	});
	
	$('.show-pop-two').click(function (){
		$('.pop-up.two').fadeIn();
	});
	$('.pop-up.two').click(function (){
		$(this).fadeOut();
	});
	$('.exit-popup').click(function (){
		$('.pop-up.two').fadeOut();
	});
	$('.pop-up.two .inner').click(function (e){
		e.stopPropagation();
	});
	
	$('.show-pop-three').click(function (){
		$('.pop-up.three').fadeIn();
	});
	$('.pop-up.two').click(function (){
		$(this).fadeOut();
	});
	$('.exit-popup').click(function (){
		$('.pop-up.three').fadeOut();
	});
	$('.pop-up.three .inner').click(function (e){
		e.stopPropagation();
	});
	
	
	
	
	
	
	
	
	
	
	
});