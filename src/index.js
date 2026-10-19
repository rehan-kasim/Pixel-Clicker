const clicker = document.getElementById("clicker");
const coffeeAmount = document.getElementById("coffee-amount");
const coffeePerClick = document.getElementById("pixelperclick");
const coffeePerSecond = document.getElementById("pixelpersecond");
const upgradeClick1 = document.getElementById("1clk");
const upgradeClick5 = document.getElementById("5clk");
const upgradeSec100 = document.getElementById("50clk-sec");
const upgradeSec1000 = document.getElementById("1000clk-sec");
const upgradeClick50 = document.getElementById("50clk");
const originalTitle = document.title;
const egg = document.getElementById("estregg1");

let coffee = 0;
let clicks = 0;
let perClick = 1;
let perSecond = 0;
let warned = false;
let intro = false;

function blockKeyboard(e) {
    if (e.detail !== 0) return false;
    if (!warned) { 
        warned = true;
        alert("Use your mouse, coffee holic! ☕");}
    return true;
    };

function save() {
    const data = { coffee, perClick, perSecond, intro};
    localStorage.setItem("CoffeeData", JSON.stringify(data));
}

function load() {
    const saved = localStorage.getItem("CoffeeData");
    if (saved === null) return;

    const data = JSON.parse(saved);
    coffee = data.coffee ?? 0;
    perClick = data.perClick ?? 1;
    perSecond = data.perSecond ?? 0;
    intro = data.intro ?? false;
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
    upgradechecker(upgradeClick1,0);
    upgradechecker(upgradeClick5, 50);
    upgradechecker(upgradeClick50, 1000);
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
    coffeeAmount.textContent = formatNumber(coffee) + " ☕";
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

function cut(x) {
    return Math.floor(x * 100) /100;
}

function formatNumber(n) {
     if (n >= 1e15) return cut(n / 1e15) + "Qa";
     if (n >= 1e12) return cut(n / 1e12) + "T";
     if (n >= 1e9) return cut(n / 1e9) + "B";
     if (n >= 1e6) return cut(n / 1e6) + "M";
     if (n >= 1e3) return cut(n / 1e3) + "K";
     return Math.floor(n);
}

egg.onclick = function (){
    window.alert('You clicked On A forbiden Place Now You Must Face the Consequences removing everything you have!! Haha ngl but this is a function i used to test the game and i thought it would be funny to add it in the game so enjoy this easter egg');
    coffee = 0;
    clicks = 0;
    perClick = 1;
    perSecond = 0;
}

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "Come Back Coffee is Getting Cold";
        return;
    }
    document.title = originalTitle;
});

upgradeClick1.onclick = function () {
    upgradebuy(0, 1000000, 0);
};
upgradeClick5.onclick = function () {
    upgradebuy(50, 5, 0);
};
upgradeClick50.onclick = function () {
    upgradebuy(1000, 50, 0);
};
upgradeSec100.onclick = function () {
    upgradebuy(1000, 0, 50);
};
upgradeSec1000.onclick = function () {
    upgradebuy(100000, 0, 1000);
};

clicker.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

clicker.onclick = function (e) {
    if (blockKeyboard(e)) return;
    coffee += perClick;
    clicks = clicks + 1;
    showFloat(e);
    if (coffee == 404){
    alert(`404 Coffee Not Found This is Just a easter egg`);
    };
    if (coffee >= 100000000) {
        alert("You Won! And Now As A reward You Get Admin Dash Which Is NOT completed :)");
        coffee = 100000000;
    }
    save();
    render();
};

console.log("Coffee Clicker Loaded");
console.log("Hello Developer! If you are reading this, you are probably trying to cheat the game. :)");

load();
render();
setInterval(updatePerSecond, 1000);