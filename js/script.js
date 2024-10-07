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

  // header active
window.addEventListener("scroll", function () {
  const elm = document.querySelector("header");
  const mvElm = document.querySelector(".p-mv");
  if (mvElm) {
    const scroll = window.pageYOffset;
    const mvHeight = mvElm.offsetHeight - 50;
    if (scroll > mvHeight) {
      elm.classList.add("active");
    } else {
      elm.classList.remove("active");
    }
  }
});



let previousScroll = 0;

if (document.querySelector(".camel__img")) {
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
}




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

  // ローディング
  $(function () {
    setTimeout(function () {
      $('.logo_fadein p').fadeIn(1000);
    }, 500);
    setTimeout(function () {
      $('.logo_fadein').fadeOut(500);
    }, 2000);
  });




  // カーソル
  const cursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 1.1, // カーソルの追従速度
      ease: "power2.out"
    });
  });
  // ホバー時の色を反転させる
  document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-inverted'); // ホバー時に色を反転
    });

    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-inverted'); // 通常時に戻す
    });
  });

if (document.querySelector(".pContent")) {
  gsap.to(".pContent", {
    yPercent: -800,
    ease: "none",
    scrollTrigger: {
      scrub: true
    },
  });
}

if (document.querySelector(".pImage")) {
  gsap.to(".pImage", {
    yPercent: 500,
    ease: "none",
    scrollTrigger: {
      scrub: true
    },
  });
}

  // gsap.registerPlugin(ScrollTrigger);

  // // スクロールで画像を拡大＆回転するアニメーション
  // gsap.utils.toArray(".gsap-img").forEach(img => {
  //   gsap.to(img, {
  //     x:"200%",
  //     opacity: 1, // フェードイン
  //     // rotation: 360, // 360度回転
  //     ease: "power1.inOut", // スムーズなアニメーション
  //     scrollTrigger: {
  //       trigger: img, // 各画像がトリガー
  //       start: "top 80%", // スクロール開始位置
  //       end: "top 20%", // スクロール終了位置
  //       scrub: true // スクロールに連動
  //     }
  //   });
  // });






});