
console.log("done");

/* When the user hover over the nav, 
toggle between hiding and showing the dropdown content */


  $(function() {
    $("#work").on("hover", function() {
        $("#dropDownMenu").slideToggle();
    });
 