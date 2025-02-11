JavaScript can "process" one command at a time. The opposite of single-threading, is multithreading. There are numerous pros and cons to both which we won't be getting into (feel free to check out the Wikipedia article on Threading(opens in a new tab) for more info about the pros and cons). We're going to take a look at JavaScript's single-threaded model and how/why we should write our code to take advantage of it.

```js
function addParagraph() {
  const para = document.createElement('p');
  para.textContent = 'JavaScript is single threaded!';
  document.body.appendChild(para);
}

function appendNewMessage() {
  const para = document.createElement('p');
  para.textContent = "Isn't that cool?";
  document.body.appendChild(para);
}

addParagraph();
appendNewMessage();
```

Keeping JavaScript's single-threaded nature in mind (meaning it can only perform one task at a time), let's break down this code into the order it will run:

the addParagraph() function is declared on line 1
the appendNewMessage() function is declared on line 6
addParagraph() is called on line 13
execution moves into the function and executes all three lines in order
now that the function is finished, execution returns to where it was called
the appendNewMessage() function is called on line 14
execution moves into the function and executes all three lines in order
now that the function is finished, execution returns to where it was called
the program ends because all lines of code have been executed

The Call Stack
The JavaScript engine keeps a call stack (basically a list) of the functions that are running. When a function is invoked, it is added to the list. When all of the code inside a function has been run, then the function is removed from the call stack. The cool part about a call stack is that a function doesn't have to complete before another function is added to the call stack.

Let's see how this works!

```js
function addParagraph() {
  const para = document.createElement('p');
  para.textContent = 'JavaScript is single threaded!';

  appendNewMessage(); //is invoked and then is removed from the call stack
  document.body.appendChild(para);
}

function appendNewMessage() {
  const para = document.createElement('p');

  para.textContent = "Isn't that cool?";
  document.body.appendChild(para);
}

addParagraph(); //is invoked and then is removed from the call stack
```

# Questions

How many items (frames) will be on the stack when the code reaches the "stop here" comment?

```js
function quiz() {
  var y = 'yes';
  questions();
  fun();
}
function questions() {
  var y = 'no';
  return 7;
}
function are() {
  return 3;
}
function fun() {
  are();
  // stop here
}

quiz();
```

aswer: 2

Step-by-Step Execution
1- The program starts by calling quiz().

- quiz is pushed onto the stack.

2. Inside quiz(), it calls questions().

- questions is pushed onto the stack.
- questions() returns 7, so it is popped off the stack.

3. quiz() then calls fun().

- fun is pushed onto the stack.

4. Inside fun(), it calls are().

- are is pushed onto the stack.
- are() returns 3, so it is popped off the stack.

5. Now we reach the "stop here" comment inside fun().

- At this moment, the stack contains:
- quiz()
- fun()
  Since are() has already returned, it has been removed from the stack, leaving only 2 items.

Call Stack Visualization
At the "stop here" comment, the stack looks like this:

---

## | quiz() | <-- Bottom of the stack (First function called)

## | fun() | <-- Current function executing (paused at "stop here")
