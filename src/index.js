const clicker = document.getElementById("clicker");
const coffeeAmount = document.getElementById("coffee-amount");
const coffeePerClick = document.getElementById("pixelperclick");
const coffeePerSecond = document.getElementById("pixelpersecond");

let coffee = 0;
let perClick = 1;
let perSecond = 0;

function save() {
    const data = { coffee, perClick, perSecond };
    localStorage.setItem("CoffeeData", JSON.stringify(data));
}

function load() {
    const saved = localStorage.getItem("CoffeeData");
    if (saved === null) return;

    const data = JSON.parse(saved);
    coffee = data.coffee;
    perClick = data.perClick;
    perSecond = data.perSecond;

    coffee = data.coffee ?? 0;
    perClick = data.perClick ?? 1;
    perSecond = data.perSecond ?? 0;


perSecond = data.perSecond ?? 0;
}

function render() {
    coffeePerClick.textContent = perClick + " ☕";
    coffeePerSecond.textContent = perSecond + " ☕";
    coffeeAmount.textContent = coffee + " ☕";
}

clicker.onclick = function () {
    coffee += perClick;
    save();
    render();
};

function updatePerSecond() {
    coffee += perSecond;
    save();
    render();
}

load();
render();
setInterval(updatePerSecond, 1000);