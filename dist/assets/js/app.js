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

eval("var slider = __webpack_require__(/*! ./slider.js */ \"./src/assets/js/slider.js\");\r\nvar header = __webpack_require__(/*! ./header.js */ \"./src/assets/js/header.js\");\r\nvar index = __webpack_require__(/*! ./index.js */ \"./src/assets/js/index.js\");\r\n\r\nconst currentUrl = document.location.href.split('/');\r\nconst currentPage = currentUrl[currentUrl.length - 1];\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const cookieLogin = document.cookie.match(/login=(.+?)(;|$)/);\r\n\r\n    // Header\r\n    header.headerFake();\r\n    header.burger();\r\n    header.navAccount();\r\n    header.cart();\r\n    window.addEventListener('resize', header.headerFake);\r\n\r\n    // Pages\r\n    switch(currentPage) {\r\n        case 'index.html':\r\n            index.video();\r\n            //slider.initSlider();\r\n            break;\r\n        case 'watches.html':\r\n            slider.initSlider();\r\n            break;\r\n        case 'product.html':\r\n            slider.initSlider();\r\n            break;\r\n        case 'contact.html':\r\n            break;\r\n        case 'buildWatch.html':\r\n            break;\r\n        case 'checkout.html':\r\n            break;\r\n        case 'delivery.html':\r\n            break;\r\n        case 'authorization.html#login':\r\n            break;\r\n        case 'authorization.html#reg':\r\n            break;\r\n        case 'account.html':\r\n            break;\r\n        default:\r\n            window.location.replace('http://localhost:3000/404.html')\r\n    }\r\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/form.js":
/*!*******************************!*\
  !*** ./src/assets/js/form.js ***!
  \*******************************/
/***/ (function(module) {

eval("const formError = (element, message) => {\r\n    const error = element.nextElementSibling;\r\n\r\n    element.classList.add('error');\r\n    error.innerHTML = message;\r\n    error.style.display = \"block\";\r\n}\r\n\r\nconst formClear = (inputs) => {\r\n    inputs.forEach(input => {\r\n        const error = input.nextElementSibling;\r\n\r\n        input.classList.remove('error');\r\n        error.style.display = 'none';\r\n    })\r\n}\r\n\r\nconst formBlur = (input) => {\r\n    input.addEventListener('blur', () => {\r\n        if (input.value != '') {\r\n            const error = input.nextElementSibling;\r\n\r\n            input.classList.remove('error');\r\n            error.style.display = \"none\";\r\n        }\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    formError: formError,\r\n    formClear: formClear,\r\n    formBlur: formBlur,\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/form.js?");

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
/***/ (function(module) {

eval("const video = () => {\r\n    const bg = document.querySelector('.about__video-bg');\r\n    const thisVideo = document.querySelector('.about__video');\r\n    const btnPlay = document.querySelector('.about__play');\r\n\r\n    bg.addEventListener('click', () => {\r\n        bg.style.display = 'none';\r\n        btnPlay.style.display = 'none';\r\n\r\n        thisVideo.setAttribute('controls', '');\r\n        thisVideo.play();\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    video: video,\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function(module) {

eval("const initSlider = () => {\r\n    const mySliders = document.querySelectorAll('.swiper-container');\r\n\r\n    mySliders.forEach(mySlider => {\r\n        const slider = mySlider.classList[0];\r\n        \r\n        switch(slider) {\r\n            case 'watches__inner':\r\n                let perView = 'auto';\r\n\r\n                if (window.innerWidth < 427) {\r\n                    perView = 1;\r\n                }\r\n\r\n                const swiperWatches = new Swiper(mySlider, { \r\n                    navigation: {\r\n                        nextEl: '.watches__arrow--next',\r\n                        prevEl: '.watches__arrow--prev',\r\n                    },\r\n            \r\n                    slidesPerView: perView,\r\n                    observer: true,\r\n                    observeParents: true,\r\n                    observeSlideChildren: true,\r\n                });\r\n\r\n                break;\r\n            \r\n            case 'products__container':\r\n                const swiperProducts = new Swiper(mySlider, { \r\n                    pagination: {\r\n                        el: \".swiper-pagination\",\r\n                        clickable: true,\r\n                        renderBullet: function (index, className) {\r\n                          return '<span class=\"' + className + '\">' + (index + 1) + \"</span>\";\r\n                        },\r\n                    },\r\n\r\n                    slidesPerView: 1,\r\n                    autoHeight: true,\r\n                    allowTouchMove: false, // Запрет на перетаскивание мышью\r\n                    effect: 'fade',\r\n                    spaceBetween: 0,\r\n                    fadeEffect: {\r\n                        crossFade: true, // предыдущий слайд исчезает\r\n                        duration: 200 // время перехода\r\n                    }\r\n                });\r\n\r\n                break;\r\n            case 'product__slider-container':\r\n                const swiperProduct = new Swiper(mySlider, { \r\n                    navigation: {\r\n                        nextEl: '.product__arrow--next',\r\n                        prevEl: '.product__arrow--prev',\r\n                    },\r\n            \r\n                    slidesPerView: 1,\r\n                    observer: true,\r\n                    observeParents: true,\r\n                    observeSlideChildren: true,\r\n                });\r\n\r\n                break;\r\n        }\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    initSlider: initSlider\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

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
/******/ 	__webpack_require__("./src/assets/js/form.js");
/******/ 	__webpack_require__("./src/assets/js/header.js");
/******/ 	__webpack_require__("./src/assets/js/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/slider.js");
/******/ 	
/******/ })()
;