////////////////////////////////////////////////////////THEORIE FAIS AUPARAVANT//////////////////////////////////////////////////////////////////////
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
} 

//////////////////////////////////////////////////DEBUT DES EXOS//////////////////////////////////////////////////////////////////:

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

const nom = prompt("what is your name ?")

alert(`Welcome ${nom} !`);

var prix = window.prompt("Quelle est le prix de l'objet acheté HTVA")
var parse = parseInt(prix);
var tva = 0.21;

var prixTVA = parse + (parse * tva);

alert(`Le prix HTVA est de ${prix} et en y ajoutant la TVA, elle reviendra à ${prixTVA}`);

let rayon = window.prompt("Quelle est le rayon du cercle ?");
parse = parseInt(rayon);

let formule = (parse * parse)* Math.PI;


alert(`La surface du cercle est de ${formule}`);

let nombre = window.prompt("Entrez votre premier nombre :");
let parse1 = parseFloat(nombre);
let nombre2 = window.prompt("Entrez votre deuxieme nombre :");
let parse2 = parseFloat(nombre2);

let sum = parse1 + parse2;
let soustraire = parse1 - parse2;
let diviser = parse1 / parse2;
let multiplier = parse1 * parse2;

alert(`${sum}
${soustraire}
${diviser}
${multiplier}`);

// question A
true && !false;  // true

// question B
false && true; // false

// question C
!false && !false; // true

// question D
5 > 3 && !(2 > 1); // false

// question E
true && !(1 == "1"); // false

// question F
5 !== "5" || false; // true

true && undefined; // returns false
///////////////////////////////////////////////////////////////////////////////////////
// QUESTION 1
alert(!0 && true); // true

// QUESTION 2
const a = null;
const b = undefined;  
const c = 4;

alert((!a && b) || c); // true

// QUESTION 3

alert(a == b && c); // true

// QUESTION 4

!b && "Hello" && c; // false
//////////////////////////////////////////////////////////////////////////////////////

// Normal IF ELSE

if (laundry === "dirty") {
    cleanLaundry();
} else {
    watchTv();
}

  // With ternary operator :

laundry === "dirty" ? cleanLaundry() : watchTv(); // permet d'abreger le IF/ELSE


let pref = window.prompt("Qu'elle animal preferes tu entre le chat et le chien ?");


if (pref === "chat") {
    alert(`Son animal préferer est le ${pref}`);
}else if(pref == "chien"){
    alert(`Son animal preferer est le ${pref}`)
}else{
    alert(`Le mot entré n'est pas bon`)
}


const mystery = "PERMISS7ON"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
console.log("YOU GOT IT!!!");
} else {
console.log("TRY AGAIN");
}


let age = window.prompt("How old are you ?");

if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off")
} else if(age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else{
    alert("Powering On. Enjoy the ride!");
}

let fruit = window.prompt("Quelle est votre fruit preferer ?");

if (fruit == "bananas") {
    alert("Oh, I like bananas as well !")
} else if (fruit == "strawberry") {
    alert("Oh, I LOVE strawberry !")
}else if(fruit == "grape"){
    
    let couleur = window.prompt("Preferes tu la mauve ou la verte ?");
    
    if (couleur == "verte") {
        alert("les vertes sont passable");
    }else if(couleur == "mauve"){
        alert("je n'aime pas du tout les mauves");
    }

}else{
    alert("La reponse donner n'est pas bonne")
}

// To make an empty array
const students = [];

// An array of strings
const colors = ["orange", "red", "yellow"];

// An array of numbers
const lottoNumbers = [19, 22, 56, 12, 51];

// A mixed array
const stuff = [true, 68, "cat", null];

https://www.programiz.com/javascript/library/array (Les différentes methode d'array)


const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:

leaderboard.splice(1, 1, "luna");
leaderboard.splice(3, 1, "Draco");
console.log(leaderboard);
 */

// const initialArray = [
//     null, //0
//     true,//1
//     ["Apple", "two", undefined], // 2/ 0.1.2
//     false,//3
//     ["three", "BeCode"], // 4/ 0.1
//     4, //5
//     "I am a big bad wolf", //6
//     ["one"], // 7/ 0
// ];

// let array = initialArray.filter(initialArray[7][0] + initialArray[2][1] + initialArray[4][0]);

// const reunir = [].concat(...initialArray);
// const chiffre = reunir.filter(chiffre => chiffre == "one" || chiffre == "two" || chiffre == "three");
// chiffre.splice(2,1);
// chiffre.unshift("One");
// console.log(chiffre);

// const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

// planets.splice(0, 1);
// planets.push("Saturn");
// planets.unshift("Mercury");
// console.log(planets);
// ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

// const product = {
//     name : "Iphone 15",
//     inStock : true,
//     price :1249.90,
//     includePackage : ["case", "earphones", "charger"]

// }
// console.log(product.includePackage[1]);

//PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: "Ichiran Ramen",
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: "Brooklyn",
//     state: "NY",
//     zipcode: "11206",
// };

//   //YOUR CODE GOES DOWN HERE:


// const fullAdress = restaurant.address + ", "+ restaurant.city +", "+ restaurant.state +" "+ restaurant.zipcode;

// console.log(fullAdress);

//////////////////////////////////////////LOOPS////////////////////////////////////////////

// let mot = "hello";
// let i = 0;

// while (i < 10) {

//     console.log(mot);
//     i = i + 1;
    
// }


// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {                       MODULO
//         console.log(i);   
//     }
// }
// }
// for (let i = 2; i <= 20; i+=2) {
//     console.log(i);                         CALCUL AVEC i+=2
// }

// for (let i = 0; i <= 20; i++) {

//     if (i % 2 == 1) {
//         console.log(i);                     MODULO
//     }
    
// }

// for (let i = 100; i >= 0; i--) {

//     if (i % 10 == 0) {
//         console.log(i);                     MODULO
//     }
    
// }

// for (let i = 25; i >= 0 ; i--) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
    
// }

// for (let i = 1; i <= 3 ; i++) {

//     console.log(Math.pow(10, i));

// }

// const colors = [1,2,3,4,5]
// for (let i = 0; i <= colors.length - 1; i++) {
//     console.log(colors[i]);
// }                                                                       DIFFERENT

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];

