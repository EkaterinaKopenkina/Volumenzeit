const formError = (element, message, error = element.nextElementSibling) => {
    element.classList.add('error');
    error.innerHTML = message;
    error.style.display = "block";
}

const formClear = (inputs) => {
    inputs.forEach(input => {
        const error = input.nextElementSibling;

        input.classList.remove('error');
        error.style.display = 'none';
    })
}

const formBlur = (input, error = input.nextElementSibling) => {
    input.addEventListener('blur', () => {
        if (input.value != '') {
            input.classList.remove('error');
            error.style.display = "none";
        }
    })
}

const formEmailBlur = (input) => {
    const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    input.addEventListener('blur', () =>  {
        if (rEmail.test(input.value)) {
            const error = input.nextElementSibling;

            input.classList.remove('error');
            error.style.display = 'none';
        }     
    })
}

const formPhoneBlur = (input) => {
    const rPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    input.addEventListener('blur', () =>  {
        if (rPhone.test(input.value)) {
            const error = input.nextElementSibling;

            input.classList.remove('error');
            error.style.display = 'none';
        }     
    })
}

module.exports = {
    formError: formError,
    formClear: formClear,
    formBlur: formBlur,
    formEmailBlur: formEmailBlur,
    formPhoneBlur: formPhoneBlur,
}