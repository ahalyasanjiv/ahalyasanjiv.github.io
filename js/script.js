// Enabling smooth scrolling on website
$(document).ready(function(){
	$('#navigation a').on('click', function(event) {
		// Use the hash property to get anchor part of target url
		var hash = this.hash;
		// Prevent default behavior
		event.preventDefault();
		// Animate the scrolling to the appropriate section of the body
		$('html, body').animate({
			// Set settings for new position upon changing section and account for height of navigation bar
			scrollTop: $(hash).offset().top - $("#navigation").height() 
		}, 1000, function() {
			// Modify anchor
			window.location.hash = hash;
		});
	})
});
