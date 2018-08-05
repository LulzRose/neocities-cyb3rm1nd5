function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(element).select();
	document.execCommand("copy");
	$temp.remove();
	sfx_copy.play();
	Pop('"' + element + '" copied!');
}

$(document).ready(function() {
	$(".switch-option").click(function() {
		sfx_select.play();

		$(this).parents(".switch").find(".selected").removeClass("selected");
		$(this).addClass("selected");
	});

	$('input[type=range]').on('input', function () {
	    $(this).trigger('change');
	});

	$('input[type=range]').on('mousedown', function () {
		sfx_click.play();
	});
	
	$(".dataverse-link").click(function() {
		sfx_dvout.play();
		var that = this;

		$("html").css("background-image", "url(/res/images/bg/space.png)");
		$("html").css("background-size", "cover");
		$("html").css("background-attachment", "fixed");
		$("html").css("overflow", "hidden");
		$("body").css("background", "#000");

		$("body").css("transition", "2.5s transform ease-out, 2.5s background");
		setTimeout(function() {
			$("body").css("background", "rgba(0, 0, 0, 0.2)");
			$("body").css("transform", "scale(0)");
		}, 5);
		

		setTimeout(function() {
			window.location = "/content/tsuki/dataverses/" + $(that).attr("data-link") + ".php";
		}, 2500);
	});

	$(window).scroll(function() {
	    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	        $("footer").addClass("scrolled");
	    } else {
	        $("footer").removeClass("scrolled");
	    }
	});

	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("footer").addClass("scrolled");
    } else {
        $("footer").removeClass("scrolled");
    }
});

function randInt(min, max) { // min inclusive, max exclusive
	return Math.floor(Math.random() * (max - min)) + min;
}

function timeConverter(unix){
	var a = new Date(unix);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + (min < 10 ? "0" : "") + min + ':' + (sec < 10 ? "0" : "") + sec;
	return time;
}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){
			return pair[1];
		}
	}
	return(false);
}

String.prototype.hashCode = function() {
	var hash = 0, i, chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
		chr   = this.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};

function setPseudo(elem, property, value) {
	var hash = (elem+property).hashCode();

	if ($("#x-pseudo-" + hash).length === 0) {
		$("head").append("<style id=\"x-pseudo-" + hash + "\"></style>");
	}

	$("#x-pseudo-" + hash).html(elem + " { " + property + ": " + value + "; }");
}