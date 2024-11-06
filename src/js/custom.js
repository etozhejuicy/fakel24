// heroCard init
const heroCard = document.querySelector('[data-card-hero]');
const techCard = document.querySelector('[data-card-tech]');

// swiper hero init
if (document.getElementsByClassName('section-hero-swiper').length) {
  var swiperHero = new Swiper('.swiper-hero', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 400,
    autoplay: true,
    rewind: true,
    scrollbar: {
      enabled: false,
    },
    pagination: {
      el: '.swiper-hero [swiper-pagination]',
      clickable: true,
    },
    navigation: {
      enabled: false,
    },
    allowTouchMove: true,
    grabCursor: true,
    on: {
      slideChange: function () {
        let activeSlide = swiperHero.activeIndex;

        activeSlide = activeSlide + 1;

        heroCard.classList.add('fadeEffect');

        setTimeout(() => {
          heroCard.classList.remove('fadeEffect');
        }, 500);

        if (activeSlide == 1) {
          heroCard.querySelector('.card-title').innerText =
            'Профессиональная гигиена всей полости рта';
          heroCard.querySelector('.card-body p').innerHTML =
            'Скидка первичным пациентам 900 руб!';
          heroCard.querySelector('.card-footer a').setAttribute('href', '/gigiena-zubov');
        } else if (activeSlide == 2) {
          heroCard.querySelector('.card-title').innerText = 'Имплантация ';
          heroCard.querySelector('.card-body p').innerHTML =
            'Установка Имплантатов SuperLine по выгодной цене за 24000 руб!';
          heroCard.querySelector('.card-footer a').setAttribute('href', '/implantacia-zubov');
        } else if (activeSlide == 3) {
          heroCard.querySelector('.card-title').innerText = 'Плазмолифтинг';
          heroCard.querySelector('.card-body p').innerHTML =
            'Здоровые дёсна - залог красивой улыбки';
          heroCard.querySelector('.card-footer a').setAttribute('href', '/lecenie-desen');
        } else if (activeSlide == 4) {
          heroCard.querySelector('.card-title').innerText = 'ПРОТЕЗИРОВАНИЕ';
          heroCard.querySelector('.card-body p').innerHTML =
            'Изготовление безметалловых коронок по цене от 16500 руб!';
          heroCard.querySelector('.card-footer a').setAttribute('href', '/ortopedia-ili-protezirovanie-zubov');
        }
      },
    },
  });

  setTimeout(function () {
    if (swiperHero.update) {
      swiperHero.update();
    }
  }, 500);
}

// swiper doctor init
if (document.getElementsByClassName('section-doctors').length) {
  var swiperDoctors = new Swiper('.swiper-doctors', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 400,
    breakpoints: {
      0: {
        centeredSlides: true,
        loop: true,
        loopedSlides: 2,
      },
      1200: {
        centeredSlides: false,
        loop: false,
        loopedSlides: 0,
      },
    },
    scrollbar: {
      enabled: false,
    },
    pagination: {
      el: '.swiper-doctors [swiper-pagination]',
      clickable: true,
    },
    navigation: {
      enabled: false,
    },
    allowTouchMove: true,
    grabCursor: true,
  });

  setTimeout(function () {
    if (swiperDoctors.update) {
      swiperDoctors.update();
    }
  }, 500);
}

