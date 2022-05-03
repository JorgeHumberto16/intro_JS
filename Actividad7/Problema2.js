var numbers = [1, 2, 3, 4, 10, 11]

function suma(array){
    let result = 0
    for (let i=0; i<numbers.length; i++){
        result += array[i]
    }
    return result
}

var resultado = suma(numbers)
console.log(resultado)

var resultado1 = suma([10, 12, 13, 14, 20, 21])
console.log(resultado1)