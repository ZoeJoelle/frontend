// JavaScript Document


//uiklappen footer

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


//menu

var openButton = document.querySelector("header > button");
var deNav = document.querySelector("header > nav");
openButton.onclick = openMenu;

function openMenu() {
  deNav.classList.add("open");
}

var sluitButton = document.querySelector("header nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  deNav.classList.remove("open");
}



//uiklappen jaarkaarten

var uitklapButtonBrons = document.querySelector("section:nth-of-type(2) section:first-of-type button:nth-of-type(3)");
var uitklapBrons = document.querySelector("section:nth-of-type(2) section:first-of-type");

uitklapButtonBrons.onclick = uitklappenBrons;

function uitklappenBrons() {
	uitklapBrons.classList.toggle("open");
}


var uitklapButtonZilver = document.querySelector("section:nth-of-type(2) section:nth-of-type(2) button:nth-of-type(3)");
var uitklapZilver = document.querySelector("section:nth-of-type(2) section:nth-of-type(2)");

uitklapButtonZilver.onclick = uitklappenZilver;

function uitklappenZilver() {
	uitklapZilver.classList.toggle("open");
}

var uitklapButtonGoud = document.querySelector("section:nth-of-type(2) section:nth-of-type(3) button:last-of-type");
var uitklapGoud = document.querySelector("section:nth-of-type(2) section:nth-of-type(3)");

uitklapButtonGoud.onclick = uitklappenGoud;

function uitklappenGoud() {
	uitklapGoud.classList.toggle("open");
}



//uiklappen tweede pagina ding

var uitklapButton1 = document.querySelector("section:nth-of-type(5) > section img");
var uitklap1 = document.querySelector("section:nth-of-type(5) > section");

uitklapButton1.onclick = uitklappen1;

function uitklappen1() {
	uitklap1.classList.toggle("open");
}




//kalender veranderen

var knop1 = document.querySelector("main section:nth-child(7) section:nth-of-type(1) button:first-of-type");
var actie1 = document.querySelector("main section:nth-child(7) section:nth-of-type(1)");

var knop2 = document.querySelector("main section:nth-child(7) section:nth-of-type(1) button:last-of-type");

var plaatje1 = document.querySelector("main section:nth-child(7) section:nth-of-type(2) img:first-of-type")
var plaatje2 = document.querySelector("main section:nth-child(7) section:nth-of-type(2) img:nth-of-type(2)")

// Voeg event listeners toe aan de knoppen
knop1.addEventListener("click", toonPlaatje1);
knop2.addEventListener("click", toonPlaatje2);

// Functie om plaatje 1 te tonen
function toonPlaatje1() {
    plaatje1.classList.add("zichtbaar");
    plaatje2.classList.remove("zichtbaar");
}

// Functie om plaatje 2 te tonen
function toonPlaatje2() {
    plaatje1.classList.remove("zichtbaar");
    plaatje2.classList.add("zichtbaar");
}
