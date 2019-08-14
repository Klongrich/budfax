var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "budfaxdata.c0bth7av9jes.us-east-2.rds.amazonaws.com",
  user     : "budfaxdata",
  password : "getsonted123",
  port     : "3306"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});
