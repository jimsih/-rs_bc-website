
function buildHeadMenus(lang) {
/*
  $.getJSON("json/headMenus.json", function( data ) {
    var items = [];
        
    $.each( data[lang], function( key, val ) {
        items.push("<li id="+key+"><a>" + val + "</a></li>" );
    });

    $( "#headMenuItems" ).append(items.join( "" ));

    $( "#home" ).attr( "class", "active" );

    bindHeadMenusEvent(lang);
  });
*/

  $( "#home" ).attr( "class", "active" );
  bindHeadMenusEvent(lang);
}

function bindHeadMenusEvent(lang) {
  
  $( "#headMenuItems" ).click(function(event) {
    resetPage();
    $(event.target).attr("class", "active");
    
    /* Push state, must be handled with onpopstate */
    /* Use this later? Produces fake urls that must be handled on server side
    window.history.pushState({url: li.attr("id")},"", a.text().replace(/\s+/g, '.'));
    */
  });
  
  $( "#home" ).click(function() {
      buildHomePage(lang);
  });
  
  $( "#news" ).click(function() {
      buildNewsPage(lang);
  });
  
  $( "#events" ).click(function() {
      buildEventsPage(lang);
  });
  
  $( "#forum" ).click(function() {
      buildForumPage(lang);
  });
  
  $( "#members" ).click(function() {
      buildMembersPage(lang);
  });
  
  $( "#association" ).click(function() {
      buildAssociationPage(lang);
  });
  
  $( "#apply" ).click(function() {
      buildApplyPage(lang);
  });
}

function loadPage(page) {
  resetPage();
  $("#"+page).attr("class", "active");
  $("#"+page).triggerHandler("click");
}

function buildHomePage(lang) {
  $( "#page" ).load("pages/home/home.html");
}

function buildNewsPage(lang) {
  
  $( "#page" ).load("pages/news/news.html", function() {
    initNews();
  });
}

function buildEventsPage(lang) {
  $( "#page" ).load("pages/events/events.html", function() {
    initEvents();
  });
  
}

function buildForumPage(lang) {
  $( "#page" ).load("pages/forum/forum.html", function() {
    initForum();
  });
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
  $( "#page" ).load("pages/association/association.html");
}

function buildApplyPage(lang) {

}


function resetPage() {
  $("#headMenuItems").children().removeClass("active");
  
  $( "#page" ).html("");
  
  for	(i = 0; i < intervalList.length; i++) {
    clearInterval(intervalList[i]);
  }
}







