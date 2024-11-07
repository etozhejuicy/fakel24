const reviews = [];

// model of items
const itemsModel = [reviews];

// flat array of items
const items = itemsModel.flat();

function createTabs(items) {
  const categories = [...new Set(items.map((item) => item.type))];

  const categoryItems = categories.map((category) =>
    items.find((item) => item.type === category)
  );

  categoryItems.forEach((item) => {
    console.log(item.type);
  });
}

createTabs(items);

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

// swiper reviews init
if (document.getElementsByClassName("section-reviews").length) {
  var swiperReviews = new Swiper(".swiper-reviews", {
    slidesPerView: "auto",
    spaceBetween: 20,
    grid: {
      rows: 1,
      fill: "row",
    },
    breakpoints: {
      0: {
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
        let activeSlide = swiperReviews.slides[swiperReviews.activeIndex],
          category = activeSlide.getAttribute("swiper-slide-type");

        tabs.forEach((tab) => {
          if (tab.getAttribute("swiper-item-type") == category) {
            tab.classList.add("active");
          } else {
            tab.classList.remove("active");
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
