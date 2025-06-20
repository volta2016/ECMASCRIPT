Step 49
You are calling your padRow function, but not doing anything with that function call. All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere.

To see the result of calling your padRow function, declare a call variable and assign your existing padRow call to that variable.

```js
const character = '#';
const count = 8;
const rows = [];

function padRow(row) {
  return character.repeat(row + 1);
}

const call = padRow();
console.log(call);
```

Step 54Passed
If you open your console again, you'll see that your padRow function is returning undefined, even though you defined a return value! This is because parameters need to be given a value when you call the function.

When you pass a value to a function call, that value is referred to as an argument. Here is an example of calling a demo function and passing "Naomi" as the argument for the name parameter.

```js
function demo(name) {
  return name;
}

const call = padRow('Giovanni');
```

Step 55
Before moving on, take a moment to review how functions work.

Declare a function named addTwoNumbers. This function should take two arguments and return the sum of those two arguments.

Your function should not use hard-coded values. An example of a hard-coded function might be:

Example Code

```js
function sayName(firstName, lastName) {
  return 'John Doe';
}

sayName('Camper', 'Cat');
```

This function would return "John Doe" regardless of the arguments passed to the parameters firstName, and lastName, so "John Doe" is considered a hard-coded value.

Declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. Log the sum variable to the console.

Step 56
With that quick review complete, you should remove your addTwoNumbers function, sum variable, and log statement.

```js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum);
```

Step 58
Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you get a reference error.

To see this in action, use const to declare a test variable in your padRow function. Initialise it with the value "Testing".

Then, below your function, try to log test to the console. You will see an error because it is not defined outside of the function's local scope. Remove that console.log to pass the tests and continue.

```js
function padRow() {
  const test = 'Testing';
  return test;
}

console.log(padRow());
```

Step 59
Values returned out of a function are used by calling the function. You can use the function call directly as the value it returns, or capture the returned value in a variable. This way, you can use the value assigned to a locally scoped variable, outside the function it was created in.

```js
function getName() {
  const name = 'Camper cat';
  return name;
}

console.log(getName()); // "Camper cat"

const capturedReturnValue = getName();
console.log(capturedReturnValue); // "Camper cat"

console.log(name); // reference error
```

To use your "Testing" value, return it out of the padRow function by updating your return statement to return only the test variable.

```js
function padRow() {
  const test = 'Testing';
  return test;
}

console.log(padRow());
```

Step 60
Below the return statement, log the string "This works!" to the console.

After doing that, you will see that the string "This works!" does not display in the console, and the console.log("This works!") line is greyed out.

Copy the console log and paste it above the return statement. Now, the string "This works!" should appear in the console.

An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your code inside a function or a block statement. This means any code after a return statement will not run.

```js
function padRow(name) {
  const test = 'Testing';
  console.log('This works!');
  return test;
  console.log('This works!');
}

const call = padRow('CamperChan');
console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
```

Step 62
Because your function was no longer using the parameter, changing the argument did not affect it.

Go ahead and remove the test declaration and return statement from your padRow function, so the function is empty again.

```js
const character = '#';
const count = 8;
const rows = [];

function padRow(name) {
  console.log('This works!');
}

const call = padRow('CamperChan');
console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
```

Step 63
As expected, your function now returns undefined again. Your call variable is not necessary any more, so remove the call declaration and the console.log for the call variable.

```js
function padRow() {}
padRow();
```

Step 64
In order to know how to format a row, your padRow function will need to know which row number you are on, and how many rows in total are being generated.

The best way to do this is by creating function parameters for them. Give your padRow function a rowNumber and rowCount parameter. Multiple parameters are separated by a comma:

```js
function padRow(rowNumber, rowCount) {}
```

Step 65
Remember in an earlier step, you learned about return values. A function can return a value for your application to consume separately.

In a function, the return keyword is used to specify a return value. For example, this function would return the value given to the first parameter:

```js
function padRow(rowNumber) {
  return character.repeat(rowNumber);
}

console.log(padRow(9));
```

Step 66
A function call allows you to actually use a function. You may not have been aware of it, but the methods like .push() that you have been using have been function calls.

A function is called by referencing the function's name, and adding (). Here's how to call a test function:

Example Code
test();
Replace the character.repeat(i + 1) in your .push() call with a function call for your padRow function. Do not add any arguments to it yet.

```js
for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow());
}
```

Step 67
Your padRow function has two parameters which you defined. Values are provided to those parameters when a function is called.

The values you provide to a function call are referred to as arguments, and you pass arguments to a function call. Here's a function call with "Hello" passed as an argument:

Example Code
test("Hello");
Pass i + 1 and count as the arguments to your padRow call. Like parameters, arguments are separated by a comma.

```js
const character = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}
```

Step 68

You should now see the same bunch of characters in your console. Your padRow function is doing the exact same thing you were doing earlier, but now it's in a reusable section of its own.

Use the addition operator to concatenate a single space " " to the beginning and end of your repeated character string.

Remember that you can use the + operator to concatenate strings like this:

Example Code
" " + "string"

```js
const character = '#';

function padRow() {
  return ' ' + character + ' ';
}
```

Step 69Passed
Now it is time for a bit of math. Consider a three-row pyramid. If we want it centered, it would look something like:

Example Code
··#··
·###·

#####

Empty spaces have been replaced with interpuncts, or middle dots, for readability. If you extrapolate the pattern, you can see that the spaces at the beginning and end of a row follow a pattern.

Update your blank space strings to be repeated rowCount - rowNumber times.

Open up the console to see the result.

```js
const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    ' '.repeat(rowCount - rowNumber) +
    character.repeat(rowNumber) +
    ' '.repeat(rowCount - rowNumber)
  );
}
```

