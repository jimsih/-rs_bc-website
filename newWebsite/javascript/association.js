
var association;

function initAssociation() {
  
  $.getJSON("json/association.json", function(data) {
    association = data;
    loadAssociationSidelinks();
  });
  
  bindAssociationEvents();
  $("#about").trigger("click");
  
}


function bindAssociationEvents() {
  
  $("#side").click(function(e) {
    /*$("#side").children().removeClass("active");
    var target = e.target;
    var item = $(target).closest("li");
    item.addClass("active");*/
  });
  
  $("#about").click(function() {
    $("#content").load("pages/association/about.html");
  });
  
  $("#statutes").click(function() {
    $("#statuteslist").toggle("slow");
  });

}


function loadAssociationSidelinks() {
  $.each(association.statutes, function() {
    var item = associationItem(this);
    $("#statuteslist").append(item);
  });
}


function associationItem(item) {
  items = [];
  items.push("<li class='sidelink' link="+item.link+">");
  items.push("<span class='smalltext'>"+item.date+"</span>");
  items.push("</li>");
  
  return items.join("");
}


