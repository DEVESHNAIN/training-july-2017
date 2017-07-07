function  myfunction() {
  let arr = (document.getElementById('input').value).split(' ');
  let arrayLen=arr.length;
  let str=arr[0];
  let len = str.length;
  let char;
  var flag;
  let gem="";
  var j;
  let arr1=[];
  for(let i=0;i<len;i++) {
    char=str.charAt(i);
    flag=1;
    for(j=1;j<arrayLen;j++) {
      if(!(arr[j].includes(char))) {
        flag=0;
        break;
      }
    }
    if((flag == 1) && ( j == (arrayLen))) {
      if(!(arr1.includes(char))) {
        arr1.push(char);
      }
    }
  }
  let count = arr1.length;
  arr1.forEach(item => {
    gem=gem +  item  + " , ";
  });
  document.getElementById('h').innerHTML=`No of Gem characters are ${count}`;
  document.getElementById('para').innerHTML=`gem characters are ${gem}`;
}
