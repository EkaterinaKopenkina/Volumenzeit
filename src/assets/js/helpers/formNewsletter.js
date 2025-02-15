import { formClear, formError, formBlur, formRBlur } from "./form";

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

        formClear(inputs);
        error.classList.remove('active');
        success.classList.remove('active');

        if (name.value == '') {
            formError(name, 'Empty field');
            formBlur(name);
            return;
        }

        if (!rEmail.test(email.value)) {
            formError(email, 'The field is filled in incorrectly');
            formRBlur(email, rEmail);
            return;
        }

        console.log('Отправка формы');
        success.classList.add('active');
    })
}

export default formNewsletter;