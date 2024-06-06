// const close = document.querySelector(".close");
// const liste = document.querySelector(".liste");
// const menuBurger = document.querySelector(".menu-burger");
// const nav = document.querySelector(".nav");
// const back = document.querySelector(".back")

// menuBurger.addEventListener('click', () => {
//     liste.style.display = 'block';
//     back.style.display = 'block';
//     close.style.display = 'block';
//     nav.style.display = 'none';
// });

// close.addEventListener('click', () => {
//     nav.style.display = 'block';
//     nav.style.display = 'flex';
//     liste.style.display = 'none';
//     close.style.display = 'none';
//     back.style.display = 'none';
// });

document.addEventListener('DOMContentLoaded', () => {
    const menuBurger = document.querySelector('.menu-burger');
    const liste = document.querySelector('.liste');
    const close = document.querySelector('.close');

    menuBurger.addEventListener('click', () => {
        menuBurger.style.display = 'none';
        liste.classList.add('active');
        close.style.display = 'block';  
    });

    close.addEventListener('click', () => {
        menuBurger.style.display = 'block';
        liste.classList.remove('active');
        close.style.display = 'none'; 
    });
});
