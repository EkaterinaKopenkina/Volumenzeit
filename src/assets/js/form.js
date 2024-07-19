const formError = (element, message) => {
    const error = element.nextElementSibling;

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

const formBlur = (input) => {
    input.addEventListener('blur', () => {
        if (input.value != '') {
            const error = input.nextElementSibling;

            input.classList.remove('error');
            error.style.display = "none";
        }
    })
}

module.exports = {
    formError: formError,
    formClear: formClear,
    formBlur: formBlur,
}