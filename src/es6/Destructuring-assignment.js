//desestructuración
//Destructuring assignment
const persona = {
    nombre: 'Jin Kazama',
    edad: 35,
    kanji: '風間 仁',
    clave: 'examen Chunin'
}

//esto es muy tedioso
console.log(persona.nombre, persona.edad, persona.kanji);

// const {nombre } = persona

const {nombre, edad, kanji} = persona;
//si por alguna razon tuvieramos una varieble que se llame:
//nombre2 simplemente la puedo renombrar
const {nombre: nombre2} = persona

// console.log(nombre2);//podriamos utilizar perfectamente nombre2
//pero no quiere decir que nombre va tener disponible en este scope por que
//ya lo cambiamos si quito el 2 y grabo los cambios me va decir que nombre no esta definido
//¿por que? por que yo estoy extrayendo el objeto el nombre y le estoy asigando el nombre a la const
//de nombre2

console.log(nombre, edad, kanji);
//seria bueno simplemente extrear lo que me intereza de persona

//::Hay muchos usos de la desestructuración::
//se puede hacer pero algo que es muy usado es la desestructuración en el argumento

// const retornaPersona = (user) => {
//     const {nombre, edad, kanji} = user;
//     console.log(nombre, edad, kanji);
// }

// retornaPersona(persona);
//algo que es muy usado es la desestructuración en el argumento
//estoy recibiendo el usuario en este caso la persona puedo extraer directamente la propiedades que a mi me interezan
//a pesar que el obeto no tiene la propiedad aqui el estamos asignando la propiedad por defecto directamente
//si existe la propiedad en el objeto usa esa propiedad si no la definimos como parametro
const retornaPersona = ({nombre, edad, kanji, grado= 'Jounin'}) => {
    
    console.log(nombre, edad, kanji, grado);   
}



// retornaPersona(persona);
//::trabajando con el objeto que voy retornar


//:::otro programa
//le cambiamos el nombre es una function comun y corriente que retorna un objeto.
//::¿si yo quiero extraer el nombre clave y anios del avenger como lo hago?
const useContext = ({clave,nombre, edad, kanji, grado= 'Jounin'}) => {
    
    // console.log(nombre, edad, kanji, grado);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12222,
            lng: -12.29090
        }
    }
}
// const avenger = useContext(persona);//por consistencia cambio igual el nombre

//respuesta: a ¿si yo quiero extraer el nombre clave y anios del avenger como lo hago?
// const {nombreClave, anios, latlng} = useContext(persona);

//otro tema importante es que aveces nostros vamos a retornar un objeto que 
//tiene mas objetos dentro

// que pasa si quiero extrear donde yo necesito literlmente la latitud y la longitud
// en sus respectivas constantes como lo hacemos: por que ahora ya no esta este objeto
//ahora es la lat y lng

const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
//estas 2 propiedades ahora son constantes

console.log(nombreClave, anios,);


console.log(lat, lng);//extraje o objeto latitud y longitud esto no es tan comun.
const {nombreClave, anios, latlng} = useContext(persona);
const {lat, lng} = latlng;//tengo el objeto latlng y extraigo las 2 propiedades que me
//interesan funciona igual pero añade un paso más


    
    // console.log(nombre, edad, kanji, grado);
  

// si me intereza la latitud y logitud como objeto simplemente lo pongo aqui