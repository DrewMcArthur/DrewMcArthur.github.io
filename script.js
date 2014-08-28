$(document).ready(function(){
	$("#header").load("/pages/footer.html");
	$("#footer").load("/pages/footer.html").addClass('mini');
/*
 * this doesn't work for some reason ???
	$("#footer .drewmcarthur").on("click", function() {
		console.log('clicked');
		//window.location.href = '/'
	});
*/
	var D = $(document);
	D.scroll(function() {
		//header and footer grow/shrink functions.  Header starts big and footer starts small.
		if(D.scrollTop() > 20) {
			//make header small
			$('#header').addClass('mini');
		} else {
			$('#header').removeClass('mini');
		}
		if(D.scrollTop() + $(window).height() > D.height() - 20 ){
			//make footer full
			$('#footer').removeClass('mini');
		} else {
			$('#footer').addClass('mini');
		}
	});
});
