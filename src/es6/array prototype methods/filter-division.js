const numbers = [1, 2, 3, 4];
const results = numbers.filter((element) => element % 2 === 0);
console.log(results); //[2,4]

/*The filter method checks each element in the array against the condition
in the passed function and only returns the elements that meet that condition*/
