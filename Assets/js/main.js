/*global prompt, alert, document, window*/
/*global name:true */
var n, //name of user - username
    username = document.getElementById("username"),
    openDropdown,
    mostarOcultar,
    divtext1,
    divtext2,
    divtext,
    cont,
    quizResp1,
    mostrar,
    area,
    i;

    /*function name() {
        "use strict";
        do {
            n = prompt("Bienvenido(a)!\n¿Cuál es tu nombre?");
        } while (n === "");
        username.innerHTML = n;
    }
    */

function menu() {
    "use strict";
	document.getElementById("myDropdown").classList.toggle("show");
}
//FUNCIONALIDAD BOTONES
mostarOcultar = function (divtexte) {
    "use strict";
	switch (divtexte) {
    case "text1":
        divtext1 = document.getElementById("text2");
        divtext2 = document.getElementById("text3");
        break;
    case "text2":
        divtext1 = document.getElementById("text1");
        divtext2 = document.getElementById("text3");
        break;
    case "text3":
        divtext1 = document.getElementById("text1");
        divtext2 = document.getElementById("text2");
        break;
	}

	divtext = document.getElementById(divtexte);

	if (divtext.style.display === "none") {
        divtext1.style.display = "none";
        divtext2.style.display = "none";
        divtext.style.display = "block";
	} else {
		divtext.style.display = "block";
	}
};

quizResp1 = function (area, mostrar) {
    "use strict";
	cont = 0;
	mostrar = document.getElementById(mostrar);

	if ((document.getElementById('1aux11').checked === false &&
        document.getElementById('1aux12').checked === false &&
        document.getElementById('1ok1').checked === false) || (document.getElementById('1aux21').checked === false &&
        document.getElementById('1aux22').checked === false &&
        document.getElementById('1ok2').checked === false) || (document.getElementById('1aux31').checked === false &&
        document.getElementById('1aux32').checked === false &&
        document.getElementById('1ok3').checked === false)) {
        alert("Responder todas las preguntas");
    } else if (document.getElementById('ok1').checked === true) {
        cont += 1;
    } else if (document.getElementById('ok2').checked === true) {
        cont += 1;
    } else if (document.getElementById('ok3').checked === true) {
        cont += 1;
    }

	area = document.getElementById(area);
    mostrar.innerHTML = "Tienes " + cont + " correcta(s).";
	area.style.display = "none";
};

var quizResp2 = function (area, mostrar) {
    "use strict";
    cont = 0;
	mostrar = document.getElementById(mostrar);

    if ((document.getElementById('aux11').checked === false &&
         document.getElementById('aux12').checked === false &&
         document.getElementById('ok1').checked === false) || (document.getElementById('aux21').checked === false && document.getElementById('aux22').checked === false &&
         document.getElementById('ok2').checked === false) || (document.getElementById('aux31').checked === false && document.getElementById('aux32').checked === false &&
         document.getElementById('ok3').checked === false)) {
        alert("Responda todas las preguntas");
    } else if (document.getElementById('ok1').checked === true) {
        cont += 1;
    } else if (document.getElementById('ok2').checked === true) {
        cont += 1;
    } else if (document.getElementById('ok3').checked === true) {
        cont += 1;
    }
    area = document.getElementById(area);
    mostrar.innerHTML = "Tienes " + cont + " correcta(s).";
    area.style.display = "none";
};
//FUNCIONALIDAD BOTONES
name();

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
