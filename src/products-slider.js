var swiper = new Swiper(".myswiper", {
  slidesPerView: 5,
  spaceBetween: 18,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});
