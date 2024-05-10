// 0.
// const nombre = (nb1, nb2) => {
//     let sum = nb1 + nb2;

//     if (nb1 == 10) {
//         return true
//     } else if(nb2 == 10){
//         return true
//     }else if(sum == 10){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(nombre(2,3));

// 1.
// const annee = (age) => {
//     let convertir = age *365;

//     console.log(convertir);
// }
// annee(20);

// 2.
// const somme = (nb) => {
//     let somme = 0;

//     for(let i = 1; i <= nb; i++){

//         somme = somme + i;
//     }
//     return somme;
// }
// somme(3)

// 3.
// const minMax = (nb) => {

//     let min = nb[0] // 2
//     let max = nb[0] // 2

//     for(let i = 0; i < nb.length; i++){

//         if (nb[i] < min) {

//             min = nb[i]

//         }
//         if(nb[i] > max) {

//             max = nb[i]

//         }
//     }
//     return [min, max]
// }
// console.log(minMax([2,3,1,6,9]));

// 3.1
// const minMax = (nb) => {
//     return([Math.min(...nb), Math.max(...nb)]); PLUS SIMPLE
// }
// console.log(minMax([2,6,9,2,8,7,11]));

// 4.
// const identifier = (random) => {
//     const tab = random.split('');
//     const filtrer = tab.filter(char => char === char.toLowerCase());
//     return filtrer.join('')
//     }
// console.log(identifier("MKJFJQFQGJbJDQOIJFOFJiDKJLNFKJQeKJNKJKn"));

// 5.
// const drinks = [
//     {name: "lemonade", price: 10},
//     {name: "lime", price: 10},
//     {name: "coke", price: 8},
//     {name: "vodka", price: 17},
//     {name: "water", price: 3},
// ]

// drinks.sort(
//     (a, b) => a.price - b.price // a > b => on change de place a < b => change pas de place
// )

// console.log(drinks);

//  6.
// const total = (poulet, vache, cochon) => {
//     let patteP = poulet * 2;
//     let patteV = vache * 4;
//     let patteC = cochon * 4;
//     let totalP = patteP + patteC + patteV;
//     return totalP
// }

// console.log(total(1,2,3));

// const papa = (chicken, cow, pig) => chicken *2 + (cow + pig)*4

// 7.
// const profitableGamble = (probability ,prize, pay) => (probability * prize > pay) ?  true :  false

// console.log(profitableGamble(0.2, 50, 9));
// console.log(profitableGamble(0.9, 1, 2));

// 8.
// const frames = (image, minute) => image * (minute * 60)

// console.log(frames(1, 1));
// console.log(frames(10, 1));

// 9.
// const diesel = (plein) => plein * 10 < 100 ? 100 : plein * 10
// console.log(diesel(15));
// console.log(diesel(3));

console.log("VIVE LES MOTOS ET L'INFO");