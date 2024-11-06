/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

const numeroSimetrico = require("./04")


function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej:
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
    for (let index = 0; index < array.length; index++) {
      if( array[index] === 'number'){
        return array[index]
      }
    }
}

// No modifiques nada debajo de esta linea //

module.exports = soloNumeros