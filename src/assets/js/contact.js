var form = require('./form.js');

const formContact = () => {
    const btn = document.querySelector('.contact__btn');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const thisForm = document.querySelector('.contact__form');
        const inputs = thisForm.querySelectorAll('.contact__input');

        const error = thisForm.querySelector('error__form');
        const success = thisForm.querySelector('success__form');

        const name = document.querySelector('#contactName');
        const email = document.querySelector('#contactEmail');
        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        const message = document.querySelector('#contactMessage');

        form.formClear(inputs);
        error.style.display = 'none';
        success.style.display = 'none';

        if (name.value == '') {
            form.formError(name, 'Пустое поле');
            form.formBlur(name);
            return;
        }

        if (!rEmail.test(email.value)) {
            form.formError(email, 'Поле заполнено неверно');
            form.formRBlur(email, rEmail);
            return;
        }

        if (message.value == '') {
            form.formError(message, 'Пустое поле');
            form.formBlur(message);
            return;
        }

        console.log('Отправка формы');
    })
}

module.exports = {
    formContact: formContact,
}