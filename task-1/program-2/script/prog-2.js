class operation{
  constructor(num1,num2) {
    this.num1=num1;
    this.num2=num2;
  }
  oper(operator) {
    let no1=this.num1;
    let no2=this.num2;
    let value=0;
    switch(operator) {
      case '+':
              value=(no1)+(no2);
             break;
      case '-':
              value=no1-no2;
            break;
      case '*':
              value=no1*no2;
            break;
      case '/':
              value=no1/no2;
            break;
      default : window.alert("wrong operator")

    }
    window.alert("value of "+operator+" operation is "+value);
  }
};
function myfunction() {
 let num1=Number(document.getElementById("no1").value);
 let num2=Number(document.getElementById("no2").value);
 let operator=document.getElementById("op").value;
    const obj1= new operation(num1,num2);
      obj1.oper(operator);

};
