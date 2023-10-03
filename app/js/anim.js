window.onload = function () {
  "use strict";
  const windowInnerWidth = window.innerWidth

  if (windowInnerWidth > 576) {

    anime({
      targets: '.form__img_1',
      opacity: [0, 1],
    });
    
    anime({
      targets: '.form__img_2',
      opacity: [0, 1],
    });

    anime({
      targets: '.form__title',
      opacity: [0, 1],
      translateY: [80, 0],
      delay: 500,
      easing: 'easeInOutExpo',
      duration: 1000
    });

    anime({
      targets: '.form__subtitle',
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 900,
      easing: 'easeInOutExpo',
      duration: 1000

    });
  }





}