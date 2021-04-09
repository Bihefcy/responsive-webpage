window.onscroll = function()
{myFunction()};

var navbar = 
document.getElementById("nav-bar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (windowYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}