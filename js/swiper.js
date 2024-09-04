const swiper = new Swiper(".swiper", {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  speed: 800,

  breakpoints: {
    481: {
      slidesPerView: 1,

    }
  }

  // autoplay: {
  //   // スライドが動く間隔。(これなら3秒)
  //   delay: 3000,
  //   // trueなら最後のスライドまで行ったら停止する。falseなら最初に戻る
  //   stopOnLastSlide: false,
  //   // trueなら触った後停止falseなら再生され続ける
  //   disableOnInteraction: false,
  //   // trueなら最後のスライドまで行ったら停止する。falseなら最初に戻る
  //   reverseDirection: false
  // },
});