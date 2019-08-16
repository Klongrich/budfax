const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var mysql = require('mysql');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

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

  res.setHeader('Content-Type', 'application/json');
  
  res.send(JSON.stringify({ greeting: `Succes Mother fucker: (${name})` ,
                            fuckme: `fuck (${fucking})`,
                            Othertest: `that was some boof` }));
  
});

app.listen(3010, () =>
  console.log('Express server is running on localhost:3010')
);


