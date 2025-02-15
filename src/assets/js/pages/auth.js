import sort from "../helpers/sort";
import { formClear, formError, formBlur, formRBlur, formPassBlur, formConfirmBlur } from "../helpers/form";

const authMainFn = () => {
    const url = document.URL;
    const thisTabName = url.split('#')[1];
    const thisTabHead = document.querySelector(`#${thisTabName}`);
    const thisTabBlockName = thisTabHead.dataset.tab;
    const thisTabBlock = document.querySelector(thisTabBlockName);
    console.log(thisTabHead)

    const formLogin = document.querySelector('#formLogin');
    const formReg = document.querySelector('#formReg');

    tab(thisTabHead, thisTabBlock);
    validateFormLogin(formLogin);
    validateFormReg(formReg);
    sort();
}

const tab = (thisTabHead, thisTabBlock) => {
    tabClear();

    thisTabHead.classList.add('active');
    thisTabBlock.classList.add('active');

    const tabs = document.querySelector('.auth__tabs');

    tabs.addEventListener('click', (event) => {
        event.preventDefault();
        const tabItem = event.target.closest('.auth__tab');

        tabClear();

        if (tabItem) {
            const blockName = tabItem.dataset.tab;
            const block = document.querySelector(blockName);

            tabItem.classList.add('active');
            block.classList.add('active');
        }
    })
}

const tabClear = () => {
    const tabs = document.querySelectorAll('.auth__tab');
    const blocks = document.querySelectorAll('.auth__block');

    tabs.forEach(item => {
        item.classList.remove('active');
    })

    blocks.forEach(item => {
        item.classList.remove('active');
    })
}

const validateFormLogin = (thisForm) => {
    const btn = thisForm.querySelector('.auth__submit');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const inputs = thisForm.querySelectorAll('.auth__input');
        const error = thisForm.querySelector('.error__form');

        const email = document.querySelector('#loginEmail');
        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        const pass = document.querySelector('#loginPass');

        formClear(inputs);

        if (!rEmail.test(email.value)) {
            formError(email, 'The field is filled in incorrectly');
            formRBlur(email, rEmail);
            return;
        }

        if (pass.value.length < 8) {
            formError(pass, 'The password must not be less than 8 characters');
            formPassBlur(pass);
            return;
        }

        console.log('Отправка формы');
        window.location.replace('/account.html');
    })
}

const validateFormReg = (thisForm) => {
    const btn = thisForm.querySelector('.auth__submit');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const inputs = thisForm.querySelectorAll('.auth__input');
        const error = thisForm.querySelector('.error__form');
        const success = thisForm.querySelector('.success__form');

        const name = document.querySelector('#regName');
        const lastname = document.querySelector('#regLastname');
        const phone = document.querySelector('#regPhone');
        const rPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        const email = document.querySelector('#regEmail');
        const confirmEmail = document.querySelector('#regConfirmEmail');
        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        const pass = document.querySelector('#regPass');
        const confirmPass = document.querySelector('#regConfirmPass');

        formClear(inputs);

        if (name.value == '') {
            formError(name, 'Empty field');
            formBlur(name);
            return;
        }

        if (lastname.value == '') {
            formError(lastname, 'Empty field');
            formBlur(lastname);
            return;
        }

        if (!rPhone.test(phone.value)) {
            formError(phone, 'The field is filled in incorrectly');
            formRBlur(phone, rPhone);
            return;
        }

        if (!rEmail.test(email.value)) {
            formError(email, 'The field is filled in incorrectly');
            formRBlur(email, rEmail);
            return;
        }

        if (email.value != confirmEmail.value) {
            formError(confirmEmail, "The emails don't match");
            formConfirmBlur(confirmEmail, email);
            return;
        }

        if (pass.value.length < 8) {
            formError(pass, 'The password must not be less than 8 characters');
            formPassBlur(pass);
            return;
        }

        if (pass.value != confirmPass.value) {
            formError(confirmPass, "The emails don't match");
            formConfirmBlur(confirmPass, pass);
            return;
        }

        success.classList.add('active');
    })
}

export default authMainFn;