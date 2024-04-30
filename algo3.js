0.

// function sommeChiffres(nombre) {

//     let tab = nombre.toString()
//     let sum = 0;

//     for(let i = 0; i < tab.length; i++){
//         sum = sum + parseInt(tab[i])
//     }
//     return sum
// }
// console.log(sommeChiffres(123));

1.

// const totoProduit = (produitEtQuantiter) => {

//     const epicerie = [
//         {
//             "produit": "milk",
//             "number": 1,
//             "price": 2
//         },
//         {
//             "produit": "chocolate",
//             "number": 1,
//             "price": 1.5
//         },
//         {
//             "produit": "fish",
//             "number": 1,
//             "price": 3.5
//         }
//     ]


// let total = 0;
//     for(let item of produitEtQuantiter){
//         const produitRechercher = item.produit
//         const produitQuantiter = item.number
//         for(let product of epicerie){
//             if(produitRechercher === product.produit){
//             total = total + product.price * produitQuantiter
//             break;
//             }
//         }
//     }
//     return `You have to pay ${total}`
// }

// console.log(totoProduit([
//     {"produit" : "milk", "number" : 4},
//     {"produit" : "fish", "number" : 4},
//     {"produit" : "chocolate", "number" : 6}
// ]));

2.

// const reverseWordSentence = (word) => word.trim().split(' ').map(el => el.split('').reverse().join('')).join(' ')

// console.log(reverseWordSentence("Bananas est un fruit magnifique"));

3.

// const endFirst = sentence => {

//     const separer = sentence.split(' ')

//     for(let i = 0; i < separer.length - 1; i++){
//         const dernierLettre = separer[i].charAt(separer[i].length-1).toLowerCase()
//         const premiereLettre = separer[i + 1].charAt(0).toLowerCase()
        
//         if (dernierLettre == premiereLettre) {
//             return true
//         }
//     }
//     return false
// }

// console.log(endFirst("Marta appreciated deep perpendicular right trapezoids"));
// console.log(endFirst("Someone is outside the doorway"));
// console.log(endFirst("She eats super righteously"));

4. 

// const numberSeven = seven => {
    
//     const tabDeux = seven.toString().split('').map(el => parseInt(el))

//     for(let i = 0; i < tabDeux.length; i++){
//         if(tabDeux[i] == 7){
//             return "Boom !"
//         }
//         // console.log(tabDeux[i]);
//     }
//     return 'there is no 7 in the array'

//     return tabDeux
// }

// console.log(numberSeven([1, 5, 7, 68, 256, 4651, 98]));

5.

// const convertir = degres => {

//     const tab = [degres]
//     const lettre = tab.toString().split('')
//     const joindre = parseInt(lettre.slice(0, 2).join(''))

//     for(let el of lettre){
//         if(el === "C"){
//             return (joindre * 9/5) + 32
//         }else if(el === "F"){
//             return (joindre - 32) * 5/9
//         }
//     }
    // const formule = (degres * 9/5) + 32
    // const formuleDeux = (degres - 32) * 5/9
    
// }

// console.log(convertir("35°C"));

6.

// const findBrokenLetters = (mot1, mot2) => {

//     const tab1 = [mot1]
//     const string = tab1.toString()
//     const spliter = string.split('')
//     const mape = spliter.map(el => el.split(' '))
//     const concate = mape.reduce((acc, curr) => acc.concat(curr), []);


//     const tab2 = [mot2]
//     const string2 = tab2.toString()
//     const spliter2 = string2.split('')
//     const mape2 = spliter2.map(el => el.split(' '))
//     const concate2 = mape2.reduce((acc, curr) => acc.concat(curr), []);
    

//     let doublon = concate.filter(e => !concate2.includes(e))
//     let pasDoublon = new Set(doublon)

//     return [...pasDoublon]
// }

// console.log(findBrokenLetters("happy birthday", "hawwy birthday"));
// console.log(findBrokenLetters("starry night", "starrq light"));
// console.log(findBrokenLetters("beethoven", "affthoif5"));
