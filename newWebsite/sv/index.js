
$(document).ready(function(){

  $("#head").load("../head.html", function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
  }
  });

  buildHeadMenus("sv");
  
});
    
