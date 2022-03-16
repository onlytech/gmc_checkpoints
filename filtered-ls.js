const fs = require('fs');
let dossier=process.argv[2];
let extension=process.argv[3];
const path = require('path');  

//function readDir(path1, fextension) {
    exports.readF = (path1,fextension) => {
        fs.readdir(path1,function(err, files) {
            if (err) {
               return console.error(err);
            }
            files.forEach(  (file) => {
               if(path.extname(file)=="."+fextension) console.log( file );
            });
         });

    }
  
//      }
// readDir("./files","txt")