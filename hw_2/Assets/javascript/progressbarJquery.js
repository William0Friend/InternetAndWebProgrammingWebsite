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





