class timeDetail {
  dayOfToday () {
    var d=new Date();
    var day=Number(d.getDay());
    var a;
    switch(day){
      case 0:a="sunday";
      break;
      case 1:a="monday";
      break;
      case 2:a="tuesday";
      break;
      case 3:a="wednesday";
      break;
      case 4:a="thursday";
      break;
     case 5:a="friday";
     break;
     case 6:a="saturday"
     break;
  }
  document.getElementById("para1").innerHTML ="a) Today is " + a;
}
  currentTime () {
    var d=new Date();
    let hh=d.getHours();
    let mm=d.getMinutes();
    let ampm=hh>=12?'pm':'am';
    hh = hh % 12;
    hh = hh ? hh : 12;
    if(mm<10){
     mm="0"+mm;
    }
  document.getElementById("para2").innerHTML ="b) current time is " +hh+ " : " + mm + " "+ampm;
}
 currentDate () {
    var d=new Date();
    let date=d.getDate();
    let month=d.getMonth()+1;
    let year=d.getFullYear();
    if (date<10) {
       date="0"+date;
    }
    if (month<10) {
       month="0"+month;
    }
   document.getElementById("para3").innerHTML ="b) today's date is " +month+'-'+date+'-'+year+"\n"+ month+'/'+date+'/'+year+"\n"+
     date+'-'+month+'-'+year+"\n"+date+'/'+month+'/'+year+"\n";
 }
};
function myfunction () {
  const obj=new timeDetail();
  obj.dayOfToday();
  obj.currentTime();
  obj.currentDate();
}
