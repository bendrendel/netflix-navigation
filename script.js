const showNavBtn = document.getElementById('show-nav-btn');
const hideNavBtn = document.getElementById('hide-nav-btn');
const navBottom = document.querySelector('.nav-bottom');
const navMiddle = document.querySelector('.nav-middle');
const navTop = document.querySelector('.nav-top');

    
showNavBtn.addEventListener('click', () => {
    navBottom.classList.remove('hide');
    navMiddle.classList.remove('hide');
    navTop.classList.remove('hide');
});

hideNavBtn.addEventListener('click', () => {
    navBottom.classList.add('hide');
    navMiddle.classList.add('hide');
    navTop.classList.add('hide');
})