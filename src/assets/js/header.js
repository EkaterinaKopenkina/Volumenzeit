const headerFake = () => {
    const header = document.querySelector('.header');
    const headerFake = document.querySelector('.header__fake');
    const headerHeight = header.offsetHeight;

    headerFake.style.height = `${headerHeight}px`;
}

module.exports = {
    headerFake: headerFake
}