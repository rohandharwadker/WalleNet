var pIndex = 0;
var pIndex2 = 0;
if (document.title == "Home - WN") {
    pIndex = 3;
    pIndex2 = 3;
}
else if (document.title == "Website Builder - WN") {
    pIndex = 0;
    pIndex2 = 2;
}
else if (document.title == "Settings - WN") {
    pIndex = 0;
    pIndex2 = 0;
}
else if (document.title == "Tutorials - WN") {
    pIndex = 0;
    pIndex2 = 0;
}
var bodytag = document.getElementById('bodytag');
var nav_button_set = document.getElementById("nav_button_set");
var nav_button_app = document.getElementById("nav_button_ap");
var nav_button_wb = document.getElementById("nav_button_wb");
var nav_button_tt = document.getElementById('nav_button_tt');
var navbar = document.getElementById('navbar');
var logo = document.getElementById('logo');
var ptag = document.getElementsByTagName("P")[pIndex];
var ptag2 = document.getElementsByTagName("P")[pIndex2];
var nav_button_fb = document.getElementById("nav_button_fb");
var nav_button_sw = document.getElementById("nav_button_sw");
var main = document.getElementById('main');
var main2 = document.getElementById('main2');





// localStorage.removeItem("theme");
// localStorage.theme = "light";
function theme_load() {
    
    if (localStorage.theme == "light") {
        bodytag.style.backgroundColor = 'white';
        nav_button_set.style.backgroundColor = 'white';
        nav_button_app.style.backgroundColor = 'white';
        nav_button_wb.style.backgroundColor = 'white';
        nav_button_tt.style.backgroundColor = 'white';
        logo.style.backgroundColor = 'white';
        ptag.style.color = 'black';
        ptag2.style.color = 'black';
        navbar.style.backgroundColor = 'white';
        main.style.backgroundColor = '#ebebeb';
        main2.style.backgroundColor = '#ebebeb';
        nav_button_fb.style.backgroundColor = 'white';
        nav_button_sw.style.backgroundColor = 'white';
    }
    else if (localStorage.theme == "dark") {
        bodytag.style.backgroundColor = 'black';
        nav_button_set.style.backgroundColor = 'black';
        nav_button_app.style.backgroundColor = 'black';
        nav_button_wb.style.backgroundColor = 'black';
        nav_button_tt.style.backgroundColor = 'black';
        logo.style.backgroundColor = 'black';
        ptag.style.color = 'grey';
        ptag2.style.color = 'grey';
        navbar.style.backgroundColor = 'black';
        main.style.backgroundColor = '#303030';
        main2.style.backgroundColor = '#303030';
        nav_button_fb.style.backgroundColor = 'black';
        nav_button_sw.style.backgroundColor = 'black';
        
        
    }
    else {
        localStorage.theme = "light";
    }
}

function theme_dark() {
    bodytag.style.backgroundColor = 'black';
    nav_button_app.style.backgroundColor = 'black';
    nav_button_set.style.backgroundColor = 'black';
    nav_button_wb.style.backgroundColor = 'black';
    nav_button_tt.style.backgroundColor = 'black';
    logo.style.backgroundColor = 'black';
    localStorage.theme = "dark";
    ptag.style.color = 'grey';
    ptag2.style.color = 'grey';
    navbar.style.backgroundColor = 'black';
    nav_button_app.style.backgroundColor = 'black';
    nav_button_set.style.backgroundColor = 'black';
    main.style.backgroundColor = '#303030';
    nav_button_wb.style.backgroundColor = 'black';
    main2.style.backgroundColor = '#303030';
    nav_button_fb.style.backgroundColor = 'black';
    nav_button_sw.style.backgroundColor = 'black';
    
}
function theme_light() {
    bodytag.style.backgroundColor = 'white';
    nav_button_set.style.backgroundColor = 'white';
    nav_button_app.style.backgroundColor = 'white';
    nav_button_wb.style.backgroundColor = 'white';
    nav_button_tt.style.backgroundColor = 'white';
    logo.style.backgroundColor = 'white';
    localStorage.theme = "light";
    ptag.style.color = 'black';
    ptag2.style.color = 'black';
    navbar.style.backgroundColor = 'white';
    nav_button_set.style.backgroundColor = 'white';
    nav_button_app.style.backgroundColor = 'white';
    main.style.backgroundColor = '#ebebeb';
    nav_button_wb.style.backgroundColor = 'white';
    main2.style.backgroundColor = '#ebebeb';
    nav_button_fb.style.backgroundColor = 'white';
    nav_button_sw.style.backgroundColor = 'white';
    
}
function check_theme() {
    alert("The current theme is "+localStorage.theme+".");
}
function erase_theme(){
    localStorage.removeItem("theme");
    localStorage.removeItem("visit");
}