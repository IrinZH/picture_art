function calc() {
  
 let calc = document.querySelector('.calc'),
		size = document.querySelector('#size'),
		material = document.querySelector('#material'),
		options = document.querySelector('#options'),
		promocode = document.querySelector('.promocode'),
    price = document.querySelector('.calc-price');
        
  const calcPrice = function () {

    if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
			let total = +size.options[size.selectedIndex].value * +material.options[material.selectedIndex].value;
			if (options.options.selectedIndex > 0) {
				total += +options[options.selectedIndex].value;
      }
      if (promocode.value.trim() ==  "IWANTPOPART") { //почему то не работает((
			// if (promocode.value ==  "IWANTPOPART" || promocode.value ==  "IWANTPOPART ") {
				total = +Math.round(total * 0.7);
			}
			price.innerHTML = total + 'руб.';
		} else {
			price.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
  };

	calc.addEventListener('change', (e) => {
		let target = e.target;

		if (target.tagName == 'SELECT' || target.tagName == 'INPUT') {
      calcPrice();
    }

  });

}

module.exports = calc;