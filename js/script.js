$( function(){ // == document.addEventListener("DOMContentLoaded"...)
	$(".navbar-toggle").blur(
		function(event){
			var screenwidth = window.innerWidth;
			if (screenwidth < 768){
				$("#collapsable-nav").collapse('hide');
			}
	});
	
	/* This is not working locally in Chrome....
	// Load header
	$(function(){
		$("#header-common").load("common/header-common.html");
		$("#footer-common").load("common/footer-common.html");
	});
	*/
});

(function (global) {

})(window);

document.getElementById("footer").innerHTML =
  "<button onclick='topFunction()' id='myBtn' title='Go to top'>Top</button> "
  + "<footer class='footer-panel'>"
  + "<div class='container'>"
  +   "&copy;Copyright Lianjun Zheng "+ new Date().getFullYear()
  + "</div>"
  +"</footer>";
  
document.getElementById("header").innerHTML =
" <header> "
+ "    <nav id='header-nav' class='navbar navbar-default navbar-fixed-top'> "
+ "      <div class='container'> "
+ "        <div class='navbar-header'> "
+ "           <a class='navbar-brand' href='index.html'> "
+ "              <img id='logo' alt='Brand' src='image/logo.png'> "
+ "            </a> "
+ "                     "
+ "          <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#collapsable-nav' aria-expanded='false'> "
+ "            <span class='sr-only'>Toggle navigation</span> "
+ "            <span class='icon-bar'></span> "
+ "            <span class='icon-bar'></span> "
+ "            <span class='icon-bar'></span> "
+ "          </button> "
+ "        </div> "
+ "        <div id='collapsable-nav' class='collapse navbar-collapse'> "
+ "          <ul id='nav-list' class='nav navbar-nav navbar-right'> "
+ "            <li class='text-center'><a target='_blank' href='CV/CV_EllieZheng.pdf'>CV</a></li> "
+ "            <li class='text-center'><a href='research.html'>Research</a></li> "
+ "            <li class='text-center'><a target='_blank' href='https://sites.google.com/site/elliezheng91/home'>Teaching</a></li> "
+ "            <li class='text-center'><a target='_blank' href='https://www.linkedin.com/in/lianjun-zheng-2597a495/'>LinkedIn</a></li> "
+ "            <li class='text-center'><a href='app.html'>Apps</a></li> "
+ "            <!-- <li class='text-center'><a href='#'>About</a></li> --> "
+ "          </ul><!-- #nav-list --> "
+ "        </div><!-- .collapse .navbar-collapse --> "
+ "      </div> "
+ "    </nav> "
+ "</header> "
+ "<div class='container'> "
+ "      <img class='visible-xs visible-sm visible-md visible-lg' width='100%' src='image/head.jpg'> "
+ "      <img class='visible-xxs' width='100%' src='image/head-small.jpg'> "
+ "      <div id='head'> "
+ "        <h1 class='text-right'>Lianjun Zheng <span>(Ellie)</span></h1> "
+ "      </div> "
+ " </div>  ";


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

