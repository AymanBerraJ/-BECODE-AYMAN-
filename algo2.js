0.

// const trueFalse = (bool) => bool.reduce((sum, valeurCourante) => (sum += valeurCourante), 0);

// true == 1 et false == 0

1.

// const jeu = (a, b) => b - a > 0 && b - a <= 6


    // if(b - a > 0 && b - a <= 6){
    //     return true
    // }
    // return false

    // console.log(jeu(3, 7));

2.

// const totalChiffre = (nb) =>  nb.toString().length

// console.log(totalChiffre(1000));

3.

// const convert = (obj) => Object.entries(obj)

// console.log(convert({a:1, b:2}));

4.

// nb1 * i = nb1
// longueur.length

// const multiple = (nb1, longueur) => {
//     let nb = [];
//     for(let i = 1; i <= longueur; i++){
//////////////// 1er methode
//         nb1 = nb1 * i
//         nb.push(nb1)   // 5 = 5*1 => 5 = 5 * 2 => 10 = 5 * 3 => 30 = 10 * 3
//         nb1 = nb1 / i
//////////////// 2eme methode
//         let temp = nb1 * i
//         nb.push(temp)

//     }
//     return nb
// }

// console.log(multiple(7, 5));

5.

// const stringNumber = number => parseFloat(number).toString()


// const stringNumber = number => number = number * 1        //JE DETESTE CET EXO


// console.log(stringNumber("230.000"));
// console.log(stringNumber("00402"));
// console.log(stringNumber("03.1400"));
// console.log(stringNumber("30"));

6.

// const triage = (array) => array.sort()

// console.log(triage([[6], 5, 2, [3], 1]));

7.

// const calculator = (nombre, operation, nombre2) => {

//     if (operation == "+") {
//         return nombre + nombre2
//     }else if(operation == "-"){
//         return nombre - nombre2
//     }else if(operation == "*"){
//         return nombre * nombre2
//     }else if(operation == "/"){
//         if(nombre2 == 0){
//             return "Impossible de diviser par 0"
//         }
//         return nombre / nombre2
//     }
// }
// console.log(calculator(2, "+", 2) ); 
// console.log(calculator(2, "*", 2));
// console.log(calculator(4, "/", 2));

8.

// const superficie = (pays, region) => {
    
//     const superTerre = 148940000;
//     const calculSuper = (region/superTerre)*100
//     const modulo = calculSuper.toFixed(2)

//     return `La/Le ${pays} représente ${modulo}% de la superficie de la Terre`

// }

// console.log(superficie("Russia", 17098242));
// console.log(superficie("USA", 9372610));
// console.log(superficie("Iran", 1648195));

9. 

// const reverseSentence = String => String.trim().split(" ").reverse().join(" ")

    // const effacer = string.trim()
    // const separer = effacer.split(" ")
    // const reverse = separer.sort()
    // const joind = reverse.join(' ')

// console.log(reverseSentence(" the sky is blue"));
// console.log(reverseSentence("hello   world!  "));
// console.log(reverseSentence("a good example"));