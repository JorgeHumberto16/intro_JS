/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */

 const arr = [3,4,6,1,5,2,9,10,23,12]

 function segundosNum (array){
     //Para el mayor
    let max = Math.max(...array)
    var i = arr.indexOf( max );
    arr.splice( i, 1 );
    let min = Math.min(...array)
    var i = arr.indexOf( min );
    arr.splice( i, 1 );
    max = Math.max(...array)
    min = Math.min(...array)
    arry = [max, min]
    return arry
 }

 console.info("Los segundos numeros más altos y bajos respectivamente son: ", segundosNum(arr))