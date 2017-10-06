/* jQuery equivalent, but replacing with pure javascript
$(document).load(function(){
  $('div.tiny_bg').hide();
});
*/

// once all images have loaded
//document.addEventListener("load", function() { 
$('.main').on('click', function(){
  // hide the div that contains the blurred backgroud
  document.getElementById("tiny_bg").style.animation = "loaded .5s cubic-bezier(0,0,1,1);";
  //document.getElementById("tiny_bg").style.visibility = "hidden";

});
