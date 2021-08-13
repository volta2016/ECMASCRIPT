// Javascripts es un lenguaje que se ejecuta en el lado del cliente. Permitiendo esto una serie de 
// funcionalidades que hacen que la página cambie su contenido sin necesidad de llamadas al servidor, 
// es decir, cambia de aspecto en el navegador 
// de nuestro ordenador. Una de estas funcionalidad es la de mostrar el fecha y hora actual en nuestra web.

getDate()//	Devuelve el día del mes (entre el 1 y el 31)
getDay()//	Devuelve el día de la semana (entre el 0 y el 6)
getMonth()//	Devuelve el mes (entre el 0 y el 11)
getFullYear()//	Devuelve el año (en formato de 4 dígitos)
getHours()//	Devuelve la hora (entre el 0 y el 24)
getMinutes()//	Devuelve los minutos (desde 0 a 59)
getSeconds()//	Devuelve los segundos (desde 0 a 59)
getTime()//	Devuelve el número de milisegundos desde el 01/ Enero /1970
getTimezoneOffset()//	Devuelve la diferencia de horario en minutos entre la hora local y GMT (Meridiano de Greenwich)
getUTCHours()//	Devuelve la hora de acuerdo a UTC (Tiempo Universal Coordinado)

// obtener día del mes
let d = new Date();

console.log(d.getDate());

// obtener hora
let d = new Date();

console.log(d.getHours());




