$(document).ready(function() {
	$("body").append('<div id="lightboxes"></div>');
});

/*

Lightbox(url);

*/

function Lightbox(url) {
	var text = '<div class="lb_fullscreen-popup lightbox-container"><img class="lightbox" src="' + url + '" /></div>';

	$("#lightboxes").append(text);

	var object = $("#lightboxes").children()[$("#lightboxes").children().length - 1];

	$(object).addClass("animate");
	$(object).find(".lightbox").addClass("animate");
	setTimeout(function(){
		$(object).removeClass("animate");
		$(object).find(".lightbox").removeClass("animate");
	}, 500);

	var pressed = false;
	
	$(object).click(function(){
		$(object).addClass("hidden");
		$(object).find(".lightbox").addClass("hidden");
		setTimeout(function(){
			$(object).remove();
		}, 480);
	});
}