document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    const slidesContainer = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Safe check to verify your HTML tags are read correctly
    if (!slidesContainer || !prevBtn || !nextBtn) {
        console.error("Slider elements are missing from your HTML structure.");
        return;
    }

    function moveSlider() {
        // Shift container left based on current active image index
        slidesContainer.style.transform = `translateX(-${counter * 100}%)`;
    }

    function nextSlide() {
        counter = (counter + 1) % totalSlides;
        moveSlider();
    }

    function prevSlide() {
        counter = (counter - 1 + totalSlides) % totalSlides;
        moveSlider();
    }

    // Click triggers
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    // Automated loop timer
    let slideInterval = setInterval(nextSlide, 4000);

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    }
});
