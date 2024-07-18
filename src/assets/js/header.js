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

module.exports = {
    headerFake: headerFake,
    burger: burger
}