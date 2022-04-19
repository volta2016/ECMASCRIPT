/*Binary Search In JavaScript

La búsqueda binaria es una técnica de búsqueda que funciona con el enfoque Divide y venceras. Se utiliza para buscar cualquier elemento en una matriz ordenada. En comparación con la búsqueda binaria lineal, es mucho más rápida con una complejidad de tiempo de O(logN), mientras que la búsqueda lineal funciona en una complejidad de tiempo O(N). 
La implementación de la búsqueda binaria en Javascript se analiza utilizando formas tanto iterativas como recursivas. Dada una matriz ordenada de números. La tarea es buscar un elemento dado en la matriz mediante la búsqueda binaria.


Input : arr[] = {1, 3, 5, 7, 8, 9}
        x = 5
Output : Element found!

Input : arr[] = {1, 3, 5, 7, 8, 9}
        x = 6
Output : Element not found!



*/

let recursiveFunction = function (arr, x, start, end) {
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveFunction(arr, x, mid + 1, end);
};

// Driver code
//let arr = [1, 3, 5, 7, 8, 9];
//let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

x = 6;

if (recursiveFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

/*Element found!
Element not found!
Time Complexity: O(logN)
Auxiliary Space: O(1) 
Iterative Approach : 
 en este enfoque iterativo, en lugar de la recursividad, usamos un ciclo while, y el ciclo se ejecuta hasta que alcanza la condición base, es decir, el inicio se vuelve mayor que el final. A continuación se muestra la implementación de la búsqueda binaria (enfoque iterativo) en JavaScript:
*/

let iterativeFunction = function (arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return true;
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (iterativeFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

x = 6;

if (iterativeFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");
