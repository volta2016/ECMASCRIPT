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
