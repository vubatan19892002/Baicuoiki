const btnhotline = document.querySelector('#fixed-hotline-support')
const modalcontent = document.querySelector('.modal-content')
const modal = document.querySelector('.modal')
const modalclose = document.querySelector('.js-modal-close')
function showModal(){
    modal.classList.add('open')
}
function exitModal(){
    modal.classList.remove('open')
}
btnhotline.addEventListener('click',showModal)
modalclose.addEventListener('click',exitModal)
modal.addEventListener('click',exitModal)
modalcontent.addEventListener("click", function(event){
    event.stopPropagation()
})