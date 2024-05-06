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

const equal = (array1, array2, array3) => (array1.sort() == array2.sort()) ? true : (array1.sort() == array3.sort()) ? true : (array3.sort() == array2.sort()) ? true : false


console.log(equal([1, 2, 3, 4], [3, 1, 4, 2], [1, 2, 3]));