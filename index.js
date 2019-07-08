 $(document).ready(function(){
     
$("#iconEyeMenu").click(function(){
     $("#headerTile").toggle(1000);
    });
     
$("#allTheContent li").on({
        mouseenter: function(){
            $(this).css("background-color", "white");
            $(this).css("border-color", "white");
            
        }, 
        mouseleave: function(){
            $(this).css("background-color", "black");
            $(this).css("border-color", "black"); 
 }});
     
     $("#boxOfOtherContent li").on({
        mouseenter: function(){
            $(this).css("opacity", "0.5");
        }, 
         
        mouseleave: function(){
            $(this).css("opacity", "1");
 }});

 });
