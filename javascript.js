var width = window.innerWidth;

function collapse() {
var x = document.getElementById("myNavbar");
if (x.className === "navbar") {
    x.className += " responsive";
} else {
    x.className = "navbar";
}
}

if (width < 1070) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("myNavbar").style.top = "0";
    } else {
        document.getElementById("myNavbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }
}