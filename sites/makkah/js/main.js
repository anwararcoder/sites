$(document).ready(function() {
    'use strict';
//    Start Navbar
    
    
    //  [1]  Start Navbar Menu
    
	$('.navigationbar .brand .menu').click(function() {
        $(this).toggleClass('active');
		$('.navigationbar .linkat').toggleClass('active');
		$('.navigationbar').toggleClass('active');
    });
    
    //    End Navbar Menu
    
    //  [2]  Start Navbar Class Static-Top
    
	$(window).on('scroll', function (){
		if ( $(window).scrollTop() > 150 )
		{
			$('.navigationbar').addClass('static-top');
		}
		else
		{
			$('.navigationbar').removeClass('static-top');
		}
	});
    
    //    End Navbar Class Hide
    
    
    //   [3] Start Navbar AddClass Active
    

    $('.navigationbar .linkat .link-navs ul li a').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    
    //    End Navbar AddClass Active
    
    
//    Start Navbar
    
    
    
//    Start Header
    $('header').height( $(window).height() - ( $('.navigationbar-info').height() + $('.navigationbar').height() ) );
    $('.info-support .box input,.info-support .box textarea').click(function () {
        $(this).parent().addClass('foucs');
    }).blur(function () {
        if($(this).val() === ''){
            $(this).parent().removeClass('foucs');
        }
    })
});
