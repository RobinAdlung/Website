$(document).ready(function() {
			$('#togglebtn,#toggleupbtn').click(function() {
				$('#togglemenu').slideToggle(500);
			});
		});

$(document).ready(function() {
			$('#togglebtn,#toggleupbtn').click(function() {
				$('#toggleupbtn').toggle();
				$('#togglebtn').toggle();
			});
		});