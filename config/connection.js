// Connect Node to MySQL.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "	ewbfrefyumy6wkja",
    port: 3306,
    password: "	llwbw4uk4lriih1f",
    database: "pz2v4fxvjsfb7sie"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  } else
    console.log("Connected as ID: " + connection.threadId);
});

// Export the connection.
module.exports = connection;