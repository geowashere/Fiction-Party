// const passEye = document.querySelector('.pass_eye');
// const inputPassword = document.querySelector('#myInput');
const fontIcon = document.querySelector('.fa-circle-chevron-down');
const hoverElement = document.querySelector('.before');
// passEye.addEventListener('click', function () {
//   alert('hi');
//   inputPassword.setAttribute('type', 'text');
// });

// ///////////////////////////////
// SWIPER
// var swiper = new Swiper('.mySwiper', {
//   spaceBetween: 30,
//   effect: 'fade',
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
// /////////////////////////////////////////////
const faqs = document.querySelectorAll('.faq');
const faqQuestion = document.querySelector('.question');
const qspan = document.querySelector('.qspan');

faqs.forEach(faq => {
  faq.addEventListener('click', function () {
    faq.classList.toggle('active');
  });
});

const list = document.querySelector('.list');
