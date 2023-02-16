let slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function resetSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

function showSlide(n) {
  resetSlides();
  slides[n].style.display = "flex";
}

showSlide(currentSlide);

document.querySelector(".carousel-control-prev").addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

document.querySelector(".carousel-control-next").addEventListener("click", function () {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

