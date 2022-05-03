var oracion = "Un gran poder conlleva una gran responsabilidad"
var palabra = "poder"

function buscar (frase, termino){
    var elementos = frase.split(" ");
    var res = false
    for(var i=0; i<elementos.length; i++){
        if(elementos[i] == termino){
            res = true;
        } 
    }
    return res
}
var result = buscar(oracion, palabra)
console.log(result)

var result1 = buscar("Hola amigo mio", "adios")
console.log(result1)