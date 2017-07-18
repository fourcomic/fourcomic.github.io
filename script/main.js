// Calculates page links using Chapter/Page Queary Variables

// #==============================================================#
// | TODO: Add defaults and invalid manually-entered ID handling? |                     
// |       Special Queary Variable ID for special links?          |
// #==============================================================#

// ---- UPDATE THESE VALUES: ----

var lastAct = 0; // Most recent chapter.
var lastPage = [1, 0]; // Most recent page for each chapter.
var lastBlog = 0; // Temporary Fix. Eventually calculate most recent.

// ---- UPDATE THESE VALUES: ----

// Default Nav URLs and button images

var indexURL = "https://fourcomic.github.io";
var storyURL = "story.html";
var archiveURL = "archive.html";
var aboutURL = "about.html";
var extrasURL = "extras.html";

/*
var banner = "ui/battle_header.png";
var nav_first = "ui/battle_first.png";
var nav_back = "ui/battle_back.png";
var nav_next = "ui/battle_next.png";
var nav_last = "ui/battle_last.png";
var nav_divider = "ui/battle_divider.png";
*/

var banner = "ui/thread_header.png";
var nav_first = "ui/nav_first.png";
var nav_back = "ui/nav_back.png";
var nav_next = "ui/nav_next.png";
var nav_last = "ui/nav_last.png";
var nav_divider = "ui/nav_divider.png";

var a = parseInt(getVariable('a'));
var p = parseInt(getVariable('p'));
var s = getVariable('s');
var clampA = Math.max(0, Math.min(a, lastAct));
var clampP = Math.max(0, Math.min(p, lastPage[clampA]));

if (page == "index") {
	// alert ("Index Page");
	a = lastAct;
	p = lastPage[a];
}
else if (a != clampA || p != clampP) {
	// alert ("Not Index Page")
	a = clampA;
	p = clampP;
	if (a >= lastAct && p+1 >= lastPage[a]) {
		window.location.href = indexURL;
	}
	else {
		window.location.href = storyURL + "?a="+ a +"&p="+ p;
	}
}

var disqusIdentifier = "Act "+ a +", Page "+ p;

var first = indexURL;
var back = indexURL;
var next = indexURL;
var last = indexURL;

if (a <= 0) {
	first = storyURL + "?a=0&p=0";
	if (p <= 0) {
		back = storyURL + "?a=0&p=0"; }
	else {
		back = storyURL + "?a=0&p="+ (p-1); } }
else {
	if (p <= 0) {
		first = storyURL + "?a="+ (a-1) +"&p=0";
		back = storyURL + "?a="+ (a-1) +"&p="+ lastPage[a-1]; }
	else {
		first = storyURL + "?a="+ a +"&p=0";
		back = storyURL + "?a="+ a +"&p="+ (p-1); } }

if (a >= lastAct) {
	next = indexURL;
	if ((p+1) >= lastPage[lastAct] || lastPage[lastAct] == null) {
		next = indexURL; }
	else {
		next = storyURL + "?a="+ a +"&p="+ (p+1); } }
else {
	last = storyURL + "?a="+ (a+1) +"&p="+ 0;
	if (p >= lastPage[a]) {
		next = storyURL + "?a="+ (a+1) +"&p="+ 0; 	}
	else {
		next = storyURL + "?a="+ a +"&p="+ (p+1); } }

// Before page content is loaded:
// IF s has a value, load s.html.

// After page content is loaded:
// If overrideNext or overridePrev has a value, override it with a new one.

// Toggles Spoiler Visibility
$(document).ready(function(){
	$(".spoiler").click(function(){
		$(this).children(".spoiler-content").slideToggle(300);
		event.stopPropagation();
	});
	$(".spoiler-content").click(function(){
		event.stopPropagation();
	});
});

// Loads CSS, Page, and Blog Content
$(document).ready(function(){

	// Special handling for S variable. Acts as string for HTML.
	
	$(".content").load("page/Act_" + a + "/" + p + ".html", function( response, status, xhr ){
		if ( status == "error") {
			disqusIdentifier = "Zone -1";
			$( ".content" ).html('<div class="error"><img src="ui/404.png"><br><div>The referenced page cannot be found.</div><div style="font-size: 0.75em;">' + xhr.status + ' ' + xhr.statusText + ' on Act: ' + a + ', Page: ' + p + ', Special: ' + s + '</div></div>');
		}
	});
/*
	$(".blog").load("blog/" + a + "/" + lastBlog + ".html", function( response, status, xhr ){
		// alert ("Blog Loaded");
		if ( status == "error") {
			$(".blog-wrapper").addClass("hide");
			// alert ("Blog Error");
		}
	});
*/
	//$("#comment-title").html("Suggestion Box: (" + disqusIdentifier + ")");
});

// Get PHP-Style Queary Variables from URL
function getVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(-1);
}

// Navbar Links:
$('.nav-first').click(function() {
	alert ("Redirect Attempt");
	window.location.href = "http://stackoverflow.com";
});