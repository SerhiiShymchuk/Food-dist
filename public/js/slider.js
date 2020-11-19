const slide = [
    {
        url: 'img/slider/food-12.jpg',
        id: '01'
    },
    {
        url: 'img/slider/olive-oil.jpg',
        id: '02'
    },
    {
        url: 'img/slider/paprika.jpg',
        id: '03'
    },
    {
        url: 'img/slider/pepper.jpg',
        id: '04'
    },
]
const sliderCounterPrew = document.querySelector('.offer__slider-prev')
const sliderCounterNext = document.querySelector('.offer__slider-next')
const sliderImage = document.querySelector('.offer__slide>img')

const sliderCounter = document.querySelector('.offer__slider-counter')

let index = slide.findIndex(slide => slide.id == sliderCounterPrew.nextElementSibling.innerText)

sliderCounter.addEventListener('click', (event) => {
    if (event.target == sliderCounterPrew.firstElementChild) {
        if (index == 0) index = slide.length //4
        index--
    } else if (event.target == sliderCounterNext.firstElementChild) {
        if (index == slide.length-1 /*3*/) index = -1
        index++
    }
    sliderCounterPrew.nextElementSibling.innerText = slide[index].id
    sliderImage.src = slide[index].url
})