'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '8889',
  user     : 'root',
  password : '8}A7{%I6dj.PI]63!y>)',
  database : 'db_cineplex_ex'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;