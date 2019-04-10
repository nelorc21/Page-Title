$("button").click(function() {
var lbs = $(".lbs").val();
var gender = $(".gender").val();
    
if(lbs > 200 & gender=== "Male" ){
$(".message").text("Lebron James");
}

    else if(lbs < 200 & gender=== "Male" ){
    $(".message").text("Cj McCollum");
    }
    
if(lbs > 180& gender==="Female" ){
$(".message").text("A'ja Wilson ");
}
    else if(lbs < 180 && gender==="Female" ){
    $(".message").text("Diana Taurasi");

}
});
