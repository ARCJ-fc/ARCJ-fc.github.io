---
---
$(document).ready(function() {
	var x; 
	$("li").hover(function() {
		x = $(this).attr("id");
		var y = $("div#" + x + ".previews");
		$("div#" + x + ".previews").animate({opacity:1});
	}, function() {
		$("div#" + x + ".previews").animate({opacity:0});
	});

	var z;
	$(".name").hover(function() {
		z = $(this).attr("id");
		self = $(this);
		$(".profiles").each(function() {
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

	var value = 0;

	$(".tab").click(function() {
		value +=180;
        $("#sun").rotate({ animateTo:value, duration:3000 });
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
				}
			$("#screen1").fadeIn(300, function() {
				$("#screen1").addClass("active");
			});
			$("#screen").css('background-color', 'blue');
			});
			$(".bottomtab").each(function(){
				if ($(this).hasClass("active")) {
					$(this).animate({
						"bottom": "-=250px"}, 700, function() {
						$(this).removeClass("active");
					});
				}
			});
			$("#bottomtab1").animate({
				"bottom": "+=250px"}, 700, function() {
					$("#bottomtab1").addClass("active");
			});
			if ($("#bottomtab5").hasClass("active")) {
				$("#bottomtab5").animate({
					"right": "-=350px"}, 900, function() {
					$("#bottomtab5").removeClass("active")
				});
			}
			if ($("#bottomtab4").hasClass("active")) {
				$("#bottomtab4").animate({
					"left": "-=350px"}, 900, function() {
					$("#bottomtab4").removeClass("active");
				});
			}
			}
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
						"bottom": "-=250px"}, 900, function() {
						$(this).removeClass("active");
					});
				}
			});
			$("#bottomtab2").animate({
				"bottom": "+=250px"}, 600, function() {
					$("#bottomtab2").addClass("active");
				});
			if ($("#bottomtab5").hasClass("active")) {
				$("#bottomtab5").animate({
					"right": "-=350px"}, 900, function() {
					$("#bottomtab5").removeClass("active")
				});
			}
			if ($("#bottomtab4").hasClass("active")) {
				$("#bottomtab4").animate({
					"left": "-=350px"}, 900, function() {
					$("#bottomtab4").removeClass("active");
				});
			}
			}
		if ($(this).attr("id") === "tab3") {
			$("#text > div").each(function(){
				if ($(this).hasClass("active")) {
					$(this).fadeOut(0, function() {
						$(this).removeClass("active");
					});
				}
			});
			$("#screen3").fadeIn(300, function() {
				$("#screen3").addClass("active");
			});
			$("#screen").css('background-color', 'red');
			$(".bottomtab").each(function(){
				if ($(this).hasClass("active")) {
					$(this).animate({
						"bottom": "-=250px"}, 900, function() {
						$(this).removeClass("active");
					});
				}
			})
			$("#bottomtab3").animate({
				"bottom": "+=250px"}, 900, function() {
					$("#bottomtab3").addClass("active");
			});
			if ($("#bottomtab5").hasClass("active")) {
				$("#bottomtab5").animate({
					"right": "-=350px"}, 900, function() {
					$("#bottomtab5").removeClass("active")
				});
			}
			if ($("#bottomtab4").hasClass("active")) {
				$("#bottomtab4").animate({
					"left": "-=350px"}, 900, function() {
					$("#bottomtab4").removeClass("active");
				});
			}
			}
		if ($(this).attr("id") === "tab4") {
			$("#text > div").each(function(){
				if ($(this).hasClass("active") && $(this).attr("id") !== "screen4") {
					$(this).fadeOut(0, function() {
						$(this).removeClass("active");
					});
				}
			$("#screen4").fadeIn(300, function() {
				$("#screen4").addClass("active");
			});
			$("#screen").css('background-color', 'violet');
			});
					// bottom tabs //
			$(".bottomtab").each(function(){
				if ($(this).hasClass("active")) {
					$(this).animate({
						"bottom": "-=250px"}, 900, function() {
						$(this).removeClass("active");
					});
				}
			});
			if ($("#bottomtab5").hasClass("active")) {
				$("#bottomtab5").animate({
					"right": "-=350px"}, 900, function() {
					$("#bottomtab5").removeClass("active")
				});
			}
			if ($("#bottomtab4").hasClass("active")) {
				$("#bottomtab4").animate({
					"left": "-=350px"}, 900, function() {
					$("#bottomtab4").removeClass("active");
				});
			}
			$("#bottomtab4").animate({
				"left": "+=350px"}, 900, function() {
					$("#bottomtab4").addClass("active");
			});
		}
		if ($(this).attr("id") === "tab5") {
			$("#text > div").each(function(){
				if ($(this).hasClass("active") && $(this).attr("id") !== "screen5") {
					$(this).fadeOut(0, function() {
						$(this).removeClass("active");
					});
				}
			$("#screen5").fadeIn(300, function() {
				$("#screen5").addClass("active");
			});
			$("#screen").css('background-color', 'yellow');
			});
					// bottom tabs //
			$(".bottomtab").each(function(){
				if ($(this).hasClass("active")) {
					$(this).animate({
						"bottom": "-=250px"}, 900, function() {
						$(this).removeClass("active");
					});
				}
			});
			if ($("#bottomtab5").hasClass("active")) {
				$("#bottomtab5").animate({
					"right": "-=350px"}, 900, function() {
					$("#bottomtab5").removeClass("active")
				});
			}
			if ($("#bottomtab4").hasClass("active")) {
				$("#bottomtab4").animate({
					"left": "-=350px"}, 900, function() {
					$("#bottomtab4").removeClass("active");
				});
			}
			$("#bottomtab5").animate({
				"right": "+=350px"}, 900, function() {
					$("#bottomtab5").addClass("active");
			});
		}
	});	
});

