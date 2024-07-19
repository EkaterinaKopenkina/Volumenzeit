var form = require('./form.js');

const video = () => {
    const bg = document.querySelector('.about__video-bg');
    const thisVideo = document.querySelector('.about__video');
    const btnPlay = document.querySelector('.about__play');

    bg.addEventListener('click', () => {
        bg.style.display = 'none';
        btnPlay.style.display = 'none';

        thisVideo.setAttribute('controls', '');
        thisVideo.play();
    })
}

const formNewsletter = () => {
    const btn = document.querySelector('.newsletter__btn');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const thisForm = document.querySelector('.newsletter__form');
        const inputs = thisForm.querySelectorAll('.newsletter__input');

        const name = document.querySelector('#newsletterName');
        const email = document.querySelector('#newsletterEmail');
        const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

        form.formClear(inputs);

        if (name.value == '') {
            form.formError(name, 'Пустое поле');
            form.formBlur(name);
            return;
        }

        if (!rEmail.test(email.value)) {
            form.formError(email, 'Поле заполнено неверно');
            form.formEmailBlur(email);
            return;
        }

        console.log('Отправка формы');
    })
}

module.exports = {
    video: video,
    formNewsletter: formNewsletter,
}