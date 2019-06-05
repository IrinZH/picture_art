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
            success: 'Спасибо!',
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
                        setTimeout(() =>{
                            formName.removeChild(statusMessage);
                            content.style.display = 'block';
                        }, 3000);			
                    } else {
                        statusMessage.innerHTML = message.success;
    
                    }
                } else {
                    if (formName.classList.contains('modal-form')) {
                        content.style.display = 'none';
                        statusMessage.innerHTML = message.failure;
                        setTimeout(() =>{
                            formName.removeChild(statusMessage);
                            content.style.display = 'block';
                        }, 3000);
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
            console.log(statusMessage);
            
        });
}


module.exports = forms;