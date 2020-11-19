const deadline = '2020-11-30'

setClock('.timer', deadline)

// функція для підрахунку днів, годин, хвилин і секунд до кінця акції
function getTimeRemaining(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date)
    const days = Math.floor(time / (1000*60*60*24))
    const hours = Math.floor(time / (1000*60*60) % 24)
    const minutes = Math.floor(time / (1000*60) % 60)
    const seconds = Math.floor(time / 1000 % 60)
    return {time, days, hours, minutes, seconds}
}

//функція для установки таймера на сторінку
function setClock(selector, endtime) {
    const parentSelector = document.querySelector(selector),
        days = parentSelector.querySelector('#days'),
        hours = parentSelector.querySelector('#hours'),
        minutes = parentSelector.querySelector('#minutes'),
        seconds = parentSelector.querySelector('#seconds');

        updateClock()
        //запуск функції для таймера через секунду
        const interval = setInterval(updateClock, 1000)

        //функція для оновлення і запису значень у поля таймера
        function updateClock() {
            const timeObj = getTimeRemaining(endtime)
            days.innerText = timeObj.days
            hours.innerText = timeObj.hours
            minutes.innerText = timeObj.minutes
            seconds.innerText = timeObj.seconds

            //зупинка таймера коли всі поля будуть по нулям
            if(timeObj.time <= 0) clearInterval(interval)
        }
}