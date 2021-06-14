const { assassino } = require('../data/assassino')

var Teoria = function (qtdePalpites) {
    this._qtdePalpites = qtdePalpites || 3
    this._tentativa = 0
}

Teoria.prototype.identificarAssassino = function (suspeito, arma, local) {
    
    const suspeitoOK =  suspeito === assassino.suspeito || false
    const armaOK = arma === assassino.arma || false
    const localOK = local === assassino.local || false
    
    const resultado = verificarEvidencia(suspeitoOK, armaOK, localOK)
    const mensagem = tratarRetorno(resultado)

    const response = {
        codigo: resultado,
        mensagem: mensagem
    }

    return response
}

function verificarEvidencia(suspeito, arma, local) {
    if (suspeito) {
        if (arma) {
            if (local) {
                return 0
            } else {
                return 3
            }
        } else {
            return 2
        }
    } else {
        return 1
    }
}

function tratarRetorno(resultado) {
    switch (resultado) {
        case 0:
            return 'Parabéns você acaba de solucionar o caso.'
            break;
        case 1:
            return 'Suspeito incorreto.'
            break;
        case 2:
            return 'Arma incorreta.'
            break;
        case 3:
            return 'Local incorreto.'
            break;
        default:
            return 'Todas as informações estão incorretas'.
            break;
    }
}

module.exports = Teoria