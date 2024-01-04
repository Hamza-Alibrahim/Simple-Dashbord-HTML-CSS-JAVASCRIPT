const body = document.querySelector("body");
let dashbord = body.querySelector(".dashbord");
let container = body.querySelector(".container");
let arrow = document.getElementById("bar");
let toggleSwitch = body.querySelector(".container label span");
let text = document.getElementById("mode");

arrow.onclick = function () {
    container.classList.toggle("close");
    dashbord.classList.toggle("close");
}

toggleSwitch.onclick = function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        console.log(text.innerHTML)
        text.textContent = "Light mode";
    } else {
        text.textContent = "Dark mode";
    }
}