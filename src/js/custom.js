// mainCard init
const mainCard = document.querySelector("[data-card-main]");
const techCard = document.querySelector("[data-card-tech]");

// header script
const logo = document.querySelector(".header-logo");
const mainMenu = document.querySelector(".menu");
const headerTop = document.querySelector(".header-top");
const header = document.querySelector("header");
const headerModalBtn = document.querySelector(".header-modal-btn");

window.addEventListener("scroll", setFixedHeader);
window.addEventListener("resize", setFixedHeader);
window.addEventListener("DOMContentLoaded", setFixedHeader);

function setFixedHeader() {
	if (window.innerWidth >= 1200) {
		if (window.scrollY >= 1) {
			logo.classList.add("scroll");
			mainMenu.classList.add("scroll");
			headerModalBtn.classList.add("scroll");
		} else {
			logo.classList.remove("scroll");
			mainMenu.classList.remove("scroll");
			headerModalBtn.classList.remove("scroll");
		}
	} else {
		logo.classList.remove("scroll");
		mainMenu.classList.remove("scroll");
		headerModalBtn.classList.remove("scroll");
	}
}

// fix header script classList before load
// window.addEventListener('DOMContentLoaded', () => {
//   logo.classList.remove('scroll');
//   mainMenu.classList.remove('scroll');
//   headerModalBtn.classList.remove('scroll');
// });

// for dropdown menu icon
const dropdownItem = document.querySelectorAll(".menu-dropdown");

function dropdownMenu() {
	if (window.innerWidth >= 1200) {
		dropdownItem.forEach((item) => {
			item.addEventListener("mouseenter", () => {
				if (item.classList.contains("opened")) {
					item.classList.remove("opened");
				} else {
					item.classList.add("opened");
				}
			});
			item.addEventListener("mouseleave", () => {
				if (item.classList.contains("opened")) {
					item.classList.remove("opened");
				} else {
					item.classList.remove("opened");
				}
			});
		});
	}
}

window.addEventListener("DOMContentLoaded", dropdownMenu);
window.addEventListener("resize", dropdownMenu);

// for low-level dropdown
const linkDropdownItems = document.querySelectorAll(".link-dropdown");

function downDropdownMenu() {
	linkDropdownItems.forEach((item) => {
		const linkDropdownList = item.nextElementSibling;

		item.removeEventListener("mouseenter", handleMouseEnter);
		item.removeEventListener("mouseleave", handleMouseLeave);
		item.removeEventListener("click", handleClick);
		item.querySelector("i").removeEventListener("click", handleIconClick);

		if (window.innerWidth >= 1200) {
			item.addEventListener("mouseenter", handleMouseEnter);
			item.addEventListener("mouseleave", handleMouseLeave);
		} else {
			item.addEventListener("click", handleClick);

			const icon = item.querySelector("i");
			if (icon) {
				icon.addEventListener("click", handleIconClick);
			}
		}

		if (linkDropdownList) {
			linkDropdownList.addEventListener("mouseenter", () => {
				linkDropdownList.classList.add("opened");
			});

			linkDropdownList.addEventListener("mouseleave", () => {
				item.classList.remove("opened");
				linkDropdownList.classList.remove("opened");
			});
		}
	});
}

function handleMouseEnter(e) {
	const linkDropdownList = e.currentTarget.nextElementSibling;

	if (linkDropdownList) {
		e.currentTarget.classList.add("opened");
		linkDropdownList.classList.add("opened");
	}
}

function handleMouseLeave(e) {
	const linkDropdownList = e.currentTarget.nextElementSibling;

	if (linkDropdownList) {
		// setTimeout(() => {
		//   if (
		//     !linkDropdownList.matches(':hover') &&
		//     !e.currentTarget.matches(':hover')
		//   ) {
		//     linkDropdownList.classList.remove('opened');
		//   }
		// }, 100);
		if (!linkDropdownList.matches(":hover")) {
			e.currentTarget.classList.remove("opened");
		}
		linkDropdownList.classList.remove("opened");
	}
}

