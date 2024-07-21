var form = require('./form.js');

const accordion = () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(item => {
        const container = item.querySelector('.accordion__container');
        const header = item.querySelector('.accordion__header');

        item.classList.remove('active');

        header.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                container.style.opacity = 0;

                setTimeout(() => {
                    container.style.display = 'none';
                }, 200)
            } else {
                item.classList.add('active');
                container.style.display = "block";

                setTimeout(() => {
                    container.style.opacity = 1;
                }, 200)
            }
        })
    })
}

const formCheckout = () => {
    const btnBasic = document.querySelector('#btnBasic');
    const btnShipping = document.querySelector('#btnShipping');
    const btnPayment = document.querySelector('#btnPayment');
    const btnTotal = document.querySelector('#btnTotal');

    btnBasic.addEventListener('click', (event) => {
        event.preventDefault();
        formBasic();
    })

    btnShipping.addEventListener('click', (event) => {
        event.preventDefault();
        formShipping();
    })

    btnPayment.addEventListener('click', (event) => {
        event.preventDefault();
        formPayment();
    })

    btnTotal.addEventListener('click', (event) => {
        event.preventDefault();
        formBasic();
        formShipping();
        formPayment();
        formCoupon();
    })
}

const formBasic = () => {
    const accordion = document.querySelector('#accordionBasic');
    const successForm = accordion.querySelector('.success__form');
    const inputs = accordion.querySelectorAll('.accordion__inputs');
    const email = document.querySelector('#accordionEmail');
    const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const name = document.querySelector('#accordionName');
    const lastname = document.querySelector('#accordionLastname');
    const phone = document.querySelector('#accordionPhone');
    const rPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    const address1 = document.querySelector('#accordionAddress1');
    const address2 = document.querySelector('#accordionAddress2');
    const city = document.querySelector('#accordionCity');
    const code = document.querySelector('#accordionCode');
    const country = document.querySelector('#accordionCountry');

    form.formClear(inputs);

    error.style.display = 'none';
    success.style.display = 'none';

    if (!rEmail.test(email.value)) {
        form.formError(email, 'Поле заполнено неверно');
        form.formEmailBlur(email);
        return;
    }

    if (name.value == '') {
        form.formError(name, 'Пустое поле');
        form.formBlur(name);
        return;
    }

    if (lastname.value == '') {
        form.formError(lastname, 'Пустое поле');
        form.formBlur(lastname);
        return;
    }

    if (!rPhone.test(phone.value)) {
        form.formError(phone, 'Поле заполнено неверно');
        form.formPhoneBlur(phone);
        return;
    }

    if (address1.value == '') {
        form.formError(address1, 'Пустое поле');
        form.formBlur(address1);
        return;
    }

    if (address2.value == '') {
        form.formError(address2, 'Пустое поле');
        form.formBlur(address2);
        return;
    }

    if (city.value == '') {
        form.formError(city, 'Пустое поле');
        form.formBlur(city);
        return;
    }

    if (code.value == '') {
        form.formError(code, 'Пустое поле');
        form.formBlur(code);
        return;
    }

    if (country.innerHTMLL == 'Country') {
        const error = country.parentElement.nextElementSibling;

        form.formError(code, 'Пустое поле', error);
        form.formBlur(code, error);
        return;
    }

    successForm.style.display = 'block';
}

const formShipping = () => {
    const accordion = document.querySelector('#accordionShipping');
    const error = accordion.querySelector('.error__form');
    const success = accordion.querySelector('.success__form');
    const delivery1 = document.querySelector('#delivery1');
    const delivery2 = document.querySelector('#delivery2');

    error.style.display = 'none';
    success.style.display = 'none';

    if ((delivery1.checked || delivery2.checked) == false) {
        error.style.display = 'block';
        return;
    }

    success.style.display = 'block';
}

const formPayment = () => {
    const accordion = document.querySelector('#accordionPayment');
    const inputs = accordion.querySelectorAll('.accordion__input');
    const errorForm = accordion.querySelector('.error__form');
    const successForm = accordion.querySelector('.success__form');

    const payment1 = document.querySelector('#payment1');
    const payment2 = document.querySelector('#payment2');
    const card = document.querySelector('#accordionCard');
    const date = document.querySelector('#accordionDate');
    const cvc = document.querySelector('#accordionCVC');

    const rCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}| (?:2131|1800|35\d{3})\d{11})$/;
    const rDate = /^(\d{2})-(\d{2})$/;

    // Clear -------
    form.formClear(inputs);

    const errorPayment = payment2.nextElementSibling.nextElementSibling;
    payment1.classList.remove('error');
    payment2.classList.remove('error');
    errorPayment.style.display = 'none';

    errorForm.style.display = 'none';
    successForm.style.display = 'none';
    // -------

    if ((payment1.checked || payment2.checked) == false) {
        const error = payment2.nextElementSibling.nextElementSibling;
        form.formError(payment2, 'Выбор не сделан', error);
        return;
    }

    if (!rCard.test(card.value)) {
        form.formError(card, 'Поле заполнено неверно');
        form.formRBlur(card, rCard);
        return;
    }

    if (!rDate.test(date.value)) {
        form.formError(date, 'Поле заполнено неверно');
        form.formRBlur(date);
        return;
    }

    if ((cvc.value < 100) || (cvc.value > 999)) {
        form.formError(cvc, 'Поле заполнено неверно');
        form.formBlur(cvc);
        return;
    }

    successForm.style.display = 'block';
}


// НЕ ЗАБЫТЬ СДЕЛАТЬ ОБНУЛЕНИЕ СООБЩЕНИЙ В FORMCONTACT!!!!
// А ТАКЖЕ ИСПРАВИТЬ РУССКИЙ ТЕКСТ ОШИБОК НА АНГЛИЙСКИЙ

module.exports = {
    accordion: accordion,
    formCheckout: formCheckout,
}