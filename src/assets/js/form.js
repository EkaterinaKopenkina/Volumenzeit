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

const formRBlur = (input, r) => {
    input.addEventListener('blur', () =>  {
        if (r.test(input.value)) {
            const error = input.nextElementSibling;

            input.classList.remove('error');
            error.style.display = 'none';
        }     
    })
}

const formPassBlur = (input) => {
    const error = input.nextElementSibling;

    input.addEventListener('blur', () => {
        if (input.value.length >= 8) {
            input.classList.remove('error');
            error.style.display = "none";
        }
    })
}

module.exports = {
    formError: formError,
    formClear: formClear,
    formBlur: formBlur,
    formRBlur: formRBlur,
    formPassBlur: formPassBlur,
}