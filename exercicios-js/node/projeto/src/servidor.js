const porta = 3000

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.25}) //converte para Json
})
/*
*** Requisicao use atende a qualquer tipo de requisicao
app.use((req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.25}) //converte para Json
})
*/
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})