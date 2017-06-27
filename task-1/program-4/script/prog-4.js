class isSun {
  constructor(num1,num2) {
    this.num1=num1;
    this.num2=num2;
  }
  sun() {
    let year1=this.num1;
    let year2=this.num2;
    let i;
    var str=" ";
    for(i=year1;i<=year2;i++) {
    var  d = new Date(i,0,1);
    if (d.getDay()==0) {
      str= str+i+" ";
    }
  }
  document.getElementById("para").innerHTML ="I st january is sunday in year "+str;
  }
};
function myfunction() {
 let num1=Number(document.getElementById("no1").value);
 let num2=Number(document.getElementById("no2").value);
 const obj=new isSun(num1,num2);
 obj.sun();
 }
