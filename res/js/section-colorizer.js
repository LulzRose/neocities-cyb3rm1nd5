$(document).ready(function() {
	$("section").each(function(el) {
		if (typeof $(this).attr("data-section-color") !== typeof undefined && $(this).attr("data-section-color") !== false) {
			$(this)[0].style.setProperty("--section-color", $(this).attr("data-section-color"));
		}
	});

	$(".stylize-section section").each(function(el) {
		$(this)[0].style.setProperty("--section-color", "hsl(" + (140 + (Math.random() * 135)) + ", " + (15 + (Math.random() * 30)) + "%, 60%)");
	});
});