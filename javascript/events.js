
var events = [];

function initEvents() {
  
  $.getJSON("json/events.json", function( data ) {
  
    events = data.events;
    sortByDate(events, "date", false);
    
    bindSidelinkEvents();
    loadEventSidelinks();
    $("#side").children().first().trigger("click");
  });
  
}

function loadEventSidelinks() {
  $.each(events, function() {
    title = this.title;
    datetime = this.date.split(" ");
    date = datetime[0];
    time = datetime[1];
    
    link = createSidelinkEvent(title, date, time);
    $("#side").append(link);
  });
}

function bindSidelinkEvents() {
  $("#side").click(function(e) {
    var target = e.target;
    var li = $(target).closest("li");
    $('li').removeClass('active');
    li.addClass('active');
    
    var event;
    for (i=0; i<events.length; i++) {
      if (events[i].date.split(" ").join("") == li.attr("id")) {
        event = events[i];
        break;
      }
    }
    
    var content = createEventContent(event.title, event.description);
    $("#content").html(content);
    
    
  });
}

function createEventContent(title, description) {
  var items = [];
  
  items.push("<h2>"+title+"</h2>");
  items.push("<div><p>"+description+"</p></div>");
  
  return items.join("");
}

function createSidelinkEvent(title, date, time) {
  var items = [];
  items.push("<li id="+date+time+" class='sidelink'>");
  items.push("<span class='title bigtext'>"+title+"</span>");
  items.push("<span class='date smalltext'>"+date+"</span>");
  items.push("<span class='time smalltext'>"+time+"</span>");
  items.push("</li>");
  
  return items.join("");
}
