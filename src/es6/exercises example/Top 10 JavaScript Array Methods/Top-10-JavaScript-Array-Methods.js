// 1. forEach()

// This method can help you to loop over array’s items.

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((item) => console.log(item));

// 2. includes()

// This method check if array includes the item passed in the method.

const arr2 = [1, 2, 4, 5, 7];

console.log(arr2.includes(1)); //true
console.log(arr2.includes(8)); //false

// 3. filter()

// This method create new array with only elements passed condition inside the provided function.

const arr3 = [1, 2, 3, 4, 5, 7, 9, 10];

// item(s) greater than 3
const filtered = arr3.filter((num) => num >= 3);
console.log(filtered);

// 4. map()

// This method create new array by calling the provided function in every element.

const numbers = [1, 2, 3, 4, 5, 7, 9, 10];

const oneAdded = numbers.map((num) => num + 1);
const mapear = numbers.map((num, index) => num + " " + "index:" + index);
const mapear2 = numbers.map((num, index) => `${num}  ${index}`); //es6
console.log("hola 0", oneAdded, "hola2", mapear);

// 5. reduce()

// The reduce() method applies a function against an accumulator
// and each element in the array (from left to right) to reduce it to a single value - MDN
