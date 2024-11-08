window.addEventListener("scroll", function() {
    var goTopBtn = document.getElementById("goTopBtn");
    if (window.pageYOffset > 100) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
});

window.addEventListener("scroll", function() {
    var goTopBtn = document.getElementById("goTopBtn-footer");
    if (window.pageYOffset > 100) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
});