var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


window.onscroll = function() {
    var nav = document.getElementById("navbar");
    var nav_button_wb = document.getElementById("nav_button_wb")
    var nav_button_fb = document.getElementById("nav_button_fb")
    var nav_button_sw = document.getElementById("nav_button_sw")
    var nav_button_set = document.getElementById("nav_button_set")
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("links1");
        nav_button_wb.classList.add("links1")
        nav_button_fb.classList.add("links1")
        nav_button_sw.classList.add("links1")
        nav_button_set.classList.add("links1")
        // var nav_button_array = document.getElementsByClassName("dropbtn");
        // for(var i = 0; i < nav_button_array.length; i++)
        // {
        //     nav_button_array[i].className += " links1";
        // }
    } else { 
        nav.classList.remove("links1");
        nav_button_wb.classList.remove("links1")
        nav_button_fb.classList.remove("links1")
        nav_button_sw.classList.remove("links1")
        nav_button_set.classList.remove("links1")
        // for(var i = 0; i < nav_button_array.length; i++)
        // {
        //     nav_button_array[i].className -= "links1";
        // }
    }
}



function write_song() {
    var name = document.getElementById('name').value
    var artist = document.getElementById('artist').value
    var rating = document.getElementById('rating').value
    var newP = $('<p>');
    if (name != "" && artist != "" && rating != 0) {
        newP.text(name+" by "+artist+", "+rating+" stars");
        $('.stored-songs').append(newP);
        window.location.href = 'sw.html#stor-song';
    }
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function open_modal() {
    if (localStorage.visit != "true") {
        localStorage.visit = "true";
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}