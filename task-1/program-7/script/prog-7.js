class uniqueChar {
   uniqueCharacter (str) {
     let i;
     let uChar=" ";
     for (i=0;i<str.length;i++)
     {
       if ((str.indexOf(str.charAt(i)) === (str.lastIndexOf(str.charAt(i))))) {
         uChar=uChar+" '" + str.charAt(i)+"' ";
       }
     document.getElementById("para").innerHTML ="Unique character in String "+str+" is "+uChar;
   }
}
};
function myfunction() {
  let str= document.getElementById("str").value;
  const obj =new uniqueChar();
  obj.uniqueCharacter(str);
}
