function  myfunction() {
    let arr=(document.getElementById('input').value).split(' ');
    let str1=""
     //console.log(arr);
    arr.forEach(item => {
      let str=item;
      let len=str.length;
      count=0;
      for(let i=0;i<len-1;i++)
      {
        if((str.charAt(i))==(str.charAt(i+1))) {
          count++;
        }
      }
      str1 = str1 + count +"<br>";
    });
    document.getElementById("h").innerHTML="No of deletion to be done as follows resp ";
    document.getElementById("para").innerHTML=str1;
 }
