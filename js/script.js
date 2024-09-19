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

  window.addEventListener("scroll", function () {
    const elm = document.querySelector("header");
    const scroll = window.pageYOffset;
    if (scroll > 500) {
      elm.classList.add("active");
    } else {
      elm.classList.remove("active");
    }
  });

 let previousScroll = 0;
 window.addEventListener("scroll", function () {
   const elm = document.querySelector(".camel__img");
   const scroll = window.pageYOffset;
   if (scroll < previousScroll) {
     elm.classList.add("active");
   } else {
     elm.classList.remove("active");
   }
   previousScroll = scroll;
 });




  $(document).ready(function () {
    $(".loading").addClass("hide");
  });


  // スムーススクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 50;
    var speed = 800;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });


//   // modal
// $(".swiper_modal1").click(function () {
//   $(".modal1,.modal_back").fadeIn();
// });

// $(".close1").click(function () {
//   $(".modal1,.modal_back").fadeOut();
// });

// $(".swiper_modal2").click(function () {
//   $(".modal2,.modal_back").fadeIn();
// });

// $(".close2").click(function () {
//   $(".modal2,.modal_back").fadeOut();
// });

// $(".swiper_modal3").click(function () {
//   $(".modal3,.modal_back").fadeIn();
// });

// $(".close3").click(function () {
//   $(".modal3,.modal_back").fadeOut();
// });

// $(document).click(function (event) {
//   var target = $(event.target);

//   if (target.hasClass('modal1')) {
//     $(".modal1,.modal_back").fadeOut();
//   }

//   if (target.hasClass('modal2')) {
//     $(".modal2,.modal_back").fadeOut();
//   }

//   if (target.hasClass('modal3')) {
//     $(".modal3,.modal_back").fadeOut();
//   }

//   if (target.hasClass('close')) {
//     $(".modal1,.modal_back").fadeOut();
//   }
//   if (target.hasClass('close')) {
//     $(".modal2,.modal_back").fadeOut();
//   }
//   if (target.hasClass('close')) {
//     $(".modal3,.modal_back").fadeOut();
//   }
// });



$(function () {
  setTimeout(function () {
    $('.logo_fadein p').fadeIn(1000);
  }, 500);
  setTimeout(function () {
    $('.logo_fadein').fadeOut(500);
  }, 2000);
});












});