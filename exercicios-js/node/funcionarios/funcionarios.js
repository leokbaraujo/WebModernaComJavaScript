const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const paisDeOrigemChina = funcionario => funcionario.pais === 'China'
const gerenoFeminino = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.menorSalario < funcionarioAtual.menorSalario ? funcionario : funcionarioAtual
}


axios.get(url).then(response => {
    const funcinarios = response.data
    const funcionariaChinesaComMenorSalario = funcinarios.filter(paisDeOrigemChina)
                                                         .filter(gerenoFeminino)
                                                         .reduce(menorSalario)
    console.log(funcionariaChinesaComMenorSalario)
})

