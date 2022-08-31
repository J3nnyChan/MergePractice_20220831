$(function(){
   $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
   var topicCount=topic.length;

   //一秒鐘有1000毫秒
   //每秒鐘有60秒,每小時60分鐘,每天24小時
   var millisecsPerDay=24*60*60*1000;
   var color="";

   for(var x=0;x<topicCount;x++){

    let currentDateString = (new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString();

    $("#courseTable").append(
        "<tr>"+
        `<td${color}>${x+1}</td>`+
        `<td${color}>${currentDateString.split("/")[1]}/${currentDateString.split("/")[2]}</td>`+
        `<td${color}>${topic[x]}</td>`+
        "</tr>");
   }
    
   


});