const fs = require('fs')  
let path=process.argv[2];
var data= fs.readFileSync(path).toString();
console.log(data.split('\n').length -1);
