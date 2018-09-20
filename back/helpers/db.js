const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qsdfghjklm',
  database : 'my_db'
});

module.exports  =  connection;