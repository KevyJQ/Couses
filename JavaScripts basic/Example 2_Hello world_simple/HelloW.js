function saludos(){
	alert("Hello World alert!!");	//Mando una alerta con el mensaje
}

function saludo2(){
	document.write("Hello World!!");	//Imprimo Hola mundo
	setInterval(() => {	// Doy un delay de 2 seg
		window.location.href = window.location.href;	//Regreso a la pagina anterior
	}, 2000);
}