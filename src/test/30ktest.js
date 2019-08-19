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

  var item = {
    productName: 'dank vapes',
    companyName: 'budfaxs',
    email: 'loud@budfaxs.com',
    havestDate: '2017-07-07',
    strand: '99',
    numberOfUnit: '99',
    thc: '99',
    thca: '99',
    cbd: '99',
};

var i;
for (var i = 0; i < 3000 && ++i;) {
  con.query("INSERT INTO Product_Info (productName, companyName, email, haverstDate, \
    strand, Units, THC, THCa, CBD, pictureName, uniqueID) \
    VALUES ('" + item.productName + i + " '  ,  ' " + item.companyName + "', '" + item.email + "', \
    '" + item.haverstDate + "', '" + item.strand + "' , '" + item.numberOfUints + "' , '" + item.thc + " ' \
    , '" + item.thca + "', ' " + item.cbd + " ' , '" + item.pictureName + " ' , '" + i + " ')", function (err, result) {
    if (err) throw err;      
  })
}

