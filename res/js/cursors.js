$(document).ready(function() {
	$("input[type='range']").addClass("cur-action");
	
	$("a").each(function(el) {
		var uri = $(this).attr("href");

		if (uri == undefined) {
			return true;
		}

		if (uri !== "#" && uri !== "javascript:void(0);" && !uri.startsWith("mailto:")) {
			var currentDepth = location.pathname.split("/").length - 2;
			var newDepth;

			if (uri.startsWith("/")) {
				newDepth = uri.split("/").length - 2;
			}
			else if (uri.startsWith("http")) {
				newDepth = "Out";
			}
			else {
				newDepth = currentDepth + (uri.split("/").length - 1) - ((uri.split("../").length - 1) * 2);
			}

			var diff = newDepth - currentDepth;

			if (newDepth === "Out") {
				$(this).addClass("cur-out");
			}
			else if (diff < -1) {
				$(this).addClass("cur-downdown");
			}
			else if (diff === -1) {
				$(this).addClass("cur-down");
			}
			else if (diff === 0) {
				$(this).addClass("cur-stay");
			}
			else if (diff === 1) {
				$(this).addClass("cur-up");
			}
			else if (diff > 1) {
				$(this).addClass("cur-upup");
			}
		}
		else {
			if (uri.startsWith("mailto:")) {
				$(this).addClass("cur-out");
			}
			else if ($(this).hasClass("expandable-button")) {
				if ($(this).parents(".expandable").hasClass("open")) {
					$(this).addClass("cur-close");
				} else {
					$(this).addClass("cur-open");
				}
			} else {
				$(this).addClass("cur-action");
			}
		}		
	});
});