var connection = require("./connection");
var Word = require("./word");

function insertWord(word) {
    // var sql = 'insert into word(word_jt,word_ft,yp) values(?,?,?)'
    // var param = [word.word_jt,word.word_ft,word.yp]
    // connection.query(sql, param, function(err, results, fields){
    //     if (err) {
    //         return console.error(err.message);
    //       }
    //       // get inserted rows
    //       console.log('Row inserted:' + results);
    // })
    var sql = 'select * from word';
    connection.query(sql, function(err, results, fields){
        if (err) {
            return console.error(err.message);
          }
          // get inserted rows
          console.log('Row inserted:' + results);
    })
};

module.exports.insertWord = insertWord;