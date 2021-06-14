const readline = require('readline')
const colors = require('colors')

const ListaSuspeitos = require('../../backend/service/lista-suspeitos-service')
const ListaArmas = require('../../backend/service/lista-armas-service')
const ListaLocais = require('../../backend/service/lista-locais-service')
const Teoria = require('../../backend/service/teoria-service')
const Mensagem = require('../service/mensagem-service')

var Readline = function (input, output, botPrefix, userPrefix) {
    const _input = input
    const _output = output
    this._contexto = readline.createInterface(_input, _output)
    this._botPrefix = botPrefix.bgBlue
    this._userPrefix = userPrefix.bgMagenta
    this._nomeUsuario = 'usuário'
    this._acao = ''
}

Readline.prototype.runChallengeSimulation = function (contexto) {
    return new Promise((resolve, reject) => {
        try {
            const botPrefix = this._botPrefix
            const userPrefix = this._userPrefix
            const nomeUsuario = this._nomeUsuario

            const ListaSuspeitosService = new ListaSuspeitos()
            const ListaLocaisService = new ListaLocais()
            const ListaArmasService = new ListaArmas()

            contexto.on('line', (line) => {
                const input = line.trim().split(',')

                switch (input[0]) {
                    case '1':
                        const listaSuspeitos = ListaSuspeitosService.buscarTodosSuspeitos()
                        this._acao = '[lista dos suspeitos]'
                        Mensagem.simples(botPrefix, listaSuspeitos, this._acao)
                        break;
                    case '2':
                        const listaLocais = ListaLocaisService.buscarTodosLocais()
                        this._acao = '[lista dos locais]'
                        Mensagem.simples(botPrefix, listaLocais, this._acao)
                        break;
                    case '3':
                        const listaArmas = ListaArmasService.buscarTodasArmas()
                        this._acao = '[lista das armas]'
                        Mensagem.simples(botPrefix, listaArmas, this._acao)
                        break;
                    case '4':
                        const chute = line.trim().split(',')
                        this._acao = '[chute]'

                        if (chute.length <= 1 || chute.length <= 3) {
                            const msg = 'Parâmetro inválido. Por favor verifique se está digitando corretamente. Digite a opção 4 seguido do número do registro do suspeito, registro da arma e registro do local. Seguindo nessa ordem conforme exemplo. Ex: 4,1,2,3'
                            Mensagem.simples(botPrefix, msg, this._acao)
                        } else {
                            const registroSuspeito = chute[1]
                            const registroArma = chute[2]
                            const registroLocal = chute[3]
                            
                            const suspeito =  ListaSuspeitosService.buscarPorRegistro(registroSuspeito)
                            const arma = ListaArmasService.buscarPorRegistro(registroArma)
                            const local = ListaLocaisService.buscarPorRegistro(registroLocal)

                            Mensagem.simples(botPrefix, `suspeito -> ${suspeito}`, this._acao)
                            Mensagem.simples(botPrefix, `arma -> ${arma}`, this._acao)
                            Mensagem.simples(botPrefix, `local -> ${local}`, this._acao)

                            const TeoriaService = new Teoria()
                            const resultado = TeoriaService.identificarAssassino(registroSuspeito, registroArma, registroLocal)

                            if (resultado.codigo === 0) {
                                return setTimeout(() => {
                                    Mensagem.simples(botPrefix, resultado.mensagem, this._acao)
                                    Mensagem.padraoTchau(botPrefix, this._acao, nomeUsuario)
                                    resolve(true)
                                }, 2000);
                            }

                            Mensagem.simples(botPrefix, resultado.mensagem, this._acao)
                        }
                        break;
                    case '5':
                        this._acao = '[sair]'
                        Mensagem.padraoTchau(botPrefix, this._acao, nomeUsuario)
                        
                        return resolve(true)
                        break;
                    default:
                        Mensagem.padraoNaoEntendi(botPrefix)
                        break;
                }

                prompt(contexto, userPrefix)
            })
        } catch (e) {
            return reject('Houve um erro no método [runChallengeSimulation]', e)
        }
    })
}

Readline.prototype.finishChallengeSimulation = function () {
    process.exit(0)
}

Readline.prototype.startBot = function (contexto) {
    return new Promise((resolve, reject) => {
        try {
            const botPrefix = this._botPrefix
            const userPrefix = this._userPrefix

            Mensagem.padraoBemVindo(botPrefix)

            prompt(contexto, userPrefix)

            return resolve(true)
        } catch (e) {
            return reject('Houve um erro no método [startBot]', e)
        }
    })
}

function prompt(contexto, userPrefix) {
    contexto.setPrompt(userPrefix)
    contexto.prompt()
}

module.exports = Readline