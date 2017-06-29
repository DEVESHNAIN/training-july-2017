var formData = [
  {"type":"text","name":"fName","label":"First Name","validate":{"minLength":6,"maxLength":15,"allow":"alphabet"}},
  {"type":"text","name":"lName","label":"Last Name","validate":{"minLength":6,"maxLength":15,"allow":"alphabet"}},
  {"type":"text","name":"phone","label":"Phone Number","validate":{"length":10,"allow":"number"}},
  {"type":"textarea","name":"about","label":"About","validate":{"minLength":6,"maxLength":150,"allow":"any"}},
  {"type":"text","name":"email","label":"Email","validate":{"allow":"email"}},
  {"type":"password","name":"password","label":"Password","validate":{"minLength":6,"maxLength":10,"allow":"any"}}
]
class Dform {
  constructor(formData) {
    this.formData=formData;
  }
 transverse() {
 let formData=this.formData;
 let ids;
 let label;
 let input;
 let valid;
 let str="";
 let msg="";
 formData.forEach(item => {
   ids=formData.indexOf(item);
   label = `<label id="label${ids}">${item.label}</label>`;
   input=`<input type="${item.type}" name="${item.name}" id="input${ids}" `;
   valid=item.validate;
   if(valid.hasOwnProperty("minLength")) {
     input=`${input} minlength="${valid.minLength}" `;
   }
    if(valid.hasOwnProperty("maxLength")) {
      input=`${input} maxlength="${valid.maxLength}" `;
    }
  if(valid.allow == "alphabet") {
    input=`${input} onkeypress="return obj.alphaOnly(event);"`;
  }
  if(valid.allow == "number") {
      input=`${input} onkeypress="return obj.numOnly(event);"`;
  }
  if(valid.hasOwnProperty("length")) {
  input=`${input}  onblur="return obj.length(${ids},${valid.length});"`;
}
  if(valid.allow == "email") {
   input=`${input} onblur="return obj.emailValidate(${ids});"`;
  }
  str=`${str} ${label}<br> ${input} > <br><br>`;
 });
let sub=`<button type="button" name="button1" onclick="obj.show(${ids});">Submit</button>`;
 msg=`<h3>message :</h3><h4 id="para"></h4><br>`;
 str=`${str} ${msg} ${sub}`;
 document.getElementById("form").innerHTML=str;

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
 numOnly(evt) {
   let charCode = evt.charCode;
   if (!(charCode >= 48 && charCode <= 57)) {
     document.getElementById("para").innerHTML="Enter Numbers only";
     return false;
   }
   else {
     document.getElementById("para").innerHTML="";
     return true;
   }
 }
 emailValidate(ids) {

   let i=`input${ids}`;
   let mailId =document.getElementById(i).value;
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailId)){
     document.getElementById("para").innerHTML="";
     return true;
   }
   else {
     document.getElementById("para").innerHTML="enter valid email id";
     return false;
   }
 }
 length(ids,l) {
    let i=`input${ids}`;
   let name = document.getElementById(i).value;
   let aa=name.length;
   if (!(aa==l)) {
     document.getElementById("para").innerHTML=`length should be ${l}!`;
     return false;
   }
   else {
     document.getElementById("para").innerHTML="";
     return true;
   }
 }
 show(ids) {
  let lbl;
  let inp;
  let a;
  let strLabel="";
  let strInput=""
  let strShow=""
  for(a=0;a<ids;a++) {
    lbl=`label${a}`;
    inp=`input${a}`;
    strLabel=document.getElementById(lbl).textContent;
    strInput=document.getElementById(inp).value;
    strShow=`${strShow} ${strLabel} : ${strInput} <br><br>`
  }
  document.getElementById("showData").innerHTML="Details Entered by You are as follows <br><br>" + strShow;
 }

 }
