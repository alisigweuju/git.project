function initializeSlider(sliderClass, prevBtnClass, nextBtnClass, slideClass) {
    const slider = document.querySelector(sliderClass);
    const slides = slider.querySelectorAll(slideClass);
    const prevBtn = document.querySelector(prevBtnClass);
    const nextBtn = document.querySelector(nextBtnClass);

    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    window.addEventListener('resize', () => showSlide(currentIndex));
    showSlide(currentIndex);
}

// Initialize all sliders
initializeSlider('.slider', '.prev-btn', '.next-btn', '.slide');
initializeSlider('.slider-2', '.prev-btn-2', '.next-btn-2', '.slide-2');
initializeSlider('.slider-3', '.prev-btn-3', '.next-btn-3', '.slide-3');

// Toggle list item content visibility
document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        const isVisible = content.style.display === 'block';

        if (!isVisible) {
            content.style.display = 'block';
            item.classList.add('active');
        } else {
            content.style.display = 'none';
            item.classList.remove('active');
        }
    });
});



