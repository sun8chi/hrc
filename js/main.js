$(document).ready(function() {
  // wow
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true,
    resetAnimation: true
  });
  wow.init();
  // swiper
  var swiperTeacher = new Swiper('.swiperTeacher', {
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
      el: '.teacher_pag',
      clickable: true
    },
    navigation: {
      nextEl: '.teacher_next',
      prevEl: '.teacher_prev'
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      }
    }
  });
  var swiperPrice = new Swiper('.swiperPrice', {
    slidesPerView: 1.2,
    spaceBetween: 15,
    autoHeight: true,
    pagination: {
      el: '.price_pag',
      clickable: true
    },
    navigation: {
      nextEl: '.price_next',
      prevEl: '.price_prev'
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  var swiperNews = new Swiper('.swiperNews', {
    slidesPerView: 1.2,
    spaceBetween: 15,
    autoHeight: true,
    pagination: {
      el: '.news_pag',
      clickable: true
    },
    navigation: {
      nextEl: '.news_next',
      prevEl: '.news_prev'
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 40,
        slidesPerView: 4
      }
    },
    on: {
      init: function(swiper){
        $('.swiperNews .news_item:odd').addClass('to_bottom')
      }, 
    },
  });
  var swiperEvents = new Swiper('.swiperEvents', {
    slidesPerView: 1.2,
    spaceBetween: 15,
    autoHeight: true,
    pagination: {
      el: '.events_pag',
      clickable: true
    },
    navigation: {
      nextEl: '.events_next',
      prevEl: '.events_prev'
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 40,
        slidesPerView: 3
      }
    }
  });
  var swiperGallerySm = new Swiper('.swiperGallerySm', {
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    slideToClickedSlide: true,

    breakpoints: {
      768: {
        slidesPerView: 4
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 5
      }
    }
  });
  var swiperGalleryLg = new Swiper('.swiperGalleryLg', {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperGallerySm
    },
    on: {
      slideChange: function() {
        let activeIndex = this.activeIndex + 1;
        let activeSlide = document.querySelector(`.swiperGallerySm .swiper-slide:nth-child(${activeIndex})`);
        let nextSlide = document.querySelector(`.swiperGallerySm .swiper-slide:nth-child(${activeIndex + 1})`);
        let prevSlide = document.querySelector(`.swiperGallerySm .swiper-slide:nth-child(${activeIndex - 1})`);

        if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
          this.thumbs.swiper.slideNext();
        } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
          this.thumbs.swiper.slidePrev();
        }
      }
    }
  });
  // icon
  $('.icon_menu').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('icon_close');
  });
});