function handleClick(e) {
	const linkDropdownList = e.currentTarget.nextElementSibling;

	if (window.innerWidth >= 1200) {
		if (linkDropdownList) {
			const isOpened = linkDropdownList.classList.contains("opened");

			linkDropdownItems.forEach((item) => {
				const dropdownList = item.nextElementSibling;
				if (dropdownList) {
					dropdownList.classList.remove("opened");
					item.classList.remove("opened");
				}
			});

			if (!isOpened) {
				e.currentTarget.classList.add("opened");
				linkDropdownList.classList.add("opened");
			}
		}
	}
}

function handleIconClick(e) {
	e.stopPropagation();
	e.preventDefault();

	const linkDropdownList =
		e.currentTarget.closest(".link-dropdown").nextElementSibling;

	if (linkDropdownList) {
		const isOpened = linkDropdownList.classList.contains("opened");

		linkDropdownItems.forEach((item) => {
			const dropdownList = item.nextElementSibling;
			if (dropdownList) {
				dropdownList.classList.remove("opened");
				item.classList.remove("opened");
			}
		});

		if (!isOpened) {
			e.currentTarget.closest(".link-dropdown").classList.add("opened");
			linkDropdownList.classList.add("opened");
		}
	}
}

window.addEventListener("DOMContentLoaded", downDropdownMenu);
window.addEventListener("resize", downDropdownMenu);

// mobile-menu
const menuOpenElems = document.querySelectorAll("[data-menu-open]");
const menuCloseElems = document.querySelectorAll("[data-menu-close]");

// mobile-menu
function mobileMenu() {
	if (window.innerWidth <= 1200) {
		menuOpenElems.forEach((menuOpenElem) => {
			menuOpenElem.addEventListener("click", () => {
				openMenu();
			});
		});

		menuCloseElems.forEach((menuCloseElem) => {
			menuCloseElem.addEventListener("click", () => {
				closeMenu();
			});
		});
	}
}

function openMenu() {
	mainMenu.classList.add("menu-show");
	document.documentElement.classList.add("menu-open");
}

function closeMenu() {
	mainMenu.classList.remove("menu-show");
	document.documentElement.classList.remove("menu-open");
}

window.addEventListener("DOMContentLoaded", mobileMenu);
window.addEventListener("scroll", mobileMenu);
window.addEventListener("resize", mobileMenu);

// service button fix
const serviceButton = document.querySelectorAll("[data-appointment-type]");

// предотвращает переход по ссылке для всех сервисных карточек с кнопкой
serviceButton.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log("Кнопка нажата, переход по ссылке предотвращен.");
	});
});

// modals logic
const openModalButtons = document.querySelectorAll("[data-modal-open]");
const closeButtons = document.querySelectorAll("[btn-close-modal]");

openModalButtons.forEach((button) => {
	button.addEventListener("click", function (e) {
		const modalKey = e.currentTarget.getAttribute("data-modal-open");
		const modal = document.querySelector(
			'[data-modal-id="' + modalKey + '"]'
		);
		if (modal) {
			modal.classList.add("show");
			document.documentElement.classList.add("modal-open");

			// Из кнопки приходит ключ услуги
			if (e.currentTarget.getAttribute("data-appointment-type")) {
				let selectItems = modal.querySelectorAll("select option");

				selectItems.forEach((item) => {
					if (
						e.currentTarget.getAttribute("data-appointment-type") ==
						item.getAttribute("value")
					) {
						item.setAttribute("selected", true);
					}
				});
			}
		}
	});
});

closeButtons.forEach((button) => {
	button.addEventListener("click", function () {
		const modal = button.closest(".modal");
		if (modal) {
			modal.classList.remove("show");
			document.documentElement.classList.remove("modal-open");
		}
	});
});

window.addEventListener("click", function (event) {
	const modals = document.querySelectorAll(".modal");
	modals.forEach((modal) => {
		if (event.target === modal) {
			modal.classList.remove("show");
			document.documentElement.classList.remove("modal-open");
		}
	});
});

