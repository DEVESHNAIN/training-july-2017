
function  myfunction() {
    let str=document.getElementById('input').value;
    flag=0;
    let arr=[];
    for(let j=0;j<26;j++) {
      arr[j]=0;
    }
    for(let i=0;i<str.length;i++)
     {
       let asci=str.charCodeAt(i);
       if ((asci>=65)&&(asci<=90)) {
         arr[(asci%65)]=1;
       }
       else if((asci>=97)&&(asci<=122))
       {
         arr[(asci%97)]=1;
       }
    }
    arr.forEach(item => {if (item!=1) {
      flag=1;
      return false;
    }});
    if(flag==1) {
      alert("Not a Panagram");
    }
    else {
      alert ("it's a pangram");
    }
  }
