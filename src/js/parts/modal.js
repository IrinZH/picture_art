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
            console.log(activeBtn);
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
            console.log('...');
        }
    }, 60000);

}

module.exports = modal;

