// Sintaxis

// Array.prototype.includes(searchElement[, fromIndex])

const numbers = [1, 2, 3, 4];
console.log(numbers.includes(3)); //true
console.log(numbers.includes(3, 3)); //false

/*the includes method checks in the array and returns true if the 
given elements is present and false if it is not. The includes method
also takes a second parameter that is the start position to begin
the checking*/
