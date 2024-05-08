1.

// const removeDuplicate = (number) => [...new Set(number)]

// console.log(removeDuplicate([4, 9, 5, 1, 3, 2, 4, 1, 8]));
// console.log(removeDuplicate(["hello", "world", "goodbye", "world"]));
// console.log(removeDuplicate([true, true, false, true, true, false]));

2.

// const sentenceWord = string => string.toString()

// console.log(sentenceWord("Belgium"));
// console.log(sentenceWord("Brazil"));
// console.log(sentenceWord("Brussels"));

3.

// const diffDates = (date1, date2) => (date2 - date1) / (1000 * 3600 * 24)

// console.log(diffDates(new Date("2020-10-21"), new Date("2021-10-22")));

4.

// const moyenne = number => number.reduce((el1, el2) => el1 + el2, 0) / number.length

//     console.log(moyenne([1, 2, 3, 4]));

5.

// const smallest = array => Math.min(...array)

// console.log(smallest([13, 7, 11, 3, 9, 15, 17, 1]));

6.

// const equal = (array1, array2) => array1.every(element => array2.includes(element))


// console.log(equal([1, 2, 3, 4], [3, 1, 4, 2]));
// console.log(equal([1, 2, 3, 4], [1, 2, 3]));

7.

// const randomRGB = (r, g, b) => console.log(` rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}) `)

// randomRGB()

8.

// const numberLetter = (string, letter) => string.split('').filter(el => el === letter).length

// console.log(numberLetter("hello", "l"));

9.

// const numberPositive = (number) => number.filter((chiffre)=> chiffre > 0).reduce((acc, valueC) => acc + valueC ,0 )
// const numberPositive = (number) => number.reduce((acc, valueC) => valueC > 0 ? acc + valueC : acc)

// console.log(numberPositive([1, 6, 2, -3, 5, -12]))

10.

// const scanAndFind = (object, key) => object.filter(element => element[Object.keys(key)] === Object.values(key)[0]);

// console.log(scanAndFind(
//     [
//     {
//         firstName: "Vito",
//         lastName: "Corleone",
//     },
//     {
//         firstName: "Jon",
//         lastName: "Snow",
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//     },
//     {
//         firstName: "Michal",
//         lastName: "Corleone",
//     },
//     ],
//     {
//     lastName: "Corleone",
//     }
// ))