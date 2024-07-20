const accordion = () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(item => {
        const container = item.querySelector('.accordion__container');
        const header = item.querySelector('.accordion__header');
        const heightContainer = container.offsetHeight;

        item.classList.remove('active');

        header.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                // container.style.height = 0;

                container.style.opacity = 0;

                setTimeout(() => {
                    container.style.display = 'none';
                }, 200)
            } else {
                item.classList.add('active');
                // container.style.height = `${heightContainer}px`;
                container.style.display = "block";

                setTimeout(() => {
                    container.style.opacity = 1;
                }, 200)
            }
        })
    })
}

module.exports = {
    accordion: accordion,
}