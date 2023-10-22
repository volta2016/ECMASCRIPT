/* The people think that must apply await before the fetch, it doesn't have to because you can mix promises with async await. */

async function fetchCategories({ types }) {
  return fetch("").then((response) => response.json());
}

async function fetchPosts({ limit }) {
  return fetch("").then((response) => response.json());
}

async function app() {
  const categories = await fetchCategories({ types: ["movies"] }); //10s
  const post = await fetchPosts({ limit: 5 }); //5s

  //15s
}

Promise.all([
  Promise.resolve(13),
  Promise.rejected(new Error("this is an error")), //<- optional
  new Promise((resolve) => setTimeout(() => resolve(26), 100)),
])
  .then((values) => {
    console.log(values); //here no enter, this won't be reached due to the rejection of the Promise
  })
  .catch((error) => {
    console.log(error); //This will log the error from the rejected Promise
  });

// The order in the array determines the order of the Promises

/*Or all or nothing if it fails it's madness, as soon as an array promise fails, you can no longer do a .then, and you can only do a catch for the error. */

Promise.allSettled([
  Promise.resolve(13),
  Promise.reject(new Error("
  ")),
  new Promise((resolve) => setTimeout(() => resolve(26), 100)),
]).then((values) => {
  const [
    { value: firstPromiseValue },
    { reason: secondPromiseValue },
    { value: thirdPromiseValue },
  ] = values;

  console.log({
    firstPromiseValue,
    secondPromiseValue,
    thirdPromiseValue,
  });
});

/* "We have more granular control" Always it's resolve and return an array where you know if some of the promises
is resolve or reject, we can know what in concrete is fail*/
