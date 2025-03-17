//ナビゲーション
$(document).ready(function() {
  $('.drawer').drawer();
});

//スムーススクロール
var topBtn = $('#page-top');
topBtn.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});
$(function(){
  $("a[href^='#']").click(function() {
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
