const fs = require('fs');
let funcionesDeTareas = {
    archivo: './tareas.json',

    leerJson: function () {
        let tareasJson = fs.readFileSync(this.archivo, 'utf-8');
        let tareasParseadas = JSON.parse(tareasJson);
        return tareasParseadas
    },

    agregarTareas: function (titulo, estado) {
        let nuevaTarea = {
            titulo: titulo,
            estado: estado,
        }
        let tareasAnteriores = this.leerJson()
        tareasAnteriores.push(nuevatarea)
        this.escribirJson(tareasAnteriores)


    },
    escribirJson: function () {
        let nuevoJson = JSON.stringify(tareasAnteriores)
        fs.writeFileSync(this.archivo, nuevoJson, 'utf-8')

    },
    deshacer: function () {
        let tareas = this.leerJson();
        tareas.pop()
        this.escribirJson(tareas)
    },
    filtraPorEstado: function (estado) {
        let tareas = this.leerJson();
        let tareasFiltradasPorEstado = tareas.filter((tarea) => tarea.estado == estado)
        return tareasFiltradasPorEstado
    }

}

module.exports = funcionesDeTareas
