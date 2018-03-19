const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// leitura sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// leitura assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//outra forma de ler um arquivo do tipo Json sem usar o filesystem
const config = require('./arquivo.json')
console.log(config)

//lendo o conteudo de um diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})