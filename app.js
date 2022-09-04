

console.log("Tarea: " + tareasParseadas[2].titulo + " / " + "Estado: " + tareasParseadas[2].estado)
console.log(`Tarea: ${tareasParseadas[2].titulo} 
Estado: ${tareasParseadas[2].estado}`)


switch (action) {
    case "listar": 
        for (let i = 0; i < tareasParseadas.length; i++){
            console.log(`Tarea: ${tareasParseadas[i].titulo} \nEstado: ${tareasParseadas[i].estado}`)
            console.log("-----------------------------------------------------")
        }
        break;
}
