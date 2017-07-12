// This script inserts the Navbar

// TODO: Add hover images and/or make backgrounds defined in CSS.
// TODO: Dynamically assign image SRC, or define as CSS BGs.

document.write('<span class="nav-bar-btn"><a href="'+ first +'" rel="first prev chapter"><img class="nav_first" src="'+ nav_first +'"></a></span>');
document.write('<span class="nav-divider"><img class="nav_divider" src="'+ nav_divider +'"></span>');
document.write('<span class="nav-bar-btn"><a href="'+ back +'" rel="prev"><img class="nav_back" src="'+ nav_back +'"></a></span>');
document.write('<span class="nav-divider"><img class="nav_divider" src="'+ nav_divider +'"></span>');
document.write('<span class="nav-bar-btn"><a href="'+ next +'" rel="next"><img class="nav_next" src="'+ nav_next +'"></a></span>');
document.write('<span class="nav-divider"><img class="nav_divider" src="'+ nav_divider +'"></span>');
document.write('<span class="nav-bar-btn"><a href="'+ last +'" rel="last next chapter"><img class="nav_last" src="'+ nav_last +'"></a></span>');