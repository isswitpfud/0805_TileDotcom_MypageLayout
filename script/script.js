$(function(){
    
$("#gnbMenu #gnb .subLi").mouseover(function(){
    $(this).css('border-bottom','7px solid #4291ba');
});

$("#gnbMenu #gnb .subLi").mouseout(function(){
    $(this).css('border-bottom','none');
});


setInterval(function()
{$(".blink").toggle();},
 450);
 
//= 같은 효과구현
// setInterval(fnBlink, 450);
// function, fnBlink(){
//     $(".blink").toggle();
// };



});