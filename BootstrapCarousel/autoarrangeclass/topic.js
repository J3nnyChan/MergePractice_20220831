var topic=[
    "上課",
    "吃waku waku burger",
    "去OXY剪頭髮",
    "上課",
    "休息",
    "上課"
];

var startDate=new Date();
//debugger;若debugger時間會取當下(在主控台區))
//設定好活動第一次的日期
function setMonthAndDay(startMonth,startDay){
    //JS的月份是0~11,所以在此須減一
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);

}
//設定第一次活動日期為2月21日
setMonthAndDay(7,30);