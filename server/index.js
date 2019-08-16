const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var mysql = require('mysql');

const app = express();

/*
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
});
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {

  const name = req.query.name;
  const fucking = req.query.fucking;

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Succes Mother fucker: (${name})` ,
                            fuckme: `fuck (${fucking})`,
                            Othertest: `that was some boof` }));
  

  /*
  var sql = "INSERT INTO testing (name) VALUES ('" + name + "')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success Mother Fucker");
  })
  */

});

app.listen(3010, () =>
  console.log('Express server is running on localhost:3003')
);

