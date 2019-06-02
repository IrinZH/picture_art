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