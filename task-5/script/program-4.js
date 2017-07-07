function  myfunction() {
  let arr = (document.getElementById('input').value).split(' ');
  let ind=[];
  let str="";
  arr.forEach(item => {
    let flag=0;
    let len=item.length;
    for(let j =0;j<len;j++) {
      if(item.charAt(j) != (item.charAt((len-1)-j))) {
        if (item.charAt(j+1)==(item.charAt((len-1)-j))) {
              ind.push(j);
              flag=1;
              break;
        }
        else  if(item.charAt(j)==(item.charAt((len-2)-j))) {
          ind.push((len-1)-j);
          flag=1;
          break;
        }
      }
    }
    if(flag==0) ind.push("-1");
  });
ind.forEach(item => {
  str=str + item +" <br> ";
})
document.getElementById('h').innerHTML="index of characters that don't makes the string palindrom" ;
document.getElementById('para').innerHTML=str;
}
