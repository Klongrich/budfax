const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');

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

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/growerData', (req, res) => {

  const name = req.query.name;
  const company = req.query.company;
  const type = req.query.type;
  const haverstLocatoin = req.query.haverstLocatoin;
  const haverstDate = req.query.haverstDate;
  const uints = req.query.uints;
  const thc = req.query.thc;
  const thca = req.query.thca;
  const cbd = req.query.cbd;
  const cbg = req.query.cbd;

  const data_fields = "Name, DateListed";

  console.log(req.query);

  res.setHeader('Content-Type', 'application/json');
  
  /*
  var sql = "INSERT INTO product_info ('" + data_fields + ")  VALUES ('" + name + "," + haverstDate + "')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success Mother Fucker");
  })
*/
});

app.listen(3010, () =>
  console.log('Express server is running on localhost:3010')
);


