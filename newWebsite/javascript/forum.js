  
/* TODO: Only load a fixed number of old messages. Load more messages when scrolling to bottom */ 

function initForum() {
  bindForumEvents();
  getMessages();
  
  /* Get new messages every 5 second */
  interval = setInterval(function() {
    getMessages();
  }, 5000);
  
  intervalList.push(interval);
  
}

function bindForumEvents() {
  /* Scroll down a bit when using mobile */
  $("#forum-name-input").click(function() {
    if (window.screen.width < 480) {
      window.scrollTo(0, $("#headMenu").offset().top);
    }
  });
  
  /* Change focus to message input on Enter key */
  $("#forum-name-input").keydown(function(event) {
    /* 13 == ENTER */
    if (event.which == 13) {
      event.preventDefault();
      $("#forum-message-input").focus();
    }
  });
  
  /* Send message to server on Enter key */
  $("#forum-message-input").keydown(function(event) {
    /* 13 == ENTER */
    if (event.which == 13) {
    /* Holding shiftKey should not send message */
      if (!event.shiftKey) {
        event.preventDefault();
        /* Make mobile keyboard disappear */
        document.activeElement.blur();
        
        name = $( "#forum-name-input" ).val();
        message = $(this).val();
        
        /* Empty input is not allowed */
        if (name == "" || message == "") {
          /* TODO: Give message to user */
          return;
        }

        $( "#forum-message-input" ).val("");
        
        $.post('/newWebsite/pages/forum/chatPost.php', {name: name, text: message}, function() {
          getMessages();
        });
      }    
    }
  });
  
}

function getMessages() {
  id = 0;
  fm = $("#forum-messages");
  if (fm.children().size() > 0) {
    id = fm.children().first().attr('id');
  }
  
  $.get('/newWebsite/pages/forum/chatGet.php', {id: id}, function(data) {
  
    var messages = JSON.parse(data);
    
    $.each( messages , function(i) {
      message = createMessage(messages[i].ID, messages[i].Name, messages[i].Text, messages[i].Time);
      $( "#forum-messages" ).prepend(message);
    });
  
  });
  
}

function createMessage(id, name, text, time) {
  d = getDateFormat(time.replace(/-/g, '/') + " UTC");

  year = d.year;
  month = d.month;
  date = d.date;
  hours = d.hours;
  minutes = d.minutes;

  time = hours + ":" + minutes + " " + year + "-" + month + "-" + date;
  
  items = [];
  items.push("<div id="+id+" class='message'>");
  items.push("<div class='messagehead'>"+name+ " " + time +"</div>");
  items.push("<div class='messagebody'>"+text+"</div>");  
  items.push("</div>");
  
  return items.join("");
}



