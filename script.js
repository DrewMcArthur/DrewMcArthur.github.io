/*
// when the window is fully loaded, images included
$(window).load(function(){
  // add the class containing the fadeout animation to the blurred background
  $('div#tiny_bg').addClass('faded');
});
*/

/* javascript version of the code above */

// when the window is fully loaded, images included
window.onload = function(){
  // add the class containing the fadeout animation to the blurred background
  document.getElementById('tiny_bg').className += " faded";
}
