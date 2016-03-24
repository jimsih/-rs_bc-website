  
/* TODO: Only load a fixed number of old messages. Load more messages when scrolling to bottom */ 

function initForum() {
  bindEvents();
  getMessages();
  
  /* Get new messages every 5 second */
  interval = setInterval(function() {
    getMessages();
  }, 5000);
  
  intervalList.push(interval);
  
}

function bindEvents() {
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
        
        $.post('/newWebsite/forum/chatPost.php', {name: name, text: message}, function() {
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
  
  $.get('/newWebsite/forum/chatGet.php', {id: id}, function(data) {
  
    var messages = JSON.parse(data);
    
    $.each( messages , function(i) {
      message = createMessage(messages[i].ID, messages[i].Name, messages[i].Text, messages[i].Time);
      $( "#forum-messages" ).prepend(message);
    });
  
  });
  
}

function createMessage(id, name, text, time) {
  d = new Date(time + " UTC");
  year = d.getFullYear();
  month = ("0" + (d.getMonth()+1)).slice(-2);
  date = ("0" + d.getDate()).slice(-2);
  hours = ("0" + d.getHours()).slice(-2);
  minutes = ("0" + d.getMinutes()).slice(-2);
  
  time = hours + ":" + minutes + " " + year + "-" + month + "-" + date;
  
  items = [];
  items.push("<div id="+id+" class='panel panel-info'>");
  items.push("<div class='panel-heading'>"+name+ " " + time +"</div>");
  items.push("<div class='panel-body'><div class='messageTextarea'>"+text+"</div></div>");
  
  items.push("</div>");
  
  return items.join("");
}
