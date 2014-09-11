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
	var date2 = new Date(2014,8,12,03,01,00,00);
	setInterval(function() {
		//hours
			var currHour = Math.floor(
				(
					date2 - new Date()
				) / 1000 / 60 / 60 % 60);
		//minutes
			var currMin = Math.floor(
				(
					date2 - new Date() 
				) / 1000 / 60 % 60)
		//seconds
			var currSec = Math.floor( 
				( 
					date2 - new Date() 
				)/ 1000 % 60
			)
		if(currSec < 10){currSec = "0"+currSec;}
		if(currMin < 10){currMin = "0"+currMin;}
		if(currHour < 10){currHour = "0"+currHour;}
		$('#main').html("<h1>Time left until the iPhone is available for preorder. </h1><br>"+currHour+":"+currMin+":"+currSec);
	},1000);
});
