const vinos = [
    {nombre: "vino 1", precio: 1000},
    {nombre: "vino 2", precio: 2000},
    {nombre: "vino 3", precio: 3000},
]

let carrito = []

let seleccion = prompt("Si desea comprar algun producto escriba: si; de lo contrario escriba: no ")

while(seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingrese: si o no")
    seleccion = prompt("Si desea comprar algun producto escriba: si; de lo contrario escriba: no ")
}

if (seleccion == "si") {
    alert("A continuación le mostramos nuestra oferta de vinos")
    for (const vino of vinos) {
        alert(vino.nombre + " - " + vino.precio);
    }  
    
} else if (seleccion == "no") {
    alert("Gracias por su visita")
}

while (seleccion != "no"){
    let producto = prompt("Agregue un vino a su carrito")
    let precio = 0

    if ( producto == "vino 1" || producto == "vino 2" || producto == "vino 3") {
        switch(producto){
            case "vino 1":
                precio = 1000;
                break;
            case "vino 2":
                precio = 2000;
                break;
            case "vino 3":
                precio = 3000;
                break;
            default:
                break
        }
    let unidades = parseInt (prompt("Cuántas unidades quiere llevar?"))

    carrito.push({producto, precio, unidades})
    console.log (carrito)
    } else {
        alert("No contamos con ese producto")
    }

    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("Muchas gracias por su visita")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades*carritoFinal.precio}`)
        })
        break;
    }
}