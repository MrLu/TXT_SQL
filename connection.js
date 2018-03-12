var mysql = require("mysql");
var connectionConfige = {
   host : 'localhost:3306',
   user : 'root',
   paseword : '',
   database : ''
}
var connection = mysql.createConnection