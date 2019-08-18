const express = require('express');
const bodyParser = require('body-parser');
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
  });


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/growerData', (req, res) => {

  const productName = req.query.productName;
  const companyName = req.query.companyName;
  const email = req.query.email;
  const strand = req.query.strand;
  const haverstDate = req.query.haverstDate;
  const numberOfUints = parseInt(req.query.numberOfUints, 10);
  const thc = parseFloat(req.query.thc);
  const thca = parseFloat(req.query.thca);
  const cbd = parseFloat(req.query.cbd);
  const pictureName = req.query.pictureName;
  const uniqueID = parseInt(req.query.uniqueID);

  const data_fields = "Name, DateListed";

  console.log(cbd);

  res.setHeader('Content-Type', 'application/json');

  
  var sql = "INSERT INTO Product_Info (productName, companyName, email, haverstDate, \
             strand, Units, THC, THCa, CBD, pictureName, uniqueID) \
             VALUES ('" + productName + " '  ,  ' " + companyName + "', '" + email + "', \
             '" + haverstDate + "', '" + strand + "' , '" + numberOfUints + "' , '" + thc + " ' \
             , '" + thca + "', ' " + cbd + " ' , '" + pictureName + " ' , '" + uniqueID + " ')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success Mother Fucker");
  })

});


app.listen(3010, () =>
  console.log('Express server is running on localhost:3010')
);


