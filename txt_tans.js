var fs = require("fs");
var linereader = require("./node_modules/line-reader");
var word_dao = require("./word_dao")
var Word = require("./word")

/* 插入字典（yue）
linereader.eachLine('./resource/zidian_zhyue-jt-kfcd-yp-2013122.txt', function (line, last, cb) {
    console.log(line);
    if (typeof line === 'string') {
        var values = line.split('	');
        console.log(values);
        var word =
            {
                word_jt: values[0],
                word_ft: values[1],
                yp: values[2]
            };
        word_dao.insertWord(word
        );
    }
    if (last) {
        cb(false);
    } else {
        cb();
    }
});
*/
/*
//插入词典典（yue）
linereader.eachLine('./resource/cidian_zhyue-jt-kfcd-yp-2013122.txt', function (line, last, cb) {
    console.log(line);
    if (typeof line === 'string') {
        var values = line.split('	');
        console.log(values);
        word_dao.insertCi(values);
    }
    if (last) {
        cb(false);
    } else {
        cb();
    }
});
*/

//插入例句（yue）
linereader.eachLine('./resource/liju_yue-jt-kfcd-2013122.txt', function (line, last, cb) {
    console.log(line);
    if (typeof line === 'string') {
        var values = line.split('	');
        if (values.length > 0) {
            console.log(values);
            word_dao.insertliju(values);
        }
    }
    if (last) {
        cb(false);
    } else {
        cb();
    }
});


