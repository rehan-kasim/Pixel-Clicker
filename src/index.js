const clicker = document.getElementById("clicker");
const coffeeAmount = document.getElementById("coffee-amount");
const coffeePerClick = document.getElementById("pixelperclick");
const coffeePerSecond = document.getElementById("pixelpersecond");
const upgradeClick1 = document.getElementById("1clk");
const upgradeClick5 = document.getElementById("5clk");
const upgradeSec100 = document.getElementById("50clk-sec");
const upgradeSec1000 = document.getElementById("1000clk-sec");

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
    coffee = data.coffee ?? 0;
    perClick = data.perClick ?? 1;
    perSecond = data.perSecond ?? 0;
}

function upgradechecker(btn, price) {
    if (coffee < price) {
        btn.style.opacity = "0.4";
        btn.style.cursor = "not-allowed";
        btn.style.borderColor = "red";
        return;
    }
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.style.borderColor = "";
}

function updateUpgrades() {
    upgradechecker(upgradeClick1, 10);
    upgradechecker(upgradeClick5, 50);
    upgradechecker(upgradeSec100, 1000);
    upgradechecker(upgradeSec1000, 100000);
}

function showFloat(e) {
    const span = document.createElement("span");
    span.textContent = "+" + perClick + " ☕";
    span.className = "float-text";
    span.style.left = e.clientX + "px";
    span.style.top = e.clientY + "px";
    document.body.appendChild(span);

    span.addEventListener("animationend", () => span.remove());
}

function render() {
    coffeePerClick.textContent = perClick + " ☕";
    coffeePerSecond.textContent = perSecond + " ☕";
    coffeeAmount.textContent = coffee + " ☕";
    updateUpgrades();
}

function updatePerSecond() {
    coffee += perSecond;
    save();
    render();
}

function upgradebuy(price, clkpercoffee, clkpersec) {
    if (coffee >= price) {
        coffee = coffee - price;
        perClick = perClick + clkpercoffee;
        perSecond = perSecond + clkpersec;
        render();
    };
}

upgradeClick1.onclick = function () {
    upgradebuy(10, 1, 0);
};
upgradeClick5.onclick = function () {
    upgradebuy(50, 5, 0);
};
upgradeSec100.onclick = function () {
    upgradebuy(1000, 0, 50);
};
upgradeSec1000.onclick = function () {
    upgradebuy(100000, 0, 1000);
};

clicker.onclick = function (e) {
    coffee += perClick;
    showFloat(e);
    save();
    render();
};

load();
render();
setInterval(updatePerSecond, 1000);