Step 70
You can pass full expressions as an argument. The function will receive the result of evaluating that expression. For example, these two function calls below would yield the same result. (Note that the order of operations rule PEMDAS—Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction—applies):

test(2 \* 3 + 1);
test(7);

```js
const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    ' '.repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    ' '.repeat(rowCount - rowNumber)
  );
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
```

Step 71
Your pyramid generator now functions as expected. But this is an excellent opportunity to further explore the code you have written.

The addition operator is not the only way to add values to a variable. The addition assignment operator can be used as shorthand to mean "take the original value of the variable, add this value, and assign the result back to the variable." For example, these two statements would yield the same result:

Example Code
a = a + 1;
a += 1;

Update your iteration statement in the for loop to use addition assignment.

```js
const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    ' '.repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    ' '.repeat(rowCount - rowNumber)
  );
}

for (let i = 0; i < count; i += 1) {
  rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
```

Step 72
Because you are only increasing i by 1, you can use the increment operator ++. This operator increases the value of a variable by 1, updating the assignment for that variable. For example, test would become 8 here:

```js
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}



for (let i = 0; i < count; i ++ 1) {
  rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
```

Step 73
Rather than having to pass i + 1 to your padRow call, you could instead start your loop at 1. This would allow you to create a one-indexed loop.

Update your iterator to start at 1 instead of 0.

```
for (let i = 1; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}
```

Step 74
The pyramid looks a little funny now. Because you are starting the loop at 1 instead of 0, you do not need to add one to i when you pass it to padRow.

Update the first argument of your padRow call to be i.

```js
for (let i = 1; i < count; i = i + 1) {
  rows.push(padRow(i, count));
}
```

Step 75
Unfortunately, now the bottom of the pyramid has disappeared. This is because you have created another off-by-one error.

Your original loop went for i values from 0 to 7, because count is 8 and your condition requires i to be less than count. Your loop is now running for i values from 1 to 7.

Your loop needs to be updated to run when i is 8, too. Looking at your logic, this means your loop should run when i is less than or equal to count. You can use the less than or equal to operator <= for this.

Update your loop condition to run while i is less than or equal to count.

```js
for (let i = 1; i <= count; i = i + 1) {
  rows.push(padRow(i, count));
}
```

Step 76

Comments can be helpful for explaining why your code takes a certain approach, or leaving to-do notes for your future self.

In JavaScript, you can use // to leave a single-line comment in your code.

Add a single-line comment above your for loop to remind yourself to change the code to a different kind of loop.

```js
//for (let i = 1; i <= count; i++) {
//rows.push(padRow(i, count));
//}
```

Step 77
JavaScript also has support for multi-line comments. A multi-line comment starts with /_ and ends with _/.

Unlike a single-line comment, a multi-line comment will encapsulate multiple lines.

Use /_ and _/ to turn your current for loop, including the body, into a multi-line comment.

```js
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/
```

Step 78
Your pyramid has disappeared again. That's okay - that is to be expected.

Before you create your new loop, you need to learn about if statements. An if statement allows you to run a block of code only when a condition is met. They use the following syntax:

```js
if (condition) {
  logic;
}
```

Create an if statement with the boolean true as the condition. In the body, print the string "Condition is true".

```js
if (true) {
  console.log('Condition is true');
}
```

Step 79
You'll see the string printed in the console, because true is in fact true.

Change the condition of your if statement to the boolean false.

```js
if (false) {
  console.log('Condition is true');
}
```

Step 80
Now the string is no longer printing, because false is not true. But what about other values?

Try changing the condition to the string "false".

```js
if ('false') {
  console.log('Condition is true');
}
```

Step 81
The text has appeared again! This is because "false" is a string, which when evaluated to a boolean becomes true. This means "false" is a truthy value.

A truthy value is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.

A falsy value is the opposite - a value considered false when evaluated as a boolean. JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.

Try changing your if condition to an empty string "", which is a falsy value.

```js
if ('') {
  console.log('Condition is true');
}
```

Step 82
The text is gone again! Empty strings evaluate to false, making them a falsy value. You will learn more about truthy and falsy values in future projects.

In addition to if statements, JavaScript also has else if statements. else if statements allow you to check multiple conditions in a single block of code.

Here is the syntax for an else if statement:

```js
if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else if (condition3) {
  // code to run if condition3 is true
}
```

If the first condition is false, JavaScript will check the next condition in the chain. If the second condition is false, JavaScript will check the third condition, and so on.

Below your if statement, add an else if statement that checks if 5 is less than 10. Then inside the body of the else if statement, log the string "5 is less than 10" to the console.

Check the console to see the results.

Step 83
Sometimes you will want to run different code when all of the if...else if conditions are false. You can do this by adding an else block.

An else block will only evaluate if the conditions in the if and else if blocks are not met.

Here the else block is added to the else if block.

```js
if (condition) {
  // this code will run if condition is true
} else if (condition2) {
  // this code will run if the first condition is false
} else {
  // this code will run
  // if the first and second conditions are false
}
```

Add an else block to the else if block. Inside the else block, log the string "This is the else block" to the console.

To see the results in the console, you can manually change the < in the else if statement to >. That will make the condition false and the else block will run.

```js
if ('') {
  console.log('Condition is true');
} else if (5 > 10) {
  console.log('5 is less than 10');
} else {
  console.log('This is the else block');
}
```

## Step 84

Now that you have practiced working with if...else if...else statements, you can remove them from your code.

Once you complete that, use let to declare a continueLoop variable and assign it the boolean false. Then use let to declare a done variable and assign it the value 0.

```js
let continueLoop = false;
let done = 0;
```
