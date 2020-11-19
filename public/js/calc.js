const result = document.querySelector('.calculating__result span')
let sex='female', age, height, weight, ratio=1.375

calcTotal()

getStaticInformation('#gender', 'calculating__choose-item_active')
getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active')

getDynamicInformation('#age')
getDynamicInformation('#height')
getDynamicInformation('#weight')

function calcTotal() {
    if (!sex || !age || !height || !weight) {
        result.innerText = '_____'
        return
    }
    if (sex == 'female') result.innerText = Math.round((447.6 + 9.2*weight + 3.1*height - 4.3*age) * ratio)
    else result.innerText = Math.round((88.36 + 13.4*weight + 4.8*height - 5.7*age) * ratio)
}

function getStaticInformation(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);
    // не працює калькулятор через те що раніше було на делегуванні на батьківському parentSelector
    elements.forEach(element => {
            element.addEventListener('click', (event) => {
            if (event.target.getAttribute('data-ratio')) ratio = +event.target.getAttribute('data-ratio')
            else sex = event.target.getAttribute('id')
    
            elements.forEach( element => element.classList.remove(activeClass))
            event.target.classList.add(activeClass)
    
            calcTotal()
            })
    });
};

function getDynamicInformation(selector) {
    const input = document.querySelector(selector)
    input.addEventListener('input', () => {
        if (input.value.match(/\D/g)) input.style.border = '2px solid red'
        else input.style.border = 'none'
        switch(input.getAttribute('id')) {
            case 'age':
                age = +input.value
                break
            case 'height':
                height = +input.value
                break
            case 'weight':
                weight = +input.value
                break
        }
        calcTotal()
    })
}