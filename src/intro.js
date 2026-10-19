const next = document.getElementById("Next");
const titleofintro = document.getElementById("titleofintro");
const description = document.getElementById("description");

let introslides = 0;

next.onclick = function (){
    if (introslides == 0) {
        description.textContent = "The old owner retired and left you the keys. Every legend starts with one cup, he said, and walked out the door.";
        titleofintro.textContent = "The Keys";
        introslides = introslides + 1;
    }
    else if (introslides == 1) {
        titleofintro.textContent = "The Legend";
        description.textContent = "They say the cafe that brews 1 Quadrillion cups unlocks a secret. Click the cup, hire baristas, and build the biggest coffee empire ever.";
        introslides = introslides + 1;
    }
    else if (introslides == 2) {
        const saved = localStorage.getItem("CoffeeData");
        let data = {};
        if (saved !== null) data = JSON.parse(saved);
        data.intro = true;
        localStorage.setItem("CoffeeData", JSON.stringify(data));
        location.href = "index.html";
    }
}