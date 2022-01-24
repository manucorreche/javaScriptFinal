

let login = prompt("Es uds usuario de Scythe Store? - Responda Si o No").toUpperCase

if (login === "SI") {
    let producto = prompt("Que tipo de producto esta buscando? Indicar con la letra que hacer referencia al producto: A. Juego Base, B. Expansiones, C. Libro de Arte ").toUpperCase}
        if (producto ===  "A")
            alert("El precio del Juego Base es de $32.000.-")
            let compraBase = prompt ("Quiere comprar Scythe: el Juego Base responda Si o No").toUpperCase
                if (compraBase === "SI") { alert("Su compra total es de $32.000.- Gracias por su compra")}
                else{ alert("Gracias por visitar Scythe Store")}    

        if (producto === "B") { let compraExpa=prompt ("Indique que expansion desea escribiendo la letra a la que hace referencia: A. Vientos de Guerra y paz, B. Invasores de tierras lejanas, C. El auge de Fernis").toUpperCase
            switch (compraExpa) {
                case "A":
                    alert("La expansion 'Vientos de Guerra y paz'tiene un precio de $12.200")
                    let compraExpaA = prompt ("Quiere comprar la expansion Vientos de Guerra y paz? Responda Si o No").toUpperCase
                    if (compraExpaA === "SI") { alert("Su compra total es de $12.200.- Gracias por su compra")}
                    else{ alert("Gracias por visitar Scythe Store")} 
                break;
                case "B":
                    alert("La expansion 'Invasores de tierras lejanas' tiene un precio de $9.000")
                    let compraExpaB = prompt ("Quiere comprar la expansion 'Invasores de tierras lejanas'? Responda Si o No").toUpperCase
                    if (compraExpaB === "SI") { alert("Su compra total es de $9.000.- Gracias por su compra")}
                    else{ alert("Gracias por visitar Scythe Store")} 
                break;
                case "C":
                    alert("La expansion 'El auge de Fernis 'tiene un precio de $15.500")
                    let compraExpaC = prompt ("Quiere comprar la expansion El auge de Fernis '? Responda Si o No").toUpperCase
                    if (compraExpaC === "SI") { alert("Su compra total es de $15.500.- Gracias por su compra")}
                    else{ alert("Gracias por visitar Scythe Store")} 
                break;
                default:
                    alert("No se registro una opcion valida")
                break;
     }
        } 
        else if (producto === "C"){ alert("El libro de Arte de Scythe tiene un precio de $6.000")
        let compraExpaA = prompt ("Quiere comprar El libro de Arte de Scythe? Responda Si o No").toUpperCase
        if (compraExpaA === "SI") { alert("Su compra total es de $6.000.- Gracias por su compra")}
        else{ alert("Gracias por visitar Scythe Store")} 
            
        }  


else {alert("Puede crear un usuario en la seccion de <Crear nuevo usuario>. Muchas gracias por visitar Scythe Store")}