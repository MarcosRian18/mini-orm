const {criarTabela, inserirDadosnaTabela, selecionaTabela} = require('./funcoes.js')
var obj = {
  nome: 'VARCHAR(50)',
  cpf: 'VARCHAR(20)',
  idade: 'INTEGER',
  possuifaculdade:  'BOOLEAN'
}

var obj2 = {
  nome: 'Silva',
  cpf: '70918467101',
  idade: 20,
  possuiFaculdade: true
}

criarTabela('testefinal4', obj)
inserirDadosnaTabela('testefinal4', obj2)
selecionaTabela('testefinal4','cpf')

