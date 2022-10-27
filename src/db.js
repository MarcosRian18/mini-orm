const {Client}  = require('pg')
const client = new Client({
  user: 'postgres',
  password: 'admin',
  host: '127.0.0.1',
  database: 'PGpessoa',
  port: 5432,
})
client.connect(function(err){
  if(err)throw err;
  console.log("connected")
})