const client = require('./server');

//Criação de uma tabela
function criaTabela(nametable, objeto) {
  const columns = Object.keys(objeto);
  const values = Object.values(objeto);
  const queryParam = columns.map((column, index) => {
    return `${column} ${values[index]}`;
  });

  if (typeof nametable !== 'string' || typeof objeto !== 'object') {
    throw new Error(
      'Erro: nome da tabela invalido e o objeto não está correto!',
    );
  }
  if (values.includes('VARCHAR()')) {
    console.error('Não é possivel criar um VARCHAR() vazio');
    process.exit(1);
  }
  const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (regex.test(nametable) == true) {
    // console.error('Nome da tabela invalido!');
    // throw new Error(
    //   'O nome da tabela não pode conter caracteres especiais! por favor insira os dados novamente!',
    // );
    throw new Error('Nome da tabela invalido, por favor tente novamente!');
  }

  client
    .connect()
    .then(() => {
      console.log(`Banco conectado com sucesso!`);
    })
    .catch((error) => {
      console.error('Erro de conexão ao banco de dados!');
    });

  let query = `CREATE TABLE IF NOT EXISTS ${nametable}(${queryParam})`;

  client.query(query, (err, res) => {
    console.log(`A tabela ${nametable} foi criada com sucesso!`);
  });
}
module.exports = criaTabela;
