var http=require('http');
var url=process.argv[2];
var req=http.get(url,function(res){
  res.setEncoding('utf8');
  res.on('error',console.error);
  res.on('data',console.log);

})
