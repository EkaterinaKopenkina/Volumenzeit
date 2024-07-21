const modalOpen = (btn) => {
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

module.exports = {
    modalOpen: modalOpen,
}