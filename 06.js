//exercício
//function getEvenNumbers(array) {
// let evenNumbers = [];
// for (let i of array) {
//    if (i % 2 === 0) {
//    evenNumbers.push(i);
//   }
// }
//  return evenNumbers;
//}

//resolução

const getEvenNumbers = (array) => array.filter((i) => i % 2 === 0);

//teste
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = getEvenNumbers(array);
console.log(evenNumbers);
