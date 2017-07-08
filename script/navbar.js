// This script inserts the Navbar

// TODO: Add hover images and/or make backgrounds defined in CSS.
// TODO: Dynamically assign image SRC, or define as CSS BGs.

//document.write('<td><h1>'+ p +'</h1></td>');

document.write('<span class="column-1-5"><a href="'+ first +'" rel="first prev chapter"><img src="ui/nav_first.png"></a></span>');
document.write('<span class="column-1-5"><a href="'+ back +'" rel="prev"><img src="ui/nav_back.png"></a></span>');
document.write('<span class="column-1-5"><a href="'+ next +'" rel="next"><img src="ui/nav_next.png"></a></span>');
document.write('<span class="column-1-5"><a href="'+ last +'" rel="last next chapter"><img src="ui/nav_last.png"></a></span>');