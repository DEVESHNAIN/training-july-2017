var http=require('http');
var bl=require('bl');
var url=process.argv[2];
var req=http.get(url,function(res) {
  res.pipe(bl(function (err,data){
    if(err) console.error(err);
    else {
      data=data.toString();
      console.log(data.length);
      console.log(data);
    }
    }))
})