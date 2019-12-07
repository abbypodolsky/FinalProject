$(document).ready(function(){

  console.log("test");


$(".box").hide();


var hasgrill = prompt("Do you have a woodfire grill? Yes or no");

if(hasgrill === "yes"){
        $(".infoBox").html("Here is how to make s'mores from scratch!");
      }

if(hasgrill === "no"){
        $(".infoBox").html("Use a microwave and heat the s'more for 1 minute.");
      }

var age = prompt("Are you at a capable age to be dealing with fire?");
       var narcs = 2019 - age;

if(narcs>21){
        alert("You are unable to participate.");
       }

  $("h1").css("color", "black");
  $("h1").css("font-size","40px");
  $("h2").css("font-size", "25px");
  $("#titlestuff").css("background-color", "white");
  $("#titlestuff").html("Let's Learn How To Make S'mores, Folks!");
  $("#titlestuff").click(function(){
  $("body").css("background-color","#ffa12e");

});
  

  $(".hideImages").hide();

  $("#step1").click(function(){
     $("#pic1").toggle();
     $("#step1info").html("Start your grill, campfire, or wood fireplace, and break a graham cracker in half.").toggle();
   });

  $("#step2").click(function(){
    $("#pic2").toggle();
    $("#step2info").html("Unwrap your choclate and break it into smaller pieces, if necessary.").toggle();
  });

  $("#step3").click(function(){
    $("#pic3").toggle();
    $("#step3info").html("Set the chocolate on the graham cracker.").toggle();
  });

   $("#step4").click(function(){
    $("#pic4").toggle();
    $("#step4info").html("Skewer the marshmallow and toast it!").toggle();
  });

  $("#step5").click(function(){
    $("#pic5").toggle();
    $("#step5info").html("Remove the skewer and serve the s'more!").toggle();
   });

    
$("p").mouseenter(function(){
    $("p").css("background-color", "yellow");
  });
  $("p").mouseleave(function(){
    $("p").css("background-color", "lightgray"); 
  });

$("p").click(function(){
  $("p").animate({fontSize:"3em"});
});

  $("#btn1").click(function(){
    $("p").append("<b>S'MORE S'MORES!</b>.");
  });
  





});