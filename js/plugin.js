
/*global $, alert, console*/

$(function () {
	'use strict';
    
    // Trigger Nice Scroll Plugin
    
	/*
     $('html').niceScroll({
        
        cursorcolor: '#019FDE',
        cursorwidth: 10,
        cursorborderradius: 5,
        cursorborder: '1px solid #019FDE' 
    });
    */
	

	
	//scroll to section-best
	$('.header__arrows i').click(function(){
	   $('html, body').animate({
		scrollTop: $('.section-best').offset().top
	},1000);
	});

	
	//scroll to section-book
	$('.local__buttons--hire').click(function(){
	   $('html, body').animate({
		scrollTop: $('.section-book').offset().top
    },1000);
});

	//scroll to events
	$('.local__buttons--upper').click(function(){
        $('html, body').animate({
         scrollTop: $('.bg-pattern').offset().top
     },1000);
 });
});


    
$('#Container').mixItUp();
    
// Adjust Shuffle Links

$('.shuffle li').click(function () {
   
    $(this).addClass('selected').siblings().removeClass('selected');
    
});
	