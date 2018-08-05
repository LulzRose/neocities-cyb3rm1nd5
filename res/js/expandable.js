$(document).ready(function() {
	$(".expandable-button").click(function() {
		var p = $(this).parents(".expandable");
		if (p.hasClass("open")) {
			p.removeClass("open");
			$(this).addClass("cur-open");
			$(this).removeClass("cur-close");
		} else {
			p.addClass("open");
			$(this).addClass("cur-close");
			$(this).removeClass("cur-open");
		}
	});
});