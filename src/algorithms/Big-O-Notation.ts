// Big O Notation
// How code slows as data grows.

// Why use this to indicate the complexity of the algorithm:

// Quantity of data that enters the algorithm.
// Number of steps required to complete the algorithm.
// Ignore constants.

function add(n : number[]) {
  let suma = 0;

  for (let i = 0; i < n.length; i++) {
    suma += n[i];
  }
  return suma

}
const numbers: number[] = [1, 2, 3, 4, 5];
const result = add(numbers);
console.log(result);


// algorithm of complexiity linear 
// O(N)(n)
// if n equals 10, then O(N) is 10 steps, if in equals 100, then O(N) is 100 steps


function sayHi(n: string):  string{
  return `Hi ${n}`
}

 const hello = sayHi("Kyo")
 console.log(hello);
 

// if n equals 10, then O(1) is 3 step... 3 ? YES 3 steps

// 1 - Create new string object to store the result (allocating memory for the new string)
// 2 - Concatenate the 'Hi' + string n.
// 3 - Return the concatenated string.

/*
The 'Log' of a number is the power to which the base must be raised to produce that number. For example, the log base 2 of 8 is 3 because 2^3 = 8.

'Linear' means that the number of steps grows linearly with the amount of data.

The 'Quadratic' of a number is the square of that number. For example, the quadratic of 3 is 9 because 3^2 = 9.

'Exponential' of a number is the power of the base raised to that number. For example, the exponential of 2 to the power of 3 is 8 because 2^3 = 8.

'Factorial' of a number is the product of all positive integers less than or equal to that number. For example, the factorial of 3 is 6 because 3!!) - Factorial time - The number of steps grows factorially (brute force algorithms, those which try all possible solutions)

factorial of 3
3 * 2 *  1  = 6
*/

/*
The main idea is that we want to avoid exponential and factorial time algorithms as they grow very fast and are not efficient at all, UNLESS we are sure that the amount of data we are given is very small as it can actually be faster than other algorithms.

Letter grade for Big O Notation, from best to worst, taking in consideration we are using a big dataset of data:
- O(1) - Constant time -  1  - note A
- O(log N) - Logarithmic time -  10 steps(binary search) - note B
- O(N) - Linear time -  1000  - note C
- O(N log N) - Linearithmic time - fast sort 10000  - note D
- O(N^2) - Quadratic time -   nested loops 1000000  - note F
- O(2^N) - Exponential time -  recursive algorithm 2^1000  - note F
- O(N!) - Factorial time -  1000!  - note F

we won't exponencial and facotrial
*/


// O(1) - Constant time
  
// function sayHi(n: string):  string{
//     return `Hi ${n}`  
// }
// O(1):

// The algorithm performs a constant amount of work, regardless of the size of the input.
// The number of steps needed to complete the algorithm does not depend on the input size

//herefore, the time complexity of the algorithm is O(1) in all cases.

// The Math.floor() function in JavaScript returns the largest integer less than or equal to a given number. It essentially rounds down a floating-point number to the nearest integer.
//O(log N) - Logarithmic time
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function binarySearch(arr: number[], target: number): number {
  // Initialize left and right pointers
  let left = 0;
  let right = arr.length - 1;

  // While left is less than or equal to right, keep searching for the target
  while (left <= right) {
    //get middle of the array to compare with the target
    //we iterate using the of the array to find the target because we know the array is sorted and we can discard half  of the array in each iteration
    const mid = Math.floor((left + right) / 2); // Middle index
    const midValue = arr[mid]; // Middle value

    if (midValue === target) {
      return mid; // Target found
    }

    // If the middle value is less than the target, search the right side of the array by updating the left pointer
    if (midValue < target) {
      left = mid + 1;
    } else {
      // Otherwise, search the left side of the array by updating the right pointer
      right = mid - 1;
    }
  }

  // If the target is not found after exhausting all possibilities, return -1
  return -1;
}

// Test the function
const targetIndex = binarySearch(arr, 6);
console.log(targetIndex); 


// In binary search, the algorithm continually divides the search interval in half until the target element is found or the search interval becomes empty. With each iteration, the algorithm discards half of the search space based on a comparison with the middle element of the current interval. Is igual a findIndex in JS

// Here's why it's O(log N):

// In each iteration of the while loop, the search space is halved.
// This halving process continues until the search space is reduced to a single element or the target is found.
// Since the search space is halved with each iteration, the number of iterations required to reach the target element grows logarithmically with the size of the input array.
// Thus, the time complexity of binary search is O(log N) on average.

//O(N) - Linear time

function sumNumber(n: number): number {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1
  }
  return sum
}

const resultnumber = sumNumber(2)
console.log(resultnumber);

// - The algorithm iterates over the input array once, performing a constant amount of work for each element.
// - The number of iterations is directly proportional to the size of the input array.
// - As the input size increases, the number of steps needed to complete the algorithm grows linearly.

// Therefore, the time complexity of the algorithm is O(N) in the worst-case scenario.
