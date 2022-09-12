// DECLARAMOS //
////////////////
////////////////
let dineroUsuario = Number(prompt("Ingrese la cantidad de dinero que posee."))
let opcion;
function compraPapitas(valor, nombrePapita){
    if (dineroUsuario >= valor) {
        dineroUsuario = dineroUsuario - valor;
        alert(`Ha comprado papitas ${nombrePapita}. Su vuelto es de $${dineroUsuario}.`);             
    }
    else {
        alert("No tiene suficiente dinero.")
    }
};
////////////////
////////////////

////////////////
////////////////
// OBJETOS //
// PAPITAS //
function papitas(nombre, precio, descripcion){
    this.nombre = nombre;
    this.precio = precio; 
    this.descripcion = descripcion;
}

const papitasClasica = new papitas("Clásica", 10, "Solo hamburguesa");
const papitasCheddar = new papitas("Cheddar", 15, "Descripcion...");
const papitasWasabi = new papitas("Wasabi", 15, "Descripcion...");
const papitasWacamole = new papitas("Wacamole", 20, "Descripcion...");
const papitasQuesoyCebolla = new papitas("Queso Y Cebolla", 20, "Descripcion...");
const papitasQuesoGratinado = new papitas("Queso Gratinado", 30, "Descripcion...");
const papitasSalMarina = new papitas("Sal-Marina", 35, "Descripcion...");

let listaPapitas = [papitasClasica, papitasCheddar, papitasWasabi, papitasWacamole, papitasQuesoyCebolla, papitasQuesoGratinado, papitasSalMarina];
// HAMBURGUESAS //
// COMPLETAR //
//
//
//
////////////////
////////////////


// COMPRA DE PAPITAS //
////////////////
////////////////
while (opcion != 8) {
    opcion = prompt(`Su saldo es de $${dineroUsuario}. Qué desea comprar?
    1- Papitas clásicas $10
    2- Papitas con chedar $15
    3- Papitas sabor wasabi $15
    4- Papitas con wacamole $20
    5- Papitas con queso crema y cebolla $20
    6- Papitas con queso gratinado $30
    7- Papitas con sal marina $35.
    8- No comprar nada.
    `)

    switch (opcion) {
        case "1":
            compraPapitas(Number(listaPapitas[0].precio), listaPapitas[0].nombre);
            break;
        case "2":
            compraPapitas(Number(listaPapitas[1].precio), listaPapitas[1].nombre);

            break;
        case "3":
            compraPapitas(Number(listaPapitas[2].precio), listaPapitas[2].nombre);

            break;
        case "4":
            compraPapitas(Number(listaPapitas[3].precio), listaPapitas[3].nombre);

            break;
        case "5":
            compraPapitas(Number(listaPapitas[4].precio), listaPapitas[4].nombre);

            break;
        case "6":
            compraPapitas(Number(listaPapitas[5].precio), listaPapitas[5].nombre);

            break;
        case "7":
            compraPapitas(Number(listaPapitas[6].precio), listaPapitas[6].nombre);

            break;
        case "8":
            dineroUsuario = dineroUsuario;
            alert(`Su dinero es de $${dineroUsuario}. Adios!`); 
            continue;
        default:
            alert(`Ingrese un número válido.`); 
        break;
    }
}

// COMPRA DE PAPITAS //
////////////////
////////////////
