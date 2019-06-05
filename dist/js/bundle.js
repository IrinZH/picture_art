/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {

let accordBlock = document.querySelectorAll('.accordion-block'),
        accordHeading = document.querySelectorAll('.accordion-heading'),
        accordIndex = 1;


    function accordHide() {
        accordBlock.forEach((elem) => {
            elem.style.display = 'none';
            elem.classList.remove('ui-accordion-content-active', 'fadeInUp', 'animated');
        }); 
    }
    accordHide();

    function accordShow(n) {
        accordHide();
        accordBlock[n].style.display = 'block';
        accordBlock[n].classList.add('ui-accordion-content-active', 'fadeInUp', 'animated');
    }

    function changeHeading() {
        accordHeading.forEach((elem) => {
            if (!(elem.classList.contains('ui-accordion-header-active'))) {
            } else {
                elem.classList.remove('ui-accordion-header-active');
            }
        });
    }
    
    accordHeading.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            accordIndex = i;
            accordShow(accordIndex);
            changeHeading();
            elem.classList.add('ui-accordion-header-active');
        });
    });
}


module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/blocks.js":
/*!********************************!*\
  !*** ./src/js/parts/blocks.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function blocks() {
  let btn = document.getElementsByClassName('button-transparent')[0],
        element = document.querySelectorAll('.styles-2');

    btn.addEventListener('click', () => {
        element.forEach(function(item) {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');  
        });
        btn.style.display = 'none';
    });
}
module.exports = blocks;

/***/ }),

/***/ "./src/js/parts/burger.js":
/*!********************************!*\
  !*** ./src/js/parts/burger.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function burger() {
  let burger = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.burger-menu');

  burger.addEventListener('click', () => {
    // console.log(document.documentElement.clientWidth); //ширина экрана, меняется
    // console.log(window.screen.width); //ширина экрана устройства, не меняется
    if (document.documentElement.clientWidth <= 976) {

      if (burgerMenu.classList.contains("burger-menu_active") == true) {
        burgerMenu.classList.remove("burger-menu_active");
        burgerMenu.style.display = 'none';
      } else {
        burgerMenu.classList.add("burger-menu_active");
        burgerMenu.style.display = 'block';
      }
    }
  });
}
module.exports = burger;


/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  let pictureSize = document.getElementById("size"),
    pictureMaterial = document.getElementById("material"),
    options = document.getElementById("options"),
    promocod = document.getElementsByClassName("promocode")[0],
    calcPrice = document.getElementsByClassName("calc-price")[0];

  mapping = {
    "40x50": 700,
    "50x70": 900,
    "70x70": 1300,
    "70x100": 1500,
    "Холст из волокна": 1.8,
    "Льняной холст": 2.4,
    "Холст из натурального хлопка": 2.8,
    "Покрытие арт-гелем": 700,
    "Экспресс-изготовление": 1500,
    "Доставка готовых работ": 500
  };

  function toCount(promo) {
    let a;
    if (options.value == "Дополнительные услуги") a = 0;
    else a = mapping[options.value];
    if (promo) {
      return 0.7 * (mapping[pictureSize.value] * mapping[pictureMaterial.value]) + a + " рублей";
    } else {
      return mapping[pictureSize.value] * mapping[pictureMaterial.value] + a + " рублей";
    }
  };

  pictureSize.addEventListener('change', () => {
    if (pictureSize.value != "Выберите размер картины" && pictureMaterial.value != "Выберите материал картины") {
      
      if (promocod.value == "IWANTPOPART")
        calcPrice.textContent = toCount(true);
      else {
        calcPrice.textContent = toCount(false);
      }
    } else calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
  });

  pictureMaterial.addEventListener('change', () => {
    if (pictureSize.value != "Выберите размер картины" && pictureMaterial.value != "Выберите материал картины") {
      if (promocod.value == "IWANTPOPART")
        calcPrice.textContent = toCount(true);
      else calcPrice.textContent = toCount(false);
    } else calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
  });

  options.addEventListener('change', () => {
    if (pictureSize.value != "Выберите размер картины" && pictureMaterial.value != "Выберите материал картины") {
      if (promocod.value == "IWANTPOPART")
        calcPrice.textContent = toCount(true);
      else calcPrice.textContent = toCount(false);
    } else calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
  });

  promocod.addEventListener('change', () => {
    if (pictureSize.value != "Выберите размер картины" && pictureMaterial.value != "Выберите материал картины") {
      if (promocod.value == "IWANTPOPART")
        calcPrice.textContent = toCount(true);
      else calcPrice.textContent = toCount(false);
    } else calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
  });
    
}
module.exports = calc;

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function filtr() {
	let portfolioBlock = document.querySelectorAll('.portfolio-block'),
      portfolioMenu = document.querySelector('.portfolio-menu'),
      portfolioMenuLink = document.querySelectorAll('.portfolio-menu li'),
      portfolioNo = document.querySelector('.portfolio-no');

  portfolioMenu.addEventListener('click', (e) => {
    let target = e.target;

    for (let i = 0; i < portfolioMenuLink.length; i++) {
      portfolioMenuLink[i].classList.remove('active');

      if (target && target == portfolioMenuLink[0]) {
        portfolioMenuLink[0].classList.add('active');
        portfolioBlock.forEach((box) => {
          box.classList.remove('hide');
          box.classList.add('show');
        });
      } else if (target && target == portfolioMenuLink[i] && i != 0) {
        portfolioMenuLink[i].classList.add('active');
        let reg = portfolioMenuLink[i].className,
            count = 0;
        reg = reg.replace('active', '');

        for (let j = 0; j < portfolioBlock.length; j++) {
          portfolioBlock[j].classList.add('show');
          let str = String(portfolioBlock[j].className);

          if (portfolioBlock[j] && str.search(reg) == -1) {
            portfolioBlock[j].classList.add('hide');
            portfolioBlock[j].classList.remove('show');
            count = count + 1;
            if (count == portfolioBlock.length) {
              portfolioNo.classList.add('show');
            } else {
              portfolioNo.classList.remove('show');
            }
          }
        }
      }
    }
  });

}

module.exports = filtr;

/***/ }),

