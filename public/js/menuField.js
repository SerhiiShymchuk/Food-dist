class Menu {
    constructor (photoSrc, photoAlt, name, description, price, parentSelector, ...classes) {
        this.photoSrc = photoSrc
        this.photoAlt = photoAlt
        this.name = name
        this.description = description
        this.price = price
        this.classes = classes
        this.parent = document.querySelector(parentSelector)
        this.transfer = 27
        this.changeToUAH()
    }
    changeToUAH() {
        this.price = this.price * this.transfer
    }
    render() {
        const element = document.createElement('div')
        // додаэмо значення по замвочуванню якщо нема ...classes
        if(this.classes.length === 0) this.classes.push('menu__item')
        this.classes.forEach(className => element.classList.add(className))
        element.innerHTML = `
            <div>
                <img src=${this.photoSrc} alt=${this.photoAlt}>
                <h3 class="menu__item-subtitle">${this.name}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>`
        this.parent.append(element)
    }
}
// передаємо в конструктор класа параметри і показуємо на сторінці ці обєкти
new Menu("img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        15,
        '.menu .container',
        //буде значення по замовчуванню
        ).render()

new Menu("img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        '.menu .container',
        'menu__item'
        ).render()
new Menu("img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков',
        12,
        '.menu .container',
        'menu__item'
        ).render()