// new form logic
if (document.querySelector(".service-page")) {
	let formSelects = document.querySelectorAll(".consult-form select");

	formSelects.forEach((select) => {
		let options = select.querySelectorAll("option");

		options.forEach((option) => {
			// Сравнение атрибута [data-service-value] у хлебных крошек и текста у опции списка в форме
			if (
				document
					.querySelector("[data-service-value]")
					.getAttribute("data-service-value") == option.innerText
			) {
				option.selected = true;
			}

			if (
				document
					.querySelector(".modal .consult-form select option")
					.getAttribute("value-id") ==
				document.querySelector(
					".section-consult .consult-form select option"
				)
			) {
				console.log(1);
				option.selected = true;
			}
		});
	});
}

// Валидация полей телефона в формах с классом .consult-form
if (document.querySelector("form.consult-form")) {
	const forms = document.querySelectorAll("form.consult-form");

	forms.forEach((form) => {
		const phoneInput = form.querySelector('input[type="tel"]');

		// Если поле телефона есть, добавляем обработчики
		if (phoneInput) {
			// Обработчик отправки формы
			form.addEventListener("submit", function (e) {
				if (!isPhoneValid(phoneInput)) {
					e.preventDefault(); // Блокируем отправку
					showError(
						phoneInput,
						"Пожалуйста, введите полный номер телефона"
					);
				}
			});

			// Обработчик изменения поля (для мгновенной обратной связи)
			phoneInput.addEventListener("input", () => {
				if (isPhoneValid(phoneInput)) {
					hideError(phoneInput);
				}
			});

			// Обработчик фокуса (убираем ошибку при редактировании)
			phoneInput.addEventListener("focus", () => {
				hideError(phoneInput);
			});
		}
	});

	// Функция проверки валидности телефона
	function isPhoneValid(input) {
		const value = input.value.trim();
		const maskComplete = input.inputmask?.isComplete?.(); // Проверка маски от inputmask

		// Условия валидности:
		// 1. Значение не пустое
		// 2. Маска полностью заполнена (если поддерживается)
		// 3. Либо проверяем по регулярному выражению (если маска не доступна)
		return (
			value !== "" && (maskComplete || /^\+\d{1,3}\d{10,14}$/.test(value))
		);
	}

	// Показ ошибки
	function showError(input, message) {
		let errorEl = input.nextElementSibling;

		if (!errorEl || !errorEl.classList.contains("error-message")) {
			errorEl = document.createElement("div");
			errorEl.className = "error-message";
			errorEl.style.color = "red";
			errorEl.style.fontSize = "0.875rem";
			errorEl.style.marginTop = "0.25rem";
			input.parentNode.insertBefore(errorEl, input.nextSibling);
		}

		errorEl.textContent = message;
		input.style.borderColor = "red";
	}

	// Скрытие ошибки
	function hideError(input) {
		const errorEl = input.nextElementSibling;
		if (errorEl && errorEl.classList.contains("error-message")) {
			errorEl.remove();
		}
		input.style.borderColor = "";
	}
}

// reviews
if (document.querySelector(".reviews-page")) {
	// reviews logic
	const tabs = document.querySelectorAll("[tabs-list] [review-tab-type]");

	// go to first slide on tab
	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			let category = tab.getAttribute("review-tab-type");

			showActiveReviews(category);
			setActiveTab(tab);
		});
	});

	function showActiveReviews(category) {
		const items = document.querySelectorAll("[review-item-type]"); // Исправлено на '[review-item-type]'

		items.forEach((item) => {
			if (category === "all") {
				item.style.display = "flex";
			} else {
				if (item.getAttribute("review-item-type") === category) {
					item.style.display = "flex";
				} else {
					item.style.display = "none";
				}
			}
		});
	}

	function setActiveTab(activeTab) {
		tabs.forEach((tab) => {
			tab.classList.remove("active"); // Убедитесь, что класс называется 'active'
		});

		activeTab.classList.add("active");
	}
}

// datepicker
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

currentDate.setDate(currentDate.getDate() + 1);

const datepickers = document.querySelectorAll('[data-input-type="datepicker"]');

datepickers.forEach((picker) => {
	new Datepicker(picker, {
		i18n: {
			months: [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь",
			],
			weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		},
		weekStart: 1,
		min: currentDate,
	});
});

