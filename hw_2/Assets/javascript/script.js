/* play video half as fast */
//document.querySelector('video').defaultPlaybackRate = 0.5;
//document.querySelector('video').play();

wiggle = document.getElementById("btn-black-square-1");

function scrollProgressBar() {
    var getMax = function () {
        return $(document).height() - $(window).height();
    };

    var getValue = function () {
        return $(window).scrollTop();
    };

    var progressBar = $(".my-progress-bar"),
        max = getMax(),
        value,
        width;

    var getWidth = function () {
        // Calculate width in percentage
        value = getValue();
        width = (value / max) * 100;
        width = width + "%";
        return width;
    };

    var setWidth = function () {
        progressBar.css({ width: getWidth() });
    };

    $(document).on("scroll", setWidth);
    $(window).on("resize", function () {
        // Need to reset max
        max = getMax();
        setWidth();
    });
}


$(document).ready(function () {
    //SF_scripts();

    scrollProgressBar();
});









//Change button dynmamically, does not work right, needs events seperated to variables
document.addEventListener("click", greatChoice);

function greatChoice() {
    document.getElementById("buy1").innerHTML = "Great Choice!";
}

document.addEventListener("click", () => {
    document.getElementById("sell1").innerHTML = "CLick Me!";
    document.getElementById("sell1").classList.add("danger");
});


document.addEventListener("click", () => {
    document.getElementById("sell1").innerHTML = "CLick Me!";
});

d = document.getElementById("")