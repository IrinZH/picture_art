function modal() {

    let popupConsultation = document.querySelector('.popup-consultation'),
        popupDesign = document.querySelector('.popup-design');


    const bindModal = (modalTarget, modalDisplay, overflowStatus) => {
        modalTarget.style.display = modalDisplay;
        document.body.style.overflow = overflowStatus;

    };

    document.body.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('button-consultation')) {
            bindModal(popupConsultation, 'block', 'hidden');
        }
        if (target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) {
            bindModal(popupConsultation, 'none', '');
        }

        if (target.classList.contains('button-design')) {
            bindModal(popupDesign, 'block', 'hidden');
        }
        if (target.classList.contains('popup-close') || target.classList.contains('popup-design')) {
            bindModal(popupDesign, 'none', '');
        }

    });

    


}


module.exports = modal;

