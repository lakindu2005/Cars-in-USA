document.addEventListener("DOMContentLoaded", function () {

    // Slideshow code starts here
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach((sliderContainer) => {
        const slider = sliderContainer.querySelector(".slide-images");
        const prevBtn = sliderContainer.querySelector(".prev-btn");
        const nextBtn = sliderContainer.querySelector(".next-btn");
        const totalSlides = slider.querySelectorAll(".img-container").length;
        
        let currentIndex = 0;
        const slideWidth = 1200; // Width of each slide
        const slideInterval = 5000; // Auto-slide interval (in ms)
        let autoSlide;

        function updateSlide() {
            slider.style.left = `-${currentIndex * slideWidth}px`;
        }

        function startAutoSlide() {
            autoSlide = setInterval(() => {
                currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
                updateSlide();
            }, slideInterval);
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        prevBtn.addEventListener("click", function () {
            stopAutoSlide();
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            updateSlide();
            startAutoSlide();
        });

        nextBtn.addEventListener("click", function () {
            stopAutoSlide();
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            updateSlide();
            startAutoSlide();
        });

        startAutoSlide(); // Start auto-slideshow initially
    });
    // Slideshow code ends here
});