const imgnumber = document.querySelectorAll('.silder-content-top img')
let index = 0;
const leftbtn = document.querySelector('.slider-icon-left')
const rightbtn = document.querySelector('.silder-icon-right')
leftbtn.addEventListener("click", function(){
    index--
    if(index <=0){
        index = imgnumber.length - 1
    }
    document.querySelector(".silder-content-top").style.right=index*100+"%"
    removeaction()
    imgnumberli[index].classList.add("action")

})
rightbtn.addEventListener("click", function(){
    index++
    if(index > imgnumber.length-1){
        index = 0
    }
    document.querySelector(".silder-content-top").style.right=index*100+"%"
    removeaction()
    imgnumberli[index].classList.add("action")
})

const imgnumberli = document.querySelectorAll('.silder-content-bottom li')
imgnumberli.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeaction()
        document.querySelector(".silder-content-top").style.right=index*100+"%"
        image.classList.add("action")
        
    })
    
})
function removeaction(){
    let imgaction = document.querySelector('.action')
    imgaction.classList.remove("action")
}

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