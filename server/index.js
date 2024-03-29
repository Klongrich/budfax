const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require('cors')

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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.get('/api/growerData', (req, res) => {

  const productName = req.query.productName;
  const companyName = req.query.companyName;
  const email = req.query.email;
  const strand = req.query.strand;
  const haverstDate = req.query.haverstDate;
  const numberOfUints = parseInt(req.query.numberOfUints);
  const thc = parseFloat(req.query.thc);
  const thca = parseFloat(req.query.thca);
  const cbd = parseFloat(req.query.cbd);
  const pictureName = req.query.pictureName;
  const uniqueID = req.query.uniqueID;

  if (pictureName.length === 0){
    pictureName = 'noPicture';
  }

  const data_fields = "Name, DateListed";

  console.log(req.query.numberOfUints);

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



app.get('/api/clientData', (req, res) => { 

  console.log(req.query.ID);

  const ID = req.query.ID;

  res.setHeader('Content-Type', 'application/json');

  var getInfo = "SELECT * FROM Product_Info WHERE uniqueID = '" + ID + "'";

  con.query(getInfo, function(err, result, fields) {
    if (err) throw err;
   
    console.log(result);

    date = String(result[0].haverstDate).substring(4,15)
    
    res.send({   productName: `${result[0].productName}` ,
                                companyName: `${result[0].companyName}` ,
                                email: `${result[0].email}` ,
                                haverstDate: `${date}` ,
                                strand: `${result[0].strand}` ,
                                numberOfUnits: `${result[0].Units}` ,
                                thc: `${result[0].THC}` ,
                                thca: `${result[0].THCa}` ,
                                cbd: `${result[0].CBD}` ,
                                pictureName: `${result[0].pictureName}`
                                                                            })
    
    console.log(result[0].productName);


    console.log(String(result[0].haverstDate).substring(4,15));
  })
})


app.get('/api/signUp', (req, res) => {

  const username = req.query.username
  const password = req.query.password

  /*
  var sql = "INSERT INTO"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success Mother Fucker");
  })
  */


})

app.listen(3010, () =>
  console.log('Express server is running on localhost:3010')
);