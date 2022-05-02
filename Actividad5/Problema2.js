let array1 = [2 , 4, 6]
var i=0;
while(i<5){
    var datos = prompt("Ingresa el numero para la posicion " + (i+1));
    array1[i] = datos;
    i++;
}
console.log(array1);