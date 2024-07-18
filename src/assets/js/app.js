var slider = require('./slider.js');
var header = require('./header.js');

const currentUrl = document.location.href.split('/');
const currentPage = currentUrl[currentUrl.length - 1];

document.addEventListener('DOMContentLoaded', () => {
    const cookieLogin = document.cookie.match(/login=(.+?)(;|$)/);

    // Header
    header.headerFake();
    header.burger();
    header.navAccount();
    window.addEventListener('resize', header.headerFake);

    // Pages
    switch(currentPage) {
        case 'index.html':
            //slider.initSlider();
            break;
        case 'watches.html':
            slider.initSlider();
            break;
        case 'product.html':
            slider.initSlider();
            break;
        case 'contact.html':
            break;
        case 'buildWatch.html':
            break;
        case 'checkout.html':
            break;
        case 'delivery.html':
            break;
        case 'authorization.html#login':
            break;
        case 'authorization.html#reg':
            break;
        case 'account.html':
            break;
        default:
            window.location.replace('http://localhost:3000/404.html')
    }
})