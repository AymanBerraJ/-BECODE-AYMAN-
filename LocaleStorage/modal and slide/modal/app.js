const btn = document.querySelector("button");
const text = document.querySelector("#textContent")
const bcg = document.querySelector(".container");

btn.addEventListener('click', () => {
    text.style.display = "block";
    btn.style.display = "none";
    bcg.style.background= "darkgray";
    bcg.style.cursor = "pointer";
})

bcg.addEventListener('click', ()=>{
    text.style.display = "none";
    btn.style.display = "block";
    bcg.style.background = "white";
});
const p = document.querySelector("p");
