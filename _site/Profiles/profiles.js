$(document).ready (function() {

	$('.btn').click(function() {
	$.ajax ({
		type: 'GET',
		url: 'https://api.twitter.com/1.1/lists/statuses.json?owner_screen_name=lottie_em&include_rts=true&list_id=194449064',
		success: function(data) {
			console.log(data);
		}

	});
	)};


});