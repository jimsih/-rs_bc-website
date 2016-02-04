
function buildHeadMenus(lang) {
  $.getJSON("../json/headMenus.json", function( data ) {
    var items = [];
        
    $.each( data[lang], function( key, val ) {
        items.push("<div id="+key + " class=link>" + val + "</div>" );
    });

    $( "<div id=headBar class=bar>" + items.join( "" ) +
    "</div>" ).insertAfter( "#head" );

    $( "#home" ).attr( "class", "link active" )

    bindHeadMenusEvent(lang);
  });
}

function bindHeadMenusEvent(lang) {
  $( "#home" ).click(function() {
      resetPage();
      $( "#home" ).attr( "class", "link active" )
      buildHomePage(lang);
  });
  
  $( "#news" ).click(function() {
      resetPage();
      $( "#news" ).attr( "class", "link active" )
      buildNewsPage(lang);
  });
  
  $( "#events" ).click(function() {
      resetPage();
      $( "#events" ).attr( "class", "link active" )
      buildEventsPage(lang);
  });
  
  $( "#members" ).click(function() {
      resetPage();
      $( "#members" ).attr( "class", "link active" )
      buildMembersPage(lang);
  });
  
  $( "#association" ).click(function() {
      resetPage();
      $( "#association" ).attr( "class", "link active" )
      buildAssociationPage(lang);
  });
  
  $( "#apply" ).click(function() {
      resetPage();
      $( "#apply" ).attr( "class", "link active" )
      buildApplyPage(lang);
  });
}

function buildMembersPage(lang) {
  $( "#content" ).attr( "class", "single" )
  
  $.getJSON("../json/members.json", function( data ) {
    var items = [];
    
    $( "<h2>"+data.head[lang]["members"]+
    "</h2>" ).appendTo( "#content" );
    
    $.each( data["members"], function( ) {
      items.push("<div style='border:3px groove; padding:0px 10px 30px 10px; margin:10px auto; width:70%'>");
      
      items.push("<figure><img style='width:10%; float:right' src=../../pictures/arsbc.svg></img></figure>");
      
      items.push("<div style='text-align:justify; clear:left; width:100%'><div style='float:left; width:20%'>"+data.head[lang]["name"]+"</div><div style='float:left; width:40%'>"+this.name+"</div></div>");
      
      items.push("<div style='text-align:justify; clear:left; width:100%'><div style='float:left; width:20%'>"+data.head[lang]["office"]+"</div><div style='float:left; width:40%'>"+this.office+"</div></div>");
      
      items.push("<div style='text-align:justify; clear:left; width:100%'><div style='float:left; width:20%'>"+data.head[lang]["email"]+"</div><div style='float:left; width:40%'>"+this.email+"</div></div></div>");
    
    });
  
  $( items.join( "" ) ).appendTo( "#content" );
  
  });
}

function buildHomePage(lang) {
    $( "#content" ).attr( "class", "single" )
}

function buildNewsPage(lang) {
    $( "#content" ).attr( "class", "double" )
    $( "#side" ).attr( "class", "sidelinkborder" )
}

function buildEventsPage(lang) {
    $( "#content" ).attr( "class", "double" )
    $( "#side" ).attr( "class", "sidelinkborder" )
}

function buildAssociationPage(lang) {
    $( "#content" ).attr( "class", "single" )
}

function buildApplyPage(lang) {
    $( "#content" ).attr( "class", "single" )
}




function resetPage() {
    $("#headBar").children().each(function( ) {
        $( this ).attr( "class", "link" );
    });
    
    $( "#content" ).html("");
    $( "#side" ).html("");
}







