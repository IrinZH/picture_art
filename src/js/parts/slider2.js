
	function slider2() {
		let slideIndex = 1,
			slides = document.querySelectorAll('.feedback-slider-item'),
			prev = document.querySelector('.main-prev-btn'),
			next = document.querySelector('.main-next-btn');

		showSlides(slideIndex);

		function showSlides(n) {
			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}
			slides.forEach((item) => item.style.display = 'none');
			slides[slideIndex - 1].style.display = 'block';
			slides[slideIndex - 1].classList.add('animated', 'zoomInRight');
		}

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		let timer = setInterval(() => {
			plusSlides(1);
		}, 7000);

		prev.addEventListener('mouseout', () => {
			timer = setInterval(() => {
				plusSlides(1);
			}, 7000);
		});
		next.addEventListener('mouseout', () => {
			timer = setInterval(() => {
				plusSlides(1);
			}, 7000);
		});
		prev.addEventListener('mouseover', () => { //прокрутку останавливаем при наведении на стрелки слайдера
			clearInterval(timer);
		});
		next.addEventListener('mouseover', () => {
			clearInterval(timer);
		});
		prev.addEventListener('click', () => {
			plusSlides(-1);
			// slides[slideIndex - 1].classList.add('zoomInRight');
			slides[slideIndex-1].classList.remove('zoomInLeft');
			slides[slideIndex - 1].classList.add('zoomInRight');
		});

		next.addEventListener('click', () => {
			plusSlides(1);
			slides[slideIndex - 1].classList.remove('zoomInRight');
			slides[slideIndex - 1].classList.add('zoomInLeft');
			

		});
	}
	module.exports = slider2;