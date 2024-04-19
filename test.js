let nombre = 15;

let devine = parseInt(prompt("Essayez de deviner le nombre maximum :"));

while (!devine) {
    devine = parseInt(prompt("Essayez de deviner le nombre maximum :"));


    if(devine > nombre){
        console.log("Votre nombre est plus haut que le nombre maximum");
    }else if(devine == nombre){
        console.log("Votre nombre est plus bas que le nombre maximum");
    }else{
        console.log("Bien joué, vous avez trouvé le bon nombre !");
    }
    
}