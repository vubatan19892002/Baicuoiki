const item = document.querySelectorAll(".sidebar_menu_lv1-li")
const item1 = document.querySelectorAll(".sidebar_menu_lv2")

let index = 0;
item.forEach(function(menu,index){
   menu.addEventListener("click",function(){
        menu.classList.toggle("block")
   })
})
item1.forEach(function(menu1, index){
    menu1.addEventListener('click',function(event){
        event.stopPropagation()
    })
})
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