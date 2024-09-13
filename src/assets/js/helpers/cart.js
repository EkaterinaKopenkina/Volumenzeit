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

const cartDelete = () => {
    const products = document.querySelector('.cart__products');

    products.addEventListener('click', (event) => {
        const delBtn = event.target.closest('.cart__delete-btn');

        if (delBtn) {
            const product = delBtn.parentElement;

            product.style.transform = 'translateX(500px)';

            setTimeout(() => {
                product.style.display = 'none';
            }, 400)
        }
    })
}

module.exports = {
    cartMatching: cartMatching,
    cartDelete: cartDelete,
}