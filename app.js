let value=0;
$(".points").on("click",(event)=> {
value=event.target.value;
$(".points").removeClass("active");
let degis=$("#"+value).addClass("active");
})

$(".submit").on("click",thanksFunc)

function thanksFunc () {
    $(".pointContainer1").css("display","none");
    $(".thanksContainer").css("display","block");
    $(".pointShower").text("You selected "+value+ " out of 5")
}
