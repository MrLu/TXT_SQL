var mysql = require("mysql");
var connectionConfige = {
   host : '127.0.0.1',
   user : 'root',
   paseword : '',
   database : 'Dic'
};

var mysql_connection = {};

var connection = mysql.createConnection(connectionConfige);
connection.connect(function(err){
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
     
      console.log('connected as id ' + connection.threadId);
});

mysql_connection.query = function(sql,values,callback) {
    return connection.query(sql,values,callback);
}


module.exports = mysql_connection;