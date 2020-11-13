// 1-.Pido el número de días vividos
// 2-.Calculo el numero de años / 365
// 3-. a los días vividos les quito los días de los años calculados
// A los días vividos les quito los días de los años calculados. Esta 
// operación es el resto de la división de los días vividos / 365. 
// Ese resto de la división son los días restantes que necesito para 
// seguidamente calcular el número de meses.
// 4-. sobre lo numeros restante calculo el numero de meses / 30
// 5-. a los días restante le quito los días de los meses calculados
// 6-. Muestro resultados, alos , meses, días restante calculados.

let dayLived = parseInt(prompt('escribe los numeros vividos', ''));
let numberYears = Math.floor(dayLived / 365);
let remainingDays =  dayLived % 365;
let numberMonths = Math.floor(remainingDays / 30);
remainingDays = remainingDays % 30;
alert(`ha vivido ${numberYears} años ${numberMonths} meses y ${remainingDays}`);


