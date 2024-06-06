const click = document.querySelector(".click");
const body = document.querySelector(".body");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");


click.addEventListener('click', () => {
    body.style.display = "block";
    modal.style.display = "block";
})

close.addEventListener('click', ()=>{
    body.style.display = "none";
    modal.style.display = "none";
    click.style.display = "block";
});

body.addEventListener('click', () => {
    body.style.display = "none";
    modal.style.display = "none";
    click.style.display = "block";
});