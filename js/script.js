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
    $('#teachingTab a:first').tab('show');

    if (/teachingEx/.test(window.location)) {
        $('#teachingTab a[href="#teachingEx"]').tab('show');
    }
    if (/certificate/.test(window.location)) {
        $('#teachingTab a[href="#certificate"]').tab('show');
    }
    if (/statement/.test(window.location)) {
        $('#teachingTab a[href="#statement"]').tab('show');
    }

    $('#coursesTab a:first').tab('show');
    if (/ComputerScience/.test(window.location)) {
        $('#coursesTab a[href="#ComputerScience"]').tab('show');
    }
    if (/Japanese/.test(window.location)) {
        $('#coursesTab a[href="#Japanese"]').tab('show');
    }
    if (/NaturalScience/.test(window.location)) {
        $('#coursesTab a[href="#NaturalScience"]').tab('show');
    }

});


(function (global) {
    var dc = {};
    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    var footerhtml =  "<button onclick='topFunction()' id='myBtn' title='Go to top'>Top</button> "
  + "<footer class='footer-panel'>"
  + "<div class='container'>"
  + "&copy;Copyright Lianjun Zheng "+ new Date().getFullYear()
  + ". Source code available at <a target='_blank' href='https://github.com/EllieZheng/personal-website'>GitHub</a>."
  + "</div>"
  +"</footer>";

    var headerhtml =
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
+ "            <li class='text-center'><a href='CV.html'>CV</a></li> "
+ "            <li class='text-center'><a href='research.html'>Research</a></li> "
+ "            <li class='text-center'><a href='teaching.html'>Teaching</a></li> "
+ "            <li class='text-center'><a href='app.html'>Apps</a></li> "
+ "            <li class='text-center'><a href='courses.html'>Courses</a></li> "
+ "            <li class='text-center'><a href='hobbies.html'>Hobbies</a></li> "
+ "            <li class='text-center'><a target='_blank' href='https://www.linkedin.com/in/lianjun-zheng-2597a495/'>LinkedIn</a></li> "
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

    var subpageheaderhtml =
        " <header> "
+ "    <nav id='header-nav' class='navbar navbar-default navbar-fixed-top'> "
+ "      <div class='container'> "
+ "        <div class='navbar-header'> "
+ "           <a class='navbar-brand' href='../index.html'> "
+ "              <img id='logo' alt='Brand' src='../image/logo.png'> "
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
+ "            <li class='text-center'><a href='../CV.html'>CV</a></li> "
+ "            <li class='text-center'><a href='../research.html'>Research</a></li> "
+ "            <li class='text-center'><a href='../teaching.html'>Teaching</a></li> "
+ "            <li class='text-center'><a href='../app.html'>Apps</a></li> "
+ "            <li class='text-center'><a href='../courses.html'>Courses</a></li> "
+ "            <li class='text-center'><a href='../hobbies.html'>Hobbies</a></li> "
+ "            <li class='text-center'><a target='_blank' href='https://www.linkedin.com/in/lianjun-zheng-2597a495/'>LinkedIn</a></li> "
+ "            <!-- <li class='text-center'><a href='#'>About</a></li> --> "
+ "          </ul><!-- #nav-list --> "
+ "        </div><!-- .collapse .navbar-collapse --> "
+ "      </div> "
+ "    </nav> "
+ "</header> "
+ "<div class='container'> "
+ "      <img class='visible-xs visible-sm visible-md visible-lg' width='100%' src='../image/head.jpg'> "
+ "      <img class='visible-xxs' width='100%' src='../image/head-small.jpg'> "
+ "      <div id='head'> "
+ "        <h1 class='text-right'>Lianjun Zheng <span>(Ellie)</span></h1> "
+ "      </div> "
+ " </div>  ";

    document.addEventListener("DOMContentLoaded", function (event) {
        var header = document.querySelector("#header");
        var subpageheader = document.querySelector("#subpageheader");
        if (header) {
            insertHtml("#header", headerhtml);
        }
        if (subpageheader) {
            insertHtml("#subpageheader", subpageheaderhtml);
        }
        insertHtml("#footer", footerhtml);
    });
   /*
    dc.loadFooter = function(){
        insertHtml("#footer", footerhtml)
    };
    global.$dc = dc;
*/
})(window);

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


// Tabs
$(function () {
    $('#teachingTab a:first').tab('show');

    if (/teachingEx/.test(window.location)) {
        $('#teachingTab a[href="#teachingEx"]').tab('show');
    }
    if (/certificate/.test(window.location)) {
        $('#teachingTab a[href="#certificate"]').tab('show');
    }
    if (/statement/.test(window.location)) {
        $('#teachingTab a[href="#statement"]').tab('show');
    }
    if (/ComputerScience/.test(window.location)) {
        $('#coursesTab a[href="#ComputerScience"]').tab('show');
    }
    if (/Japanese/.test(window.location)) {
        $('#coursesTab a[href="#Japanese"]').tab('show');
    }
    if (/NaturalScience/.test(window.location)) {
        $('#coursesTab a[href="#NaturalScience"]').tab('show');
    }
});

$(function () {
    $('#coursesTab a:first').tab('show');

})
/*$('#teachingTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
})*/
/*
$('a[data-toggle="tab"]').on('shown', function (e) {
    e.target // activated tab
    e.relatedTarget // previous tab
})
*/

