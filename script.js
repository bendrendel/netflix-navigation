const showNavBtn = document.getElementById('show-nav-btn');
const hideNavBtn = document.getElementById('hide-nav-btn');
const navContainerOuter = document.querySelector('.nav-container-outer');
const navContainerInner = document.querySelector('.nav-container-inner');
const nav = document.querySelector('nav');

    
showNavBtn.addEventListener('click', () => {
    navContainerOuter.classList.remove('hide');
    navContainerInner.classList.remove('hide');
    nav.classList.remove('hide');
});

hideNavBtn.addEventListener('click', () => {
    navContainerOuter.classList.add('hide');
    navContainerInner.classList.add('hide');
    nav.classList.add('hide');
})