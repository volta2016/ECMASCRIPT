
/*
function name(name) {
	return (this.name = `${name} :)`);
}

var user = new name("Kyo"); //estoy guardando una isntancia de mi funcion por que la estoy usando de manera
//de clase
console.log(user.name);

*/

/*
const myFunction = (name) => {
	console.log(this.name = `${name} :)`;
};

*/

/*
function time() {
  
  this.seg = 0;
  setInterval( () => {
    this.seg++
    console.log(this.seg)
  }, 1000)
}

new time


*/





//const sumarDos = num1 => num1
//console.log(sumarDos(10))

  /*  let option = (prompt('ingrese numero'))

    let primo = true 
    // debugger
     for(let i = 2 ;i< option;i++){
         let resultado =parseInt(option/i)
         if( option / i ==resultado ) {
              primo =false
              } else if(option  > 1 && option /1 == option && option/option == 1)  {
                primo = true
     }
     }


     if ( primo == true ) {
        console.log(el numero ${option}  es primo)
     }  else  {
        console.log(el numero ${option} no  es primo)
     }*/


const numerosTwo = [1, 2, 3, 4, 5];

const mutiplicar = numerosTwo.forEach(x => x * 5);
console.log(mutiplicar);






