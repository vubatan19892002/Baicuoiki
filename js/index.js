const imgnumber = document.querySelectorAll('.silder-content-top1 img')
let index = 0;
const leftbtn = document.querySelector('.slider-icon-left')
const rightbtn = document.querySelector('.silder-icon-right')
leftbtn.addEventListener("click", function(){
    index--
    if(index <0){
        index = imgnumber.length - 1
    }
    document.querySelector(".silder-content-top1").style.right=index*100+"%"
    removeaction()
    imgnumberli[index].classList.add("action")

})
rightbtn.addEventListener("click", function(){
    index++
    if(index > imgnumber.length-1){
        index = 0
    }
    document.querySelector(".silder-content-top1").style.right=index*100+"%"
    removeaction()
    imgnumberli[index].classList.add("action")
})

const imgnumberli = document.querySelectorAll('.silder-content-bottom li')
imgnumberli.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeaction()
        document.querySelector(".silder-content-top1").style.right=index*100+"%"
        image.classList.add("action")
        
    })
    
})
function removeaction(){
    let imgaction = document.querySelector('.action')
    imgaction.classList.remove("action")
}
// setInterval(function(){
//     rightbtn.click()
// },4000)
function imgauto(){
    index+=1
    if(index > imgnumber.length-1){
        index = 0
    }
    removeaction()
    document.querySelector(".silder-content-top1").style.right=index*100+"%"
    imgnumberli[index].classList.add("action")
}
setInterval(imgauto,4000)

const imgnumber1 = document.querySelectorAll('.addres-right-item-img')
console.log(imgnumber1)
let index1 = 0;
const leftbtn1 = document.querySelector('.addres-icon-left')
const rightbtn1 = document.querySelector('.addres-icon-right')
leftbtn1.addEventListener("click", function(){
    index1--
    console.log(index1)
    if(index1 <0){
        index1 = imgnumber1.length - 1
    }
    document.querySelector(".addres-right-item").style.right=index1*100+"%"
})
rightbtn1.addEventListener("click", function(){
    index1++
    if(index1 > imgnumber1.length-1){
        index1 = 0
    }
    document.querySelector(".addres-right-item").style.right=index1*100+"%"
})

function imgauto1(){
    index1+=1
    if(index1 > imgnumber1.length-1){
        index1 = 0
    }
    document.querySelector(".addres-right-item").style.right=index1*100+"%"
}
setInterval(imgauto1,3000)

const imgnumber2 = document.querySelectorAll('.addres-menu')
let index2 = 0;
const leftbtn2 = document.querySelectorAll('.button-move-left')
const rightbtn2 = document.querySelectorAll('.button-move-right')


leftbtn2.forEach(function(image1,index){
    image1.addEventListener("click",function(){
        index2--
        
        if(index2 <0){
            index2 = imgnumber2.length - 1
        }
        document.querySelector(".addres-content").style.right=index2*100+"%"
    })
})
rightbtn2.forEach(function(image2,index){
    image2.addEventListener("click",function(){
        index2++
        if(index2 > imgnumber2.length-1){
            index2 = 0
        }
        document.querySelector(".addres-content").style.right=index2*100+"%"
    })
})

const imgnumber3 = document.querySelectorAll('.addres-right-item-img1')
let index3 = 0;
const leftbtn3 = document.querySelector('.addres-icon-left1')
const rightbtn3 = document.querySelector('.addres-icon-right1')
leftbtn3.addEventListener("click", function(){
    console.log(leftbtn3)
    index3--
    if(index3 <0){
        index3 = imgnumber3.length - 1
    }
    document.querySelector(".addres-right-item1").style.right=index3*100+"%"
})
rightbtn3.addEventListener("click", function(){
    index3++
    if(index3 > imgnumber3.length-1){
        index3 = 0
    }
    document.querySelector(".addres-right-item1").style.right=index3*100+"%"
})

function imgauto3(){
    index3+=1
    if(index3 > imgnumber3.length-1){
        index3 = 0
    }
    document.querySelector(".addres-right-item1").style.right=index3*100+"%"
}
setInterval(imgauto3,3000)

const imgnumber4 = document.querySelectorAll('.addres-right-item-img2')
let index4 = 0;
const leftbtn4 = document.querySelector('.addres-icon-left2')
const rightbtn4 = document.querySelector('.addres-icon-right2')
leftbtn4.addEventListener("click", function(){
    console.log(leftbtn3)
    index4--
    if(index4 <0){
        index4 = imgnumber4.length - 1
    }
    document.querySelector(".addres-right-item2").style.right=index4*100+"%"
})
rightbtn4.addEventListener("click", function(){
    index4++
    if(index4 > imgnumber4.length-1){
        index4 = 0
    }
    document.querySelector(".addres-right-item2").style.right=index4*100+"%"
})

function imgauto4(){
    index4+=1
    if(index4 > imgnumber4.length-1){
        index4 = 0
    }
    document.querySelector(".addres-right-item2").style.right=index4*100+"%"
}
setInterval(imgauto4,3000)

const imgnumber5 = document.querySelectorAll('.addres-right-item-img3')
let index5 = 0;
const leftbtn5 = document.querySelector('.addres-icon-left3')
const rightbtn5 = document.querySelector('.addres-icon-right3')
leftbtn5.addEventListener("click", function(){
    index5--
    if(index5 <0){
        index5 = imgnumber5.length - 1
    }
    document.querySelector(".addres-right-item3").style.right=index5*100+"%"
})
rightbtn5.addEventListener("click", function(){
    index5++
    if(index5 > imgnumber5.length-1){
        index5 = 0
    }
    document.querySelector(".addres-right-item3").style.right=index5*100+"%"
})

function imgauto5(){
    index5+=1
    if(index5 > imgnumber5.length-1){
        index5 = 0
    }
    document.querySelector(".addres-right-item3").style.right=index5*100+"%"
}
setInterval(imgauto5,3000)

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