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
      ratingBtns[count].classList.add('_gold')
    }

    showAllForm(document.querySelector('input[name="raiting"]:checked').value)
  }

  ratingInputs.forEach((item, i) => {
    item.addEventListener('change', () => changeRating(i))
  })
  //rating


  //new-project

  let newProjectInputs = document.querySelectorAll('.new-project__input')
  let newProjectLabels = document.querySelectorAll('.new-project__label')

  let updateProjectValue = (i) => {
    newProjectLabels.forEach((item) => item.classList.remove('_checked'))
    newProjectLabels[i].classList.add('_checked')
  }

  newProjectInputs.forEach((item, i) => {
    item.addEventListener('click', () => updateProjectValue(i))
  })

  //new-project


  //logic form
  let showAllForm = (value) => {
    console.log("Показываю форму " + value)
  }
  //logic form



};


$(function () {
  let width = $(window).width();
  let body = $('.body');
});