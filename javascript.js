var width = window.innerWidth;

function collapse() {
var x = document.getElementById("myNavbar");
if (x.className === "navbar") {
    x.className += " responsive";
} else {
    x.className = "navbar";
}
}
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (currentScrollPos > 60) {
    document.getElementById("myNavbar").style.boxShadow= "0 3px 3px rgba(0,0,0,0.5)";
} else {
    document.getElementById("myNavbar").style.boxShadow= "none"
}
}