const { armas } = require('../data/lista-armas')

var ListaArmas = function() {

    // Construtor da classe
    this._armas = []
    armas.forEach(arma => {
        this._armas.push(arma)
    });
}

ListaArmas.prototype.buscarTodasArmas = function () {
    return JSON.stringify(this._armas, null, 2)
}

ListaArmas.prototype.buscarPorRegistro = function (registro) {
    return this._armas.filter(f => f.registro === registro).map(m => m.nome).toString()
}

module.exports = ListaArmas