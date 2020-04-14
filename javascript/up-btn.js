$(document).ready(function(){

	var elm_class = '.top-btn'; // Adjust this accordingly. 

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) { // 300px from top
			$(elm_class).fadeIn(500);
		} else {
			$(elm_class).fadeOut(500);
		}
	});

	//Click event to scroll to top
	$(elm_class).click(function(){
		$('html, body').animate({scrollTop : 0},200);
		return false;
	});

});	