var name = prompt("Hola, ingresa tu nombre: ").toLowerCase()
var age = Number(prompt("Ingresa tu edad: "))
if (age >= 18){
    if (name == "carlos" || name == "mario") console.log ("Puedes entrar a la discoteca y al area VIP")
    else console.log("Puedes entrar a la discoteca")
}
else console.log("Lo sentimos, no se permite la entrada a menores de edad")