
    const playerOne = document.getElementById("player-one");
    const buttonOne = document.getElementById("button-one");
    const p = document.querySelector("p");
    p.style.fontSize = "2rem";
    let value = 0;
    let valueDeux = 0;

    buttonOne.addEventListener("click", ()=>{
        value++;
        playerOne.textContent = value
        let sum = value + valueDeux;
        if(sum == 5){
            if(value < valueDeux){
                playerOne.style.color = "red";
                playerTwo.style.color = "green";
            }else if(value > valueDeux){
                playerOne.style.color = "green";
                playerTwo.style.color = "red";
            }
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
        }
    });

    const playerTwo = document.getElementById("player-two");
    const buttonTwo = document.getElementById("button-two");

    buttonTwo.addEventListener("click", () => {
        valueDeux++;
        playerTwo.textContent = valueDeux
        let sum = value + valueDeux;

        if(sum == 5){

            if(value < valueDeux){
                playerOne.style.color = "red";
                playerTwo.style.color = "green";
            }else if(value > valueDeux){
                playerOne.style.color = "green";
                playerTwo.style.color = "red";
            }
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
        }
    });

    const reset = document.getElementById("reset");

    reset.addEventListener("click", () => {
        value = 0;
        valueDeux = 0;
        playerOne.textContent = 0;
        playerTwo.textContent = 0;
        playerOne.style.color = "black";
        playerTwo.style.color = "black";
        buttonOne.disabled = false;
        buttonTwo.disabled = false;
    })





