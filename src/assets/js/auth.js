var form = require('./form.js');

const tab = () => {
    const url = document.URL;
    const thisTabName = url.split('#')[1];
    const thisTabHead = document.querySelector(`#${thisTabName}`);
    const thisTabBlockName = thisTabHead.dataset.tab;
    const thisTabBlock = document.querySelector(thisTabBlockName);

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

const formLogin = () => {
    const thisForm = document.querySelector('#formLogin');
    const btn = thisForm.querySelector('.auth__submit');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const inputs = thisForm.querySelectorAll('.auth__input');
        const error = thisForm.querySelector('.error__form');

        const email = document.querySelector('#loginEmail');
        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        const pass = document.querySelector('#loginPass');

        form.formClear(inputs);

        if (!rEmail.test(email.value)) {
            form.formError(email, 'The field is filled in incorrectly');
            form.formRBlur(email, rEmail);
            return;
        }

        if (pass.value.length < 8) {
            form.formError(pass, 'The password must not be less than 8 characters');
            form.formPassBlur(pass);
            return;
        }

        console.log('Отправка формы');
    })
}

module.exports = {
    tab: tab,
    formLogin: formLogin,
}