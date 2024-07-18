const headerFake = () => {
    const header = document.querySelector('.header');
    const headerFake = document.querySelector('.header__fake');
    const headerHeight = header.offsetHeight;

    headerFake.style.height = `${headerHeight}px`;
}

const burger = () => {
    const burgerItem = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');

    burgerItem.addEventListener('click', (event) => {
        event.preventDefault();

        burgerItem.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    })
}

const navAccount = (cookieLogin) => {
    const auth = document.querySelector('.authorization');
    const accountTablet = document.querySelector('#accountTablet');
    const accountMobile = document.querySelector('#accountMobile');
    const authMobile = document.querySelector('#authMobile');

    cookieLogin ? authMobile.style.display = 'none' : accountMobile.style.display = 'none';

    accountTablet.addEventListener('click', (event) => {
        event.preventDefault();

        cookieLogin ? window.location.replace('account.html') : auth.classList.toggle('active');
    })

    auth.addEventListener('click', (event) => {
        event.stopPropagation();
    })
}

module.exports = {
    headerFake: headerFake,
    burger: burger,
    navAccount: navAccount
}