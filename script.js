const send = document.querySelector("#send")
const msg = document.querySelector("#msg")

send.onclick = () => {
    msg.style.opacity = "1";
}

const nav = document.querySelector("#navbar")
const toggle = document.querySelector(".toggle")
const nav_toggle = document.querySelector("#toggle")

nav.onclick = () => {
    toggle.style.backgroundImage = "none";
}
// toggle.style.backgroudImage = "none";
// nav_toggle.style.transform = "translateX(0)";