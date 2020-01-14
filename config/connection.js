// Connect Node to MySQL.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "root",
    database: "burgers_db"
  });
}

connection.connect();

// Export the connection.
module.exports = connection;