const mysql = require("mysql");
const connection = mysql.createConnection({
  multipleStatements: true,
  user: "root",
  password: "root",
  database: "alternance",
  port: 8889,
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false
});
module.exports = connection;
