const sort = () => {
    const sorts = document.querySelectorAll('.sort');

    sorts.forEach(sortItem => {
        sortItem.addEventListener('click', (event) => {
            event.preventDefault();
            const item = event.target.closest('.sort-sub__item');

            if (item) {
                const link = item.querySelector('.sort-sub__link');
                const value = link.innerHTML;
                const btn = sortItem.querySelector('.sort__btn');

                btn.innerHTML = value;
            }
        })
    })
}

export default sort;