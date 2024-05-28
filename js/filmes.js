function setupCarousel(carouselContainer) {
    const carouselSlide = carouselContainer.querySelector('.carousel-slide');
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');

    const prevBtn = carouselContainer.querySelector('.prevBtn');
    const nextBtn = carouselContainer.querySelector('.nextBtn');

    let counter = 0;
    const itemWidth = carouselItems[0].clientWidth;

    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = carouselItems.length - 1;
        }
        carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
    });

    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter >= carouselItems.length) {
            counter = 0;
        }
        carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
    });
}

document.querySelectorAll('.carousel-container').forEach(setupCarousel);