// for(let i = 5; i > 0; i--){

//     console.log(animals[i]);
    
// }

// const users = [
//     {
//     firstName: "Vito",
//     lastName: "Corleone",
//     },
//     {
//     firstName: "William",
//     lastName: "Wallace",
//     },
//     {
//     firstName: "Harry",
//     lastName: "Potter",
//     },
//     {
//     firstName: "Amadeus",
//     lastName: "Mozart",
//     },
//     {
//     firstName: "Barack",
//     lastName: "Obama",
//     },
// ];

// for(let i = 0; i <= users.length-1; i++){

//     console.log(i+1 + ". My full name is " + users[i].firstName + " " + users[i].lastName);
// }

// const seatingChart = [
//     ["Colas", "Benoit", "Elodie"],
//     ["Sola", "Irina", "Antonino", "Eli"],
//     ["John", "Maryna", "Naike", "Fabrice"],
//   ];

//   // I can use nested loops to do that :

//   for (let i = 0; i < seatingChart.length; i++) {
//     console.log("ROW #" +(i+1));
//     const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
//     for (let j = 0; j < row.length; j++) {
//       console.log(row[j]);
//     }
//   }
////////////////////////////////////////////////////////////////////////////////////////////////EXO WHILE NOMBRE MAXIMUM////////////////////////

// let variable = parseInt(prompt("Donnez une vitesse maximum "));
// while (!variable) {
//     variable = parseInt(prompt("Entrez une valeur valable "));
// }
// let nombre = Math.floor(Math.random()*variable)+1;
// console.log(nombre);

// let devine = parseInt(prompt("Essayez de deviner le nombre"));

// while (!devine) {
//     devine = parseInt(prompt("Rentrez une valeur valable "));

// }

// while (devine != nombre) {
    
//     if(devine > nombre){
//         alert("Votre nombre est plus haut que le nombre ");
//     }else if(devine < nombre){
//         alert("Votre nombre est plus bas que le nombre");
//     }else if(devine == nombre){
//         alert("Bien joué, Vous avez trouvé le bon nombre !");
//     }else{
//         alert("Veuillez recommencez");
//     }
//     devine = parseInt(prompt("Essayez à nouveau !"))
// }
// alert("Bien joué à vous !");
///////////////////////////////////////////////////////////////FOR IN ET FOR OF//////////////////////////////////////////////////////////////
// const Number = [1,2,3,4,5]

// for (const chiffre of Number) {
//     console.log(`Donne moi ton chiffre:  ${chiffre}`);
// }

// const myArray = ['Ayman','chaimae', 'moncef'];

// for (const nom of myArray) {
//     console.log(`Mon prénom est ${nom}`);
// }

// const variable = 'ayman';

