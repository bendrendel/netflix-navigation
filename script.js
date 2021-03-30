const showNavBtn = document.getElementById('show-nav-btn');
const hideNavBtn = document.getElementById('hide-nav-btn');
const navs = document.querySelectorAll('.nav');

showNavBtn.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.remove('hide'));
});

hideNavBtn.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.add('hide'));
});