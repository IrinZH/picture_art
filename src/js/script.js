window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let accordion = require('./parts/accordion.js'),
      burger = require('./parts/burger.js'),
      blocks = require('./parts/blocks.js'),
      calc = require('./parts/calc.js'),
      filter = require('./parts/filter.js'),
      forms = require('./parts/forms.js'),
      hover = require('./parts/hover.js'),
      modal = require('./parts/modal.js'),  
      slider1 = require('./parts/slider1.js'),
      slider2 = require('./parts/slider2.js');

      
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
