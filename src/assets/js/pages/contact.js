import { formClear, formError, formBlur, formRBlur } from "../helpers/form";

const contactMainFn = () => {
    const btn = document.querySelector('.contact__btn');

    formContact(btn);
}

const formContact = (btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const thisForm = document.querySelector('.contact__form');
        const inputs = thisForm.querySelectorAll('.contact__input');

        const error = thisForm.querySelector('.error__form');
        const success = thisForm.querySelector('.success__form');

        const name = document.querySelector('#contactName');
        const email = document.querySelector('#contactEmail');
        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        const message = document.querySelector('#contactMessage');

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

        if (message.value == '') {
            formError(message, 'Empty field');
            formBlur(message);
            return;
        }

        success.classList.add('active');
        console.log('Отправка формы');
    })
}

export default contactMainFn;