// const swiper = new Swiper('.swiper', {
//     // Інші параметри слайдера (за потреби)
//     loop: true, // зациклення слайдера
//     autoplay: {
//         delay: 10000, // 10 секунд
//         disableOnInteraction: false, // продовжує автопрокрутку після взаємодії
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

// document.querySelector('.burger').addEventListener('click', function () {
//     this.classList.toggle('active');
//     document.querySelector('.header__menu').classList.toggle('open');
// });




document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.swiper');

    sliders.forEach((slider, index) => {
        const isBestSellers = slider.classList.contains('best-sellers-swiper');

        const paginationClass = `swiper-pagination-${index}`;
        const nextBtnClass = `swiper-button-next-${index}`;
        const prevBtnClass = `swiper-button-prev-${index}`;

        const paginationEl = slider.querySelector('.swiper-pagination');
        const nextEl = slider.querySelector('.swiper-button-next');
        const prevEl = slider.querySelector('.swiper-button-prev');

        if (paginationEl) paginationEl.classList.add(paginationClass);
        if (nextEl) nextEl.classList.add(nextBtnClass);
        if (prevEl) prevEl.classList.add(prevBtnClass);

        const swiperOptions = {
            loop: true,
            // autoplay: {
            //     delay: 10000,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: `.${paginationClass}`,
                clickable: true,
            },
            navigation: {
                nextEl: `.${nextBtnClass}`,
                prevEl: `.${prevBtnClass}`,
            },
        };

        if (isBestSellers) {
            swiperOptions.spaceBetween = 30; // відступ між СЛАЙДАМИ
            swiperOptions.slidesPerView = 1; // 1 слайд (в якому 3 картки)
            swiperOptions.centeredSlides = false; // НЕ центрований
        }

        new Swiper(slider, swiperOptions);
    });

    // Бургер-меню
    document.querySelector('.burger').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('open');
    });
});

