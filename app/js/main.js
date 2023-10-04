import {
  animation,
  animationReviews,
  animationEnd
} from './anim.js';

window.onload = function () {

  "use strict";

  animation()

  //rating-data
  let valueObj = {
    phone: false,
    rating: false,
    ratingOld: false,
    review: false,
    wishes: false,
    newProject: false,
    showAll: false
  }
  //rating-data

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

    valueObj.rating = document.querySelector('input[name="raiting"]:checked').value

    showAllForm()

  }

  ratingInputs.forEach((item, i) => {
    item.addEventListener('change', () => changeRating(i))
  })
  //rating


  //new-project
  let newProjectInputs = document.querySelectorAll('.new-project__input')
  let newProjectLabels = document.querySelectorAll('.new-project__label')

  let updateProjectValue = (i) => {
    newProjectLabels.forEach((item) => {
      item.classList.remove('_checked')
      item.classList.remove('_error')
    })
    newProjectLabels[i].classList.add('_checked')
    valueObj.newProject = document.querySelector('input[name="new-project"]:checked').value
    validateAll(false)
  }

  newProjectInputs.forEach((item, i) => {
    item.addEventListener('change', () => updateProjectValue(i))
  })

  //new-project

  //inputs
  let phoneInput = document.querySelector('.form__input[name="phone"]')
  let reviewInput = document.querySelector('.form__input[name="reviews"]')
  let reviewBadInput = document.querySelector('.form__input[name="reviews-bad"]')
  let wishesInput = document.querySelector('.form__input[name="wishes"]')

  //inputs

  //validate
  let validatePhone = (value, option) => {
    if (value.length === 16) {
      valueObj.phone = true
      if (option) {
        phoneInput.classList.remove('_error')
        phoneInput.classList.add('_complete')
      }
      showAllForm()

    } else {
      valueObj.phone = false
      if (option) {
        phoneInput.classList.remove('_complete')
        phoneInput.classList.add('_error')
      }

    }
  }
  let validateReview = (value, arr, option) => {
    if (value.length > 3) {
      valueObj.review = true
      if (option) {
        arr.classList.remove('_error')
        arr.classList.add('_complete')
      }

    } else {
      valueObj.review = false
      if (option) {
        arr.classList.add('_error')
        arr.classList.remove('_complete')
      }

    }
  }
  let validateWishes = (value, option) => {
    if (value.length > 3) {
      valueObj.wishes = true
      if (option) {
        wishesInput.classList.remove('_error')
        wishesInput.classList.add('_complete')
      }

    } else {
      valueObj.wishes = false
      if (option) {
        wishesInput.classList.remove('_complete')
        wishesInput.classList.add('_error')
      }

    }
  }
  let validateAll = (option) => {
    let res = true
    for (let key in valueObj) {
      if (valueObj[key] === false) {
        res = false
        switch (key) {
          case "review": {
            validateReview(reviewInput.value, reviewInput, option)
            validateReview(reviewBadInput.value, reviewBadInput, option)
            break
          }
          case "wishes": {
            validateWishes("", option)
            break
          }
          case "newProject": {
            if (document.querySelector('input[name="new-project"]:checked') === null) {
              if (option) {
                newProjectLabels.forEach((item) => {
                  item.classList.remove('_checked')
                  item.classList.add('_error')
                })
              }
            }
            break
          }
        }
      }
    }
    if (res) {
      $('.form__btn').addClass('_active')
    } else {
      $('.form__btn').removeClass('_active')
    }
    return res
  }
  //validate

  //logic form

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      validatePhone(phoneInput.value, true)
      validateAll(false)
    })
  }

  if (reviewInput) {
    reviewInput.addEventListener('change', () => {
      validateReview(reviewInput.value, reviewInput, true)
      validateAll(false)
    })
  }

  if (reviewBadInput) {
    reviewBadInput.addEventListener('change', () => {
      validateReview(reviewBadInput.value, reviewBadInput, true)
      validateAll(false)
    })
  }

  if (wishesInput) {
    wishesInput.addEventListener('change', () => {
      validateWishes(wishesInput.value, true)
      validateAll(false)
    })
  }


  let showAllForm = () => {

    if (valueObj.phone && valueObj.rating && !valueObj.showAll) {
      valueObj.showAll = true
      valueObj.ratingOld = valueObj.rating

      if (valueObj.rating > 3) {
        $('.form__item-wrap[data-option="bed"]').hide()
        $('.form__item-wrap[data-option="nice"]').fadeIn()
      } else {
        $('.form__item-wrap[data-option="nice"]').hide()
        $('.form__item-wrap[data-option="bed"]').fadeIn()
      }

      animationReviews()

      $('.form__item-wrap._end-anim').slideDown()
      $('.form__btn').fadeIn()
      animationEnd()
    }

    if (valueObj.phone && valueObj.rating && valueObj.showAll) {
      if (valueObj.ratingOld > 3 && valueObj.rating <= 3) {
        valueObj.ratingOld = valueObj.rating
        $('.form__item-wrap[data-option="nice"]').hide()
        $('.form__item-wrap[data-option="bed"]').fadeIn()
        animationReviews()
      }
      if (valueObj.ratingOld <= 3 && valueObj.rating > 3) {
        valueObj.ratingOld = valueObj.rating
        $('.form__item-wrap[data-option="bed"]').hide()
        $('.form__item-wrap[data-option="nice"]').fadeIn()
        animationReviews()
      }

    }

  }

  $('#form').on('submit', function (event) {
    event.preventDefault();

    let formData = $(this).serialize();

    if (validateAll(true)) {
      alert("Отправка успешна")
      if (valueObj.rating > 3) {
        let reviews = reviewInput.value
        let phoneV = phoneInput.value
        localStorage.setItem("reviews_ls", reviews)
        localStorage.setItem("phone_ls", phoneV)
        document.location.href = '/thank.html';
      } else {
        document.location.href = '/thank-two.html';
      }

    } else {
      alert('Валидация')
    }


    // $.ajax({
    //   url: 'mail.php',
    //   method: 'POST',
    //   data: formData,
    //   dataType: 'json',
    //   encoding: true,
    //   success: response => {
    //     if (response == 1) {
    //       step = 5;
    //       quizNext();
    //       $('#quiz-form')[0].reset();
    //       window.location.href = '/thanks-quiz.html';

    //     } else {
    //       alert('Произошла ошибка');
    //     }
    //   },
    //   error: function (jqXHR, exception) {
    //     if (jqXHR.status === 0) {
    //       alert('Not connect. Verify Network.');
    //     } else if (jqXHR.status == 404) {
    //       alert('Requested page not found (404).');
    //     } else if (jqXHR.status == 500) {
    //       alert('Internal Server Error (500).');
    //     } else if (exception === 'parsererror') {
    //       alert('Requested JSON parse failed.');
    //     } else if (exception === 'timeout') {
    //       alert('Time out error.');
    //     } else if (exception === 'abort') {
    //       alert('Ajax request aborted.');
    //     } else {
    //       alert('Uncaught Error. ' + jqXHR.responseText);
    //     }
    //   }
    // });
  })
  //logic form

  //mob-menu
  let body = $('.body');
  let toggleMenuBtn = $("#toggle-menu")
  let mobMenu = $('#mobMenu')
  toggleMenuBtn.on('click', () => {
    toggleMenuBtn.toggleClass('_active')
    body.toggleClass('_fixed')
    mobMenu.toggleClass('_open')
  })
  //mob-menu


};