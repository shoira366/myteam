const bar = document.querySelector('#bar');
const menuWrapper = document.querySelector('.menu__wrapper');


bar.addEventListener('click', () =>{
    console.log('ok')
    menuWrapper.classList.toggle('menu__wrapper-active')
})