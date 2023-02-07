let banner = document.getElementsByClassName("banner")
//banner.style.alignContent("center");
//banner.style.maxWidth("100");
//banner.style.height("auto");

let win = window.onbeforeunload

window.onbeforeunload = ExitPage;
    function ExitPage()
{
    getit()
    return alert("you dont exit skeltons.com...Do you?"); 
}
function getit() {
console.log("I am in getit")
}
