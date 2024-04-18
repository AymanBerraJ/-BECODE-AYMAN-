/* alert(5.45)
alert("Viens habibi")
alert("Non je rigole")

// Bien ou quoi le sang
/* Bien et toi le sang  
var x = 50;
var prenom ="Ayman", nom="Berraj", age=23;
var homme = true;

alert("Variable de prénom :" + (typeof(prenom)) +
"\nVariable de nom :" + (typeof(nom)) +
"\nVariable de âge :" + (typeof(age))+
"\nVariable de homme :" +(typeof(homme)));

/* 
x += 2 === x = x + 2
x -= 2 === x = x - 2
x /= 2 === x = x / 2
x *= 2 === x = x * 2
x %= 2 === x = x % 2 


var test = 4 + "1" + 2; // la réponse sera => 412, 4 est un chiffre(int), 1 est un string et 2 est un chiffre(int)
var test2 = "1" + 4 + 2; // la réponse sera => 142, si on commence avec un string tout le reste devient un string
var test3 = 4 + 2 + "1"; // la réponse sera => 61, 6 est la réponse de 4+2 et 1 est un string
alert(test +
"\n" + test2 +
"\n" + test3);

var nb = 20;

if (nb <= 18 && nb <= 20){
    alert("le nombre est bon : " + nb);
} else{
    alert("Le nombre n'est pas bon : " + nb);
}

var mime = 23, hum = "";
hum = (mime < 22) ? "il a 21 ans" : "Il a plus de 21 ans"; // condition IF abreger++
alert(hum);

var mom = 12;
switch (mom) {
    case 10:
        alert("il est 10 heure");
        break;
    case 23:
        alert("il est 23 heure");
        break;
    case 12:
        alert("il est 12 heure");
        break;
    default:
        alert("Rien de prévu pour maintenant")
        break;
} */

console.log("I am in the console");

let myName = "Henrique";
console.log(myName);
alert(myName);

let tauxD = 0.93;

let euro = 50 * tauxD;
let euro1 = 132 * tauxD;

console.log("Pour avoir 50 dollar, nous avons besoin de " + euro + " et pour 132 dollar nous avons besoinn de " + euro1 );

var a = "3";
var b = "8";

a = "8";
b = "3";

console.log("a is " + a);
console.log("b is " + b);


const nameA = "Ayman Berraj Jueid";
const age = 24;

console.log("il s'appelle " + nameA + " et nous savons qu'il a " + age);
console.log(`il s'appelle ${nameA} et nous savons qu'il a ${age}.`);

let nb1 = 20;
let nb2 = 4;

let somme = `il a bel est bien ${nb1+nb2} ans `
console.log(somme);

console.log(nameA.length);
console.log(nameA.slice(0, 6));
console.log(nameA.replace(" ", "-"));

let sentence = "je suis un(e) homme";
sentence = sentence.replace("homme", "femme");
console.log(sentence);

//.toUpperCase(), .toLowerCaser(), .slice(), .replace(), .indexOf(), .lastIndexOf(), .trim() METHODE
// '', "", `` Différente façon d'y intégrer un string ou un char


// DON'T TOUCH THIS LINE!

const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!
let whisper = message.toLowerCase().trim();
console.log(whisper);

// YOUR CODE BELOW THIS LINE:

let mot = window.prompt("Entrez une suite de caractéres: ")
console.log(mot[mot.length-1]);

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

let facialHair = word.slice(5, 10).replace("o", "e");

console.log(facialHair);

// YOUR CODE BELOW THIS LINE:

let entier = Math.round(Math.random() * 10);
console.log(entier);
let virgule = Math.round(Math.random() * 5) + 1;
console.log(virgule);

// .ceil => arrondi au nombre entier au dessus, .floor => arrondi au nombre entier en dessous, .round => arrondi au nombre entier le plus proche, .random => un nombre aléatoire

let string = "123.98";
console.log(parseInt(string));
console.log(parseFloat(string));



