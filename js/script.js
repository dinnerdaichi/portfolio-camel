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

  // $(function () {
  //   if (!sessionStorage.getItem('visited')) {
  //     $('.logo_fadein').show();
  //     setTimeout(function () {
  //       $('.logo_fadein p').fadeIn(1000);
  //     }, 500);
  //     setTimeout(function () {
  //       $('.logo_fadein').fadeOut(500);
  //     }, 2000);
  //     sessionStorage.setItem('visited', 'true');
  //   } else {
  //     $('.logo_fadein').hide();
  //   }
  // });

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

  gsap.registerPlugin(ScrollTrigger);
  // スクロールで要素をピクセル指定で拡大しながら回転するアニメーション
  gsap.utils.toArray(".gsap-img").forEach((element) => {
    gsap.to(element, {
      x: "200%", // 幅を200pxに指定
      opacity: 1, // フェードイン
      // rotation: 360, // 360度回転
      ease: "power1.out", // スムーズなアニメーション
      scrollTrigger: {
        trigger: element, // 各要素がトリガーになる
        start: "top 95%", // スクロール開始位置
        end: "top 40%", // スクロール終了位置
        scrub: true // スクロールに連動
      }
    });
  });

  // snap

  let panels = gsap.utils.toArray(".panel");
  let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));
  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
      pin: true,
      pinSpacing: false
    });
  });

  gsap.defaults({ ease: "none" });


  gsap.registerPlugin(TextPlugin)
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  tl.to(".scramble", {
    duration: 2.2,
    text: {
      value: "少しでも良いなと思って頂けましたら、ご連絡ください&#128524;",
      padSpace: true,
      preserveSpaces: true,
      type: "diff"
     }
  })

  // const tl1 = gsap.timeline({ repeat: 0, repeatDelay: 1, yoyo: false });
  // tl1.to(".scramble2", { duration: 3, text: "素早い対応と信頼 － つながりを大切にするWeb制作" })

});