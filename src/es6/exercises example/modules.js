// ::Módulos::
// Antes de ES6, utilizamos bibliotecas como Browserify para crear módulos en el 
// lado del cliente (navegadores), y require en el servidor (Node.js). Con ES, ahora podemos
// utilizar directamente módulos de todos los tipos (AMD, CommonJS y ECMAScript).


//:::Exportando en formato CommonJS

module.export = 1;
module.exprt = {foo: 'bar'};
module.exports = ['foo', 'bar'];
module.exports = function bar() {};

// :::Exportando en formato ECMAScript

// > Por nombres

export let nombre = 'Lean';
expor let edad = 31;

// > Por lista de objetos

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { sum, subtract }

// > Usando export individualmente:

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Usando default:

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let operaciones = {
  sum,
  rest
}


export default operaciones;

// otra forma

export {operaciones as default}


// Mejores Prácticas: Utiliza siempre el método export default al final de módulos ECMAScript, 
// esto dejará claro lo que se está exportando y lo que no. En los módulos CommonJS suele exportarse 
// un sólo valor u objeto. Siguiendo con este paradigma, hacemos que nuestro código sea fácil, legible 
// y que podamos combinar entre módulos CommonJS y ECMAScript.



// :::Importando en formato CommonJS


//considerando que existe una carpeta libs y dentro un archivo llamado rutas con extensión .js o .json
const rutas = require('libs/rutas');

// :::Importando en ECMAScript

// Archivo completo:

import 'react';
import './default-parameters.js';
import './libs/operaciones';

Por el nombre de la importaciones:

import React from 'react';
import { sumar, restar } from './libs/operaciones';
import { literal } from './ literal-objects.js';
// puede ser necesario o no la extensión


// También se pueden renombrar las importaciones: 

import {
  sumar as mas,
  restar as menos
} from './lib/operaciones';

// Importación por espacio de nombres:

import * as aritmeticas from './libs/operaciones';


// Importar una lista de valores de un módulo:

import * as aritmeticas from './libs/operaciones';

const { sumar, restar } = aritmeticas;


// Al importar un módulo exportado usando la sintaxis Commonjs (como React) podemos hacer lo siguiente

import React from 'react';
const { Component, PropTypes } = React;

// Simplificando:

import React, { Component, PropTypes } from 'react'; 

// Nota: Los valores que se exportan son enlaces, no referencias. Por lo tanto, 
// cambiar el enlace de una variable en un módulo, afectará su valor. Evita cambiar 
// la interfaz pública de módulos exportados.
