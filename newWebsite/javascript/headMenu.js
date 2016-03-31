
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
    $(event.target).addClass("active");
    
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
  $( "#page" ).load("pages/members/members.html", function() {
    $.get('loadXHTML.php', {xml: 'xml/members.xml', xsl:'pages/members/members.xsl'}, function(data) {
    $("#content").html(data);
  }); 
  });
}

function buildAssociationPage(lang) {
  $( "#page" ).load("pages/association/association.html", function() {
    initAssociation();
  });
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