// swiper technologies
if (document.getElementsByClassName('section-technologies').length) {
  var swiperTechnologies = new Swiper('.swiper-technologies', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 400,
    autoplay: true,
    rewind: true,
    scrollbar: {
      enabled: false,
    },
    pagination: {
      el: '.swiper-technologies [swiper-pagination]',
      clickable: true,
    },
    navigation: {
      enabled: false,
    },
    allowTouchMove: true,
    grabCursor: true,
    on: {
      slideChange: function () {
        let activeSlide = swiperTechnologies.activeIndex;

        activeSlide = activeSlide + 1;

        techCard.classList.add('fadeEffect');

        setTimeout(() => {
          techCard.classList.remove('fadeEffect');
        }, 500);

        if (activeSlide == 1) {
          techCard.querySelector('.card-title').innerText = 'ФИЗИОДИСПЕНСЕР';
          techCard.querySelector('p').innerText =
            'В клинике проводятся имплантация зубов с последующим протезированием и сложные зубо-сохраняющие операции с использованием проверенного и качественного оборудования фирмы NSK (физиодиспенсора). Лечение корневых каналов зубов проводится при помощи машинных, а не ручных инструментов под контролем апекслокаторов и рентгендиагностики, что значительно сокращает время проведения необходимых процедур, повышает качество и способствует долгосрочности результата.';
        } else if (activeSlide == 2) {
          techCard.querySelector('.card-title').innerText =
            'Оборудованный кабинет ';
          techCard.querySelector('p').innerText =
            'Каждый кабинет оборудован по самым современным медицинским стандартам для удобства и комфорта пациента. Специалисты используют только сертифицированные и качественные светоотверждаемые пломбировочные материалы для лечения.';
        } else if (activeSlide == 3) {
          techCard.querySelector('.card-title').innerText = 'СИСТЕМА AIR FLOW';
          techCard.querySelector('p').innerText =
            'Для повышения эффективности проводимых манипуляций и отбеливание в нашей клинике осуществляется в «четыре руки» - с непосредственным участием ассистента врача стоматолога. Профессиональная гигиена полости рта – самая комфортная и эффективная процедура для профилактики заболеваний зубов и десен, рекомендуемая в нашей клинике всем пациентам. Для повышения качества её проведения обязательным является использование системы Air Flow (дословно - воздушного потока).';
        }
      },
    },
  });

  setTimeout(function () {
    if (swiperTechnologies.update) {
      swiperTechnologies.update();
    }
  }, 500);
}

// swiper smiles init
if (document.getElementsByClassName('section-smile').length) {
  var swiperSmiles = new Swiper('.swiper-smiles', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    noSwipingSelector: '.swiper-smiles .smile-images',
    breakpoints: {
      0: {
        centeredSlides: true,
        centerInsufficientSlides: false,
      },
      1200: {
        centeredSlides: false,
        centerInsufficientSlides: true,
        loop: false,
      },
    },
    scrollbar: {
      enabled: false,
    },
    pagination: {
      el: '.swiper-smiles [swiper-pagination]',
      clickable: true,
    },
    navigation: {
      enabled: false,
    },
    allowTouchMove: true,
    grabCursor: true,
  });

  setTimeout(function () {
    if (swiperSmiles.update) {
      swiperSmiles.update();
    }
  }, 500);
}

// swiper reviews init
if (document.getElementsByClassName('section-reviews').length) {
  var swiperReviews = new Swiper('.swiper-reviews', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      0: {
        centeredSlides: true,
        centerInsufficientSlides: false,
      },
      1200: {
        centeredSlides: false,
        centerInsufficientSlides: true,
        loop: false,
      },
    },
    scrollbar: {
      enabled: false,
    },
    pagination: {
      el: '.swiper-reviews [swiper-pagination]',
      clickable: true,
    },
    navigation: {
      enabled: false,
    },
    allowTouchMove: true,
    grabCursor: true,
  });

  setTimeout(function () {
    if (swiperReviews.update) {
      swiperReviews.update();
    }
  }, 500);
}

// swiper result init
if (document.getElementsByClassName('section-result').length) {
  var swiperResult = new Swiper('.swiper-result', {
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 4,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 12,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 12,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
    },
    scrollbar: {
      enabled: false,
    },
    pagination: {
      el: '.swiper-result [swiper-pagination]',
      clickable: true,
    },
    navigation: {
      enabled: false,
    },
    allowTouchMove: true,
    grabCursor: true,
  });

  setTimeout(function () {
    if (swiperResult.update) {
      swiperResult.update();
    }
  }, 500);
}

