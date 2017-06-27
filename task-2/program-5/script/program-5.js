let array = [];
function add(){
 array.push({
       id: document.getElementById('id').value,
       name: document.getElementById('name').value,
       age: document.getElementById('age').value,
       gender: document.getElementById('gender').value
   });
   alert("elements added successfully");
}
function display(){
 let id = Number(document.getElementById('id1').value);
 let name=array[id-1].name;
 let  age=array[id-1].age;
 let gender=array[id-1].gender;
var str="id is " + id + " name is " + name +" age is " + age +" gender is " + gender;
alert(str);
}
function remove(){
 let id = Number(document.getElementById('id2').value);
 array.splice(id-1,1);
}
