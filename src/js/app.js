// vendor libs
import Swiper from 'swiper/bundle';
// vendor styles
import '../../../node_modules/swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementsByClassName('section-hero-swiper').length) {
    var swiperHero = new Swiper('.swiper-hero', {
      slidesPerView: 1,
      spaceBetween: 20,
      scrollbar: {
        enabled: false,
      },
      pagination: {
        enabled: true,
        el: '.swiper-hero [swiper-pagination]',
        type: 'fraction',
      },
      navigation: {
        enabled: disabled,
      },
      allowTouchMove: true,
      grabCursor: true,
    });

    setTimeout(function () {
      if (swiperHero.update) {
        swiperHero.update();
      }
    }, 500);
  }
});