// header script
const logo = document.querySelector('.header-logo');
const mainMenu = document.querySelector('.menu');
const headerTop = document.querySelector('.header-top');
const header = document.querySelector('header');
const headerModalBtn = document.querySelector('.header-modal-btn');

window.addEventListener('scroll', setFixedHeader);
window.addEventListener('resize', setFixedHeader);
window.addEventListener('DOMContentLoaded', setFixedHeader);

function setFixedHeader() {
  if (window.innerWidth >= 1200) {
    if (window.scrollY >= 1) {
      logo.classList.add('scroll');
      mainMenu.classList.add('scroll');
      headerModalBtn.classList.add('scroll');
    } else {
      logo.classList.remove('scroll');
      mainMenu.classList.remove('scroll');
      headerModalBtn.classList.remove('scroll');
    }
  } else {
    logo.classList.remove('scroll');
    mainMenu.classList.remove('scroll');
    headerModalBtn.classList.remove('scroll');
  }
}

// fix header script classList before load
window.addEventListener('DOMContentLoaded', () => {
  logo.classList.remove('scroll');
  mainMenu.classList.remove('scroll');
  headerModalBtn.classList.remove('scroll');
});

// for dropdown menu icon
const dropdownItem = document.querySelectorAll('.menu-dropdown');

function dropdownMenu() {
  if (window.innerWidth >= 1200) {
    dropdownItem.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        if (item.classList.contains('opened')) {
          item.classList.remove('opened');
        } else {
          item.classList.add('opened');
        }
      });
      item.addEventListener('mouseleave', () => {
        if (item.classList.contains('opened')) {
          item.classList.remove('opened');
        } else {
          item.classList.add('opened');
        }
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', dropdownMenu);
window.addEventListener('resize', dropdownMenu);

// mobile-menu
const menuOpenElems = document.querySelectorAll('[data-menu-open]');
const menuCloseElems = document.querySelectorAll('[data-menu-close]');

// mobile-menu
function mobileMenu() {
  if (window.innerWidth <= 1200) {
    menuOpenElems.forEach((menuOpenElem) => {
      menuOpenElem.addEventListener('click', () => {
        openMenu();
      });
    });

    menuCloseElems.forEach((menuCloseElem) => {
      menuCloseElem.addEventListener('click', () => {
        closeMenu();
      });
    });
  }
}

function openMenu() {
  mainMenu.classList.add('menu-show');
  document.documentElement.classList.add('menu-open');
}

function closeMenu() {
  mainMenu.classList.remove('menu-show');
  document.documentElement.classList.remove('menu-open');
}

window.addEventListener('DOMContentLoaded', mobileMenu);
window.addEventListener('scroll', mobileMenu);
window.addEventListener('resize', mobileMenu);

// modals logic
const openModalButtons = document.querySelectorAll('[data-modal-open]');
const closeButtons = document.querySelectorAll('[btn-close-modal]');

openModalButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const modalKey = e.currentTarget.getAttribute('data-modal-open');
    const modal = document.querySelector('[data-modal-id="' + modalKey + '"]');
    if (modal) {
      modal.classList.add('show');
      document.documentElement.classList.add('modal-open');
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const modal = button.closest('.modal');
    if (modal) {
      modal.classList.remove('show');
      document.documentElement.classList.remove('modal-open');
    }
  });
});

window.addEventListener('click', function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.classList.remove('show');
      document.documentElement.classList.remove('modal-open');
    }
  });
});

// datepicker
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

const datepickers = document.querySelectorAll('[data-input-type="datepicker"]')

datepickers.forEach((picker) => {
  new Datepicker(picker, {
    i18n: {
      months: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      weekdays: [
        'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
      ]
    },
    weekStart: 1,
    min: currentDate,
  });
});

