let slideIndex = 0;

function goToSlide(e, index) {
    let images = e.parentElement.querySelectorAll(".carousel-image");
    images[slideIndex].className = "carousel-image";
    slideIndex = (index + images.length) % images.length;
    images[slideIndex].className = "carousel-image active";
}