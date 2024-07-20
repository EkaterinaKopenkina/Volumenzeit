var form = require('./form.js');

const accordion = () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(item => {
        const container = item.querySelector('.accordion__container');
        const header = item.querySelector('.accordion__header');
        // const heightContainer = container.offsetHeight;

        item.classList.remove('active');

        header.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                // container.style.height = 0;

                container.style.opacity = 0;

                setTimeout(() => {
                    container.style.display = 'none';
                }, 200)
            } else {
                item.classList.add('active');
                // container.style.height = `${heightContainer}px`;
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
    const errorForm = accordion.querySelector('.error__form');
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

module.exports = {
    accordion: accordion,
    formCheckout: formCheckout,
}