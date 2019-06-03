function forms() {
    let message = {
        loading: 'Идет отправка...',
        success: 'Отправлено',
        failure: 'Что-то пошло не так'
      };
      let formDesign = document.querySelectorAll('.popup-content form')[1],
          formCons = document.querySelectorAll('.popup-content form')[0],
          textarea = document.getElementsByTagName('textarea'),
          input = document.getElementsByTagName('input'),
          statusMessage = document.createElement('div'),
          popupContentCons = document.querySelector('.popup-consultation .popup-content'),
          popupContentDesign = document.querySelector('.popup-design .popup-content'),
          popupCloseCons = document.querySelector('.popup-consultation .popup-close'),
          popupCloseDesign = document.querySelector('.popup-design .popup-close');
    
}


module.exports = forms;