// map logic
document.getElementById("map-preview").addEventListener("click", (e) => {
	e.preventDefault();
	// Скрыть скриншот и показать контейнер для карты
	document.getElementById("map").classList.remove("preview");
	document.getElementById("map-preview").style.display = "none";
	document.getElementById("map-source").style.display = "block";

	// Подгрузка скрипта карты
	const script = document.createElement("script");
	script.src =
		"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac96fd1d6812b0862b53f34e6337afe3a3353a9c02a4a2d3592090f83a5e4040d&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=disable";
	script.defer = true;
	document.getElementById("map-source").appendChild(script);
});

// reviews logic
const reviews = [];

// model of items
const itemsModel = [reviews];

// flat array of items
const items = itemsModel.flat();

const tabs = document.querySelectorAll("[tabs-list] [swiper-item-type]");

// go to first slide on tab
tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		let category = tab.getAttribute("swiper-item-type");

		goToFirstSlide(category);
	});
});

function activeTab() {
	let activeSlide = swiperReviews.slides[swiperReviews.activeIndex],
		category = activeSlide.getAttribute("swiper-slide-type");

	tabs.forEach((tab) => {
		if (tab.getAttribute("swiper-item-type") == category) {
			tab.classList.add("active");
		} else {
			tab.classList.remove("active");
		}
	});
}

function goToFirstSlide(category) {
	const slides = swiperReviews.slides;

	let firstSlideIndex = -1;

	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];

		if (slide.getAttribute("swiper-slide-type") == category) {
			firstSlideIndex = i;

			break;
		} else {
			swiperReviews.slideTo(firstSlideIndex);
		}
	}

	if (firstSlideIndex !== -1) {
		swiperReviews.slideTo(firstSlideIndex);
	}
}

