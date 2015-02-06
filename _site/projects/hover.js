$(document).ready(function() {
	var x; 
	$("li").hover(function() {
		x = $(this).attr("id");
		var y = $("div#" + x + ".previews");
		console.log(y);
		$("div#" + x + ".previews").show(300);
	}, function() {
	$("div#" + x + ".previews").hide(300);
	});
})