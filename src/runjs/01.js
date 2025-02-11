/*👋 Welcome to RunJS 🚀
 *
 * To get started, try writing some code
 *
 * For each expression you write, you'll see the result on the right 👉
 */
'Hello, World! 🌎';

Math.pow(5, 5);

[1, 2, 3, 4].map((num) => num * 2);

/*
 * Activate RunJS to do even more amazing things, including:
 * - installing NPM packages
 * - opening multiple tabs
 * - type checking
 * - autocomplete
 * - snippets
 * - and supporting the continued development of RunJS 😀
 *
 * Happy Coding! 🎉
 */

const date = new Date();

// Get the current month (Note: months are 0-indexed, so January is 0, February is 1, etc.)
const month = date.getMonth() + 1; // Adding 1 to make it human-readable

// Get the current minutes
const minutes = date.getMinutes();

const dayOfMonth = date.getDate();

const day = date.getDay();

console.log(day); //why not show Thursday the name of the only show the number

// Get the current seconds
const seconds = date.getSeconds();

// Get the time zone offset in minutes (difference from UTC)
const timezoneOffset = date.getTimezoneOffset();

// Convert timezone offset to hours and minutes
const timezoneHours = Math.floor(Math.abs(timezoneOffset) / 60);
const timezoneMinutes = Math.abs(timezoneOffset) % 60;
const timezoneSign = timezoneOffset > 0 ? '-' : '+';
const timezone = `${timezoneSign}${timezoneHours
  .toString()
  .padStart(2, '0')}:${timezoneMinutes.toString().padStart(2, '0')}`;

console.log(
  `Month: ${month}, Minutes: ${minutes}, Seconds: ${seconds}, Timezone: UTC${timezone} ${dayOfMonth}`
);

const num = 3.14907;
num.toFixed(2);
console.log(num);

const num2 = 123;
console.log(isFinite(num2)); //true

const num3 = 123;
console.log(Number.isInteger(num3)); //true

function solution(N) {
  const sumDigits = (num) =>
    num
      .toString()
      .split('')
      .reduce((acc, digit) => acc + +digit, 0);
  const sequence = [0, 1];
  for (let i = 2; i <= N; i++) {
    sequence[i] = sumDigits(sequence[i - 1]) + sumDigits(sequence[i - 2]);
  }
  return sequence[N];
}

// Test Cases
console.log(solution(2)); // Expected output: 1
console.log(solution(6)); // Expected output: 8
console.log(solution(10));

const persona = { a: 'hi', b: 'goofbye' };
console.log(Object.entries(persona));
