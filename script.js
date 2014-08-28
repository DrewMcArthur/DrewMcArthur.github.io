$(document).ready(function(){
	$("#header").load("/pages/header.html");
	$("#footer").load("/pages/footer.html").addClass('mini');
/*
 * this doesn't work for some reason ???
	$("#footer .drewmcarthur").on("click", function() {
		console.log('clicked');
		//window.location.href = '/'
	});
*/
	$('div#main').scroll(function() {
		//header and footer grow/shrink functions.  Header starts big and footer starts small.
		if($('div#main').scrollTop() > 0) {
			//make header small
			$('#header').addClass('mini');
			console.log('header small');
		} else {
			$('#header').removeClass('mini');
			console.log('header big');
		}
		if($('div#main').scrollTop() + $('div#main').height() == $(document).height()) {
			//make footer full
			$('#footer').removeClass('mini');
			console.log('footer big');
		} else {
			$('#footer').addClass('mini');
			console.log('footer small');
		}
	});
});