/***/ "./src/js/parts/forms.js":
/*!*******************************!*\
  !*** ./src/js/parts/forms.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
    // валидация инпута телефона, инпутов имя и комментария
    document.body.addEventListener("input", event => {
        if (event.target.getAttribute("type") === "tel") {
            event.target.value = "+" + event.target.value.replace(/[^0-9]/g, "").slice(0, 11);
            if (event.target.value.length == 1) {
                event.target.value = "";
            }
        }
        if (event.target.getAttribute("type") === "email") {
            event.target.value = event.target.value.replace(/[а-яА-Я]/, "");
        } else {
            if (event.target.getElementsByClassName("name") || event.target.getElementsByTagName("textarea") || (event.target.getElementsByClassName("input-text"))) {
                event.target.value = event.target.value.replace(/[a-zA-Z]/, ""); //запрет латинских букв
            }
        }

    });

    let message = {
            loadind: 'Загрузка...',
            success: 'Спасибо, скоро мы свяжемся с Вами!',
            failure: 'Что-то пошло не так'
        };
    
        let statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
    
        let formSend = (formName) => {
            formName.appendChild(statusMessage);
            let input = formName.querySelectorAll('input'),
                textArea = document.querySelectorAll('textarea'),
                content = formName.querySelector('.form-content');
                
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
            let formData = new FormData(formName);
            
            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
    
            request.send(json);
    
            request.addEventListener('readystatechange', () => {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200) {
                    if (formName.classList.contains('modal-form')) {
                        content.style.display = 'none';
                        statusMessage.innerHTML = message.success;	
                
                    } else {
                        statusMessage.innerHTML = message.success;
    
                    }
                } else {
                    if (formName.classList.contains('modal-form')) {
                        content.style.display = 'none';
                        statusMessage.innerHTML = message.failure;
                        
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                }
            });
    
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
                
            }
            for (let i = 0; i < textArea.length; i++) { //очищаем комментарий
                textArea[i].value = '';
                
            }
        };
    
        document.body.addEventListener('submit', (event) => {
            event.preventDefault();
            formSend(event.target);
            // console.log(statusMessage);
            setTimeout(() => {  ///очистка статусмесседжа через 3 секунды после отправки формы
                statusMessage.innerHTML = "";
            }, 3000);
            
        });
}


module.exports = forms;

/***/ }),

