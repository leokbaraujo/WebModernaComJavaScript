for (let letra of 'Leo') {
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promisse']
for (let i in assuntoEcma) {
    console.log(i)
}
for (let assunto of assuntoEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }]
])
for (let assunto of assuntoMap) {
    console.log(assunto)
}
for (let chave of assuntoMap.keys()) {
    console.log(chave)
}
for (let valor of assuntoMap.values()) {
    console.log(valor)
}
for (let [chave, valor] of assuntoMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['L', 'e', 'o', 'n', 'e', 'l'])
for (let letra of s) {
    console.log(letra)
}