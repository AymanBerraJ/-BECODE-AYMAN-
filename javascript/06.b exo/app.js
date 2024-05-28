// const bold = document.querySelector("b");

// bold.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "beige";
// bold.style.color = "red";

// bold.parentElement.parentElement.parentElement.style.background = "darkblue";
// bold.parentElement.parentElement.style.color = "white";
// bold.parentElement.nextElementSibling.style.color = "pink";
// bold.parentElement.parentElement.parentElement.previousElementSibling.querySelector("ul").style.color = "orange";
// bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("a").forEach(a => a.style.color = "green");
// bold.parentElement.parentElement.parentElement.previousElementSibling.querySelector("h1").style.textTransform = "uppercase";



    setTimeout(() => {

        for(let i= 1; i <= 100; i++){
            const bouton = document.createElement("button");
            bouton.innerText = `I am button ${i}`;
    
            document.querySelector(".container").append(bouton);
        }
        const inner = document.querySelector("h1");
        inner.innerText = "There are a lot of buttons here !"

    }, 2000);