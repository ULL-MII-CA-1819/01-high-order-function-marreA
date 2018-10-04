// Flattening
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log("Datos iniciales: ");
console.log(arrays);
// Invocamos al metodo reduce del objeto array que recibe como argumento una callback
// en este caso, una funcion lambda que toma dos argumentos:
//  - result: array resultante de la operacion
//  - arrays: array de arrays
// el bloque de la función concatena los arrays internos de la variable "arrays"
// dentro del nuevo array "result"
let array = arrays.reduce((result, arrays) => result.concat(arrays), []);
console.log("Resultado final" );
console.log(array);

flat = (arrays) => {
    return arrays.reduce((result, arrays) => result.concat(arrays), []);
}
module.exports = flat;