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
