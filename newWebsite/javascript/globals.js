
/* Add interval settings here if they are temporary on a page.
 * resetPage() will clear all interval settings in the list.
*/
var intervalList = [];

// Revert to a previously saved state
window.addEventListener('popstate', function(event) {
  if (event.state == null) {
    loadPage("home");
    return;
  }
  
  var state = event.state;
  loadPage(state.url);
  
});
