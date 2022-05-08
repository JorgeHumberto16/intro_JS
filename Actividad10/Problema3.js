 /*Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.
Ejemplo
La matriz es la lista original. Los números que faltan son
     matriz = [7,2,5,3,5,3]
     br = [7,2,5,4,6,3,5,3]
     Los números que faltan en arr son [4,6]*/

const br = [7,2,5,4,6,3,5,3]
const matriz = [7,2,5,3,5,3]

function comparar(mat1, mat2){
     mat1.forEach(element => {
         if(!mat2.includes(element)) {
          return console.log(mat1.at(mat1.indexOf(element)))
         }
     });
}

console.log("Los números que faltan en el segundo arreglo son: ")
comparar(br,matriz)