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

// swiper smiles init
if (document.getElementsByClassName('section-smile').length) {
  var swiperSmiles = new Swiper('.swiper-smiles', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    noSwipingSelector: '.swiper-smiles .smile-images',
    breakpoints: {
      0: {
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 'auto',
        centeredSlides: false,
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

// form logic
let formSelects = document.querySelectorAll('.consult-form select');

formSelects.forEach((select) => {
  let firstOption = select.querySelector('option[disabled][selected]'),
    options = select.querySelectorAll('option');

  options.forEach((option) => {
    if (option !== firstOption) {
      option.remove();
    }
  });

  let tableRows = document.querySelectorAll('#pricelist tbody tr');

  // Создаем новые пункты option на основе данных из таблицы
  tableRows.forEach((row, index) => {
    const serviceName = row.cells[0].textContent;

    const serviceId = index + 1;

    const newOption = document.createElement('option');

    newOption.value = serviceId;

    newOption.textContent = serviceName;

    select.appendChild(newOption);
  });
});

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

      // Из кнопки приходит ключ услуги
      if (e.currentTarget.getAttribute('data-appointment-type')) {
        let selectItems = modal.querySelectorAll('select option');

        selectItems.forEach((item) => {
          if (
            e.currentTarget.getAttribute('data-appointment-type') ==
            item.getAttribute('value')
          ) {
            item.setAttribute('selected', true);
          }
        });
      }
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

const datepickers = document.querySelectorAll('[data-input-type="datepicker"]');

datepickers.forEach((picker) => {
  new Datepicker(picker, {
    i18n: {
      months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    },
    weekStart: 1,
    min: currentDate,
  });
});
