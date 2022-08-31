var images=[
    "randomselector/img/p1.jpg",
    "randomselector/img/s1.jpg",
    "randomselector/img/h1.jpg"
];
    

$(function(){
//確認能夠知道使用者按了按鈕
//$("input")->document.getElementByTagname("input")[10]
//on->addEventListener
$("input").on("click",function(){
    //alert("Hi");只顯示Hi
    var numberofListItem=$("#choices li").length;
    //0~1*3->0~3(2.9999x)->floor->0,1,2
    var randomChildNumber=Math.floor(Math.random()*numberofListItem);
    $("h1").text($("#choices li").eq(randomChildNumber).text());
    $("img").attr("src",images[randomChildNumber]);

    //$("h1").text("Hello");按按鈕從Hi變Hello
    //$("h1").text($("li:first").text());抓出披薩
    
    
});
});