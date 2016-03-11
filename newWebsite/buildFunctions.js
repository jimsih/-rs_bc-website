
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

  /* Makes the menu collapse when menu item is pressed */
  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
          $(this).collapse('hide');
      }
  });
  
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
      buildMembersPage(lang);you
      
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
    $( "#page" ).load("home.html");
}

function buildNewsPage(lang) {
  
    var items = [];
    $.get("xml/news.xml", function( data ) {
      $(data).find('news').each(function() {
        items.push('<div class=bigtext>'+ $(this).find('title').text() +'</div>')
      });
      $( "#page" ).append(items.join(""));
      
    });
}

function buildEventsPage(lang) {

}

function buildMembersPage(lang) {
  
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
  
  $( items.join( "" ) ).appendTo( "#page" );
  
  });
}

function buildAssociationPage(lang) {
  $( "#page" ).load("association.html");
}

function buildApplyPage(lang) {

}


function resetPage() {
    $("#headMenuItems").children().each(function( ) {
        $( this ).attr( "class", "" );
    });
    
    $( "#page" ).html("");
}







