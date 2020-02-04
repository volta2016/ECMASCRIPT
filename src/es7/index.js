//es7
//include este metodo trabaja sobre un arreglo y un string nos va permitir  
//a nosotros saber si hay Un elemento dentro de este valor
let numbers = [1,2,3,7,8];
if (numbers.includes(7)) {
    console.log('si se ecuentra el valor 7');
} else {
    console.log('No se encuentra');
}
//anteriormente ocupavamos indexOf

//como elevar a la potencia 


let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result)