
// Inicio Botones
var mostarOcultar = function(divtexte) {//()<>{}||**++--¿?
	switch(divtexte){
		case "text1": var divtext1 = document.getElementById("text2");
									var divtext2 = document.getElementById("text3");
									break;
		case "text2": var divtext1 = document.getElementById("text1");
									var divtext2 = document.getElementById("text3");
									break;
		case "text3": var divtext1 = document.getElementById("text1");
									var divtext2 = document.getElementById("text2");
									break;
	}
	var divtext = document.getElementById(divtexte);

	if (divtext.style.display == "none" ) {
			divtext1.style.display = "none";
			divtext2.style.display = "none";
			divtext.style.display = "block";
	} else{
		divtext.style.display = "block";
	}
}
var quizResp1= function(area, mostrar) {
	 var cont=0;
	 var mostrar = document.getElementById(mostrar);
	 if((document.getElementById('1aux11').checked==false&& document.getElementById('1aux12').checked==false &&document.getElementById('1ok1').checked==false) ||
	   (document.getElementById('1aux21').checked==false && document.getElementById('1aux22').checked==false && document.getElementById('1ok2').checked==false) ||
		  (document.getElementById('1aux31').checked==false && document.getElementById('1aux32').checked==false && document.getElementById('1ok3').checked==false)){
				alert("Responder todas las preguntas");
	 }else{
		 if(document.getElementById('ok1').checked==true){cont++;};
		 if(document.getElementById('ok2').checked==true){cont++;};
		 if(document.getElementById('ok3').checked==true){cont++;};
		 var area = document.getElementById(area);
		 mostrar.innerHTML = "Tienes "+ cont + " correcta(s).";
		 area.style.display = "none";
		}
}
var quizResp2= function(area, mostrar) {
	 var cont=0;
	 var mostrar = document.getElementById(mostrar);
	 if((document.getElementById('aux11').checked==false&& document.getElementById('aux12').checked==false &&document.getElementById('ok1').checked==false)||
	   (document.getElementById('aux21').checked==false && document.getElementById('aux22').checked==false && document.getElementById('ok2').checked==false) ||
		  (document.getElementById('aux31').checked==false && document.getElementById('aux32').checked==false && document.getElementById('ok3').checked==false)){
				alert("Responda todas las preguntas");
	 }else{
		 if(document.getElementById('ok1').checked==true){cont++;};
		 if(document.getElementById('ok2').checked==true){cont++;};
		 if(document.getElementById('ok3').checked==true){cont++;};
		 var area = document.getElementById(area);
		 mostrar.innerHTML = "Tienes "+ cont + " correcta(s).";
		 area.style.display = "none";
		}
}

//Fin botones
