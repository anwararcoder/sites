$(document).ready(function () {
    'use strict';
    $(window).on('load',function () {
        $('.loadd').fadeOut(1000, function () {
            $('body').css('overflow','auto');
        });
    });
    $('.navbarr .navbarr-into .menu').click(function () {
        $('.navbarr .open-menu').css('left', '0');
        $('.navbarr .open-menu .wall').css('left', '100%');
    });
    $('.navbarr .open-menu .container .menu').click(function () {
        $('.navbarr .open-menu').css('left', '-100%');
        $('.navbarr .open-menu .wall').css('left', '0%');
    });
    $('.headder').height($(window).height() - $('.navbarr').height());
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.website-info').css('opacity', '1');
        } else {
            $('.website-info').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 400) {
            $('.box-one .one').css('opacity', '1');
        } else {
            $('.box-one .one').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 500) {
            $('.box-one .two').css('opacity', '1');
        } else {
            $('.box-one .two').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 1150) {
            $('.box-two .one').css('opacity', '1');
        } else {
            $('.box-two .one').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 2000) {
            $('.box-three h3').css('opacity', '1');
        } else {
            $('.box-three h3').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 2050) {
            $('.box-three p').css('opacity', '1');
        } else {
            $('.box-three p').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 2500) {
            $('.box-three button').css('opacity', '1');
        } else {
            $('.box-three button').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 2800) {
            $('.box-four .one').css('opacity', '1');
        } else {
            $('.box-four .one').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 2900) {
            $('.box-four .two').css('opacity', '1');
        } else {
            $('.box-four .two').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 3650) {
            $('.box-five h3').css('opacity', '1');
        } else {
            $('.box-five h3').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 3800) {
            $('.box-five p').css('opacity', '1');
        } else {
            $('.box-five p').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 4500) {
            $('.box-six .one').css('opacity', '1');
        } else {
            $('.box-six .one').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 4600) {
            $('.box-six .two').css('opacity', '1');
        } else {
            $('.box-six .two').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 5300) {
            $('.box-seven h3').css('opacity', '1');
        } else {
            $('.box-seven h3').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 5450) {
            $('.box-seven .img-box').css('opacity', '1');
        } else {
            $('.box-seven .img-box').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 5900) {
            $('.clients-info').css('opacity', '1');
        } else {
            $('.clients-info').css('opacity', '0');
        }
        if ($(window).scrollTop() >= 6300) {
            $('.new').css('opacity', '1');
        } else {
            $('.new').css('opacity', '0');
        }
    });

});