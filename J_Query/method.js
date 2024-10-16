// $("#p2").hide(3000);

$("button").click(function(){
    $("#p1").hide(2000);
});

$("button").click(function(){
    $("#p2").animate({opacity:0.2},3000);
    $("#p2").animate({opacity:0.9},2000);
    $("#p2").animate({width:"350px"},1000);
});
