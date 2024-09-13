import sort from "../helpers/sort";
import {modalOpen, modalClose} from '../helpers/modal';
import { formClear, formError, formBlur, formRBlur } from "../helpers/form";

var errorCount = 0;

const checkoutMainFn = () => {
    const accordions = document.querySelectorAll('.accordion');
    const btnBasic = document.querySelector('#btnBasic');
    const btnShipping = document.querySelector('#btnShipping');
    const btnTotal = document.querySelector('#btnTotal');

    sort();
    accordion(accordions);
    formCheckout(btnBasic, btnShipping, btnTotal);
}

const accordion = (accordions) => {
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

const formCheckout = (btnBasic, btnShipping, btnTotal) => {
    btnBasic.addEventListener('click', (event) => {
        event.preventDefault();
        formBasic();
    })

    btnShipping.addEventListener('click', (event) => {
        event.preventDefault();
        formShipping();
    })

    btnTotal.addEventListener('click', (event) => {
        event.preventDefault();
        const error = document.querySelector('.checkout__error');

        error.style.display = 'none';
        errorCount = 0;
        
        formBasic();
        formShipping();
        formCoupon();

        if (errorCount > 0) {
            error.style.display = 'block';
            return;
        }

        
        modalOpen(btnTotal);
        modalClose(btnTotal);
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

    formClear(inputs);

    errorForm.style.display = 'none';
    successForm.style.display = 'none';

    if (!rEmail.test(email.value)) {
        formError(email, 'The field is filled in incorrectly');
        formRBlur(email, rEmail);
        errorCount ++;
        return;
    }

    if (name.value == '') {
        formError(name, 'Empty field');
        formBlur(name);
        errorCount ++;
        return;
    }

    if (lastname.value == '') {
        formError(lastname, 'Empty field');
        formBlur(lastname);
        errorCount ++;
        return;
    }

    if (!rPhone.test(phone.value)) {
        formError(phone, 'The field is filled in incorrectly');
        formRBlur(phone, rPhone);
        errorCount ++;
        return;
    }

    if (address1.value == '') {
        formError(address1, 'Empty field');
        formBlur(address1);
        errorCount ++;
        return;
    }

    if (address2.value == '') {
        formError(address2, 'Empty field');
        formBlur(address2);
        errorCount ++;
        return;
    }

    if (city.value == '') {
        formError(city, 'Empty field');
        formBlur(city);
        errorCount ++;
        return;
    }

    if (code.value == '') {
        formError(code, 'Empty field');
        formBlur(code);
        errorCount ++;
        return;
    }

    if (country.innerHTML == 'Country') {
        const error = country.parentElement.nextElementSibling;

        formError(code, 'Empty field', error);
        formBlur(code, error);
        errorCount ++;
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
        errorCount ++;
        return;
    }

    success.style.display = 'block';
}

const formCoupon = () => {
    const coupon = document.querySelector('#accordionCoupon');

    formClear([coupon]);

    if (coupon.value == '') {
        formError(coupon, 'Empty field');
        formBlur(coupon);
        errorCount ++;
        return;
    }
}

export default checkoutMainFn;