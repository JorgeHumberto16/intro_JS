// Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
//    Objeto de muestra:

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

for(var i=0; i<Object.keys(student).length; i++){
    console.log(i+1, ".- ",Object.keys(student)[i],":",Object.entries(student)[i][1])
}console.log("\n")