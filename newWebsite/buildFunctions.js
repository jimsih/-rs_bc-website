
function buildHeadMenus(lang) {
  $.getJSON("json/headMenus.json", function( data ) {
    var items = [];
        
    $.each( data[lang], function( key, val ) {
        items.push("<li id="+key+"><a href=#>" + val + "</a></li>" );
    });

    $( "#headMenuItems" ).append(items.join( "" ));

    $( "#home" ).attr( "class", "active" )

    bindHeadMenusEvent(lang);
  });
}

function bindHeadMenusEvent(lang) {
  $( "#home" ).click(function() {
      resetPage();
      $( "#home" ).attr( "class", "active" )
      buildHomePage(lang);
  });
  
  $( "#news" ).click(function() {
      resetPage();
      $( "#news" ).attr( "class", "active" )
      buildNewsPage(lang);
  });
  
  $( "#events" ).click(function() {
      resetPage();
      $( "#events" ).attr( "class", "active" )
      buildEventsPage(lang);
  });
  
  $( "#members" ).click(function() {
      resetPage();
      $( "#members" ).attr( "class", "active" )
      buildMembersPage(lang);
  });
  
  $( "#association" ).click(function() {
      resetPage();
      $( "#association" ).attr( "class", "active" )
      buildAssociationPage(lang);
  });
  
  $( "#apply" ).click(function() {
      resetPage();
      $( "#apply" ).attr( "class", "active" )
      buildApplyPage(lang);
  });
}

function buildHomePage(lang) {
    $( "#content" ).attr( "class", "single" )
}

function buildNewsPage(lang) {
    $( "#content" ).attr( "class", "double" )
    $( "#side" ).attr( "class", "sidelinkborder" )
    
    var items = [];
    $.get("xml/news.xml", function( data ) {
      /* Build sidelink */
      $(data).find('news').each(function() {
        items.push('<div id=sidenews, class=sidelink>');
        items.push('<div class=bigtext>'+ $(this).find('title').text() +'</div>')
        items.push('</div>');
      });
      $( "#side" ).append(items.join(""));
      
      /* Build content */
      
    });
}

function buildEventsPage(lang) {
    $( "#content" ).attr( "class", "double" )
    $( "#side" ).attr( "class", "sidelinkborder" )
}

function buildMembersPage(lang) {
  $( "#content" ).attr( "class", "single" )
  
  $.getJSON("json/members.json", function( data ) {
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

function buildAssociationPage(lang) {
    $( "#content" ).attr( "class", "single" )
}

function buildApplyPage(lang) {
    $( "#content" ).attr( "class", "single" )
}


function resetPage() {
    $("#headMenuItems").children().each(function( ) {
        $( this ).attr( "class", "" );
    });
    
    $( "#content" ).html("");
    $( "#side" ).html("");
}







