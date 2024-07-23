'use strict'

var slider = require('./slider.js');
var header = require('./header.js');
var sort = require('./sort.js');
var index = require('./index.js');
var contact = require('./contact.js');
var checkout = require('./checkout.js');
var auth = require('./auth.js');
var account = require('./account.js');
var cart = require('./cart.js');

const currentUrl = document.location.href.split('/');
const currentPage = currentUrl[currentUrl.length - 1];

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

    // Pages
    switch(currentPage) {
        case 'index.html':
            index.video();
            index.formNewsletter();
            //slider.initSlider();
            break;
        case 'watches.html':
            slider.initSlider();
            break;
        case 'product.html':
            slider.initSlider();
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
            window.location.replace('http://localhost:3000/404.html');
    }
})