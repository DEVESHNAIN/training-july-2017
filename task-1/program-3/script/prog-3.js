class operation {
   isPrime(num) {
    var i;
    if ((num==0)||(num==1))
    {
      return false;
    }
    for(i=2;i<=(num/2);i++)
    {
      if ((num%i)==0)
      {
        return false;
      }
    }
    return true;
  }
};
function myfunction () {
  let num1=Number(document.getElementById("no1").value);
  let num2=Number(document.getElementById("no2").value);
  var sum=0;
  var j;
  const obj1= new operation();
  for (j=num1;j<=num2;j++) {
    if (obj1.isPrime(j))
      {
        sum=sum+j;
      }
  }
  window.alert("sum of prime number between "+num1+" and "+num2+ " is " + sum);
};
