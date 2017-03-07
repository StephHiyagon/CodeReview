var i,
    openDropdown;

function menu() {
    "use strict";
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    "use strict";
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (i = 0; i < dropdowns.length; i += 1) {
			openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};
