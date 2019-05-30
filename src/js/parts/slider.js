
	function slider() {
			let slideIndex = 2,
      slides = document.querySelectorAll('.main-slider-item'),
      intervalSlider;

	showSlides(slideIndex);
	
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => {
    item.style.display = 'none';
    slides[slideIndex - 1].style.display = 'block';
    item.classList.add('animated', 'fadeInDown');
        
    if (slideIndex == 2) {
      intervalSlider = "7000"; //вторая картинка будет медленней переключаться на другой слайд
    }
    if (slideIndex != 2) {
    intervalSlider = "3000";
    }
  });
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
    // console.log(intervalSlider);
  }
  setInterval(() => plusSlides(1), intervalSlider);
}

module.exports = slider;