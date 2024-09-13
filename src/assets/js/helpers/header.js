const headerMainFn = () => {
    const cookieLogin = document.cookie.match(/login=(.+?)(;|$)/);

    const header = document.querySelector('.header');
    const headerFake = document.querySelector('.header__fake');
    const headerHeight = header.offsetHeight;

    const burgerItem = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');

    const auth = document.querySelector('.authorization');
    const accountTablet = document.querySelector('#accountTablet');
    const accountMobile = document.querySelector('#accountMobile');
    const authMobile = document.querySelector('#authMobile');

    const cartItem = document.querySelector('#cartTablet');
    const cartAside = document.querySelector('.cart');
    const cartClose = document.querySelector('.cart__close');

    showHeaderFake(headerFake, headerHeight);
    burger(burgerItem, nav, body);
    navAccount(cookieLogin, auth, accountTablet, accountMobile, authMobile);
    cart(cartItem, cartAside, cartClose);
}

export const showHeaderFake = (headerFake, headerHeight) => {
    headerFake.style.height = `${headerHeight}px`;
}

const burger = (burgerItem, nav, body) => {
    burgerItem.addEventListener('click', (event) => {
        event.preventDefault();

        burgerItem.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    })
}

const navAccount = (cookieLogin, auth, accountTablet, accountMobile, authMobile) => {
    cookieLogin ? authMobile.style.display = 'none' : accountMobile.style.display = 'none';

    accountTablet.addEventListener('click', (event) => {
        event.preventDefault();

        cookieLogin ? window.location.replace('account.html') : auth.classList.toggle('active');
    })

    auth.addEventListener('click', (event) => {
        event.stopPropagation();
    })
}

const cart = (cartItem, cartAside, cartClose) => {
    cartItem.addEventListener('click', (event) => {
        event.preventDefault();

        cartAside.classList.add('active');
    })

    cartClose.addEventListener('click', (event) => {
        event.preventDefault();

        cartAside.classList.remove('active');
    })
}

export default headerMainFn;