function tick() {
  var today = new Date();
  var month = today.getMonth()+1;
  var year,date,hours,minutes,seconds;
  var intHours,intMinutes,inSeconds;
  var week = new Array();
  week[0] = "星期天";
  week[1] = "星期一";
  week[2] = "星期二";
  week[3] = "星期三";
  week[4] = "星期四";
  week[5] = "星期五";
  week[6] = "星期六";
  intHours = today.getHours();
  intMinutes = today.getMinutes();
  inSeconds = today.getSeconds();
  year = today.getFullYear();

  date = today.getDate();
  var timeString;
  if(intHours == 0){
    hours = "00:"
  }else  if(intHours < 10){
    hours = "0"+intHours+":";
    }else{
    hours = intHours+":";
    }
   if(intMinutes < 10){
    minutes = "0"+intMinutes+":";
  }else{
    minutes = intMinutes+":";
  }
  if(inSeconds < 10){
    seconds = "0"+inSeconds+" ";
  }else{
    seconds = inSeconds+" ";
  }
  timeString = year+"/"+month+"/"+date+"/"+hours+minutes+seconds+week[today.getDay()];
  Clock.innerHTML = timeString;
  window.setTimeout("tick()",1000);
}
window.onload = tick;
