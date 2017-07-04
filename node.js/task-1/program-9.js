var http=require('http');
var bl=require('bl');
var url=[process.argv[2],process.argv[3],process.argv[4]];
var str=[];
count=0;
url.forEach(item => {
  //  count++;
  http.get(item,function(res) {
    res.pipe(bl(function (err,data){
      if(err) console.error(err);
        else {
          str[count]=data.toString();
          count++;
          if(count==3) {
            printstr();
         }
      }
  }))
})});
function printstr () {
  for (var i = 0; i < 3; i++) {
    console.log(str[i]);
  }
}
