const cartMatching = () => {
    const btn = document.querySelector('#btnMatching');
    const item = document.querySelector('.cart__add');
    const itemHeight = item.offsetHeight;

    item.classList.remove('active');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        
        btn.classList.add('active');
        item.style.height = 0;
        item.classList.add('active');

        console.log(`${itemHeight}px`);

        setTimeout(() => {
            item.style.height = `${itemHeight}px`;
        }, 200)
    })
}

module.exports = {
    cartMatching: cartMatching,
}