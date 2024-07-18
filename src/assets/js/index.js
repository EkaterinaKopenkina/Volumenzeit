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

module.exports = {
    video: video,
}