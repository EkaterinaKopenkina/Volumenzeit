const paginationMainFn = () => {
    const paginations = document.querySelector('.products__pagination-container');

    const maxPages = paginationMaxPages();
    const currentPages = 200;

    loadPaginations(paginations, maxPages, currentPages);
    onPaginationClick(paginations, currentPages, maxPages);
}

const pastePagination = (container, num, where) => {
    container.insertAdjacentHTML(where, `
        <button class="products__pagination">${num}</button>
    `)
}

const loadPaginations = (paginations, maxPages, currentPages) => {
    paginations.innerHTML = '';

    if (currentPages <= maxPages) {
        for (let i = 0; i < currentPages; i ++) {
            pastePagination(paginations, i + 1, 'beforeend');
        }
    } else {
        for (let i = 0; i < maxPages - 2; i ++) {
            pastePagination(paginations, i + 1, 'beforeend');
        }

        paginations.insertAdjacentHTML('beforeend', `
            <div class="products__pagination-ellipsis">...</div>
            <button class="products__pagination">${currentPages}</button>
        `)
    }
}

const onPaginationClick = (paginations, currentPages, maxPages) => {
    paginations.addEventListener('click', (event) => {
        const pagination = event.target.closest('.products__pagination');
        const paginationItems = paginations.querySelectorAll('.products__pagination');

        event.preventDefault();

        paginationItems.forEach(item => {
            item.classList.remove('active');
        })

        if (pagination) {
            pagination.classList.add('active');

            paginationView(pagination, paginations, currentPages, maxPages);
            paginationScroll();
        }
    })
}

const paginationScroll = () => {
    const container = document.querySelector('.products__content');

    container.scrollIntoView({
        block: 'start',
        inline: 'center',
        behavior: 'smooth',
    })
}

const paginationView = (pagination, container, currentPages, maxPages) => {
    const nextPagination = pagination.nextElementSibling;
    const previousPagination = pagination.previousElementSibling;
    const thisPaginationNum = +pagination.textContent;
    const items = container.children;

    console.log(items.length);

    if (thisPaginationNum === 1) {
        loadPaginations(container, maxPages, currentPages);
    }

    if (nextPagination.classList.contains('products__pagination-ellipsis')) {
        if (thisPaginationNum === currentPages - 1) {
            nextPagination.outerHTML = '';
            return;
        }

        pastePagination(pagination, thisPaginationNum + 1, 'afterend');

        if (items[1].classList.contains('products__pagination')) {
            items[1].outerHTML = '<div class="products__pagination-ellipsis">...</div>';
            return;
        }

        items[2].outerHTML = '';
        return;
    }

    if (previousPagination.classList.contains('products__pagination-ellipsis')) {
        if (thisPaginationNum === 2) {
            previousPagination.outerHTML = '';
            return;
        }

        if (items.length === maxPages) {
            items[maxPages - 2].outerHTML = '<div class="products__pagination-ellipsis">...</div>';
            pastePagination(pagination, thisPaginationNum - 1, 'beforebegin');
            return;
        }

        pastePagination(pagination, thisPaginationNum - 1, 'beforebegin');

        items[maxPages - 1].outerHTML = '';
    }
}

const paginationMaxPages = () => {
    const documentWidth = document.documentElement.clientWidth;
    if (documentWidth < 376) {
        return 7;
    }
    if (documentWidth < 769) {
        return 9;
    }

    return 13;
}

export default paginationMainFn;