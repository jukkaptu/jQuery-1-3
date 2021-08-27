$("p:eq(1)").attr("id", "jotain");
$("#fp").remove();
$("#fdiv").css(
    {
        backgroundColor: "grey",
        color: "white"
    }
);

function sayHello(){
    $("#jotain").after("<p>hello user</p>");
}

$("#nappi").click(sayHello);

$("#4p").hide();

$("#sdiv").hover(
        function (){
            $("#4p").text("About to select a link ...").show();
        },
        function () {
            $("#4p").hide();
        }

)