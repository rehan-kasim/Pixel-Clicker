# Coffee Clicker ☕
A simple coffee clicker game i made for the browser. Click the cup, buy upgrades and try to reach 1 quadrillion coffee. Made with Html, Tailwind CSS v4 and vanilla JavaScript. Your progress is saved in `localStorage`.

## Description

* Click the cup to get coffee, a floating `+N ☕` shows up every click
* 5 upgrades, some for coffee per click and some for coffee per second
* Autosave, big numbers get short (K, M, B, T, Qa) and dark mode turns on by itself
* A small story intro for new players and a custom 404 page

### Easter Eggs
<details>
<summary>Spoilers</summary>

* Click the word "Upgrade" in the top bubble to reset everything
* Land on exactly 404 coffee
* Press Enter or Space on the cup
* Switch tabs and look at the tab title
* Open the browser console (F12)
* Go to a page that does not exist
* Reach 1 quadrillion coffee

</details>

### Screenshots
![Coffee Clicker gameplay](https://user-cdn.hackclub-assets.com/01a17d7f-8827-745b-8de0-c64b07e58c2c/img.webp)

## Getting Started

### Dependencies

* A modern web browser
* Node.js, only if you want to rebuild the CSS

### Installing

```
git clone https://github.com/rehan-kasim/Pixel-Clicker.git
cd Pixel-Clicker
```

### Executing program

* Open `src/index.html` with VS Code Live Server
* To rebuild the styles:

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

## Help

To reset your progress, run this in the browser console (F12) and then refresh:

```
localStorage.removeItem("CoffeeData")
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
