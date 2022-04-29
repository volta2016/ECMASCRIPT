const character = "kyo";

localStorage.setItem("userName", character);
const nombreLocalStorage = localStorage.getItem("userName");

console.log(nombreLocalStorage);
