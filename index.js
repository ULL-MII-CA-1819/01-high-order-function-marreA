
// Ejercicios sobre programacion funcional. High-Order Functionsç

function flat(arrays){
    return arrays.reduce((result, arrays) => result.concat(arrays), []);
}


// Exportamos las funciones
module.exports = flat;