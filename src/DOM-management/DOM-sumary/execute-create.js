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

document.body.append(button);
