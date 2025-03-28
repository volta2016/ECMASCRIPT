```js
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  console.log(i);
}
```

Step 38
You should see the numbers zero through seven printed in your console, one per line. This will serve as the foundation for generating your pyramid.

Replace your log statement with a statement to push i to your rows array.

```js
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}
```

Step 39
Unfortunately, now you cannot see what your loop is doing.

Use let to declare a result variable, and assign it an empty string. An empty string is represented by quotation marks with nothing between them, such as "".

```js
for (let i = 0; i < count; i = i + 1) {
  let result = '';
  rows.push(i);
}
```

Step 40
Add a log statement to print the value of result. Depending on which console you use, you may not see anything printed.

```js
const character = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = '';
console.log(result);
```

Step 41
To manipulate the result string, you will use a different type of loop. Specifically, a for...of loop, which iterates over each item in an iterable object and temporarily assigns it to a variable.

The syntax for a for...of loop looks like:

Example Code
for (const value of iterable) {

}
Note that you can use const because the variable only exists for a single iteration, not during the entire loop.

Create a for...of loop to iterate through your rows array, assigning each value to a row variable.

```js
const character = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = '';

for (const row of rows) {
  result += row;
}

console.log(result);
```

Step 42
Remember in your previous loop that you used the addition operator + to increase the value of i by 1.

You can do a similar thing with a string value, by appending a new string to an existing string. For example, hello = hello + " World"; would add the string " World" to the existing string stored in the hello variable. This is called concatenation.

In your for...of loop, use the addition operator to concatenate the row value to the result value.

```js
const character = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = '';

for (const row of rows) {
  result = result + row;
}

console.log(result);
```

Step 43
Now all of your numbers are appearing on the same line. This will not work for creating a pyramid.

You will need to add a new line to each row. However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error. Instead, you need to use the special escape sequence \n, which is interpreted as a new line when the string is logged. For example:

```js
lineOne = lineOne + "\n" + lineTwo;
Use a second addition operator to append a new line after the result and row values.

for (const row of rows) {
  result = result + row + "\n"; // Agrega el salto de línea después de cada fila
}

console.log(result);
```

Step 44
Printing numbers won't result in a visually appealing pyramid. Now that you're outputting the formatted content of your rows array, it's time to update your original loop.

Instead of pushing i to the array, push the value of your character variable.

```js
const character = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
```

Step 45

Now you have a series of # characters, but the pyramid shape is still missing. Fortunately, the i variable represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":

const activity = "Code! ";
activity.repeat(3);
Use the .repeat() method on your character, and give it i for the number.

```js
const character = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i));
}
```

output

```bash
#
##
###
####
#####
######
#######
```

Step 46

You're getting closer! At this point, you're encountering what's known as an off-by-one error, a frequent problem in zero-based indexing languages like JavaScript.

The first index of your rows array is 0, which is why you start your for loop with i = 0. But repeating a string zero times results in nothing to print.

To fix this, add 1 to the value of i in your .repeat() call. Do not assign it back to i like you did in your loop conditions.

```js
const character = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}
```

output

```bash
#
##
###
####
#####
######
#######
```

Step 47
The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a function.

A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

Example Code
function name(parameter) {

}
The function keyword tells JavaScript that the name variable is going to be a function. parameter is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a for loop, the space between the curly braces is the function body.

Declare a padRow function. Do not create any parameter variables yet. The function body should be empty. Remember that you need to use camel case for your naming convention.

```js
function padRow() {}

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
```
