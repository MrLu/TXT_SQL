var connection = require("./connection");
var Word = require("./word");

function insertWord(word) {
    var sql = 'insert into word_yue(word_jt,word_ft,yp) values(?,?,?)'
    var param = [word.word_jt,word.word_ft,word.yp]
    connection.query(sql, param, function(err, results, fields){
        if (err) {
            return console.error(err.message);
          }
          // get inserted rows
        //   console.log('Row inserted:' + results);
    })
};

function insertCi(ci) {
    var sql = 'insert into ci_yue(ci,ci_yp,ci_tans) values(?,?,?)'
    var param = ci
    connection.query(sql, param, function(err, results, fields){
        if (err) {
            return console.error(err.message);
          }
          // get inserted rows
        //   console.log('Row inserted:' + results);
    })
}

function insertliju(liju) {
    var sql = 'insert into liju_yue(liju_yue,liju_zh) values(?,?)'
    var param = liju
    connection.query(sql, param, function(err, results, fields){
        if (err) {
            return console.error(err.message);
          }
          // get inserted rows
        //   console.log('Row inserted:' + results);
    })
}

module.exports.insertWord = insertWord;

module.exports.insertCi = insertCi;

module.exports.insertliju = insertliju;