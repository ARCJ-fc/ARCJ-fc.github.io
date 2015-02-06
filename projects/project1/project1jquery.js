$(document).ready(function() {	
	var activeSetter = function(ID, tabID) {
		$("#" + ID).on("click", function() {
			$(".Tab").each(function() {
				if ($(this).hasClass("active")) {
					$(this).removeClass("active");
				}
			});
			$(".presentation").each(function() {
				if ($(this).hasClass("active")) {
					$(this).removeClass("active")
				}
		});
		$(this).addClass("active");
		$("#" + tabID).addClass("active");
		});
	};

	activeSetter("myButtonHome", "Tab0");
	activeSetter("myButton1", "Tab1");
	activeSetter("myButton2", "Tab2");
	activeSetter("myButton3", "Tab3");
	activeSetter("myButton4", "Tab4");
	activeSetter("myButton5", "Tab5");
	activeSetter("myButton6", "Tab6");
	activeSetter("myButtonConfig", "Tab7");
	
});