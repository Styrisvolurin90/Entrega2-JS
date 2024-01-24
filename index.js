const Tienda = "Tienda Conquer"

let oversized = 450
let recto = 250
let slimFit = 300
let mujer = 250


let nombre = prompt("Bienvenido a tienda Conquer. Ingresa tu nombre:")

console.log("Bienvenido:", nombre)

function mostrarPlayera(codigo) {
    switch (codigo) {
        case 1:
            alert(nombre + ", " + "Has elegido la prenda Oversized")
            //Mostrar tipo de prenda//
            break
        case 2:
            alert(nombre + ", " + "Has elegido la prenda de Corte Recto")
            //Mostrar tipo de prenda//
            break
        case 3:
            alert(nombre + ", " + "Has elegido la prenda Slim Fit")
            //Mostrar tipo de prenda//
            break
        case 4:
            alert(nombre + ", " + "Has elegido la prenda para Mujer")
            //Mostrar tipo de prenda//
            break
        default:
            alert("No has elegido correctamente. Intenta de nuevo")
    }
}

function mostrarPrecio(codigo) {
    switch (codigo) {
        case 1:
            alert(nombre + ", " + "tiene un precio de $450") 
        case 2:
            alert(nombre + ", " + "tiene un precio de $250")
        case 3:
            alert(nombre + ", " + "tiene un precio de $300")
        case 4:
            alert(nombre + ", " + "tiene un precio de $250")
    }


}

function consultarPlayeras() {
    let codigoPlayera = prompt(nombre + ", " + "Elige la prenda que quieras llevar")
    if (codigoPlayera !== "" && codigoPlayera !== null) {
        mostrarPrecio(parseInt(codigoPlayera))
    } else {
        console.alert("Ingresa una prenda válida.")
    }
}


function calcularEnvio () {
    for (let i = 4000; ;i++) {
        
    }
}

