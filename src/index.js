const {criarTabela, inserirDadosnaTabela} = require('./funcoes.js')
var obj = {
  id: 'id SERIAL PRIMARY KEY',
  nome: 'nome VARCHAR(50)',
  cpf: 'cpf VARCHAR(20)',
  idade: 'idade INTEGER',
  possuifaculdade: 'Possuifaculdade BOOLEAN'
}

var obj2 = {
  id: 0,
  nome: 'Marcos',
  cpf: '70918467101',
  idade: 20,
  possuiFaculdade: true
}

criarTabela('wiltter', obj)
// inserirDado('pessoa1', 'nome', 'JoãoCamaBox')
inserirDadosnaTabela('wiltter', obj, obj2)

