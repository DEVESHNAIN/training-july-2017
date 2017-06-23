class guess{
  guessNo(num) {
    var no=Number.parseInt(Math.random()*10);
     if(no==num){
      document.getElementById("para").innerHTML ="Good work";
     }
     else {
       document.getElementById("para").innerHTML ="the given number does not matched";
     }
  }
}
function myfunction(){
  let num= Number(document.getElementById("no").value);
  const obj=new guess();
  obj.guessNo(num);
}
