$(document).ready(function () {
	'use strict';
	$('.header').height($(window).height());
	$('.navigationbar .box .menu-toggle').click(function () {
		$(this).toggleClass('active');
		$('.navigationbar .box .navbars').toggleClass('active');
	});
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > ($('.navigationbar').height())) {
			$('.navigationbar').addClass('active');
		} else {
			$('.navigationbar').removeClass('active');
		}
	});




	(function ($) {
		$('.accordion > li:eq(2) .head').addClass('active').next().slideDown();

		$('.accordion .head').click(function (j) {
			var dropDown = $(this).closest('li').find('.end');

			$(this).closest('.accordion').find('.end').not(dropDown).slideUp();

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('.head.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle();
			j.preventDefault();
		});
	})(jQuery);




	$(".project-click").click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		var value = $(this).attr("data-filter");
		if (value == "all") {
			$(".filter").show("1000");
		} else {
			$(".filter").not("." + value).fadeOut("1000");
			$(".filter").filter("." + value).fadeIn("1000");
		}
	});




});