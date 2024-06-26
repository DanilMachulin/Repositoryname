const register = document.querySelector('.button');
const menu = document.querySelector('.offer_enroll');
const close = document.querySelector('.frame-close');
const back = document.querySelector('.offer-header');
const back2 = document.querySelector('.offer-content');
const back3 = document.querySelector('.inspiration');
const back4 = document.querySelector('.courses');
const body = document.body;

register.addEventListener('click', () => {
    menu.classList.add('active');
    back.classList.add('active');
    back2.classList.add('active');
    back3.classList.add('active');
    back4.classList.add('active');
    body.classList.add('disable-scroll');
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
    back.classList.remove('active');
    back2.classList.remove('active');
    back3.classList.remove('active');
    back4.classList.remove('active');
    body.classList.remove('disable-scroll');
})