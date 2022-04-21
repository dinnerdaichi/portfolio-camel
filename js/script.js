$(function () {

  

  $(".main_contents").click(function () {
    $(".sp_header").toggleClass('active');
    $(".sp_back").toggleClass('active');
  });


  $(document).ready(function () {
    $(".loading").addClass("hide"); 
  });

});