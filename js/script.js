// $('.heroes__slider-img').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,    
//   asNavFor: '.heroes__slider-text',
//   prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
//   nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
//   responsive: [
//       {
//         breakpoint: 769,
//         settings: {
//           arrows: false,
//         }
//       },
//   ]
// });
$('.slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});