/***/ "./src/js/parts/hover.js":
/*!*******************************!*\
  !*** ./src/js/parts/hover.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hover() {
  let block = document.querySelectorAll('.sizes-block'),
  picture = document.getElementsByClassName('image'),
  size = document.querySelectorAll('.size'),
  startPrice = document.querySelectorAll('.starting-price'),
  finalPrice = document.querySelectorAll('.final-price');

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener('mouseover', function() {
      picture[i].setAttribute('src', `img/sizes-${i+1}-1.png`);
      size[i].style.display = 'none';
      startPrice[i].style.display = 'none';
      finalPrice[i].style.display = 'none';
      
  });
  block[i].addEventListener('mouseout', function() {
      picture[i].setAttribute('src', `img/sizes-${i+1}.png`);
      size[i].style.display = 'block';
      startPrice[i].style.display = 'block';
      finalPrice[i].style.display = 'block'; 
  });
}

} 
module.exports = hover;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {

    let popupConsultation = document.querySelector('.popup-consultation'),
        popupDesign = document.querySelector('.popup-design'),
        gift = document.querySelector('.popup-gift'),
        giftBtn = document.querySelector('.fixed-gift'),
        activeBtn = false,
        activeStatus = false;
        

    const bindModal = (modalTarget, modalDisplay, overflowStatus) => {
        modalTarget.style.display = modalDisplay;
        document.body.style.overflow = overflowStatus;

    };

    document.body.addEventListener('click', event => {
        let target = event.target;
        
        if (target.classList.contains('button-consultation')) {
            bindModal(popupConsultation, 'block', 'hidden');
            activeStatus = true;
        }
        if (target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) {
            bindModal(popupConsultation, 'none', '');
            activeStatus = false;
        }

        if (target.classList.contains('button-design')) {
            bindModal(popupDesign, 'block', 'hidden');
            activeStatus = true;
        }
        if (target.classList.contains('popup-close') || target.classList.contains('popup-design')) {
            bindModal(popupDesign, 'none', '');
            activeStatus = false;
        }

        if (target.classList.contains('fixed-gift')) {
            bindModal(gift, 'block', 'hidden');
            giftBtn.style.display = 'none';
            activeStatus = true;
        }
        if (target.classList.contains('popup-close') || target.classList.contains('popup-gift')) {
            bindModal(gift, 'none', '');
            activeStatus = false;
        }

    });

    /* Если пользователь долистал страницу до конца, но не нажал ни одну кнопку - 
    должно появляться модальное окно (popup-gift) и сам подарок полностью исчезает со страницы. При нажатии на крестик или подложку окно исчезает. */

    document.body.addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {
            activeBtn = true;
        }
    });

    window.addEventListener('scroll', () => {
        checkScroll();
    });

    function checkScroll() {
        let scrollHeight = Math.max( //https://learn.javascript.ru/metrics-window
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            ),
            b = window.pageYOffset,
            dif = scrollHeight - b;

        if (dif < 800 && activeBtn == false) {
            // console.log(activeBtn);
            bindModal(gift, 'block', 'hidden');
            giftBtn.style.display = 'none';
            // console.log('как то так');
        }
    }

    //Если пользователь на странице больше 60 секунд - должно появится модальное окно (popup-consultation). 
    // При нажатии на крестик или подложку окно исчезает. Никакими действиями не перебивается, но если уже открыто какое-нибудь модальное окно - ничего не происходит.
    setTimeout(() =>{
        if (activeStatus == false) {
            bindModal(popupConsultation,'block', 'hidden');
        } else {
            // console.log('...');
        }
    }, 60000);

}

module.exports = modal;



/***/ }),

/***/ "./src/js/parts/slider1.js":
/*!*********************************!*\
  !*** ./src/js/parts/slider1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {


	function slider1() {
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

	module.exports = slider1;

/***/ }),

/***/ "./src/js/parts/slider2.js":
/*!*********************************!*\
  !*** ./src/js/parts/slider2.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {


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

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
      burger = __webpack_require__(/*! ./parts/burger.js */ "./src/js/parts/burger.js"),
      blocks = __webpack_require__(/*! ./parts/blocks.js */ "./src/js/parts/blocks.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
      filter = __webpack_require__(/*! ./parts/filter.js */ "./src/js/parts/filter.js"),
      forms = __webpack_require__(/*! ./parts/forms.js */ "./src/js/parts/forms.js"),
      hover = __webpack_require__(/*! ./parts/hover.js */ "./src/js/parts/hover.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),  
      slider1 = __webpack_require__(/*! ./parts/slider1.js */ "./src/js/parts/slider1.js"),
      slider2 = __webpack_require__(/*! ./parts/slider2.js */ "./src/js/parts/slider2.js");

      
  accordion();
  burger();
  blocks();
  calc();
  filter();
  forms();
  hover();
  modal();
  slider1();
  slider2();

	
});

//ctrl-c завершить вебпек в терминале


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map