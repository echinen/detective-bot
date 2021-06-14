var Mensagem = {
    simples: function (prefixo, mensagem, acao) {
        const _prefixo = prefixo
        const _mensagem = mensagem
        const _acao = acao

        console.log(`${_prefixo} ${_acao} -> ${_mensagem}`)
    },
    padraoTchau: function (prefixo, acao, nomeUsuario) {
        const _prefixo = prefixo
        const _acao = acao
        const _nomeUsuario = nomeUsuario
        const msgPadrao = `Até mais ${_nomeUsuario}. Tenha um bom dia. =]`

        console.log(`${_prefixo} ${_acao} -> ${msgPadrao}`)
    },
    padraoNaoEntendi: function (prefixo) {
        const _prefixo = prefixo
        const msgPadrao = 'Não entendi o que você escreveu. Pode digitar novamente? =['

        console.log(`${_prefixo} ${msgPadrao}`)
    },
    padraoBemVindo: function (prefixo) {
        const _prefixo = prefixo
        const msg1 = `Olá! Meu nome é Digital-BOT. Estou aqui para ajudá-lo.`
        const msg2 = `Bem Vindo ao desafio do "Descubra o assassino!`
        const msg3 = `Por favor antes de continuar leia o enunciado do desafio em http://dojopuzzles.com/problemas/exibe/descubra-o-assassino/`
        const menu = `Segue a lista de opcões que tenho disponível para ajudá-lo. Basta digitar o número referente a opcão conforme abaixo:`
        const opcao1 = `1 - Lista dos suspeitos`
        const opcao2 = `2 - Lista dos locais`
        const opcao3 = `3 - Lista das armas`
        const opcao4 = `4 - Dê um palpite (chute). Digite a opção 4 seguido do número do registro do suspeito, registro da arma e registro do local. Seguindo nessa ordem conforme exemplo. Ex: 4,1,2,3`
        const opcao5 = `5 - Sair`

        console.log(`${_prefixo} ${msg1}`)
        console.log(`${_prefixo} ${msg2}`)
        console.log(`${_prefixo} ${msg3}`)
        console.log(`${_prefixo} ${menu}`)
        console.log(`${_prefixo} ${opcao1}`)
        console.log(`${_prefixo} ${opcao2}`)
        console.log(`${_prefixo} ${opcao3}`)
        console.log(`${_prefixo} ${opcao4}`)
        console.log(`${_prefixo} ${opcao5}`)
    }
}

module.exports = Mensagem
