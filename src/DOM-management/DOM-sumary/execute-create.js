console.log(
  (function star() {
    return "starting...";
  })()
);

//this is a function anonima, function without name
console.log(
  (function () {
    return "starting...";
  })()
);

//is something that is used a lot when working with events

const button = document.createElement("button");
button.innerText = "click me!";

button.addEventListener("click", function () {
  alert("clicked");
});

//the same
// button.addEventListener("click",  () => {
//   alert("clicked");
// });

document.body.append(button);

//arrow function

const showText = () => {
  return "show text";
};

console.log(showText());
//can return all this in one line

const showText2 = () => "show text"; //there is implicit return
console.log(showText2());

const showText1 = () => "Hola Mundo";
const showNumber = () => 23.3;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
const showObject = () => ({ name: "Kyo" }); //by placing it in "()"" this is the object that will be returned.
