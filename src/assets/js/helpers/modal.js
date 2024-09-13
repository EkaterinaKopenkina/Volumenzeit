export const modalOpen = (btn) => {
    const modalId = btn.dataset.modal;
    const modal = document.querySelector(modalId);
    const container = modal.querySelector('.modal__container');
    const body = document.querySelector('body');

    modal.classList.add('active');
    body.classList.add('no-scroll');

    setTimeout(() => {
        container.style.transform = 'scale(100%)';
    }, 200)
}

export const modalClose = (btn) => {
    const modalId = btn.dataset.modal;
    const modal = document.querySelector(modalId);
    const container = modal.querySelector('.modal__container');
    const body = document.querySelector('body');

    modal.addEventListener('click', () => {
        container.style.transform = 'scale(0)';

        setTimeout(() => {
            modal.classList.remove('active');
            body.classList.remove('no-scroll');
        }, 200)

        container.addEventListener('click', (event) => {
            if (event.target.closest('.modal__container')){
                event.stopPropagation()
            }
        })
    })
}