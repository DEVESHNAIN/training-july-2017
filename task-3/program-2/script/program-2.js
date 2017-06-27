class validation {
  constructor() {
  }
  alphaOnly (evt) {
    let charCode=evt.charCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >=97 && charCode <= 122)){
      document.getElementById("para").innerHTML="";
      return true;
    }
    else {
      document.getElementById("para").innerHTML="alphabets only";
      return false;
    }
  }
  name1Length(evt) {
    let name = document.getElementById("text1").value;
    let aa=name.length;
    if (!((aa >= 6) && (aa <= 15))) {
      document.getElementById("para").innerHTML="Name must be 6 to 15 characters long";
      return false;
    }
    else {
      document.getElementById("para").innerHTML="";
      return true;
    }
  }
  name2Length(evt) {
    let name = document.getElementById("text2").value;
    let aa=name.length;
    if (!((aa >= 6) && (aa <= 15))) {
      document.getElementById("para").innerHTML="Name must be 6 to 15 characters long!";
      return false;
    }
    else {
      document.getElementById("para").innerHTML="";
      return true;
    }
  }
  phoneLength(evt) {
    let name = document.getElementById("text3").value;
    let aa=name.length;
    if (!(aa==10)) {
      document.getElementById("para").innerHTML="Phone Number can not be less than ten characters long !";
      return false;
    }
    else {
      document.getElementById("para").innerHTML="";
      return true;
    }
  }
  numOnly(evt) {
    let charCode = evt.charCode;
    if (!(charCode >= 48 && charCode <= 57)) {
      document.getElementById("para").innerHTML="Enter Numners only";
      return false;
    }
    else {
      document.getElementById("para").innerHTML="";
      return true;
    }
  }
  dobOnly(evt) {
    let charCode = evt.charCode;
    if (!((charCode==45)||(charCode >= 48 && charCode <= 57))){
      document.getElementById("para").innerHTML="Enter DOB in DD-MM-YYYY";
      return false;
    }
    else {
      document.getElementById("para").innerHTML="";
      return true;
    }
  }
  calculateAge(){
    let age1=document.getElementById("text4").value;
    let year=Number(age1.substr(6,4));
    let month=Number(age1.substr(3,2))-1;
    let day=Number(age1.substr(0,2));
    let today=new Date();
    let age = today.getFullYear()-year;
    if (today.getMonth()<month || (today.getMonth()==month && today.getDate()<day)) {
      age--;
    }
    document.getElementById("demo").innerHTML = "Age = " + age;
  }
  emailValidate(evt) {
    let charCode = document.getElementById("text5").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(charCode)){
      return true;
    }
    else {
      alert("enter valid email id");
      return false;
    }
  }
  pwdValidate(evt) {
    let charCode = document.getElementById("pwd").value;
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/.test(charCode)) {
      document.getElementById("para").innerHTML="";
      return true;
    }
    else {
      document.getElementById("para").innerHTML="enter at least one letter one symbol and one special character with minimum 8 characters and maximum 15 characters";
      return false;
    }
  }
}
