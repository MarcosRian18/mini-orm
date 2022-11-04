const client = require('./db')


//Função que cria a Tabela 
function criarTabela(nameTable, obj){
  obj = Object.values(obj)
  let query = `CREATE TABLE IF NOT EXISTS ${nameTable}(${obj})`

  client.query(query, (err, rows)=>{
   if(err) throw err;
   console.log(`Table criada com sucesso  ${nameTable}`, rows)
  })
}

//Função que Insere os dados na tabela
function inserirDadosnaTabela(nameTable, obj, obj2){
  let values = Object.values(obj)
  values = values.map(value =>{
    return value.split(' ')[0]
  })
  console.log(values);
  console.log(obj2)
  obj2 = Object.values(obj2)
  obj2 = obj2.map(value =>{
    return  "'" + value + "'";
    // console.log(value)
  })
  console.log(obj2)
  const query = `INSERT INTO ${nameTable}(${values}) VALUES(${obj2})`
  console.log(query)
  client.query(query, (err,res)=>{
   
    if(err) throw err
    console.log(`Dados inseridos na tabela ${nameTable}`,res)
  })
}

// function inserirDado(nameTable, coluna, valor){
//     const query = `INSERT INTO ${nameTable}(${coluna}) VALUES('${valor}')`
//      console.log(query)
//     client.query(query, (err,res)=>{
     
//       if(err) throw err
//       console.log(`Dados inseridos na tabela ${nameTable}`,res)
//     })
//   }

 module.exports = {criarTabela, inserirDadosnaTabela}