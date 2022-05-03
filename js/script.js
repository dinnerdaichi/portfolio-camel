$(function () {


// ハンバーガーメニュー
  $(".sp_btn").click(function () {

    $(".sp_btn").addClass('active');
    $(".sp_header").addClass('active');
    $(".sp_back").addClass('active');
  });

  $(".nav_items,.links,.sp_back,.sp_header").click(function () {
    $(".sp_btn").removeClass('active');
    $(".sp_header").removeClass('active');
    $(".sp_back").removeClass('active');
  });




  $(document).ready(function () {
    $(".loading").addClass("hide");
  });


  // スムーススクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top -50;
    var speed = 800;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });


  // modal
  $(".swiper_modal1").click(function(){
    $(".modal1,.modal_back").fadeIn();
  }),
  $(".close").click(function(){
    $(".modal1,.modal_back").fadeOut();
  })
  $(".swiper_modal2").click(function(){
    $(".modal2,.modal_back").fadeIn();
  }),
  $(".close").click(function(){
    $(".modal2,.modal_back").fadeOut();
  })



});