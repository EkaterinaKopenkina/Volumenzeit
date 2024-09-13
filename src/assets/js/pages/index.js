import formNewsletter from "../helpers/formNewsletter";

const indexMainFn = () => {
    const bg = document.querySelector('.about__video-bg');
    const thisVideo = document.querySelector('.about__video');
    const btnPlay = document.querySelector('.about__play');
    const btnNewsletter = document.querySelector('.newsletter__btn');

    video(bg, thisVideo, btnPlay);
    formNewsletter(btnNewsletter);
}

const video = (bg, thisVideo, btnPlay) => {
    bg.addEventListener('click', () => {
        bg.style.display = 'none';
        btnPlay.style.display = 'none';

        thisVideo.setAttribute('controls', '');
        thisVideo.play();
    })
}

export default indexMainFn;