/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var slider = __webpack_require__(/*! ./slider.js */ \"./src/assets/js/slider.js\");\r\nvar header = __webpack_require__(/*! ./header.js */ \"./src/assets/js/header.js\");\r\nvar sort = __webpack_require__(/*! ./sort.js */ \"./src/assets/js/sort.js\");\r\nvar index = __webpack_require__(/*! ./index.js */ \"./src/assets/js/index.js\");\r\nvar contact = __webpack_require__(/*! ./contact.js */ \"./src/assets/js/contact.js\");\r\nvar checkout = __webpack_require__(/*! ./checkout.js */ \"./src/assets/js/checkout.js\");\r\n\r\nconst currentUrl = document.location.href.split('/');\r\nconst currentPage = currentUrl[currentUrl.length - 1];\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const cookieLogin = document.cookie.match(/login=(.+?)(;|$)/);\r\n\r\n    // Header\r\n    header.headerFake();\r\n    header.burger();\r\n    header.navAccount(cookieLogin);\r\n    header.cart();\r\n    window.addEventListener('resize', header.headerFake);\r\n\r\n    // Pages\r\n    switch(currentPage) {\r\n        case 'index.html':\r\n            index.video();\r\n            index.formNewsletter();\r\n            //slider.initSlider();\r\n            break;\r\n        case 'watches.html':\r\n            slider.initSlider();\r\n            break;\r\n        case 'product.html':\r\n            slider.initSlider();\r\n            break;\r\n        case 'contact.html':\r\n            contact.formContact();\r\n            break;\r\n        case 'buildWatch.html':\r\n            break;\r\n        case 'checkout.html':\r\n            checkout.accordion();\r\n            checkout.formCheckout();\r\n            sort.sort();\r\n            break;\r\n        case 'delivery.html':\r\n            break;\r\n        case 'authorization.html#login':\r\n            break;\r\n        case 'authorization.html#reg':\r\n            break;\r\n        case 'account.html':\r\n            break;\r\n        default:\r\n            window.location.replace('http://localhost:3000/404.html')\r\n    }\r\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/checkout.js":
/*!***********************************!*\
  !*** ./src/assets/js/checkout.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var form = __webpack_require__(/*! ./form.js */ \"./src/assets/js/form.js\");\r\n\r\nvar errorCount = 0;\r\n\r\nconst accordion = () => {\r\n    const accordions = document.querySelectorAll('.accordion');\r\n\r\n    accordions.forEach(item => {\r\n        const container = item.querySelector('.accordion__container');\r\n        const header = item.querySelector('.accordion__header');\r\n\r\n        item.classList.remove('active');\r\n\r\n        header.addEventListener('click', () => {\r\n            if (item.classList.contains('active')) {\r\n                item.classList.remove('active');\r\n                container.style.opacity = 0;\r\n\r\n                setTimeout(() => {\r\n                    container.style.display = 'none';\r\n                }, 200)\r\n            } else {\r\n                item.classList.add('active');\r\n                container.style.display = \"block\";\r\n\r\n                setTimeout(() => {\r\n                    container.style.opacity = 1;\r\n                }, 200)\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\nconst formCheckout = () => {\r\n    const btnBasic = document.querySelector('#btnBasic');\r\n    const btnShipping = document.querySelector('#btnShipping');\r\n    const btnPayment = document.querySelector('#btnPayment');\r\n    const btnTotal = document.querySelector('#btnTotal');\r\n\r\n    btnBasic.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        formBasic();\r\n    })\r\n\r\n    btnShipping.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        formShipping();\r\n    })\r\n\r\n    btnPayment.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        formPayment();\r\n    })\r\n\r\n    btnTotal.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        errorCount = 0;\r\n        formBasic();\r\n        formShipping();\r\n        formPayment();\r\n        formCoupon();\r\n\r\n        if (errorCount > 0) {\r\n            const error = document.querySelector('.checkout__error');\r\n            error.style.display = 'block';\r\n            return;\r\n        }\r\n\r\n        // Модалка\r\n    })\r\n}\r\n\r\nconst formBasic = () => {\r\n    const accordion = document.querySelector('#accordionBasic');\r\n    const successForm = accordion.querySelector('.success__form');\r\n    const inputs = accordion.querySelectorAll('.accordion__inputs');\r\n    const email = document.querySelector('#accordionEmail');\r\n    const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;\r\n    const name = document.querySelector('#accordionName');\r\n    const lastname = document.querySelector('#accordionLastname');\r\n    const phone = document.querySelector('#accordionPhone');\r\n    const rPhone = /^(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?$/;\r\n    const address1 = document.querySelector('#accordionAddress1');\r\n    const address2 = document.querySelector('#accordionAddress2');\r\n    const city = document.querySelector('#accordionCity');\r\n    const code = document.querySelector('#accordionCode');\r\n    const country = document.querySelector('#accordionCountry');\r\n\r\n    form.formClear(inputs);\r\n\r\n    error.style.display = 'none';\r\n    success.style.display = 'none';\r\n\r\n    if (!rEmail.test(email.value)) {\r\n        form.formError(email, 'Поле заполнено неверно');\r\n        form.formEmailBlur(email);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (name.value == '') {\r\n        form.formError(name, 'Пустое поле');\r\n        form.formBlur(name);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (lastname.value == '') {\r\n        form.formError(lastname, 'Пустое поле');\r\n        form.formBlur(lastname);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (!rPhone.test(phone.value)) {\r\n        form.formError(phone, 'Поле заполнено неверно');\r\n        form.formPhoneBlur(phone);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (address1.value == '') {\r\n        form.formError(address1, 'Пустое поле');\r\n        form.formBlur(address1);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (address2.value == '') {\r\n        form.formError(address2, 'Пустое поле');\r\n        form.formBlur(address2);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (city.value == '') {\r\n        form.formError(city, 'Пустое поле');\r\n        form.formBlur(city);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (code.value == '') {\r\n        form.formError(code, 'Пустое поле');\r\n        form.formBlur(code);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (country.innerHTMLL == 'Country') {\r\n        const error = country.parentElement.nextElementSibling;\r\n\r\n        form.formError(code, 'Пустое поле', error);\r\n        form.formBlur(code, error);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    successForm.style.display = 'block';\r\n}\r\n\r\nconst formShipping = () => {\r\n    const accordion = document.querySelector('#accordionShipping');\r\n    const error = accordion.querySelector('.error__form');\r\n    const success = accordion.querySelector('.success__form');\r\n    const delivery1 = document.querySelector('#delivery1');\r\n    const delivery2 = document.querySelector('#delivery2');\r\n\r\n    error.style.display = 'none';\r\n    success.style.display = 'none';\r\n\r\n    if ((delivery1.checked || delivery2.checked) == false) {\r\n        error.style.display = 'block';\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    success.style.display = 'block';\r\n}\r\n\r\nconst formPayment = () => {\r\n    const accordion = document.querySelector('#accordionPayment');\r\n    const inputs = accordion.querySelectorAll('.accordion__input');\r\n    const errorForm = accordion.querySelector('.error__form');\r\n    const successForm = accordion.querySelector('.success__form');\r\n\r\n    const payment1 = document.querySelector('#payment1');\r\n    const payment2 = document.querySelector('#payment2');\r\n    const card = document.querySelector('#accordionCard');\r\n    const date = document.querySelector('#accordionDate');\r\n    const cvc = document.querySelector('#accordionCVC');\r\n\r\n    const rCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}| (?:2131|1800|35\\d{3})\\d{11})$/;\r\n    const rDate = /^(\\d{2})-(\\d{2})$/;\r\n\r\n    // Clear -------\r\n    form.formClear(inputs);\r\n\r\n    const errorPayment = payment2.nextElementSibling.nextElementSibling;\r\n    payment1.classList.remove('error');\r\n    payment2.classList.remove('error');\r\n    errorPayment.style.display = 'none';\r\n\r\n    errorForm.style.display = 'none';\r\n    successForm.style.display = 'none';\r\n    // -------\r\n\r\n    if ((payment1.checked || payment2.checked) == false) {\r\n        const error = payment2.nextElementSibling.nextElementSibling;\r\n        form.formError(payment2, 'Выбор не сделан', error);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (!rCard.test(card.value)) {\r\n        form.formError(card, 'Поле заполнено неверно');\r\n        form.formRBlur(card, rCard);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if (!rDate.test(date.value)) {\r\n        form.formError(date, 'Поле заполнено неверно');\r\n        form.formRBlur(date);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    if ((cvc.value < 100) || (cvc.value > 999)) {\r\n        form.formError(cvc, 'Поле заполнено неверно');\r\n        form.formBlur(cvc);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n\r\n    successForm.style.display = 'block';\r\n}\r\n\r\nconst formCoupon = () => {\r\n    const coupon = document.querySelector('#accordionCoupon');\r\n\r\n    form.formClear(coupon);\r\n\r\n    if (coupon.value == '') {\r\n        form.formError(coupon, 'Пустое поле');\r\n        form.formBlur(coupon);\r\n        errorCount ++;\r\n        return;\r\n    }\r\n}\r\n\r\n\r\n// НЕ ЗАБЫТЬ СДЕЛАТЬ ОБНУЛЕНИЕ СООБЩЕНИЙ В FORMCONTACT!!!!\r\n// А ТАКЖЕ ИСПРАВИТЬ РУССКИЙ ТЕКСТ ОШИБОК НА АНГЛИЙСКИЙ\r\n\r\nmodule.exports = {\r\n    accordion: accordion,\r\n    formCheckout: formCheckout,\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/checkout.js?");

