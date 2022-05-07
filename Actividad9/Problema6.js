/*Escriba un programa para añadir una nueva propiedad al siguiente objeto:
    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.*/
    
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    console.log(student)
    Object.defineProperty(student,"pet", {
        value: "dog",                       //valor
        writable: true,                     //se puede modificar con =
        enumerable: true,                   //se muestra durante la enumeración de las propiedades del objeto
        configurable: true                  //si la propiedad puede modificarse y eliminarse del objeto
      })
    console.log(student)