window.onload = function () {
  "use strict";

  //rating
  let ratingBtns = document.querySelectorAll('.raiting__label')
  let ratingInputs = document.querySelectorAll('.raiting__input')

  let changeRating = (i) => {
    let cls = ['_current', '_gold']
    ratingBtns.forEach((item) => item.classList.remove(...cls))
    ratingBtns[i].classList.add('_current')

    for (let count = 0; count <= i; count++) {
      let parent = ratingInputs[count].closest('.raiting__item')
      parent.querySelector('.raiting__label').classList.add('_gold')
    }
    showAllForm(i + 1)
  }

  ratingBtns.forEach((item, i) => {
    item.addEventListener('click', () => changeRating(i))
  })
  //rating

  let showAllForm = (value) => {
    console.log("Показываю форму " + value)
  }

};


$(function () {
  let width = $(window).width();
  let body = $('.body');
});