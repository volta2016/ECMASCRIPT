/* Promises:
- Promises are objects that represent a value that may be available now, in the future, or never.
- They are created using the Promise constructor. A promise can be in one of three states: pending, resolved, or rejected.
- You can chain multiple asynchronous operations using the .then() and .catch() methods. This allows you to specify what to do when a promise is resolved or rejected.
- Promises are often used in situations where you need to perform several asynchronous operations in parallel or sequentially and want to handle responses and errors explicitly. */

//Example of using a Promise:

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

/* Async/Await:
- async and await are keywords introduced in ECMAScript 2017 (ES8) to simplify working with Promises.
- async is placed before a function to indicate that the function contains asynchronous code and returns a Promise.
- await is used within an async function to wait for a Promise to be resolved before continuing with code execution. This makes asynchronous code appear synchronous, improving readability.
- Code with async/await tends to be more readable and maintainable compared to excessive nesting of .then().
Example of using async/await: */

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

async function processData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

processData();

/* Here's an example that combines both Promises and async/await for a real-world use case of making an API request in JavaScript: */

// Function that makes an API request and returns a Promise
function fetchUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return response.json();
    }
  );
}

// Async function that uses await to fetch and process user data
async function displayUserData(userId) {
  try {
    const userData = await fetchUserData(userId);
    console.log("User Data:");
    console.log(`Name: ${userData.name}`);
    console.log(`Email: ${userData.email}`);
  } catch (error) {
    console.error(error.message);
  }
}

// Call the function to display user data
displayUserData(1); // Replace 1 with the desired user ID

/* In this example:

The fetchUserData function makes an API request using the fetch function and returns a Promise. It checks if the response is successful and parses the JSON response.

The displayUserData async function uses await to wait for the fetchUserData Promise to resolve. It then displays the user's name and email data.

A try...catch block is used to handle any errors that may occur during the API request or data processing.

This example demonstrates how to combine Promises and async/await to make an API request and process the data in a more readable and structured manner. */
