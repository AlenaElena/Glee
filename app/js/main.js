$(function(){
  // $('.product-tabs__top-item').on('click', function (e) {
  //   e.preventDefault();
  //   $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
  //   $(this).addClass('product-tabs__top-item--active');

  //   $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  //   $($(this).attr('href')).addClass('product-tabs__content-item--active')

  // })


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
    }
  },

});

$(document).ready(function () {
  $('.video-block__play').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});


