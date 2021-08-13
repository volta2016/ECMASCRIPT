//Ecribir un algoritmo que imprima los numeros del 1 al 100
//con la condición que si el numero a imprimir es multiplo de 3,
//imprima el string: "Fizz", si el numero es multiplo de 5 imprima:
//"Buzz" y si es multiplo de ambos que imprima "FizzBuzz"

//otion 1

/*
function fizzBuzz() {
	for (i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

fizzBuzz();*/


//otion 2

function fizzBuzz() {
	for (i = 1; i <= 100; i++) {
    let message = "";//falsy
		if (i % 3 === 0 && i % 5 === 0) {
			message += "FizzBuz";
		} else if (i % 3 === 0) {
			message += "Fizz";
		} else if (i % 5 === 0) {
			message += "Buzz";
		}
			
    console.log(message || i);
		
	}
}

fizzBuzz();

/*option 3
podemos optimizar más  nuestro code
if(!(0)){
  let ms = "nostros lo negramos 0 se convierte a true
  y entra nuestro condicional"
}
*/

function fizzBuzz() {
	for (i = 1; i <= 100; i++) {
    let message = "";//falsy
		if (i % 3 === 0 && i % 5 === 0) {
			message += "FizzBuz";
		} else if (!(i % 3)) {
			message += "Fizz";
		} else if (!(i % 5)) {
			message += "Buzz";
		}
			
    console.log(message || i);
		
	}
}

fizzBuzz();





