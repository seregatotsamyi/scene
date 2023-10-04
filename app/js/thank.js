import {
  animationThank
} from './anim.js';
window.addEventListener("load", function () {

  "use strict";
  let reviews_two = localStorage.getItem("reviews_ls");
  localStorage.removeItem("reviews_ls");

  if (reviews_two !== null) {
    document.querySelector('#reviewsInner').textContent = reviews_two
  }

  let linkBtn = document.querySelector('.thank__btn-link')
  linkBtn.addEventListener('click', () => {
    window.open('https://yandex.ru/maps/org/pro_stsena/161666817213/reviews/?ll=44.057576%2C56.373016&z=17', '_blank');
    document.location.href = '/number.html';

  })
  animationThank()
});