const initSlider = () => {
    const mySliders = document.querySelectorAll('.swiper-container');

    mySliders.forEach(mySlider => {
        const slider = mySlider.classList[0];
        
        switch(slider) {
            case 'watches__inner':
                let perView = 'auto';

                if (window.innerWidth < 427) {
                    perView = 1;
                }

                const swiperWatches = new Swiper(mySlider, { 
                    navigation: {
                        nextEl: '.watches__arrow--next',
                        prevEl: '.watches__arrow--prev',
                    },
            
                    slidesPerView: perView,
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                });

                break;
            
            case 'products__container':
                const swiperProducts = new Swiper(mySlider, { 
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                          return '<span class="' + className + '">' + (index + 1) + "</span>";
                        },
                    },

                    slidesPerView: 1,
                    autoHeight: true,
                    allowTouchMove: false, // Запрет на перетаскивание мышью
                    effect: 'fade',
                    spaceBetween: 0,
                    fadeEffect: {
                        crossFade: true, // предыдущий слайд исчезает
                        duration: 200 // время перехода
                    }
                });

                break;
            case 'product__slider-container':
                const swiperProduct = new Swiper(mySlider, { 
                    navigation: {
                        nextEl: '.product__arrow--next',
                        prevEl: '.product__arrow--prev',
                    },
            
                    slidesPerView: 1,
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                });

                break;
        }
    })
}

module.exports = {
    initSlider: initSlider
}