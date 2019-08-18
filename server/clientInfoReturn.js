const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var mysql = require('mysql');

const app = express();

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/growerData', (req, res) => {

  console.log(req.query.ID);

  const ID = req.query.ID;

  res.setHeader('Content-Type', 'application/json');

  var getInfo = "SELECT * FROM Product_Info WHERE uniqueID = '" + ID + "'";

  con.query(getInfo, function(err, result, fields) {
    if (err) throw err;

    /*
    res.send({ productName: `${result[0].productName}` });
    */
    
    res.send({   productName: `${result[0].productName}` ,
                                companyName: `${result[0].companyName}` ,
                                email: `${result[0].email}` ,
                                haverstDate: `${result[0].haverstDate}` ,
                                strand: `${result[0].strand}` ,
                                numberOfUnits: `${result[0].Units}` ,
                                thc: `${result[0].THC}` ,
                                thca: `${result[0].THCa}` ,
                                cbd: `${result[0].CBD}` ,
                                pictureName: `${result[0].pictureName}`
                                                                            })
    
    console.log(result[0].productName);
  })

  

});
  app.listen(3010, () =>
  console.log('Express server is running on localhost:3010')
);