/***/ }),

/***/ "./src/assets/js/contact.js":
/*!**********************************!*\
  !*** ./src/assets/js/contact.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var form = __webpack_require__(/*! ./form.js */ \"./src/assets/js/form.js\");\r\n\r\nconst formContact = () => {\r\n    const btn = document.querySelector('.contact__btn');\r\n\r\n    btn.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        const thisForm = document.querySelector('.contact__form');\r\n        const inputs = thisForm.querySelectorAll('.contact__input');\r\n\r\n        const error = thisForm.querySelector('error__form');\r\n        const success = thisForm.querySelector('success__form');\r\n\r\n        const name = document.querySelector('#contactName');\r\n        const email = document.querySelector('#contactEmail');\r\n        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;\r\n        const message = document.querySelector('#contactMessage');\r\n\r\n        form.formClear(inputs);\r\n        error.style.display = 'none';\r\n        success.style.display = 'none';\r\n\r\n        if (name.value == '') {\r\n            form.formError(name, 'Пустое поле');\r\n            form.formBlur(name);\r\n            return;\r\n        }\r\n\r\n        if (!rEmail.test(email.value)) {\r\n            form.formError(email, 'Поле заполнено неверно');\r\n            form.formRBlur(email, rEmail);\r\n            return;\r\n        }\r\n\r\n        if (message.value == '') {\r\n            form.formError(message, 'Пустое поле');\r\n            form.formBlur(message);\r\n            return;\r\n        }\r\n\r\n        console.log('Отправка формы');\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    formContact: formContact,\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/contact.js?");

