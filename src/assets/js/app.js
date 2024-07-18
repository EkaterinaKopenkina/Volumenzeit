var slider = require('./slider.js');
var header = require('./header.js');

const currentUrl = document.location.href.split('/');
const currentPage = currentUrl[currentUrl.length - 1];

document.addEventListener('DOMContentLoaded', () => {
    header.headerFake();
    header.burger();
    window.addEventListener('resize', header.headerFake);

    switch(currentPage) {
        case 'index.html':
            slider.initSlider();
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
        case 'authorization.html':
            break;
        case 'account.html':
            break;
        default:
            window.location.replace('http://localhost:3000/404.html')
    }
})