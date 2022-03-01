$(document).ready(function(){
  $('.gnb > ul > li').hover(function(){
    $(this).find('.sub').stop().fadeIn();
  },function(){
    $(this).find('.sub').stop().fadeOut();
  });
});