function navigateGallery(button, direction) {
    let gallery = button.closest(".gallery");
    let images = gallery.querySelectorAll(".gallery-item");
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains("visible"));

    images[currentIndex].classList.remove("visible");
    let newIndex = (currentIndex + direction + images.length) % images.length;
    images[newIndex].classList.add("visible");

}
