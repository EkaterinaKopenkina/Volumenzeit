var form = require('../helpers/form')

const formNewsletter = (btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const thisForm = document.querySelector('.newsletter__form');
        const inputs = thisForm.querySelectorAll('.newsletter__input');

        const error = thisForm.querySelector('.newsletter__error-form');
        const success = thisForm.querySelector('.newsletter__success-form');

        const name = document.querySelector('#newsletterName');
        const email = document.querySelector('#newsletterEmail');
        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

        form.formClear(inputs);
        error.style.display = 'none';
        success.style.display = 'none';

        if (name.value == '') {
            form.formError(name, 'Empty field');
            form.formBlur(name);
            return;
        }

        if (!rEmail.test(email.value)) {
            form.formError(email, 'The field is filled in incorrectly');
            form.formRBlur(email, rEmail);
            return;
        }

        console.log('Отправка формы');
        success.style.display = 'block';
    })
}

module.exports = {
    formNewsletter: formNewsletter,
}