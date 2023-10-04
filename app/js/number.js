import {
  animationNumber
} from './anim.js';
window.addEventListener("load", function () {

  "use strict";
  let phone_two = localStorage.getItem("phone_ls");
  localStorage.removeItem("phone_ls");
  localStorage.clear();

  if (phone_two !== null) {
    document.querySelector('.number__input[name="phone-two"]').value = phone_two
  }

  let btnOn = true
  let numberBtn = document.querySelector('.number__btn')
  let phoneInput = document.querySelector('.number__input[name="phone-two"]')
  phoneInput.addEventListener('input', () => {
    let value = phoneInput.value
    if (value.length === 16) {
      phoneInput.classList.remove('_error')
      numberBtn.classList.remove('_hide')
      btnOn = true
    } else {
      phoneInput.classList.add('_error')
      numberBtn.classList.add('_hide')
      btnOn = false
    }
  })

  numberBtn.addEventListener('click', () => {
    console.log("отпраилось")
  })

  animationNumber()
});