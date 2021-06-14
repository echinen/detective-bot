const { suspeitos } = require('../data/lista-suspeitos')

var ListaSuspeitos = function () {

    // Construtor da classe
    this._suspeitos = []
    suspeitos.forEach(suspeito => {
        this._suspeitos.push(suspeito)
    });
}

ListaSuspeitos.prototype.buscarTodosSuspeitos = function () {
    return JSON.stringify(this._suspeitos, null, 2)
}

ListaSuspeitos.prototype.buscarPorRegistro = function (registro) {
    return this._suspeitos.filter(f => f.registro === registro).map(m => m.nome).toString()
}

module.exports = ListaSuspeitos