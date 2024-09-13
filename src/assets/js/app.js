'use strict'

var slider = require('./helpers/slider.js');
var header = require('./helpers/header.js');
var cart = require('./helpers/cart.js');

var index = require('./pages/index.js');
var contact = require('./pages/contact.js');
var checkout = require('./pages/checkout.js');
var auth = require('./pages/auth.js');
var account = require('./pages/account.js');
var watches = require('./pages/watches.js');

const currentUrl = document.location.href.split('/');
const currentPage = currentUrl[currentUrl.length - 1];

window.addEventListener('load', () => {
    if (currentPage == 'index.html' || currentPage == 'product.html') {
        slider.initSlider();
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const cookieLogin = document.cookie.match(/login=(.+?)(;|$)/);

    // Header
    header.headerFake();
    header.burger();
    header.navAccount(cookieLogin);
    header.cart();
    window.addEventListener('resize', header.headerFake);

    // Cart
    cart.cartMatching();
    cart.cartDelete();

    // Pages
    switch(currentPage) {
        case 'index.html' || '':
            index.indexMainFn();
            break;
        case 'watches.html':
            watches.watchesMainFn();
            break;
        case 'product.html':
            break;
        case 'contact.html':
            contact.formContact();
            break;
        case 'buildWatch.html':
            break;
        case 'checkout.html':
            checkout.accordion();
            checkout.formCheckout();
            sort.sort();
            break;
        case 'delivery.html':
            break;
        case 'authorization.html#login':
            auth.tab();
            auth.formLogin();
            auth.formReg();
            sort.sort();
            break;
        case 'authorization.html#reg':
            auth.tab();
            auth.formLogin();
            auth.formReg();
            sort.sort();
            break;
        case 'account.html':
            account.account();
            index.formNewsletter();
            break;
        default:
            //window.location.replace('http://localhost:3000/404.html');
    }
})