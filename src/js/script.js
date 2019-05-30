window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let accordion = require('./parts/accordion.js'),
      burger = require('./parts/burger.js'),
      calc = require('./parts/calc.js'),
      forms = require('./parts/forms.js'),
      modal = require('./parts/modal.js'),      
      slider = require('./parts/slider.js'),
      tabs = require('./parts/tabs.js');
      
  accordion();
  burger();
  calc();
  forms();
  modal();  
  slider();
  tabs();
	
});

//ctrl-c завершить вебпек в терминале
