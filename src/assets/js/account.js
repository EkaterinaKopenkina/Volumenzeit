const account = () => {
    const btnManage = document.querySelector('#accountManage');
    const btnSave = document.querySelector('#accountSave');

    btnManage.classList.add('active');
    btnManage.style.transform = 'scale(100%)';

    btnManage.addEventListener('click', (event) => {
        event.preventDefault();

        manageMode(btnManage, btnSave);
    })
}

const manageMode = (btnManage, btnSave) => {
    const inputs = document.querySelectorAll('.account__input');

    inputs.forEach(input => {
        input.removeAttribute('disabled');
        input.style.cursor = 'text';
    })

    btnManage.style.transform = 'scale(0)';

    setTimeout(() => {
        btnManage.classList.remove('active');
    }, 200)

    setTimeout(() => {
        btnSave.classList.add('active');

        setTimeout(() => {
            btnSave.style.transform = 'scale(100%)'
        }, 200)
    }, 200)
}

module.exports = {
    account: account,
}