window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = navlist.offsetTop;

/* Function to stick the nav bar */
function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    }
    else {
        nav.classList.remove("sticky");
    }
}

