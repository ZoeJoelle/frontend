// JavaScript Document
var deButton = document.querySelector("button");
var deSection = document.querySelector("section");

deButton.onclick = toggleMenu;

function toggleMenu() {
	deSection.classList.toggle("open");
}