
$(document).ready(function(){
  $('body').load("core.html", function( response, status, xhr ) {
    
    if ( status == "error" ) {
      var msg = "Could not load core html: ";
      $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    }
    
    $.get( "head.html", function( data ) {
      $( "#head" ).html( data );
    });
    
    $.get( "headMenu.html", function( data ) {
      $( "#headMenu" ).html( data );
      
      buildHeadMenus("sv");
    });
    
    buildHomePage("sv");
    
  });
  
});
    
