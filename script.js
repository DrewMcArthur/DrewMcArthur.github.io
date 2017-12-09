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


function lockBar(e) {
  // when we hover over the social list, 
  var hoverbar = document.getElementById('hoverbar');
  var iconWidth = 32.5;
  var mainOffset = document.body.offsetWidth *.11 - 5;
  console.log(mainOffset);
  // show the hoverbarr
  hoverbar.style.opacity = "1";
  // get mouses position while hovering over the social list
  x=e.clientX; 
  // set mouses position, relative within the coordinates of the social list
  var barLeftX = x - mainOffset;
  // bring the hoverBar's left coordinate to the nearest multiple of 27
  // (the width of the social icons) to place it under the left corner 
  // of the hovered icon.  i.e. 29px is over the 1st indexed icon, so the left
  // corner would be at x=27. 29 % 27 = 2, 29 - 2 = 27.
  barLeftX -= (barLeftX % iconWidth);
  // move the bar to that x coordinate
  hoverbar.style.left = barLeftX+"px";
  // change the color accordingly
  var colors = ["#4676dc", "#eb8231", "#52a0fd", "#FFEC00", "#3D95CE", 
                "#0073a4", "#000", "#9e3416"];
  hoverbar.style.borderColor = colors[barLeftX / iconWidth];
}

function floatBar(e) {
  // when we hover over the social list, 
  var hoverbar = document.getElementById('hoverbar');
  // show the hoverbarr
  hoverbar.style.opacity = "1";
  // get mouses position while hovering over the social list
  x=e.clientX; 
  // set mouses position, relative within the coordinates of the social list
  var barLeftX = x - 75;
  // move the bar to that x coordinate
  //hoverbar.style.left = barLeftX+"px";
  // remove the color
  hoverbar.style.borderColor = "#666";
}

function hideBar(){
  // when we stop hovering over the social list, 
  var hoverbar = document.getElementById('hoverbar');
  // hide the hoverbarr
  hoverbar.style.opacity = "0";
  
}

// attach event listeners to each icon
var li = document.getElementsByClassName("fa");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("mousemove", lockBar);
  li[i].addEventListener("mouseout", floatBar);
}

// and the parent container
var socialList = document.getElementById("social-icons");
socialList.addEventListener("mouseleave", hideBar);
