var num = 0
function clickmov(e) {
    var movie = e.path[1].id;
    var doc = document.getElementById(movie);
    var img = document.querySelector("#" + movie + " img");
    var mw = document.getElementById("mw" + movie);

    var offw = doc.offsetWidth;
    var diff = ((30 / 100) * window.innerWidth - offw < 80);
    num++;
    if (diff) {
        if (num % 2 == 0) {
            // img.style.filter = "grayscale(100%) brightness(30%)";
            doc.style.width = "30%";
            mw.style.display = "none";
        } else {
            doc.style.width = "120%";
            // img.style.filter = "grayscale(0%) brightness(80%)";
            mw.style.display = "flex";
        }
    }
}
