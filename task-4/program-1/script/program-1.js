function myfunction() {
  let name = document.getElementById("text").value;
  let str=`Hello  Mr ${name}`;
  document.getElementById("para").innerHTML=str;
}
