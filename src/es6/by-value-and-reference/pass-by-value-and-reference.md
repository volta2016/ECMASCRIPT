Certainly! Here's the information in Markdown format:

Passing by Value:
When you pass a value by value, you are passing a copy of the original value. Any changes made within the function will not affect the original value outside the function. Here's an example:

```js
// Example of passing by value
let a = 5;

function changeValue(x) {
  x = 10; // Changing the value of the local copy of 'a'
}

changeValue(a);
console.log(a); // Will print 5, as 'a' was not modified inside the function
```

Passing by Reference:
When you pass a value by reference, you are passing the memory location of the original value. Any changes to the value within the function will affect the original value outside the function. Here's an example:

```js
// Example of passing by reference
let obj = { value: 5 };

function changeObjectValue(o) {
  o.value = 10; // Modifying the property of the original object
}

changeObjectValue(obj);
console.log(obj.value); // Will print 10, as the object was modified inside the function
```

In summary, passing by value means you're passing a copy of the original value, whereas passing by reference involves passing the memory location of the original value. It's crucial to understand this difference to avoid unexpected effects when manipulating values in JavaScript.
