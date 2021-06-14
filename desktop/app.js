const Readline = require('./middleware/readline-middleware')

const nomeBot = 'Detetive-BOT>'
const nomeUsuario = 'Usuário>'

const ReadlineService = new Readline(process.stdin, process.stdout, nomeBot, nomeUsuario)

const ctx = ReadlineService._contexto
ReadlineService.startBot(ctx)
    .then(() => ReadlineService.runChallengeSimulation(ctx))
    .then(() => ReadlineService.finishChallengeSimulation())
    .catch((e) => {
        console.log('Erro na aplicação: ', e)
        ReadlineService.finishChallengeSimulation()
    })