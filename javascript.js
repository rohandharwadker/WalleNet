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



// Animation
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top+100, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));



$(".animation").inViewport(function(px){
    if(px) $(this).addClass("animationTrigger") ;
});