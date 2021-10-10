
console.log("done");

/* When the user hovers over"Work", 
toggle between hiding and showing the dropdown content */

$(".nav ul li").on("hover", function(){
    $(this).find("#toggle").slideToggle(400); 
});
  
  // Close the dropdown menu if the user clicks outside of it
 
  $(".nav ul li").on("mouseleave", function(){
    $(this).find("#toggle").slideUp(400); 
});
  