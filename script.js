const swiper = new Swiper('.swiper', {
    // Інші параметри слайдера (за потреби)
    loop: true, // зациклення слайдера
    autoplay: {
        delay: 10000, // 10 секунд
        disableOnInteraction: false, // продовжує автопрокрутку після взаємодії
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('open');
});