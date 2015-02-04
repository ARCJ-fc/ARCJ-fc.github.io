---
---
$(document).ready(function() {
	var x; 
	$("li").hover(function() {
		x = $(this).attr("id");
		var y = $("div#" + x + ".previews");
		console.log(y);
		$("div#" + x + ".previews").animate({opacity:1});
	}, function() {
		$("div#" + x + ".previews").animate({opacity:0});
	});

	var z;
	$(".name").hover(function() {
		z = $(this).attr("id");
		self = $(this);
		console.log(z);
		$(".profiles").each(function() {
			console.log($(this).attr("id"));
			if ($(this).attr("id") !== "" + z) {
				$(this).animate({opacity: 0}, 600)
			}
			if ($(this).attr("id") === "" + z) {
				$(this).animate({opacity: 1}, 600)	
			}
		});
	}, function() {
		$("#" + z + ".profiles").animate({opacity: 0}, 600);
	});

	$(".tab").click(function() {
		$(".profiles").each(function() {
			$(this).animate({opacity: 0})
		});
		$(".tab").each(function(){
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(this).animate({
					"marginTop": "-=40px"}, 400)
				}
		})
		$(this).addClass("active");
		$(this).animate({
			"marginTop": "+=40px"}, 400);
		if ($(this).attr("id") === "tab1") {
			$("#text > div").each(function(){
				if ($(this).hasClass("active") && $(this).attr("id") !== "screen1") {
					$(this).fadeOut(0, function() {
						$(this).removeClass("active");
					});
				};
			$("#screen1").fadeIn(300, function() {
				$("#screen1").addClass("active");
			});
			$("#screen").css('background-color', 'blue');
			});
					// bottom tabs //
			$(".bottomtab").each(function(){
				if ($(this).hasClass("active")) {
					$(this).animate({
						"bottom": "-=250px"}, 700, function() {
						$(this).removeClass("active");
					});
				};
			});
			$("#bottomtab1").animate({
				"bottom": "+=250px"}, 700, function() {
					$("#bottomtab1").addClass("active");
			});
			};
		if ($(this).attr("id") === "tab2") {
			$("#text > div").each(function(){
				if ($(this).hasClass("active") && $(this).attr("id") !== "screen2") {
					$(this).fadeOut(0, function() {
						$(this).removeClass("active");
					});
				}
			$("#screen2").fadeIn(300, function() {
				$("#screen2").addClass("active");
			});
			$("#screen").css('background-color', 'lime');
			});
			$(".bottomtab").each(function(){
				if ($(this).hasClass("active")) {
					$(this).animate({
						"bottom": "-=250px"}, 700, function() {
						$(this).removeClass("active");
					});
				};
			});
			$("#bottomtab2").animate({
				"bottom": "+=250px"}, 600, function() {
					$("#bottomtab2").addClass("active");
				});
			};
		if ($(this).attr("id") === "tab3") {
			$("#text > div").each(function(){
				if ($(this).hasClass("active")) {
					$(this).fadeOut(0, function() {
						$(this).removeClass("active");
					});
				};
			});
			$("#screen3").fadeIn(300, function() {
				$("#screen3").addClass("active");
			});
			$("#screen").css('background-color', 'red');
			$(".bottomtab").each(function(){
				if ($(this).hasClass("active")) {
					$(this).animate({
						"bottom": "-=250px"}, 700, function() {
						$(this).removeClass("active");
					});
				};
			})
			$("#bottomtab3").animate({
				"bottom": "+=250px"}, 700, function() {
					$("#bottomtab3").addClass("active");
			});
			
		}; 
	});	
});

/* likely better to store $(this) in a variable rather than
using class "active", then ditching that class altogether */