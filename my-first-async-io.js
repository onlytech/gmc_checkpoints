const fs = require('fs')  
let path=process.argv[2];
fs.readFile(path, function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log(data.toString().split('\n').length -1);
 });
 