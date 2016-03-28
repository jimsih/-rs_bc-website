
$(document).ready(function(){
    
  $.get( "/newWebsite/head.html", function( data ) {
    $( "#head" ).html( data );
  });
  
  $.get( "/newWebsite/headMenu.html", function( data ) {
    $( "#headMenu" ).html( data );
    
    buildHeadMenus("sv");
  });
  
  $( "#foot" ).load("/newWebsite/footer.html");
  
  buildHomePage("sv");

});
    
