const client = require('./server');

//Função que insere dados na tabela
function insereDadoNaTabela(nametable, obj2) {
  let column = Object.keys(obj2);
  let values = Object.values(obj2);
  values = values.map((value) => {
    return "'" + value + "'";
  });

  if (insereDadoNaTabela.length === 2 && typeof obj2 === 'object') {
    if (Object.keys(obj2).length === 0) {
      console.log(
        `ERRO, não é possivel inserir um objeto vazio na tabela ${nametable}`,
      );
    } else {
      const query = `INSERT INTO ${nametable}(${column}) VALUES(${values})`;
      client.query(query, (err, res) => {
        console.error(err);
        if (err) throw err;
        console.log(`os dados foram inseridos na tabela ${nametable}`);
      });
    }
  }
}

module.exports = insereDadoNaTabela;
