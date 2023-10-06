import {
  animationNumber
} from './anim.js';
window.addEventListener("load", function () {

  "use strict";
  let phone_two = localStorage.getItem("phone_ls");
  //localStorage.removeItem("phone_ls");
  //localStorage.clear();

  //after sent
  let stepTwo = () => {
    
  }
  //after sent

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

  const URL_APP_2 = "https://script.google.com/macros/s/AKfycbxHC4gohunY5rmCZ5Z4dNMkA-Pz7LPFTuGYbWrZoYjmIFTmznxHrMryLRJUFNa5DqdZ1w/exec"

  const form2 = document.querySelector("#form2");
  // // указываем адрес отправки формы (нужно только в начале примера)
  form2.action = URL_APP_2;

  form2.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    let details = {
      phoneTwo: phoneInput.value.replace("+", "").replace(/\s/g, ""),
      phoneOld: phone_two.replace("+", "").replace(/\s/g, "")
    };
    console.log(details)
    // подготавливаем данные для отправки
    let formBody2 = [];
    for (let property in details) {
      // кодируем названия и значения параметров
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody2.push(encodedKey + "=" + encodedValue);
    }

    // склеиваем параметры в одну строку
    formBody2 = formBody2.join("&");
    // выполняем отправку данных в Google Apps
    console.log(formBody2)
    const result = await fetch(URL_APP_2, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        mode: "cors", //<- оставим по умолчанию
        body: formBody2,
      })
      .then((res) => {
        console.log(res)
        res.json()
        if (res.status === 200) {
          console.log('Записано в гугл таблицу')
          stepTwo()
        }
        if (res.type === 'error') {
          alert("Error", res.errors)
          console.log(`Ошибка( ${res.errors}`)
        }

      })
      .catch((err) => console.log("Ошибка!", err))
  })

  

  animationNumber()
  let video1 = document.getElementById('number__video_1')
  video1.addEventListener('canplaythrough', function () {
    vidControls.classList.remove('hidden');
    videoEl.volume = volumeControl.value;
  }, false);
  video1.play();

});