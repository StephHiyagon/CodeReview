/*global prompt*/
/*global name:true */
var sprintOne = document.getElementById("sprint-I"),
    sprintTwo = document.getElementById("sprint-II"),
    sprintThree = document.getElementById("sprint-III"),
    sprintContent = document.getElementById("sprint-content"),
    n, //name of user - username
    i,
    username = document.getElementById("username"),
    openDropdown;

function name() {
    "use strict";
    do {
        n = prompt("Bienvenido(a)!\n¿Cuál es tu nombre?");
    } while (n === "");
    username.innerHTML = n;
}

function menu() {
    "use strict";
	document.getElementById("myDropdown").classList.toggle("show");
}
/* HACER LA VALIDACION DE LOS QUIZZES Y FUNCIONALIDAD DE LOS BOTONES
function sprintI() {
    "use strict";
    sprintContent.innerHTML = "<h2>Sprint 1: Introducción a JavaScript</h2>" +
                            "<div class=sprint-info>" +
                                "<ol>" +
                                    "<li>Fundamentos de programación</li>" +
                                    "<li>Funciones</li>" +
                                    "<li>Arreglos</li>" +
                                    "<li>Objetos</li>" +
                                "</ol>" +
                            "</div>" +
                            "<hr>" +
                            "<form>" +
                                "<h3>Quiz</h3>" +
                                "<h3>Existen dos tipos de funciones</h3>" +
                                "<label for='function-type1'>" +
                                    "<input type='radio'name='function-type' required>Expresadas y declaradas<br>" +
                                    "<input type='radio'name='function-type'>Explícitas y declaradas<br>" +
                                    "<input type='radio'name='function-type'>Expresadas y derivadas<br>" +
                                "</label>" +
                                "<h3>Elige una propiedad de los arreglos</h3>" +
                                "<label for='array-property'>" +
                                    "<input type='radio'name='array-property'>Clear<br>" +
                                    "<input type='radio'name='array-property'>Pop<br>" +
                                    "<input type='radio'name='array-property'>Add<br>" +
                                "</label>" +
                                "<h3>Un objeto tiene _ _ _ _ y _ _ _ _</h3>" +
                                "<label for='fill-blank'>" +
                                    "<input type='radio'name='fill-blank'>números y letrasr<br>" +
                                    "<input type='radio'name='fill-blank'>partes y validaciones<br>" +
                                    "<input type='radio'name='fill-blank'>propiedades y valores<br>" +
                                "</label>" +
                            "</form>" +
                            "<br>" +
                            "<button type='submit' onclick='result1()'>ENVIAR</button>";
}

function sprintII() {
    "use strict";
    sprintContent.innerHTML = "<h2>Sprint 2: Introducción al desarrollo web y construcción de páginas web</h2>" +
                            "<div class=sprint-info>" +
                                "<ol>" +
                                    "<li>Ciclo de vida del desarrollo web y arquitectura básica cliente/servidor/configuración del ambiente de trabajo e introducción a Git.</li>" +
                                    "<li>HTML y JavaScript en el navegador</li>" +
                                    "<li>Manejo de comandos básicos de Git en la terminal</li>" +
                                    "<li>Pruebas unitarias</li>" +
                                    "<li>Git/Resolución de conflictos/Branching model</li>" +
                                    "<li>DOM</li>" +
                                "</ol>" +
                            "</div>" +
                            "<hr>" +
                            "<form>" +
                                "<h3>Quiz</h3>" +
                                "<h3>¿Cuál es el comando para iniciar un repositorio desde la consola?</h3>" +
                                "<label for='git-command' required>" +
                                    "<input type='radio' name='git-command' value='1'>git init .<br>" +
                                    "<input type='radio' name='git-command' value='2'>git init<br>" +
                                    "<input type='radio' name='git-command' value='3'>git init add<br>" +
                                "</label>" +
                                "<h3>¿Cuál es la finalidad de hacer una prueba unitaria?</h3>" +
                                "<label for='unit-testing' required>" +
                                    "<input type='radio' name='unit-testing' value='1'>Comprobar que el código funciona correctamente<br>" +
                                    "<input type='radio' name='unit-testing' value='2'>Darle valores  a los parámetros de dichas funciones<br>" +
                                    "<input type='radio' name='unit-testing' value='3'>No tiene ningún fin<br>" +
                                "</label>" +
                                "<h3>¿Qué significa DOM?</h3>" +
                                "<label for='dom' required>" +
                                    "<input type='radio' name='dom' value='1'>Dual Object Model<br>" +
                                    "<input type='radio' name='dom' value='2'>Document Object Model<br>" +
                                    "<input type='radio' name='dom' value='3'>Document Obsolet Model<br>" +
                                "</label>" +
                            "</form>" +
                            "<br>" +
                            "<button type='submit' onclick='result2()'>ENVIAR</button>";
}

function sprintIII() {
    "use strict";
    sprintContent.innerHTML = "<h2>Sprint 3</h2>" +
                            "<p>No hay lecciones(todavía).</p>";
}

function result1() {
    "use strict";
    sprintContent.innerHTML = "<h2>Sprint 1: Introducción a JavaScript</h2>" +
                            "<div class=sprint-info>" +
                                "<ol>" +
                                    "<li>Fundamentos de programación</li>" +
                                    "<li>Funciones</li>" +
                                    "<li>Arreglos</li>" +
                                    "<li>Objetos</li>" +
                                "</ol>" +
                            "</div>" +
                            "<hr>" +
                            "<h3>Quiz</h3>" +
                            "<p>Tienes <span class='points'>0</span> correctas.";
}

function result2() {
    "use strict";
    sprintContent.innerHTML = "<h2>Sprint 2: Introducción al desarrollo web y construcción de páginas web</h2>" +
                            "<div class=sprint-info>" +
                                "<ol>" +
                                    "<li>Ciclo de vida del desarrollo web y arquitectura básica cliente/servidor/configuración del ambiente de trabajo e introducción a Git.</li>" +
                                    "<li>HTML y JavaScript en el navegador</li>" +
                                    "<li>Manejo de comandos básicos de Git en la terminal</li>" +
                                    "<li>Pruebas unitarias</li>" +
                                    "<li>Git/Resolución de conflictos/Branching model</li>" +
                                    "<li>DOM</li>" +
                                "</ol>" +
                            "</div>" +
                            "<hr>" +
                            "<h3>Quiz</h3>" +
                            "<p>Tienes <span class='points'>0</span> correctas.";
}


sprintOne.addEventListener("click", sprintI);
sprintTwo.addEventListener("click", sprintII);
sprintThree.addEventListener("click", sprintIII);
*/
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