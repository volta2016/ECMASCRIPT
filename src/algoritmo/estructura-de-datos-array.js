/*si conocemos algo de estructura de datos y de bucles, podemos tengo un Array
un array es una estructura de datos que es iterable le puedo dar vueltas,
entonces podría darle vueltas con un for

[1,2,3] -> array ordenado el valor anterior siempre debe ser mayor
23
si quiero ver si existe 23 -> este número si no esta devuelve false, el número 3 o un mensaje personalizado, tenemos que colocarnos en los casos uso y ver que retornar.

## for

Lo que hacemos acá es darle vuelta con una iteración con una estructura de datos que es for. Comenzamos desde el primer al valor al último, en este caso tenemos 3 elementos

que pasa si tengo un array con 5 millones de elementos y valor que estoy buscando no está. Cuántas vueltas le voy a dar a ese array 5 mil vueltas, lo recorro y nunca voy dar con el valor por que lo que busco es 10 millones y tenemos un gran problema a nivel performance.

binary search -> búsqueda binaria

lo que plantea binary search, es que el valor de la izquierda debe ser menor que el de la izquierda, entonces en vez de comenzar por el primer elemento de array comienza a buscar por elemento de almedio que viene a ser el 4
nos queda 3 de cada lado

[1,4,8,23,50,100,123]

entonces lo que plantea la búsqueda binaria el número que acabo de buscar el 23
es mayor o menor que número que estoy buscando, eso lo podemos saber ¿por qué?
nosotros sabemos que estamos buscando el número 4 y obviamente sabemos que el número 23 es mayor al número 4. Entonces lo que vamos hacer es recortar todo el array que teníamos a la mitad del array, sabemos que toda la parte de 23 en adelante no nos interesa, por que si el número 23 es mayor al 24, del 23 para la derecha todos van a ser más grande, entonces por definición todo van a ser más grande que el 4

[1,4,8,23] ahora vamos a buscar la mitad de este array que recortamos

nos da el número 4 -> el número 4 es más grande, que el número que estamos buscando, la respuesta es No. El número 4 es igual numero que estamos buscando
entonces quiere decir que llegamos al resultado y en ambos caso hubiésemos
dado solo 2 vueltas entonces la búsqueda binaria es igual a recorrer todo el array (for) la respuesta en NO, particularmente es un ejemplo donde da exactamente igual

[1,4,8,23, 50, 100, 123]

vamos hacer el mismo proceso de recortar a los menores del numero de al medio
hasta dar con el 123 que es número que buscamos.

Damos 4 vueltas si comenzamos del 23 hasta encontrar el 123
[100, 123] -> última vuelta

con la forma tradicional for() serian 6 vueltas en vez de 4 que es la búsqueda binaria

[ 1, 4, 8,23, 50, 100, 123]

la búsqueda binaria cuando buscamos un número en particular dentro de un array de números ordenados es mucho más eficiente*/
