//Navbar

var width = window.innerWidth;

function collapse() {
var x = document.getElementById("myNavbar");
if (x.className === "navbar") {
    x.className += " responsive";
    scrollTo(0,0)
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



//Filtering Videos
filterTab("filter-1");
function filterTab(c) {
    var x, i;
    x = document.getElementsByClassName("home-tab");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "promo-show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "promo-show");
    }
}
var btnCont = document.getElementById("home-promohead-buttons-cont");
var btn = btnCont.getElementsByClassName("home-promohead-button");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("promohead-btn-active");
    current[0].className = current[0].className.replace(" promohead-btn-active", "");
    this.className += " promohead-btn-active";
  });
}



//Filtering Videos
filterSelection("all");
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("video");
if (c == "all") c = "";
for (i = 0; i < x.length; i++) {
    removeClass(x[i], "video-show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "video-show");
}
}

function addClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
}
}

function removeClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
}
element.className = arr1.join(" ");
}

//Add active class to the current button (highlight it)
var btnContainer = document.getElementById("video-filter-button-container");
var btns = btnContainer.getElementsByClassName("video-filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("vfb-active");
    current[0].className = current[0].className.replace(" vfb-active", "");
    this.className += " vfb-active";
  });
}