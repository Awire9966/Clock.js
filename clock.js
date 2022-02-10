function startTime() {
    console.clear()
    console.r
    var minute = 0
    var moth = 0
    var d8 = 0
    let month = 0
    var today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let monthu = today.getMonth();
    
    let year  = today.getFullYear();
    let day = today.getDate();
   month = monthu + 1;
    if(m < 10)
{
    minute = "0" + m;
}
else{
  minute = m;

}
if(monthu < 10)
{
    moth = "0" + month;
}
else{
  moth = month;

}
if(day < 10)
{
    d8 = "0" + day;
}
else{
  d8 = day;

}
 
 
    alert(moth + "/" + d8 + "/" + year);
    alert(h + ":" + minute);
    
   setTimeout(startTime, 1000);
  }
  startTime.call();
  
