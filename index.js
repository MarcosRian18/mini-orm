const criaTabela = require('./src/createTable');
const insereDadoNaTabela = require('./src/insertTable');
const selecionaTabela = require('./src/selectTable');
const client = require('./src/server');

var obj = {
  nome: 'VARCHAR',
  cpf: 'VARCHAR',
  idade: 'INTEGER',
  possuifaculdade: 'BOOLEAN',
};

var obj2 = {
  nome: 'Silva',
  cpf: '70918467102',
  idade: 20,
  possuiFaculdade: true,
};

try {
  criaTabela('tabela6', obj);
  // insereDadoNaTabela('tabela1', obj2);
} catch (error) {
  console.error(error.message);
}

// selecionaTabela('testeTabela', 'cpf');
