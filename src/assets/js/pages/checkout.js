var form = require('../helpers/form.js');
var modal = require('../helpers/modal.js');
var sort = require('../helpers/sort.js');

var errorCount = 0;

const checkoutMainFn = () => {
    const accordions = document.querySelectorAll('.accordion');
    const btnBasic = document.querySelector('#btnBasic');
    const btnShipping = document.querySelector('#btnShipping');
    const btnTotal = document.querySelector('#btnTotal');

    sort.sort();
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

        modal.modalOpen(btnTotal);
        modal.modalClose(btnTotal);
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

    errorForm.style.display = 'none';
    successForm.style.display = 'none';

    if (!rEmail.test(email.value)) {
        form.formError(email, 'The field is filled in incorrectly');
        form.formRBlur(email, rEmail);
        errorCount ++;
        return;
    }

    if (name.value == '') {
        form.formError(name, 'Empty field');
        form.formBlur(name);
        errorCount ++;
        return;
    }

    if (lastname.value == '') {
        form.formError(lastname, 'Empty field');
        form.formBlur(lastname);
        errorCount ++;
        return;
    }

    if (!rPhone.test(phone.value)) {
        form.formError(phone, 'The field is filled in incorrectly');
        form.formRBlur(phone, rPhone);
        errorCount ++;
        return;
    }

    if (address1.value == '') {
        form.formError(address1, 'Empty field');
        form.formBlur(address1);
        errorCount ++;
        return;
    }

    if (address2.value == '') {
        form.formError(address2, 'Empty field');
        form.formBlur(address2);
        errorCount ++;
        return;
    }

    if (city.value == '') {
        form.formError(city, 'Empty field');
        form.formBlur(city);
        errorCount ++;
        return;
    }

    if (code.value == '') {
        form.formError(code, 'Empty field');
        form.formBlur(code);
        errorCount ++;
        return;
    }

    if (country.innerHTML == 'Country') {
        const error = country.parentElement.nextElementSibling;

        form.formError(code, 'Empty field', error);
        form.formBlur(code, error);
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

    form.formClear([coupon]);

    if (coupon.value == '') {
        form.formError(coupon, 'Empty field');
        form.formBlur(coupon);
        errorCount ++;
        return;
    }
}

module.exports = {
    checkoutMainFn: checkoutMainFn,
}