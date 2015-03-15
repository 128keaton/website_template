$(document).ready(function() {
 
// TOC, shows how to scroll the whole window
$('.right-bar a').click(function(){
  $.scrollTo( this.hash, 100, { easing:'swing' });
  return false;
});
 
});