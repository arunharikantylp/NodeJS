var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kle"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE student (roll int(5),per int(5),name varchar(30))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});