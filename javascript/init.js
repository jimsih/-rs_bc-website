
$(document).ready(function(){
    
  $.get( "head.html", function( data ) {
    $( "#head" ).html( data );
  });
  
  $.get( "headMenu.html", function( data ) {
    $( "#headMenu" ).html( data );
    
    buildHeadMenus("sv");
  });
  
  $( "#foot" ).load("footer.html");
  
  buildHomePage("sv");

});
    
