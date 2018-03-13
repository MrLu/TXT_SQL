var fs = require("fs");
var linereader = require("./node_modules/line-reader");
var word_dao = require("./word_dao")
var Word = require("./word")

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

