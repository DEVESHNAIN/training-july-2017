var md=require('./program-6-module.js')
var arg1=process.argv[2];
var arg2=process.argv[3];
function callback(err,data) {
    if(err) console.console.error(err);
    else {
      data.forEach(item =>console.log(item))
    }
  }
md(arg1,arg2,callback);
