for (let index = 0; index < tareasParseadas.length ; index++){
    console.log("Tarea " + tareasParseadas[index].titulo)
}

let i = 6
console.log("While")
while (i < tareasParseadas.length) {
    console.log("Tarea " + tareasParseadas[i].titulo)
    i++
}

console.log("Do While")

do {
    console.log("Tarea ")
    i++
} while (i < tareasParseadas.length)
