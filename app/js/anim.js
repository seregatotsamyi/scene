export let animation = () => {
  "use strict";
  const windowInnerWidth = window.innerWidth

  if (windowInnerWidth > 576) {
    anime({
      targets: '.form__btn-img._a',
      translateY: -10,
      // easing: 'easeInOutExpo',
      duration: 1000,
      loop: true,
      direction: 'alternate'
    });

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

    let animItemFirst = anime({
      targets: '.form__item-wrap:first-child',
      opacity: [0, 1],
      duration: 1400,
      delay: 1600,
    });
    let animItemFirstLeft = anime({
      targets: '.form__item-wrap:first-child .form__left',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: animItemFirst.delay,
      easing: 'easeInOutExpo',
    })
    let animItemFirstImg = anime({
      targets: '.form__item-wrap:first-child .form__img-item',
      scale: [0, 1],
      duration: 1000,
      delay: animItemFirstLeft.delay + 300,
      easing: 'easeInOutExpo',
    })
    let animItemFirstInput = anime({
      targets: '.form__item-wrap:first-child .form__input',
      opacity: [0, 1],
      duration: 1000,
      delay: animItemFirstImg.delay + 500,
      easing: 'easeInOutExpo',
    })
    let animItemSecond = anime({
      targets: '.form__item-wrap:nth-child(2)',
      opacity: [0, 1],
      duration: 1400,
      delay: animItemFirstInput.delay + 100,
    });
    let animItemSecondLeft = anime({
      targets: '.form__item-wrap:nth-child(2) .form__left',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: animItemSecond.delay,
      easing: 'easeInOutExpo',
    })
    let animItemSecondImg = anime({
      targets: '.form__item-wrap:nth-child(2) .form__img-item',
      scale: [0, 1],
      duration: 1000,
      delay: animItemSecondLeft.delay + 300,
      easing: 'easeInOutExpo',
    })
    let animItemSecondRating = anime({
      targets: '.form__item-wrap:nth-child(2) .raiting__item',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: function (el, i, l) {
        return animItemSecondImg.delay + 300 + i * 200;
      },
      easing: 'easeInOutExpo',
    })
    anime({
      targets: '.footer',
      opacity: [0, 1],
      delay: animItemSecondRating.delay + 500
    });

  }
}

