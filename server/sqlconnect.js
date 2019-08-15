var mysql = require('mysql');

var con = mysql.createConnection({
  host     : "budfaxdata.c0bth7av9jes.us-east-2.rds.amazonaws.com",
  user     : "admin",
  password : "getstoned123",
  port     : "3306",
  database : "budfaxdata"
});

con.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');

  var sql = "INSERT INTO testing (name) VALUES ('Kyle Longrich')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success Mother Fucker");
  })

});
