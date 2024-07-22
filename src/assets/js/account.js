var form = require('./form.js');

const account = () => {
    const btnManage = document.querySelector('#accountManage');
    const btnSave = document.querySelector('#accountSave');

    btnManage.classList.add('active');
    btnManage.style.transform = 'scale(100%)';

    btnManage.addEventListener('click', (event) => {
        event.preventDefault();

        manageMode(btnManage, btnSave);
        formAccount(btnSave);
    })
}

const formAccount = (btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const thisForm = document.querySelector('.account__form');
        const inputs = thisForm.querySelectorAll('.account__input');

        const name = document.querySelector('#accountName');
        const email = document.querySelector('#accountEmail');
        const phone = document.querySelector('#accountPhone');

        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        const rPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

        inputs.forEach(input => {
            const error = input.parentElement.nextElementSibling;
    
            input.classList.remove('error');
            error.style.display = 'none';
        })

        if (name.value == '') {
            const error = name.parentElement.nextElementSibling;

            form.formError(name, 'Empty field', error);
            form.formBlur(name, error);
            return;
        }

        if (!rEmail.test(email.value)) {
            const error = email.parentElement.nextElementSibling;

            form.formError(email, 'The field is filled in incorrectly', error);
            form.formRBlur(email, rEmail, error);
            return;
        }

        if (!rPhone.test(phone.value)) {
            const error = phone.parentElement.nextElementSibling;

            form.formError(phone, 'The field is filled in incorrectly', error);
            form.formRBlur(phone, rPhone, error);
            return;
        }

        defaultMode();
    })
}

const manageMode = (btnManage, btnSave) => {
    const inputs = document.querySelectorAll('.account__input');

    inputs.forEach(input => {
        input.removeAttribute('disabled');
        input.style.cursor = 'text';
        input.classList.add('active');
    })

    accountHide(btnManage);

    setTimeout(() => {
        accountShow(btnSave);
    }, 200)
}

const defaultMode = () => {
    const btnManage = document.querySelector('#accountManage');
    const btnSave = document.querySelector('#accountSave');
    const inputs = document.querySelectorAll('.account__input');

    inputs.forEach(input => {
        input.setAttribute('disabled', '');
        input.style.cursor = 'default';
        input.classList.remove('active');
    })

    accountHide(btnSave);

    setTimeout(() => {
        accountShow(btnManage);
    }, 200)
}

const accountHide = (btn) => {
    btn.style.transform = 'scale(0)';

    setTimeout(() => {
        btn.classList.remove('active');
    }, 200)
}

const accountShow = (btn) => {
    btn.classList.add('active');

    setTimeout(() => {
        btn.style.transform = 'scale(100%)'
    }, 200)
}

module.exports = {
    account: account,
}