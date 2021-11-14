let option = prompt("ingrese numero");

let primo = false;
// // debugger

if (option >= 2) {
  if (option % 2 == 1) {
    primo = true;
  }
}

if (primo == true) {
  console.log(`el numero  ${option}  es primo`);
} else {
  console.log(`el numero   ${option}  no  es primo`);
}
