var arr=[];
var fs=require('fs');
var path = require('path');
module.exports=function(arg1,arg2,callback) {
  fs.readdir(arg1,function(err,files)  {
    if(err) return callback(err)
    else {
      files.forEach(file => {
      if(path.extname(file) === '.'+arg2) {
        arr.push(file);
      }
    });
    return callback(null,arr);
  }
  })
}
