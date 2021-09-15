$(function(){

  $('.header-menu__btn').on('click', function () {
    $('.header-menu__list').toggleClass('header-menu__list--active');
  });


  $('.footer-content__title-list').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-content__title-list--active');
  });
  

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('product-tabs__top-item--active');

    $($(this).closest('.product-tabs__top').siblings().find('div')).removeClass('product-tabs__content-item--active');

    $(this).addClass('product-tabs__top-item--active');

    $($(this).attr('href')).addClass('product-tabs__content-item--active');

 
  });
})

new Swiper('.intro-slider', {
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 3000,
  pagination: {
    el: '.intro-slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});



const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { 
  direction: 'vertical',
  slidesPerView: 3,
  freeMode: true,
  breakpoints: { 
    0: { // при 0px и выше
      direction: 'horizontal',
    },
    768: { // при 768px и выше
      direction: 'vertical',
    }
  }
});

const sliderImages = new Swiper('.slider__images .swiper-container', { 
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
     crossFade: true
   },
  thumbs: { 
    swiper: sliderThumbs
  }, 
});

const swiperProduct = new Swiper('.products-related__swiper', {
  speed: 1500,
  slidesPerView: 4,
  initialSlide: 1,
  pagination: {
    el: '.products-related__swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.products-related__swiper-btn--next',
    prevEl: '.products-related__swiper-btn--prev',
  },
});

const swiperBlog = new Swiper('.blog-page__post-slider', {
  speed: 1500,
  slidesPerView: 1,
  initialSlide: 1,
  pagination: {
    el: '.blog-page__post-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.blog-page__post-slider__btn--next',
    prevEl: '.blog-page__post-slider__btn--prev',
  },
});

$('.popup-youtube').magnificPopup({
  disableOn: 350,
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: function (url) {
          var m = url.match(/[\?\&]v=([^\?\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: 'https://www.youtube.com/embed/XLW6OA5OAn0'
      },
    }
  }
});
 

$(function () {
  $('.star').rateYo({
    starWidth: "11px",
    spacing: "7px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6pt" height="5pt" viewBox="0 0 6 5" version="1.1"><path d="M 2.761719 0.171875 L 2.066406 1.46875 L 0.511719 1.675781 C 0.230469 1.710938 0.121094 2.027344 0.320312 2.207031 L 1.449219 3.210938 L 1.183594 4.632812 C 1.132812 4.890625 1.425781 5.082031 1.675781 4.964844 L 3.066406 4.292969 L 4.460938 4.964844 C 4.707031 5.082031 5 4.890625 4.953125 4.632812 L 4.6875 3.210938 L 5.8125 2.207031 C 6.015625 2.027344 5.90625 1.710938 5.625 1.675781 L 4.070312 1.46875 L 3.375 0.171875 C 3.25 -0.0546875 2.886719 -0.0585938 2.761719 0.171875 Z M 2.761719 0.171875"/></svg>'
  });
  $('.star-big').rateYo({
    starWidth: "16px",
    spacing: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6pt" height="5pt" viewBox="0 0 6 5" version="1.1"><path d="M 2.761719 0.171875 L 2.066406 1.46875 L 0.511719 1.675781 C 0.230469 1.710938 0.121094 2.027344 0.320312 2.207031 L 1.449219 3.210938 L 1.183594 4.632812 C 1.132812 4.890625 1.425781 5.082031 1.675781 4.964844 L 3.066406 4.292969 L 4.460938 4.964844 C 4.707031 5.082031 5 4.890625 4.953125 4.632812 L 4.6875 3.210938 L 5.8125 2.207031 C 6.015625 2.027344 5.90625 1.710938 5.625 1.675781 L 4.070312 1.46875 L 3.375 0.171875 C 3.25 -0.0546875 2.886719 -0.0585938 2.761719 0.171875 Z M 2.761719 0.171875"/></svg>'
  });
  $('.star-comment').rateYo({
    starWidth: "12px",
    spacing: "3px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6pt" height="5pt" viewBox="0 0 6 5" version="1.1"><path d="M 2.761719 0.171875 L 2.066406 1.46875 L 0.511719 1.675781 C 0.230469 1.710938 0.121094 2.027344 0.320312 2.207031 L 1.449219 3.210938 L 1.183594 4.632812 C 1.132812 4.890625 1.425781 5.082031 1.675781 4.964844 L 3.066406 4.292969 L 4.460938 4.964844 C 4.707031 5.082031 5 4.890625 4.953125 4.632812 L 4.6875 3.210938 L 5.8125 2.207031 C 6.015625 2.027344 5.90625 1.710938 5.625 1.675781 L 4.070312 1.46875 L 3.375 0.171875 C 3.25 -0.0546875 2.886719 -0.0585938 2.761719 0.171875 Z M 2.761719 0.171875"/></svg>'
  });
});


$(function () {
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });

  $(function () {
    $('.select-style, .product__content-num, .modal__select-style').styler();
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
    
  });
  $('.button-list').on('click', function () {
    $('.products__card').addClass('products__card--list')
  });
  $('.button-grid').on('click', function () {
    $('.products__card').removeClass('products__card--list')
  });


  $('.product-page__tab-top__item').on('click', function (e) {
    e.preventDefault();
    $('.product-page__tab-top__item').removeClass('product-page__tab-top__item--active');
    $(this).addClass('product-page__tab-top__item--active');

    $('.product-page__content-item').removeClass('product-page__content-item--active');
    $($(this).attr('href')).addClass('product-page__content-item--active')

  })
});


