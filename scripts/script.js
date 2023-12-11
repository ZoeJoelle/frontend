// JavaScript Document
var uitklap1Button = document.querySelector("footer section:nth-of-type(1) button");
var uitklap1 = document.querySelector("footer section:nth-of-type(1)");

uitklap1Button.onclick = uitklappen1;

function uitklappen1() {
	uitklap1.classList.toggle("open");
}

var uitklap2Button = document.querySelector("footer section:nth-of-type(2) button");
var uitklap2 = document.querySelector("footer section:nth-of-type(2)");

uitklap2Button.onclick = uitklappen2;

function uitklappen2() {
	uitklap2.classList.toggle("open");
}

var uitklap3Button = document.querySelector("footer section:nth-of-type(3) button");
var uitklap3 = document.querySelector("footer section:nth-of-type(3)");

uitklap3Button.onclick = uitklappen3;

function uitklappen3() {
	uitklap3.classList.toggle("open");
}

var uitklap4Button = document.querySelector("footer section:nth-of-type(4) button");
var uitklap4 = document.querySelector("footer section:nth-of-type(4)");

uitklap4Button.onclick = uitklappen4;

function uitklappen4() {
	uitklap4.classList.toggle("open");
}




var openButton = document.querySelector("header > button");
var deNav = document.querySelector("header > nav");
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  deNav.classList.add("open");
}

var sluitButton = document.querySelector("header nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  deNav.classList.remove("open");
}