var animals = ["eagle", "parrot", "monkey", "boar", "lion"]
var comingSoonAnimals = ["panther", "dragon", "turtle"]

var allAnimals = animals.concat(comingSoonAnimals);
console.log(allAnimals)

var arr = [4, 6, 1, 0, 8, 2]

//Primer inciso 
arr.sort(function(a,b){return a-b})
console.log(arr)

//Segundo inciso
animals.push("cow")
console.log(animals)

//Tercer inciso
animals.shift()
console.log(animals)