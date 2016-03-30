

function initNews() {
  $.get('loadXHTML.php', {xml:'xml/news.xml', xsl:'pages/news/side.xsl'}, function(data) {
    bindSidelinkNews();
    $("#side").html(data);
    $("#side").children("li").first().trigger("click");
  }); 
}

function bindSidelinkNews() {
  $("#side").click(function(e) {
    var target = e.target;
    var li = $(target).closest("li");
    $('li').removeClass('active');
    li.addClass('active');
    
    var link = li.attr("link");
    console.log(link);
    $.get('loadXHTML.php', {xml: link, xsl:'pages/news/news.xsl'}, function(data) {
    $("#content").html(data);
  }); 

  });
}




