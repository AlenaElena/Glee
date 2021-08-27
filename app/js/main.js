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


  $('.star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6pt" height="5pt" viewBox="0 0 6 5" version="1.1"><path d="M 2.761719 0.171875 L 2.066406 1.46875 L 0.511719 1.675781 C 0.230469 1.710938 0.121094 2.027344 0.320312 2.207031 L 1.449219 3.210938 L 1.183594 4.632812 C 1.132812 4.890625 1.425781 5.082031 1.675781 4.964844 L 3.066406 4.292969 L 4.460938 4.964844 C 4.707031 5.082031 5 4.890625 4.953125 4.632812 L 4.6875 3.210938 L 5.8125 2.207031 C 6.015625 2.027344 5.90625 1.710938 5.625 1.675781 L 4.070312 1.46875 L 3.375 0.171875 C 3.25 -0.0546875 2.886719 -0.0585938 2.761719 0.171875 Z M 2.761719 0.171875"/></svg>'
  });

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

  // $(function () {
  //   $('.filter-category__input').styler();
  // });


  // $('.filter-price__input').ionRangeSlider({
  //   type: "double",
  //   prefix: "$",
  //   onStart: function (data) {
  //     $('.filter-price__from').text(data.from);
  //     $('.filter-price__to').text(data.to);
  //   },
  //   onChange: function (data) {
  //     $('.filter-price__from').text(data.from);
  //     $('.filter-price__to').text(data.to);
  //   },

  // });
});

$(function () {

  


})