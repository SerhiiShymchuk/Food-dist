const btnModal = document.querySelectorAll('[data-modal]')
const modalOpen = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')

// відкриття модалки
btnModal.forEach(btn => btn.addEventListener('click', ()=> {
    openModal()
}))
// закриття модалки
modalClose.addEventListener('click' , ()=> {
    closeModal()
})
modalOpen.addEventListener('click', event=> {
    if(event.target == modalOpen) {
        closeModal()
    }
})
document.body.addEventListener('keydown', (event)=> {
    if(event.code == 'Escape') {
        closeModal()
}})
//відкриваємо модалку коли користувач прокрутив скрол до кінця сторінки
window.addEventListener('scroll', ()=> {
    openModalByScroll()
    window.removeEventListener('scroll', openModalByScroll)
})
// відкриття модалки
function openModal() {
    modalOpen.style.display = 'unset'
    //document.body.style.overflow = 'hidden' // заховуємо скроллінг (він не дає закрити модалку коли вона викликана скролінгом у кінці сторінки)
}
// закриття модалки
function closeModal() {
    modalOpen.style.display = null
    document.body.style.overflow = ''
}
//відкриваємо модалку коли користувач прокрутив скрол до кінця сторінки
function openModalByScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal()
}}