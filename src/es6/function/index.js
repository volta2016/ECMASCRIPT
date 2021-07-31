/*las funciones tambien se pueden llamar con camelCase y bueno empezar 
con un verbo que indique que hace esa función por ejmplo:*/

function getSingleProducts() {}

function deleteAllProducts() {}

function updateDiscount() {}

function calculaLaFactura({ total = 100, propina = 0.15, impuesto = 0.13 }) {
	return total + propina * total + impuesto * total;
} //acá le agregamos default value

const factura = calculaLaFactura({ propina: 0.1, impuesto: 0.21, total: 300 });

console.log(factura);
