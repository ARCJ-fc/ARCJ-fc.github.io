---
---

$("a").hover(function() {
	$(#{{post.dummy}}).show(300).
}, function() {
	$(#{{post.dummy}}).hide(300).
} )

/* When the li element is hovered on, fade in the element which
has the ID of the current post's dummy value. On hover off,
hide it



set up a for loop that takes the counter of the currently 
hovered over li as an input and that displays the div of the
class 'previews' that has that value as its ID while hiding 
any others.

toggle an id of 'active' to the div which has the same ID value
as the li element. divs of the class previews by default are 
hidden but once assigned the id active are shown.

$("li").hover(function (showme) {
	$(".previews").each(function() {
		if ($(this).attr("id") = showme)) {
			$("#showme").show(400);
		}
		else $(this).hide(400);
	})
}, $(this).removeAttr("id") )

 when user hovers over a list item, perform a function that
for each element of the class 'previews', perform a function that
if the preview element has the id of showme, show the element, 
else hide the element */
