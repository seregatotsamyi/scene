import {
  animationThank
} from './anim.js';
window.addEventListener("load", function()  {

  "use strict";
  let reviews_two = localStorage.getItem("reviews_ls");
  localStorage.removeItem("reviews_ls");
  localStorage.clear();
  if (reviews_two !== null) {
    document.querySelector('#reviewsInner').textContent = reviews_two
  }
  animationThank()
});

