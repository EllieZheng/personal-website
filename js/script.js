$( function(){ // == document.addEventListener("DOMContentLoaded"...)
	$(".navbar-toggle").blur(
		function(event){
			var screenwidth = window.innerWidth;
			if (screenwidth < 768){
				$("#collapsable-nav").collapse('hide');
			}
	});
	
	// Load header
	$(function(){
		$("#header-common").load("common/header-common.html");
		$("#footer-common").load("common/footer-common.html");
	});
});

(function (global) {

})(window);