class checkNo {
  constructor (num) {
    this.num=num;
  }
  evenAndOdd () {
  let no=this.num;
  if ((no % 2) == 0) {
    document.getElementById("para").innerHTML ="the given number is even ";
  }
  else {
    document.getElementById("para").innerHTML ="the given number is odd";
  }
 }
};
function myfunction () {
  let num= Number(document.getElementById("no").value);
    if(Number.isInteger(num)==true){
      const obj= new checkNo(num);
      obj.evenAndOdd();
    }
    else {
      document.getElementById("para").innerHTML ="the given number is not a integer ";
    }
};
