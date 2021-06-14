const { locais } = require('../data/lista-locais')

var ListaLocais = function () {

    // Construtor da classe
    this._locais = []
    locais.forEach(local => {
        this._locais.push(local)
    });
}

ListaLocais.prototype.buscarTodosLocais = function () {
    return JSON.stringify(this._locais, null, 2)
}

ListaLocais.prototype.buscarPorRegistro = function (registro) {
    return this._locais.filter(f => f.registro === registro).map(m => m.nome).toString()
}

module.exports = ListaLocais