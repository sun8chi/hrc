var mySwiper = new Swiper(".service_slider", {
  effect: "flip",
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var mySwiper = new Swiper(".works_slider", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '3',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$('.bg_circle').html(`<img src="img/circle01.png" alt=""><img src="img/circle02.png" alt="">`);
$('.bg_circle_w').html(`<img src="img/circle01_w.png" alt=""><img src="img/circle02_w.png" alt="">`);