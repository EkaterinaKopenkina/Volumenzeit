'use strict'

import headerMainFn, { showHeaderFake } from './helpers/header.js';
import initSlider from './helpers/slider.js';
import { cartMatching, cartDelete } from './helpers/cart.js';

import indexMainFn from './pages/index.js';
import watchesMainFn from './pages/watches.js';
import contactMainFn from './pages/contact.js';
import checkoutMainFn from './pages/checkout.js';
import authMainFn from './pages/auth.js';
import accountMainFn from './pages/account.js';

const currentUrl = document.location.href.split('/');
const currentPage = currentUrl[currentUrl.length - 1];

window.addEventListener('load', () => {
    if (currentPage == 'index.html' || currentPage == 'product.html') {
        initSlider();
    }
})

document.addEventListener('DOMContentLoaded', () => {
    // Header
    headerMainFn();
    window.addEventListener('resize', showHeaderFake);

    // Cart
    cartMatching();
    cartDelete();

    // Pages
    switch(currentPage) {
        case 'index.html' || '':
            indexMainFn();
            break;
        case 'watches.html':
            watchesMainFn();
            break;
        case 'product.html':
            break;
        case 'contact.html':
            contactMainFn();
            break;
        case 'buildWatch.html':
            break;
        case 'checkout.html':
            checkoutMainFn();
            break;
        case 'delivery.html':
            break;
        case 'authorization.html#login' || 'authorization.html#reg':
            authMainFn();
            break;
        case 'account.html':
            accountMainFn();
            break;
        default:
            //window.location.replace('http://localhost:3000/404.html');
    }
})