const { query } = require('express');
const client = require('./db')


//Função que cria a Tabela 
function criarTabela(nameTable, obj){
  const values = Object.values(obj)
  const columns = Object.keys(obj)
  const queryParam = columns.map((column,index) =>{
    return `${column} ${values[index]}`
  })

  let query = `CREATE TABLE IF NOT EXISTS ${nameTable}(${queryParam})`
  client.query(query, (err, rows)=>{
   if(err) throw err;
   console.log(`Table criada com sucesso  ${nameTable}`, rows)
  })
}

// Função que Insere os dados na tabela
function inserirDadosnaTabela(nameTable, obj2){
  let column = Object.keys(obj2)
  let values = Object.values(obj2)
  values = values.map(value => {
    return "'" + value + "'"
  })

  const query = `INSERT INTO ${nameTable}(${column}) VALUES(${values})`
  client.query(query, (err,res)=>{
    if(err) throw err
    console.log(`Dados inseridos na tabela ${nameTable}`,res)
  })
}

function selecionaTabela(nameTable, column){

  const query = `SELECT ${column} FROM ${nameTable}`
  client.query(query).then(result => {
    console.log(result)
  }).catch( err => {
    console.log(err)
  })
 
}

 module.exports = {criarTabela, inserirDadosnaTabela, selecionaTabela}