$(function () {

  

  $(".sp_btn").click(function () {
    $(".sp_header").addClass('active');
    $(".sp_back").addClass('active');
  });

  $(".nav_items").click(function () {
    $(".sp_header").removeClass('active');
    $(".sp_back").removeClass('active');
  });

  


  $(document).ready(function () {
    $(".loading").addClass("hide"); 
  });

});