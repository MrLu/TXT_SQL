var fs = require("fs");
var linereader = require("line-reader");

linereader.eachLine('./resource/zidian_zhyue-jt-kfcd-yp-2013122.txt', function(line, last, cb) {
   console.log(line);
   if (last) {
       cb(false);
   } else {
       cb();
   }
});