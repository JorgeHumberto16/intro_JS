var word1 = "madam"
var word2 = "computadora"

function palindromo(palabra) {
    var res = false
    var verificador = palabra.split("").reverse().join("");
    if (verificador == palabra) res = true;
    if(res == true) return "la palabra es un palindromo"
    else return "la palabra NO es un palindromo"
}

console.log("Para '", word1, "' ,", palindromo(word1))
console.log("Para '", word2, "' ,", palindromo(word2))

console.log("Para '", "perro", "' ,", palindromo("perro"))
console.log("Para '", "oso", "' ,", palindromo("oso"))