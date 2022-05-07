/*Crea un código para llenar un objecto vacio con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad*/
    const objeto = {}

    Object.defineProperty(objeto,"color", {
        value: "verde",                       //valor
        writable: true,                     //se puede modificar con =
        enumerable: true,                   //se muestra durante la enumeración de las propiedades del objeto
        configurable: true                  //si la propiedad puede modificarse y eliminarse del objeto
      })
      Object.defineProperty(objeto,"tamaño", {
        value: "grande",                       //valor
        writable: true,                     //se puede modificar con =
        enumerable: true,                   //se muestra durante la enumeración de las propiedades del objeto
        configurable: true                  //si la propiedad puede modificarse y eliminarse del objeto
      })
      Object.defineProperty(objeto,"peso", {
        value: "ligero",                       //valor
        writable: true,                     //se puede modificar con =
        enumerable: true,                   //se muestra durante la enumeración de las propiedades del objeto
        configurable: true                  //si la propiedad puede modificarse y eliminarse del objeto
      })
      Object.defineProperty(objeto,"cantidad", {
        value: 23,                       //valor
        writable: true,                     //se puede modificar con =
        enumerable: true,                   //se muestra durante la enumeración de las propiedades del objeto
        configurable: true                  //si la propiedad puede modificarse y eliminarse del objeto
      })

      console.log(objeto)