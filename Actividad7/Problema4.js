var temp = 64.4
var scale = 1 //0-->Celsius / 1-->Fahrenheit
var res = 0

function convTemp(temperatura, escala){
    if (escala == 0){ //Celsius --> Fahrenheit
        res = (temperatura*9/5)+32
    }
    else{             //Fahrenheit --> Celsius
        res = (temperatura-32)*5/9
    }
    return res
}

console.log(convTemp(temp, scale))

var temp1 = prompt("Ingresa una temperatura: ")
var scale1= prompt("En qué escala está tu temperatura? \n" + "0.- Celsius \n" + "1.- Fahrenheit")

console.log(convTemp(temp1, scale1))