export let animationReviews = () => {
  "use strict";
  const windowInnerWidth = window.innerWidth

  if (windowInnerWidth > 576) {
    let animItemReviews = anime({
      targets: '.form__item-wrap[data-option]',
      opacity: [0, 1],
      duration: 1400,
    });
    let animItemReviewsLeft = anime({
      targets: '.form__item-wrap[data-option] .form__left',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: animItemReviews.delay,
      easing: 'easeInOutExpo',
    })
    let animItemReviewsImg = anime({
      targets: '.form__item-wrap[data-option] .form__img-item',
      scale: [0, 1],
      duration: 1000,
      delay: animItemReviewsLeft.delay + 300,
      easing: 'easeInOutExpo',
    })
    let animItemReviewsInput = anime({
      targets: '.form__item-wrap[data-option] .form__input',
      opacity: [0, 1],
      duration: 1000,
      delay: animItemReviewsImg.delay + 500,
      easing: 'easeInOutExpo',
    })
  }
}
export let animationEnd = () => {
  "use strict";
  const windowInnerWidth = window.innerWidth

  if (windowInnerWidth > 576) {
    let animItemEnd = anime({
      targets: '._end-anim-1',
      opacity: [0, 1],
      duration: 1000,
      delay: 1200
    });
    let animItemEndLeft = anime({
      targets: '._end-anim-1 .form__left',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: animItemEnd.delay,
      easing: 'easeInOutExpo',
    })
    let animItemEndImg = anime({
      targets: '._end-anim-1 .form__img-item',
      scale: [0, 1],
      duration: 1000,
      delay: animItemEndLeft.delay + 300,
      easing: 'easeInOutExpo',
    })
    let animItemEndInput = anime({
      targets: '._end-anim-1 .form__input',
      opacity: [0, 1],
      duration: 1000,
      delay: animItemEndImg.delay + 500,
      easing: 'easeInOutExpo',
    })
    let animItemEnd2 = anime({
      targets: '._end-anim-2',
      opacity: [0, 1],
      duration: 1000,
      delay: animItemEndInput.delay + 100
    });
    let animItemEnd2Left = anime({
      targets: '._end-anim-2 .form__left',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: animItemEnd2.delay,
      easing: 'easeInOutExpo',
    })
    let animItemEnd2Img = anime({
      targets: '._end-anim-2 .form__img-item',
      scale: [0, 1],
      duration: 1000,
      delay: animItemEnd2Left.delay + 300,
      easing: 'easeInOutExpo',
    })
    let animItemEnd2Input = anime({
      targets: '._end-anim-2 .new-project',
      opacity: [0, 1],
      duration: 1000,
      delay: animItemEnd2Img.delay + 500,
      easing: 'easeInOutExpo',
    })
    let animBtn = anime({
      targets: '.form__btn',
      opacity: [0, 1],
      duration: 1000,
      delay: animItemEnd2Input.delay + 500,
      easing: 'easeInOutQuad',
    })
    anime({
      targets: '.form__img_3',
      opacity: [0, 1],
      delay: animBtn.delay + 500
    });

    anime({
      targets: '.form__img_4',
      opacity: [0, 1],
      delay: animBtn.delay + 500
    });
  }
}
export let animationThank = () => {
  "use strict";
  const windowInnerWidth = window.innerWidth

  if (windowInnerWidth > 576) {
    let animBtn = anime({
      targets: '.thank__btn-copy-img_1',
      translateY: [-5, 5],
      // easing: 'easeInOutExpo',
      duration: 800,
      loop: true,
      dalay: 1500,
      direction: 'alternate'
    })
    anime({
      targets: '.thank__btn-link-img_2',
      translateY: [-5, 5],
      // easing: 'easeInOutExpo',
      duration: 800,
      loop: true,
      dalay: 1500,
      direction: 'alternate'
    })
    let animImg1 = anime({
      targets: '.thank__anim-img._1',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'easeInOutExpo',
      duration: 1300,
      delay: 500,
    })
    let animImg2 = anime({
      targets: '.thank__anim-img._2',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'easeInOutExpo',
      duration: 1300,
      delay: 500,
    })
    let animImg3 = anime({
      targets: '.thank__anim-img._3',
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: 1500,
    })
    let animImg4 = anime({
      targets: '.thank__anim-img._4',
      opacity: [0, 1],
      translateY: [100, 0],
      easing: 'easeInOutExpo',
      duration: 1600,
      delay: 1300 ,
    })
    let animImg5 = anime({
      targets: '.thank__anim-img._5',
      opacity: [0, 1],
      translateY: [90, 0],
      easing: 'easeInOutExpo',
      duration: 1800,
      delay: 1500 ,
    })
    let animImg6 = anime({
      targets: '.thank__anim-img._6',
      opacity: [0, 1],
      translateY: [100, 0],
      easing: 'easeInOutExpo',
      duration: 1800,
      delay: 2100 ,
    })
    let animImg7 = anime({
      targets: '.thank__anim-img._end-anim',
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 1200,
      delay: 2100 ,
    })
    let animText = anime({
      targets: '.thank__title',
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: 3000 ,
    })
    let animText2 = anime({
      targets: '.thank__text',
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: 3500 ,
    })
    anime({
      targets: '.thank__reviews',
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: 4000 ,
    })
    anime({
      targets: '.thank__btn-copy',
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: 4500 ,
    })
    anime({
      targets: '.thank__btn-link',
      opacity: [0, 1],
      translateY: [80, 0],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: 5000 ,
    })


  }
}

export let animationNumber = () => {
  "use strict";
  const windowInnerWidth = window.innerWidth

  if (windowInnerWidth > 576){
    
  }
}