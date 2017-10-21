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
  document.getElementById('tiny_bg').className += "faded";
}

function showVcard() {
  var els = document.getElementsByClassName('open')
  var nEls = els.length;
  if (nEls > 0) {
    for (var i = 0; i < nEls; i++){
      els[0].className += " close";
      els[0].classList.remove("open");
    }
  } else { 
    document.getElementsByClassName('vcard')[0].classList.remove("close");
    document.getElementsByClassName('fa-address-card')[0].classList.remove("close");
    document.getElementsByClassName('vcard')[0].className += " open";
    document.getElementsByClassName('fa-address-card')[0].className += " open";
  }
}
