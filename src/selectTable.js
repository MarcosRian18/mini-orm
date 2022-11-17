const client = require('./server');

function selecionaTabela(nameTable, column) {
  const query = `SELECT ${column} FROM ${nameTable}`;
  client
    .query(query)
    .then((result) => {
      console.log(
        `Foram encontrados os seguintes dados na coluna ${column}: \n`,
      );
      console.log(result.rows);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      if (`${column}` != column) {
        console.log(err + column);
      }
      console.log(
        `A coluna inserida ${column} não existe no nosso banco ${nameTable}`,
      );
    });
}

module.exports = selecionaTabela;
