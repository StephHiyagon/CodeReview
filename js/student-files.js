function showList() {
    "use strict";
    var profiles = [ {
            nombre : "Meche",
            apellido : "Zubieta",
            promocion : "1era. promoción",
            estado : "Trabajando"
        }, {
            nombre : "Arabela",
            apellido : "Rojas",
            promocion : "2era. promoción",
            estado : "Trabajando"
        }, {
            nombre : "María",
            apellido : "Rosán",
            promocion : "2era. promoción",
            estado : "Trabajando"
        }, {
            nombre : "Guadalupe",
            apellido : "Racio",
            promocion : "3era. promoción",
            estado : "Trabajando"
        }, {
            nombre : "Sara",
            apellido : "Casa",
            promocion : "3era. promoción",
            estado : "Trabajando"
        }, {
            nombre : "Daniela",
            apellido : "Durán",
            promocion : "4ta. promoción",
            estado : "Trabajando"
        }, {
            nombre : "Michelle",
            apellido : "Seguil",
            promocion : "4ta. promoción",
            estado : "Trabajando"
        }, {
            nombre : "Diana",
            apellido : "Navarro",
            promocion : "5ta. promoción",
            estado : "Trabajando"
        } ],
        list = "",
        p = document.getElementById("students");

    profiles.forEach(function (e) {
        list += "<div class = 'students'>" +
                    "<ul style='list-style: none'>" +
                        "<li> Nombre: " + e.nombre + "</li>" +
                        "<li>Apellido: " + e.apellido + "</li>" +
                        "<li>Promoción: " + e.promocion + "</li>" +
                        "<li>Estado: " + e.estado + "</li>" +
                    "</ul>" +
                "</div>";
    });

    p.innerHTML = list;
}

showList();
