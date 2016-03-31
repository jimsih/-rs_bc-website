
var association;

function initAssociation() {
  
  $.getJSON("json/association.json", function(data) {
    sortByDate(data.statutes, "date", true);
    sortByDate(data.board, "date", true);
    sortByDate(data.annual, "date", true);
    sortByDate(data.motion, "date", true);
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
  
  $("#board").click(function() {
    $("#boardlist").toggle("slow");
  });
  
  $("#annual").click(function() {
    $("#annuallist").toggle("slow");
  });
  
  $("#motion").click(function() {
    $("#motionlist").toggle("slow");
  });
  
  $("#side ul").click(function(e) {
    link = e.target.getAttribute("link");
    
    if (link != null) {
      loadAssociationDocument(link);
    }
  });

}


function loadAssociationDocument(link) {
  items = [];
  items.push("<object type='application/pdf' width='100%' height='800px' data="+link+" internalinstanceid='223' title=''></object>");
  $("#content").html(items.join(""));
}

function loadAssociationSidelinks() {
  $.each(association.statutes, function() {
    var item = createAssociationItem(this);
    $("#statuteslist").append(item);
  });
  
  $.each(association.board, function() {
    var item = createAssociationItem(this);
    $("#boardlist").append(item);
  });
  
  $.each(association.annual, function() {
    var item = createAssociationItem(this);
    $("#annuallist").append(item);
  });
  
  $.each(association.motion, function() {
    var item = createAssociationItem(this);
    $("#motionlist").append(item);
  });
}

function createAssociationItem(item) {
  items = [];
  items.push("<li class='sidesublink smalltext' link="+item.link+">");
  items.push(item.date);
  items.push("</li>");
  
  return items.join("");
}
//<span class='smalltext'>"+item.date+"</span>

