let fs=require('fs');
let buff=fs.readFileSync(process.argv[2]);
let str=buff.toString();
let line=str.split("\n").length;
console.log(line-1);
