/*Hacer una función para que reciba ese arreglo de objetos y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 
            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/
const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

function nuevoArreglo (array){
    var coleccion2 = array.map(function(concat){
        let suma =  concat.a + concat.b + " " + concat.name
        return suma
        });

    let final = coleccion2.join("-=-")
    return final
}

console.log(nuevoArreglo(coleccion))
