// dark-theme
const icon = document.querySelector("#icon")

icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    } else {
      icon.classList.add("fa-moon")
      icon.classList.remove("fa-sun")
    }
}

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
