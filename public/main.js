//Navigation
function scrollTo(element) {
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior:'smooth'
    })
}
var btnHome = document.querySelector('.btn_home');
var btnPlan = document.querySelector('.btn_plan');
var btnContact = document.querySelector('.btn_con');
var btnNum = document.querySelector('.btn_num');
var home_btn = document.querySelector('.home_btn')
var home_footer_btn = document.querySelector('.home_footer_btn')

var home = document.querySelector('.page');
var plan = document.querySelector('.plan');
var con = document.querySelector('.footer');


btnHome.addEventListener('click', ()=>{
    console.log('Nice COCK!)');
    scrollTo(home);
})
btnPlan.addEventListener('click', ()=>{
    console.log('Nice COCK!)');
    scrollTo(plan);
})
home_btn.addEventListener('click', ()=>{
    console.log('Nice COCK!)');
    scrollTo(plan);
})
home_footer_btn.addEventListener('click', ()=>{
    console.log('Nice COCK!)');
    scrollTo(plan);
})

btnContact.addEventListener('click', ()=>{
    console.log('Nice COCK!)');
    scrollTo(con);
})
btnNum.addEventListener('click', ()=>{
    console.log('Nice COCK!)');
    scrollTo(con);
})


// Scroll
const productContainers = [...document.querySelectorAll(".product_container")];
const nxtBtn = [...document.querySelectorAll(".carousel_nav_nxt")];
const preBtn = [...document.querySelectorAll(".carousel_nav_pre")];

productContainers.forEach((item,i)=>{
    let containerWidth = 1098/3  ;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;

    })
    
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        
    })
});


