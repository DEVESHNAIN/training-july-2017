let fs=require('fs');
var str,newline;
function counter(callback) {
   fs.readFile(process.argv[2],(err, data) => {
    if (err) throw err;
     str=data.toString();
     newline= str.split('\n').length;
     callback();
   }
)
}
function number() {
console.log(newline-1);
 }
counter(number);
