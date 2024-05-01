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