// condensed function - n (1-3), topMargin (40), bottomMargin (250), bgcolor ("blue")
/* var onClicker = function(n, topMargin, bottomMargin, sideMargin, bgcolor) {
		value +=180;
        $("#sun").rotate({ animateTo:value, duration:3000 });
		$(".profiles").each(function() {
			$(this).animate({opacity: 0})
		});
		$(".tab").each(function(){
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(this).animate({
					"marginTop": "-=" + topMargin + "px"}, 400)
				}
		})
		$(this).addClass("active");
		$(this).animate({
			"marginTop": "+=" + topMargin + "px"}, 400);
		if ($(this).attr("id") === "tab" + n) {
			$("#text > div").each(function(){
				if ($(this).hasClass("active") && $(this).attr("id") !== "screen" + n)  {
					$(this).fadeOut(0, function() {
						$(this).removeClass("active");
					});
				}
			$("#screen1").fadeIn(300, function() {
				$("#screen1").addClass("active");
			});
			$("#screen").css('background-color', '' + bgcolor);
			});
			$(".bottomtab").each(function(){
				if ($(this).hasClass("active")) {
					$(this).animate({
						"bottom": "-=" + bottomMargin + "px"}, 700, function() {
						$(this).removeClass("active");
					});
				}
			});
			$("#bottomtab" + n).animate({
				"bottom": "+=" + bottomMargin + "px"}, 700, function() {
					$("#bottomtab" + n).addClass("active");
			});
			if ($("#bottomtab5").hasClass("active")) {
				$("#bottomtab5").animate({
					"right": "-=" + sideMargin + "px"}, 900, function() {
					$("#bottomtab5").removeClass("active")
				});
			}
			if ($("#bottomtab4").hasClass("active")) {
				$("#bottomtab4").animate({
					"left": "-=" + sideMargin + "px"}, 900, function() {
					$("#bottomtab4").removeClass("active");
				});
			}
			}
NOTE: probably swap out bottomtab4/5 for sidetab4/5?

*/
/* likely better to store $(this) in a variable rather than
using class "active", then ditching that class altogether */