// for (const test of variable) {
//     console.log(test.toUpperCase().repeat(1));
// }

// const maFamille = {
//     frere : 'moncef',
//     soeur : 'chaimae',
//     pere : 'ahmed',
//     mere : 'nadia'
// }

// for (const clef in maFamille) {

//     console.log(`Dans ma famille il y a mon/ma ${clef} et son prénom est ${maFamille[clef]} `);
// }


// const liste = [];

// let mot = prompt(`Que voulez-vous faire? Choisissez entre: \n- new pour ajouter \n- list pour voir toute la liste \n- delete pour supprimer une tâche \n- quit pour quitter le programme `);

// while (mot && mot != "quit") {

//     while (mot != "new" && mot != "list" && mot != "delete") {
//         mot = prompt(`Entrez l'un des mots que nous vous avons demandé. \n- new pour ajouter \n- list pour voir toute la liste \n- delete pour supprimer une tâche \n- quit pour quitter le programme`)
//     }

//     if (mot == "new") {
//         while (mot != "0") {
//         mot = prompt(`Que voulez vous ajouter à la liste ?`);
//         if (mot == "0") {
//             alert(`Vous sortez de la liste`);
//         }else{
//             console.log(mot);
//             liste.push(mot);
//             alert(`Vous avez ajouter à la liste: ${mot}`)
//         }
//         }
//     }

//     let numeroter = ``;

//     if (mot == "list") {
//         while (mot != "0") {
//             numeroter = '';
//             let num = 1;
//             mot = prompt(`Appuyez sur 0 pour quitter la liste sinon appuyez sur n'importe quelle touche pour voir la liste TODO`);
//             if (mot == "0") {
//                 alert(`Vous sortez de la liste`);
//             }else{
//                 for (const tableau of liste) {
                    
//                     numeroter = numeroter + (`\n${num}. ${tableau}`);
//                     num++;
                    
//                 }
//                 console.log(`********* TODO LIST ********* \n${numeroter}`);
//             }
//         }
//     }

//     if (mot == "delete") {
//         let nb = parseInt(prompt(`Appuyez sur 0 pour revenir au menu principal, sinon choisissez le numéro de la tache que vous voulez supprimer.`));

//         while (nb != 0) {
//             if (nb == 0) {
//                 alert(`Vous sortez du delete`);
//             }else if(nb > 0 && nb <= liste.length){

//                 numeroter = liste.splice(nb-1,1);
//                 console.log(liste);
                
//             }else{
//                 console.log(``);
//             }
//             nb = parseInt(prompt(`Appuyez sur 0 pour revenir au menu principal, sinon choisissez le numéro de la tache que vous voulez supprimer.`));
//         }
//     }

//     mot = prompt(`Que voulez-vous faire? Choisissez entre: \n- new pour ajouter \n- list pour voir toute la liste \n- delete pour supprimer une tâche \n- quit pour quitter le programme `);
// }
// if (mot == "quit") {
//     alert(`Vous êtes sortis du programme, à Bientôt !`);
// }

// function myFunctionName(Number){
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
//     console.log("FA");
//     console.log("SOL");
//     console.log("LA");
//     console.log("SI");
// }

// myFunctionName();
// myFunctionName();
// myFunctionName();

// function de(faces, times) {
    
//     for (let i = 1; i <= times ; i++){
//         const aleatoire = Math.floor(Math.random() * faces) + 1;

//         console.log(`Die ${i} is : ${aleatoire}`);
//     }
// }
// de(6,15)

// function string (mot1, repete){
//     for(let i = 0; i < repete; i++){
//         console.log(mot1);
//     }
// }
// string("salut", 5)

// function name (firstName, lastName){
//     console.log(`This is ${firstName} ${lastName}`);
// }

// name("Ayman","Berraj")

// function addition (nb1, nb2){
//     console.log(nb1 + nb2);
// }

// addition(5,10)

// function logs() {
//     console.log("Hello");
//     console.log("World");
//     return 4;
//     console.log("Goodbye");
//     console.log("World");
// }
// const myVariable = logs();

// console.log(myVariable);

// function isShortWeather (temperature){

//     if (temperature >= 24) {
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isShortWeather(29));

// function array(tableau){
    
//     if (tableau.length == 0) {
//         return null
//     }else{
//         return tableau[tableau.length - 1];
//     }
// }

// console.log(array([1,2,3]));

// function majuscule(string){

//     let convertir = string.charAt(0).toUpperCase()+ string.slice(1) ;

//     return convertir
// }
// console.log(majuscule("mam"));


