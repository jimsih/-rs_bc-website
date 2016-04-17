
function initHome() {
  bindHomeSubMenu();
  $("#start").trigger("click");
}


function bindHomeSubMenu() {
  $( "#start" ).click(function() {
    $("#content").load("pages/home/start.html");
  });
  $( "#faq" ).click(function() {
    $("#content").load("pages/home/faq.html");
  });
  $( "#about" ).click(function() {
    $("#content").load("pages/association/about.html");
  });
  $( "#hands" ).click(function() {
    $("#content").html("<div id='board'></div>");
    initBoard();
  });
}