if (document.querySelector(".swiper-container")) {
	// swiper main init
	if (document.querySelector(".section-main-swiper")) {
		var swiperMain = new Swiper(".swiper-main", {
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 400,
			autoplay: true,
			rewind: true,
			scrollbar: {
				enabled: false,
			},
			pagination: {
				el: ".swiper-main [swiper-pagination]",
				clickable: true,
			},
			navigation: {
				enabled: false,
			},
			allowTouchMove: true,
			grabCursor: true,
			on: {
				init: function () {
					mainCard.querySelector(".card-title").innerText =
						mainCardData[0].title;
					mainCard.querySelector(".card-body p").innerHTML =
						mainCardData[0].desc;
					mainCard
						.querySelector(".card-footer a")
						.setAttribute("href", mainCardData[0].url);
				},
				slideChange: function () {
					let activeSlide = swiperMain.activeIndex;

					mainCard.classList.add("fadeEffect");

					setTimeout(() => {
						mainCard.classList.remove("fadeEffect");
					}, 500);

					mainCard.querySelector(".card-title").innerText =
						mainCardData[activeSlide].title;
					mainCard.querySelector(".card-body p").innerHTML =
						mainCardData[activeSlide].desc;
					mainCard
						.querySelector(".card-footer a")
						.setAttribute("href", mainCardData[activeSlide].url);
				},
			},
		});

		setTimeout(function () {
			if (swiperMain.update) {
				swiperMain.update();
			}
		}, 500);
	}

	// swiper doctor init
	if (document.querySelector(".section-doctors")) {
		var swiperDoctors = new Swiper(".swiper-doctors", {
			spaceBetween: 20,
			breakpoints: {
				0: {
					slidesPerView: 1.25,
					centeredSlides: true,
					loop: true,
					loopedSlides: 2,
				},
				576: {
					slidesPerView: 1.85,
					centeredSlides: true,
					loop: true,
					loopedSlides: 2,
				},
				720: {
					slidesPerView: 2.25,
					centeredSlides: true,
					loop: true,
					loopedSlides: 2,
				},
				800: {
					slidesPerView: 2.65,
					centeredSlides: true,
					loop: true,
					loopedSlides: 2,
				},
				992: {
					slidesPerView: 3,
					centeredSlides: true,
					loop: true,
					loopedSlides: 3,
				},
				1200: {
					slidesPerView: 3.65,
					centeredSlides: false,
					loop: false,
					loopedSlides: 0,
				},
				1400: {
					slidesPerView: 4,
					centeredSlides: false,
					loop: false,
					loopedSlides: 0,
				},
			},
			scrollbar: {
				enabled: false,
			},
			pagination: {
				el: ".swiper-doctors [swiper-pagination]",
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
	if (document.querySelector(".section-technologies")) {
		var swiperTechnologies = new Swiper(".swiper-technologies", {
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 400,
			autoplay: true,
			rewind: true,
			scrollbar: {
				enabled: false,
			},
			pagination: {
				el: ".swiper-technologies [swiper-pagination]",
				clickable: true,
			},
			navigation: {
				enabled: false,
			},
			allowTouchMove: true,
			grabCursor: true,
			on: {
				init: function () {
					techCard.querySelector(".card-title").innerText =
						techCardData[0].title;
					techCard.querySelector("[data-card-tech] p").innerHTML =
						techCardData[0].desc;
				},
				slideChange: function () {
					let activeSlide = swiperTechnologies.activeIndex;

					techCard.classList.add("fadeEffect");

					setTimeout(() => {
						techCard.classList.remove("fadeEffect");
					}, 500);

					techCard.querySelector(".card-title").innerText =
						techCardData[activeSlide].title;
					techCard.querySelector("[data-card-tech] p").innerHTML =
						techCardData[activeSlide].desc;
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
	if (document.querySelector(".section-smile")) {
		var swiperSmiles = new Swiper(".swiper-smiles", {
			spaceBetween: 20,
			noSwipingSelector: ".swiper-smiles .smile-images",
			breakpoints: {
				0: {
					slidesPerView: 1,
					centeredSlides: true,
				},
				720: {
					slidesPerView: 1.75,
					centeredSlides: true,
				},
				992: {
					slidesPerView: 2.5,
					centeredSlides: true,
				},
				1200: {
					slidesPerView: 3,
					centeredSlides: false,
				},
			},
			scrollbar: {
				enabled: false,
			},
			pagination: {
				el: ".swiper-smiles [swiper-pagination]",
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

	// swiper result init
	if (document.querySelector(".section-result")) {
		var swiperResult = new Swiper(".swiper-result", {
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 4,
					grid: {
						rows: 1,
						fill: "row",
					},
				},
				720: {
					slidesPerView: 2,
					spaceBetween: 12,
					grid: {
						rows: 3,
						fill: "row",
					},
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 12,
					grid: {
						rows: 2,
						fill: "row",
					},
				},
			},
			scrollbar: {
				enabled: false,
			},
			pagination: {
				el: ".swiper-result [swiper-pagination]",
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

	// swiper reviews init
	if (document.querySelector(".section-reviews")) {
		var swiperReviews = new Swiper(".swiper-reviews", {
			spaceBetween: 20,
			grid: {
				rows: 1,
				fill: "row",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					centeredSlides: true,
				},
				720: {
					slidesPerView: 1.75,
					centeredSlides: true,
				},
				992: {
					slidesPerView: 2.5,
					centeredSlides: true,
				},
				1200: {
					slidesPerView: 3,
					centeredSlides: false,
				},
			},
			scrollbar: {
				enabled: false,
			},
			pagination: {
				el: ".swiper-reviews [swiper-pagination]",
				clickable: true,
			},
			navigation: {
				enabled: false,
			},
			allowTouchMove: true,
			grabCursor: true,
			on: {
				slideChange: function () {
					let activeSlide =
							swiperReviews.slides[swiperReviews.activeIndex],
						category =
							activeSlide.getAttribute("swiper-slide-type");

					tabs.forEach((tab) => {
						if (tab.getAttribute("swiper-item-type") == category) {
							tab.classList.add("active");
						} else {
							tab.classList.remove("active");
						}

						// Всегда возвращаем на первый таб, если это первый слайд
						if (swiperReviews.activeIndex == 0) {
							tab.classList.remove("active");

							if (tab.getAttribute("swiper-item-type") == "all") {
								tab.classList.add("active");
							}
						}
					});
				},
			},
		});

		setTimeout(function () {
			if (swiperReviews.update) {
				swiperReviews.update();
			}
		}, 500);
	}
}
