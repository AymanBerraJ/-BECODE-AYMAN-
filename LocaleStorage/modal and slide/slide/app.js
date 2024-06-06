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
    const back = document.querySelector('.back');
    const closeBtn = document.querySelector('.close');

    menuBurger.addEventListener('click', () => {
        liste.classList.add('active');
        back.style.display = 'block';  // Affiche l'arrière-plan
        closeBtn.style.display = 'block';  // Affiche le bouton de fermeture
    });

    closeBtn.addEventListener('click', () => {
        liste.classList.remove('active');
        back.style.display = 'none';  // Cache l'arrière-plan
        closeBtn.style.display = 'none';  // Cache le bouton de fermeture
    });

    back.addEventListener('click', () => {
        liste.classList.remove('active');
        back.style.display = 'none';
        closeBtn.style.display = 'none';
    });
});
