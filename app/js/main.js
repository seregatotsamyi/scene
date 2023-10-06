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
    valueObj.newProject = document.querySelector('input[name="newProject"]:checked').value
    validateAll(false)
  }

  newProjectInputs.forEach((item, i) => {
    item.addEventListener('change', () => updateProjectValue(i))
  })

  //new-project

  //inputs
  let phoneInput = document.querySelector('.form__input[name="phone"]')
  let reviewInput = document.querySelector('.form__input[name="reviews"]')
  let reviewBadInput = document.querySelector('.form__input[name="reviewsBad"]')
  let wishesInput = document.querySelector('.form__input[name="wishes"]')

  //inputs

  //validate
  let validatePhone = (value, option) => {

    const validateSuccess = value.length === 16

    if (option) {
      phoneInput.classList.remove(validateSuccess ? '_error' : '_complete')
      phoneInput.classList.add(validateSuccess ? '_complete' : '_error')
    }

    if (validateSuccess) {
      valueObj.phone = true
      showAllForm()
    } else {
      valueObj.phone = false
    }

  }

  let validateReview = (value, arr, option) => {

    const validateSuccess = value.length > 3
    if (option) {
      arr.classList.remove(validateSuccess ? "_error" : "_complete")
      arr.classList.add(validateSuccess ? '_complete' : "_error")
    }

    validateSuccess ? valueObj.review = true : valueObj.review = false

  }
  let validateWishes = (value, option) => {

    const validateSuccess = value.length > 3

    validateSuccess ? valueObj.wishes = true : valueObj.wishes = false

    if (option) {
      wishesInput.classList.remove(validateSuccess ? "_error" : "_complete")
      wishesInput.classList.add(validateSuccess ? '_complete' : "_error")
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
            if (document.querySelector('input[name="newProject"]:checked') === null) {
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
    res === true ? $('.form__btn').addClass('_active') : $('.form__btn').removeClass('_active')

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

    let bedReview = $('.form__item-wrap[data-option="bed"]')
    let niceReview = $('.form__item-wrap[data-option="nice"]')

    if (valueObj.phone && valueObj.rating && !valueObj.showAll) {
      valueObj.showAll = true
      valueObj.ratingOld = valueObj.rating

      if (valueObj.rating > 3) {
        bedReview.hide()
        niceReview.fadeIn()
      } else {
        niceReview.hide()
        bedReview.fadeIn()
      }

      animationReviews()

      $('.form__item-wrap._end-anim').slideDown()
      $('.form__btn').fadeIn()
      animationEnd()
    }

    if (valueObj.phone && valueObj.rating && valueObj.showAll) {
      if (valueObj.ratingOld > 3 && valueObj.rating <= 3) {
        valueObj.ratingOld = valueObj.rating
        niceReview.hide()
        bedReview.fadeIn()
        animationReviews()
      }
      if (valueObj.ratingOld <= 3 && valueObj.rating > 3) {
        valueObj.ratingOld = valueObj.rating
        bedReview.hide()
        niceReview.fadeIn()
        animationReviews()
      }

    }

  }


  const URL_APP = "https://script.google.com/macros/s/AKfycbxHC4gohunY5rmCZ5Z4dNMkA-Pz7LPFTuGYbWrZoYjmIFTmznxHrMryLRJUFNa5DqdZ1w/exec"


  const form = document.querySelector("#form");
  // указываем адрес отправки формы (нужно только в начале примера)
  if (form) {
    form.action = URL_APP;
    // навешиваем обработчик на отправку формы
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      if (validateAll(true)) {

        let details = {
          phone: phoneInput.value.replace("+", "").replace(/\s/g, ""),
          raiting: valueObj.rating,
          reviews: reviewInput.value,
          reviewsBad: reviewBadInput.value,
          wishes: wishesInput.value,
          newProject: valueObj.newProject,
        };
        // подготавливаем данные для отправки
        let formBody = [];
        for (let property in details) {
          // кодируем названия и значения параметров
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }

        // склеиваем параметры в одну строку
        formBody = formBody.join("&");
        console.log(formBody)
        // выполняем отправку данных в Google Apps
        $('.preloader').fadeIn()
        const result = await fetch(URL_APP, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            mode: "cors", //<- оставим по умолчанию
            body: formBody,
          })
          .then(async (res) => {
            console.log(res)
            $('.preloader').fadeOut()
            res.json()
            if (res.status === 200) {
              console.log('Записано в гугл таблицу')
              if (valueObj.newProject === "yes") {
                let resultSend = await sendEmail()
              }
              if (valueObj.rating > 3) {
                let reviews = reviewInput.value
                let phoneV = phoneInput.value.replace("+", "").replace(/\s/g, "")
                localStorage.setItem("reviews_ls", reviews)
                localStorage.setItem("phone_ls", phoneV)
               document.location.href = '/thank.html';
              } else {
                document.location.href = '/thank-two.html';
              }
            }
            if (res.type === 'error') {
              alert("Error", res.errors)
              console.log(`Ошибка( ${res.errors}`)
            }

          })
          .catch((err) => console.log("Ошибка!", err))


      } else {
        alert('Заполните все поля')
      }

    });
  }






  let sendEmail = async () => {

    let formData = $("#form").serialize();
    await $.ajax({
      url: 'mail.php',
      method: 'POST',
      data: formData,
      dataType: 'json',
      encoding: true,
      success: response => {
        if (response == 1) {} else {
          alert('Произошла ошибка');
        }
      },
      error: function (jqXHR, exception) {
        if (jqXHR.status === 0) {
          alert('Not connect. Verify Network.');
        } else if (jqXHR.status == 404) {
          alert('Requested page not found (404).');
        } else if (jqXHR.status == 500) {
          alert('Internal Server Error (500).');
        } else if (exception === 'parsererror') {
          alert('Requested JSON parse failed.');
        } else if (exception === 'timeout') {
          alert('Time out error.');
        } else if (exception === 'abort') {
          alert('Ajax request aborted.');
        } else {
          alert('Uncaught Error. ' + jqXHR.responseText);
        }
      }
    })
  }







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