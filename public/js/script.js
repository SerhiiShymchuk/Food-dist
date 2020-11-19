const tabParent = document.querySelector('.tabheader__items'),
    tabs = [...tabParent.children],
    tabsContent = document.getElementsByClassName('tabcontent')

hideTabContent()
showTabContent()
//ловим клік на меню з табами
tabParent.addEventListener("click", (event) => {
    tabs.forEach((tab, i) => {
        if (tab == event.target) {
            hideTabContent();
            showTabContent(i);
        }
    });
});

//скриваэ таби на сторінці
function hideTabContent() {
    [...tabsContent].forEach(tab => tab.style.display = 'none');
    tabs.forEach(tab => tab.classList.remove('tabheader__item_active'));
}
//показує текст і фото з табів
function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

//реалізація відправки данних з форм на сервер
const forms = document.querySelectorAll('form')
// функція для постингу даних
const message = {
    loading: 'Загрузка',
    success: 'Спасибо мы скоро с вами свяжемся',
    failure: 'Что-то пошло не так...',
}
// виклик функції відправки даних на кожну форму
forms.forEach(form => postData(form))

// функція відправки даних з форм на сервер і отримання відповіді
function postData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault() // для відміни стандартної поведінки браузера - відправка даних на сервер без перезагрузки сторінки

        const statusMessage = document.createElement('div')
        statusMessage.classList.add('status')
        statusMessage.innerText = message.loading
        form.append(statusMessage)

        const formData = new FormData(form)
        // перетворення обэкта формдата у стандартний обэкт
        const values = Object.fromEntries([...formData.entries()])
        // const request = new XMLHttpRequest()
        // request.open('POST', 'server.php')
        //request.setRequestHeader('Content-type', 'multipart/form-data')
        //request.send(formData)
        // відправка даних з обєкта formData у форматі json
        //request.setRequestHeader('Content-type', 'application/json')
        // const obj = {}
        // formData.forEach((value, key) => {
        //     obj[key] = value
        // })
        // const json = JSON.stringify(obj)

        fetch('/api/feedback', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values)
        }).then(data => {
            //console.log(request.response)
            statusMessage.innerText = message.success
            form.reset() // очистка форм
            statusMessage.remove()
        })

        // request.addEventListener('load', () => {
        //     if (request.status === 200) {
        //         console.log(request.response)
        //         statusMessage.innerText = message.success
        //         form.reset() // очистка форм
        //         setTimeout(() => {
        //             statusMessage.remove() // видаляємо повідомлення
        //         }, 2000)
        //     } else {
        //         statusMessage.innerText = message.failure
        //     }
        // })

        fetch('http://localhost:3002')
            .then(data => data.json())
            .then(resolve => console.log(resolve))
    })
}