/***/ }),

/***/ "./src/assets/js/form.js":
/*!*******************************!*\
  !*** ./src/assets/js/form.js ***!
  \*******************************/
/***/ (function(module) {

eval("const formError = (element, message, error = element.nextElementSibling) => {\r\n    element.classList.add('error');\r\n    error.innerHTML = message;\r\n    error.style.display = \"block\";\r\n}\r\n\r\nconst formClear = (inputs) => {\r\n    inputs.forEach(input => {\r\n        const error = input.nextElementSibling;\r\n\r\n        input.classList.remove('error');\r\n        error.style.display = 'none';\r\n    })\r\n}\r\n\r\nconst formBlur = (input, error = input.nextElementSibling) => {\r\n    input.addEventListener('blur', () => {\r\n        if (input.value != '') {\r\n            input.classList.remove('error');\r\n            error.style.display = \"none\";\r\n        }\r\n    })\r\n}\r\n\r\nconst formRBlur = (input, r) => {\r\n    input.addEventListener('blur', () =>  {\r\n        if (r.test(input.value)) {\r\n            const error = input.nextElementSibling;\r\n\r\n            input.classList.remove('error');\r\n            error.style.display = 'none';\r\n        }     \r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    formError: formError,\r\n    formClear: formClear,\r\n    formBlur: formBlur,\r\n    formRBlur: formRBlur,\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/form.js?");

/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/***/ (function(module) {

eval("const headerFake = () => {\r\n    const header = document.querySelector('.header');\r\n    const headerFake = document.querySelector('.header__fake');\r\n    const headerHeight = header.offsetHeight;\r\n\r\n    headerFake.style.height = `${headerHeight}px`;\r\n}\r\n\r\nconst burger = () => {\r\n    const burgerItem = document.querySelector('.burger');\r\n    const nav = document.querySelector('.nav');\r\n    const body = document.querySelector('body');\r\n\r\n    burgerItem.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        burgerItem.classList.toggle('active');\r\n        nav.classList.toggle('active');\r\n        body.classList.toggle('no-scroll');\r\n    })\r\n}\r\n\r\nconst navAccount = (cookieLogin) => {\r\n    const auth = document.querySelector('.authorization');\r\n    const accountTablet = document.querySelector('#accountTablet');\r\n    const accountMobile = document.querySelector('#accountMobile');\r\n    const authMobile = document.querySelector('#authMobile');\r\n\r\n    cookieLogin ? authMobile.style.display = 'none' : accountMobile.style.display = 'none';\r\n\r\n    accountTablet.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        cookieLogin ? window.location.replace('account.html') : auth.classList.toggle('active');\r\n    })\r\n\r\n    auth.addEventListener('click', (event) => {\r\n        event.stopPropagation();\r\n    })\r\n}\r\n\r\nconst cart = () => {\r\n    const cartItem = document.querySelector('#cartTablet');\r\n    const cartAside = document.querySelector('.cart');\r\n    const cartClose = document.querySelector('.cart__close');\r\n\r\n    cartItem.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        cartAside.classList.add('active');\r\n    })\r\n\r\n    cartClose.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        cartAside.classList.remove('active');\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    headerFake: headerFake,\r\n    burger: burger,\r\n    navAccount: navAccount,\r\n    cart: cart\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/header.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var form = __webpack_require__(/*! ./form.js */ \"./src/assets/js/form.js\");\r\n\r\nconst video = () => {\r\n    const bg = document.querySelector('.about__video-bg');\r\n    const thisVideo = document.querySelector('.about__video');\r\n    const btnPlay = document.querySelector('.about__play');\r\n\r\n    bg.addEventListener('click', () => {\r\n        bg.style.display = 'none';\r\n        btnPlay.style.display = 'none';\r\n\r\n        thisVideo.setAttribute('controls', '');\r\n        thisVideo.play();\r\n    })\r\n}\r\n\r\nconst formNewsletter = () => {\r\n    const btn = document.querySelector('.newsletter__btn');\r\n\r\n    btn.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        const thisForm = document.querySelector('.newsletter__form');\r\n        const inputs = thisForm.querySelectorAll('.newsletter__input');\r\n\r\n        const error = thisForm.querySelector('.newsletter__error-form');\r\n        const success = thisForm.querySelector('.newsletter__success-form');\r\n\r\n        const name = document.querySelector('#newsletterName');\r\n        const email = document.querySelector('#newsletterEmail');\r\n        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;\r\n\r\n        form.formClear(inputs);\r\n        error.style.display = 'none';\r\n        success.style.display = 'none';\r\n\r\n        if (name.value == '') {\r\n            form.formError(name, 'Пустое поле');\r\n            form.formBlur(name);\r\n            return;\r\n        }\r\n\r\n        if (!rEmail.test(email.value)) {\r\n            form.formError(email, 'Поле заполнено неверно');\r\n            form.formEmailBlur(email);\r\n            return;\r\n        }\r\n\r\n        console.log('Отправка формы');\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    video: video,\r\n    formNewsletter: formNewsletter,\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function(module) {

eval("const initSlider = () => {\r\n    const mySliders = document.querySelectorAll('.swiper-container');\r\n\r\n    mySliders.forEach(mySlider => {\r\n        const slider = mySlider.classList[0];\r\n        \r\n        switch(slider) {\r\n            case 'watches__inner':\r\n                let perView = 'auto';\r\n\r\n                if (window.innerWidth < 427) {\r\n                    perView = 1;\r\n                }\r\n\r\n                const swiperWatches = new Swiper(mySlider, { \r\n                    navigation: {\r\n                        nextEl: '.watches__arrow--next',\r\n                        prevEl: '.watches__arrow--prev',\r\n                    },\r\n            \r\n                    slidesPerView: perView,\r\n                    observer: true,\r\n                    observeParents: true,\r\n                    observeSlideChildren: true,\r\n                });\r\n\r\n                break;\r\n            \r\n            case 'products__container':\r\n                const swiperProducts = new Swiper(mySlider, { \r\n                    pagination: {\r\n                        el: \".swiper-pagination\",\r\n                        clickable: true,\r\n                        renderBullet: function (index, className) {\r\n                          return '<span class=\"' + className + '\">' + (index + 1) + \"</span>\";\r\n                        },\r\n                    },\r\n\r\n                    slidesPerView: 1,\r\n                    autoHeight: true,\r\n                    allowTouchMove: false, // Запрет на перетаскивание мышью\r\n                    effect: 'fade',\r\n                    spaceBetween: 0,\r\n                    fadeEffect: {\r\n                        crossFade: true, // предыдущий слайд исчезает\r\n                        duration: 200 // время перехода\r\n                    }\r\n                });\r\n\r\n                break;\r\n            case 'product__slider-container':\r\n                const swiperProduct = new Swiper(mySlider, { \r\n                    navigation: {\r\n                        nextEl: '.product__arrow--next',\r\n                        prevEl: '.product__arrow--prev',\r\n                    },\r\n            \r\n                    slidesPerView: 1,\r\n                    observer: true,\r\n                    observeParents: true,\r\n                    observeSlideChildren: true,\r\n                });\r\n\r\n                break;\r\n        }\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    initSlider: initSlider\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/sort.js":
/*!*******************************!*\
  !*** ./src/assets/js/sort.js ***!
  \*******************************/
/***/ (function(module) {

eval("const sort = () => {\r\n    const sorts = document.querySelectorAll('.sort');\r\n\r\n    sorts.forEach(sortItem => {\r\n        sortItem.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            const item = event.target.closest('.sort-sub__item');\r\n\r\n            if (item) {\r\n                const link = item.querySelector('.sort-sub__link');\r\n                const value = link.innerHTML;\r\n                const btn = sortItem.querySelector('.sort__btn');\r\n\r\n                btn.innerHTML = value;\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    sort: sort,\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/sort.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	__webpack_require__("./src/assets/js/checkout.js");
/******/ 	__webpack_require__("./src/assets/js/contact.js");
/******/ 	__webpack_require__("./src/assets/js/form.js");
/******/ 	__webpack_require__("./src/assets/js/header.js");
/******/ 	__webpack_require__("./src/assets/js/index.js");
/******/ 	__webpack_require__("./src/assets/js/slider.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/sort.js");
/******/ 	
/******/ })()
;