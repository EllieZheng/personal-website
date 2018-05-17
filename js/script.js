$( function(){ // == document.addEventListener("DOMContentLoaded"...)
	$(".navbar-toggle").blur(
		function(event){
			var screenwidth = window.innerWidth;
			if (screenwidth < 768){
				$("#collapsable-nav").collapse('hide');
			}
	});
});

(function (global) {
	
})(window);