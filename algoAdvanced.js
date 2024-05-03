0.

// const modulo = num => {

//     for(let i = 1; i <= num; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log("FizzBuzz");
//         }else if(i % 5 == 0){
//             console.log("Buzz");
//         }else if(i % 3 == 0 ){
//             console.log("Fizz");
//         }else{
//             console.log(i);
//         }
//     }
//     return num
// }
// console.log(modulo(20));

1.

// const ransomNote = (noteText, magazineText) => {

//     const note1 = noteText.split(' ')
//     const note2 = magazineText.split(' ')

//     for(let i = 0; i <= note1.length -1; i++){
//         const mot = note2.indexOf(note1[i])

//         if(mot === -1){
//             return false
//         }else{
//             note2.splice(mot, 1)
//         }
//     }
//     return true   
// }
// console.log(ransomNote("this is a note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"));

2.

// const isPalindrome = (text) => {
// 
    // const spliter = text.split(' ').join('')
    // const joindre = spliter.toString().join('')
    // const reverse = text.split('').reverse().join('').split(' ').join('')
    
    // if(spliter !== reverse){
    //     return false
    // }else{
    //     return true
    // }

    // return reverse
// }
// console.log(isPalindrome("kayak"))
// console.log(isPalindrome("race car"));
// console.log(isPalindrome("hello world"));

3.

// const letterModif = (string, number) => {

//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let str = string.toLowerCase()
//     let stringModif = '';

//     for(let i = 0; i < str.length; i++){
//         let index = alphabet.indexOf(str[i])
//         index += number
//         if(str[i] == " "){
//             stringModif += " "
//             continue
//         }
//         if(index > alphabet.length){
//             index -= alphabet.length
//         }
//         if(index < 0){
            
//             index += alphabet.length
//         }
//         stringModif = stringModif + alphabet[index]
//     }
//     return stringModif
// }
// console.log(letterModif("zoo keeper", 2))
// console.log(letterModif("bqq mggrgt", -2));
// console.log(letterModif("My name is Henrique", 3));

// let x = ""
// for(let i = 0; i < 5; i++){
//     if(i==3){
    //  x += " ";
//         continue
//     }
//     x = x + i;
// }

// console.log(x);

4.

// const randomChar = string =>  string.split(' ').map(el => el.split('').reverse().join('')).concat().join(' ').toLowerCase()

// console.log(randomChar("This is a string of words"));

5.

// const reverse = array => {

//     let start = 0;
//     let end = array.length-1

//     while(start < end){
        
//         [array[start], array[end]] = [array[end], array[start]]
//         start++
//         end--
//     }
//     return array
// }
// console.log(reverse([2, 5, 9, "quoi", 3, "bien"]))

6.

// const somme = (numArray, sum) => {

//     const resultatSomme = []

//     for(let i = 0; i < numArray.length; i++){
//         for(let j = i + 1; j < numArray.length; j++){
//             if(numArray[i] + numArray[j] === sum){
//                 resultatSomme.push([numArray[j], numArray[i]])
//             }
//         }
//     }
//     return resultatSomme
// }
// console.log(somme([1, 6, 4, 5, 3, 3], 7))

7.

