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
        }
            
        if  (event.target.classList.contains("cyrillic")) {
            // console.log('запрет латинских букв');
            event.target.value = event.target.value.replace(/[a-zA-Z]/, ""); //запрет латинских букв
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
            let price = document.querySelector('.calc-price');
            price.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
        });

        
}


module.exports = forms;