var n = 0

$(document).ready(function() {

$("h1").mouseenter(function(){
   $(this).css("color" , "gold");
});
    
    $("h1").mouseleave(function(){
   $(this).css("color" , "black");
});
    
$("h2").click(function(){
   $("#disappearingAct").toggle(); 
});
    
    $("h3").click(function(){
   $("#disappearingActTwo").toggle(); 
});  
    
      $("h3").click(function(){
   $("#disappearingActThree").toggle(); 
});
    
$("#theUnveiling").click(function(){
   $("#fadeOne").toggle("slow");
  });
    
$("#jerseyUnveil").click(function(){
   $(".charlotteQuidditch").toggle("slow");
  });    
    
$("#gameAlert").hover(function(){
    alert("Metal Gear Solid");
    $(this).off();
    
    
});    
}); 