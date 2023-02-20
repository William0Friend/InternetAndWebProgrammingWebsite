/* play video half as fast */
//document.querySelector('video').defaultPlaybackRate = 0.5;
//document.querySelector('video').play();
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