// não aceita repetição / não indexada
const times = new Set()
times.add('Ceará')
times.add('Horizonte').add('Iguatu').add('Floresta').add('Ferroviário')
times.add('Fortaleza')
times.add('Ceará')

console.log(times)
console.log(times.size)
console.log(times.has('Ceará'))
times.delete('Fortaleza')
console.log(times)

const nomes = ['Leonel', 'Sabrina', 'Leuda', 'Sabrina']
const nomesSet = new Set(nomes)
console.log(nomesSet)
