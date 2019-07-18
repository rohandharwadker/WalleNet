var pIndex = 0;
var pIndex2 = 0;
if (document.title == "Home - WN") {
    pIndex = 1;
    pIndex2 = 1;
}
else if (document.title == "Website Builder - WN") {
    pIndex = 0;
    pIndex2 = 2;
}
else if (document.title == "Settings - WN") {
    pIndex = 0
    pIndex2 = 0
}
var ptag = document.getElementsByTagName("P")[pIndex];
var ptag2 = document.getElementsByTagName("P")[pIndex2];
var navbar = document.getElementById('navbar');
var nav_button_wb = document.getElementById("nav_button_wb");
var nav_button_fb = document.getElementById("nav_button_fb");
var nav_button_sw = document.getElementById("nav_button_sw");
var nav_button_set = document.getElementById("nav_button_set");
var main = document.getElementById('main');
var main2 = document.getElementById('main2');
var logo = document.getElementById('logo');
var bodytag = document.getElementById('bodytag');   



// localStorage.removeItem("theme");
// localStorage.theme = "light";
function theme_load() {
    
    if (localStorage.theme == "light") {
        ptag.style.color = 'black';
        ptag2.style.color = 'black';
        navbar.style.backgroundColor = 'white';
        logo.style.backgroundColor = 'white';
        nav_button_set.style.backgroundColor = 'white';
        main.style.backgroundColor = '#ebebeb';
        bodytag.style.backgroundColor = 'white';
        nav_button_wb.style.backgroundColor = 'white';
        main2.style.backgroundColor = '#ebebeb';
        nav_button_fb.style.backgroundColor = 'white';
        nav_button_sw.style.backgroundColor = 'white';
    }
    else if (localStorage.theme == "dark") {
        ptag.style.color = 'grey';
        ptag2.style.color = 'grey';
        navbar.style.backgroundColor = 'black';
        logo.style.backgroundColor = 'black';
        nav_button_set.style.backgroundColor = 'black';
        main.style.backgroundColor = '#303030';
        bodytag.style.backgroundColor = 'black';
        nav_button_wb.style.backgroundColor = 'black';
        main2.style.backgroundColor = '#303030';
        nav_button_fb.style.backgroundColor = 'black';
        nav_button_sw.style.backgroundColor = 'black';
        
        
    }
    else {
        localStorage.theme = "light";
    }
}

function theme_dark() {
    localStorage.theme = "dark";
    ptag.style.color = 'grey';
    ptag2.style.color = 'grey';
    navbar.style.backgroundColor = 'black';
    logo.style.backgroundColor = 'black';
    nav_button_set.style.backgroundColor = 'black';
    main.style.backgroundColor = '#303030';
    bodytag.style.backgroundColor = 'black';
    nav_button_wb.style.backgroundColor = 'black';
    main2.style.backgroundColor = '#303030';
    nav_button_fb.style.backgroundColor = 'black';
    nav_button_sw.style.backgroundColor = 'black';
    
}
function theme_light() {
    localStorage.theme = "light";
    ptag.style.color = 'black';
    ptag2.style.color = 'black';
    navbar.style.backgroundColor = 'white';
    logo.style.backgroundColor = 'white';
    nav_button_set.style.backgroundColor = 'white';
    main.style.backgroundColor = '#ebebeb';
    bodytag.style.backgroundColor = 'white';
    nav_button_wb.style.backgroundColor = 'white';
    main2.style.backgroundColor = '#ebebeb';
    nav_button_fb.style.backgroundColor = 'white';
    nav_button_sw.style.backgroundColor = 'white';
    
}
function check_theme() {
    alert("The current theme is "+localStorage.theme+".");
}
function erase_theme(){
    localStorage.removeItem("theme")
}