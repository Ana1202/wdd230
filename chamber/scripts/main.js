// creating a toggle menu for the hamburger button//
function toggleMenu() {
	document.getElementById("primarynav").classList.toggle("open");
}
const x = document.getElementById('hambutton')
x.onclick = toggleMenu;
