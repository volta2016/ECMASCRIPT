/*::Body.json()
El método json() de Body recibe un flujo de datos Response y lo lee a término. Devuelve una promesa con el cuerpo del texto transformado a JSON.

Sintáxis
response.json().then(data => {
  // do something with your data
});*/

const myList = document.querySelector('ul');
const myRequest = new Request('products.json');

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    for (const product of data.products) {
      let listItem = document.createElement('li');
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = product.Name;
      listItem.append(
        ` can be found in ${
          product.Location
        }. Cost: `
      );
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = `£${product.Price}`;
      myList.appendChild(listItem);
    }
  });