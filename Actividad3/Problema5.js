//SOLO CONSIDERAR QUE HAY NUMEROS IGUALES
var num1 = Number(prompt("Ingresa tu primer numero: "))
var num2 = Number(prompt("Ingresa tu segundo numero: "))
var num3 = Number(prompt("Ingresa tu tercer numero: "))
if (num1 != num2 && num1 != num3 && num2 != num3){ 
    if (num1 > num2) {
        if (num1 > num3) console.log ("El numero ", num1, " es el mayor")
        else console.log ("El numero ", num3, " es el mayor")
    }
    else if (num1 < num2) {
        if (num2 > num3) console.log ("El numero ", num2, " es el mayor")
        else console.log ("El numero ", num3, " es el mayor")
    }
}       
else  console.log("Hay al menos 2 numeros iguales") 

//IDENTIFICAR LOS NUMEROS IGUALES
var num1 = Number(prompt("Ingresa tu primer numero: "))
var num2 = Number(prompt("Ingresa tu segundo numero: "))
var num3 = Number(prompt("Ingresa tu tercer numero: "))
if (num1 == num2 && num1 == num3) console.log("Todos los numeros son iguales con valor de ", num1)
else{
    if (num1 > num2) {
        if (num1 > num3) {
            console.log ("El numero ", num1, " en la primer posición es el mayor")
            if (num2 == num3) console.log("El segundo y el tercer numero son iguales con valor de ", num2)
        }
        else {
            if (num1 == num3) console.log ("El numero ", num1, " en la primer y tercer posicion son iguales y son los mayores")
            else {
                console.log ("El numero ", num3, " en la tercer posicion es el más grande")
                if (num1 == num2) console.log("El primer y segundo numero son iguales con valor de ", num1)
            }
        }
    }
    else {
        if (num2 > num3){ 
            console.log ("El numero ", num2, " en la segunda posición es el mayor")
            if (num1 == num3) console.log("El primer y el tercer numero son iguales con valor de ", num1)
        }
        else{
            if (num2 == num3) console.log ("El numero ", num2, " en la segunda y tercera posicion son iguales y son los mayores")
            else{
                console.log ("El numero ", num3, " en la tercer posicion es el más grande")
                if (num1 == num2) console.log("El primer y segundo numero son iguales con valor de ", num1)
            }
        }
    }
}       