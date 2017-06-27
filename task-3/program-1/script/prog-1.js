/**
*
*
**/
let array=[];
let ids=[1];
let flag=0;
let flag1=0;
let count=0;
let check=[];
/**
* What
* @params a, integer to count numbers of elements
* returns an array of updated numbers
*/
class abc {
  constructor() {
  }
  addRow() {
    var table = document.getElementById("tableId");
    var max=Number(document.getElementById("tableId").getElementsByTagName('tr').length);
    var row = tableId.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    ids.push(max);
    cell1.innerHTML ='<input type="checkbox" id="check'+max+'" name="checkbox" value="checkbox"></input>';
    cell2.innerHTML = '<input type="text" id="text'+max+'" name="textvalue" value=""></input>';
    cell3.innerHTML = '<input type="button" name="cancel" value="cancel" onclick="obj.deleteRow(this)"></input>';
  }
  deleteRow(row) {
    let i=row.parentNode.parentNode.rowIndex;
    count=ids[i-1];
    ids.splice((i-1),1);
    array.splice(array.indexOf(document.getElementById("text"+(count)).value),1);
    document.getElementById('tableId').deleteRow(i);
    return ;
  }
  length() {
    var len = Number(document.getElementById("tableId").getElementsByTagName('tr').length);
    alert(len-1);
  }
  toArray() {
    array=[];
    var str;
    flag=0;
    count=0;
    ids.forEach(item =>{
      if ((document.getElementById("check"+item)).checked)
      {
        str=document.getElementById("text"+item).value;
        array.push(str);
      }
    }
  )
   alert("pushed/pop successful")
 }
 viewElement() {
   var str1="";
   array.forEach(item => (str1=str1 + " | " + item));
   alert(str1);
 }
 deleteMultiple() {
   console.log("inside deleteSelected");
   ids.forEach(item =>{
     if ((document.getElementById("check"+item)).checked) {
       check.push(item);
      }
    });
    check.reverse();
    check.forEach(item2 =>{
    ids.splice((ids.indexOf(item2)),1);
    array.splice(array.indexOf(document.getElementById("text"+(item2)).value),1);
    document.getElementById('tableId').deleteRow(item2);
    });
  }
}
