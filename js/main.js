window.onload = function(){
	$("#avatar").hover(
		function() {
			$( this ).addClass("animated shake");
		}, function() {
			$( this ).removeClass("animated shake");
		})
}