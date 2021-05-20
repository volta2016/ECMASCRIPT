/*Evita utilizar switch para hacer que tu dódigo sea mucho mas mantenible
y legible pese a tener un monto de condiciones.

Vamos a ver ejemplos con Marvel*/
const adversario = "Iron-Man";
let loki = ""; //dependiendo del adversabrio loki se va disfrsar de una personaje u otro

if (adversario === "Iron-Man") {
	loki = "Magneto";
} else if (adversario === "Hulk") {
	loki = "Thanos";
} else if (adversario === "Thor") {
	loki = "Odin";
} else {
	loki = "loki";
}

/*Aquí muchos dicen sii tengi if, seguido de un if, lo que tengo uqe hacer es 
refeactorizarlo a un switch es como la estructura que tengo que utilizar de funcionar,
funciona todo ok*/

const adversario = "Iron-Man";
let loki = "";

switch (adversario) {
	case "Iron-Man":
		loki = "Magneto";
		break;

	case "Hulk":
		loki = "Thanos";
		break;

	case "Thor":
		loki = "Odin";
		break;

	default:
		loki = "loki";
}
/*Pero realmente hemos mejorado por que a mi me parece que estamos haciendo mas lineas de cófigo, ademas para agregar
un nuenvo caso debo escribir 3 lineas solo para cambiar un string.

::Hay una forma de hacer esto mucho mejor más ecalable que te va aydar a que tu código sea mucho mas limpio.::
esto puede ser utilizando una estructura de datos que es hash table utlizando este string qu etenemos de adversario como hash
o como índice para nuestro objeto */

const adversario = "Thor";

const LOKI_DISFRACES = {
	"Iron-Man": "Magneto",
	Thor: "Odin",
	Hulk: "Thanos",
};

const LOKI_DEFAULT_DISFRAZ = "loki";

/*Vamos intentar recuperar  LOKI_DISFRACES pasarle el adversario > acceder a esa posición en objeto utilizando la key
del adversario y en caso de que no la encuentre vamos a utilizar el LOKI_DEFAULT_DISFRAZ, añadir un nuevo
adversario es tan fácil como añadir una propiedad mas nuestro obj. de esta forma simplificamos ademas
nos permite exportar esta const LOKI_DISFRACES en diferentes sitios  */
