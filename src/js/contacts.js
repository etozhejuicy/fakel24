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

// service button fix
const serviceButton = document.querySelectorAll('[data-appointment-type]');

// предотвращает переход по ссылке для всех сервисных карточек с кнопкой
serviceButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('Кнопка нажата, переход по ссылке предотвращен.');
    });
});

// modals logic
const openModalButtons = document.querySelectorAll('[data-modal-open]');
const closeButtons = document.querySelectorAll('[btn-close-modal]');

openModalButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        const modalKey = e.currentTarget.getAttribute('data-modal-open');
        const modal = document.querySelector('[data-modal-id="' + modalKey + '"]');
        if (modal) {
            modal.classList.add('show');
            document.documentElement.classList.add('modal-open');
        }
    });
});

closeButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const modal = button.closest('.modal');
        if (modal) {
            modal.classList.remove('show');
            document.documentElement.classList.remove('modal-open');
        }
    });
});

window.addEventListener('click', function(event) {
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


// map logic
document.getElementById('map-preview').addEventListener('click', (e) => {
    e.preventDefault();
    // Скрыть скриншот и показать контейнер для карты
    document.getElementById('map').classList.remove('preview');
    document.getElementById('map-preview').style.display = 'none';
    document.getElementById('map-source').style.display = 'block';

    // Подгрузка скрипта карты
    const script = document.createElement('script');
    script.src =
        'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac96fd1d6812b0862b53f34e6337afe3a3353a9c02a4a2d3592090f83a5e4040d&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=disable';
    script.defer = true;
    document.getElementById('map-source').appendChild(script);
});