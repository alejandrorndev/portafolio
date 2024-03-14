"use strict";

/*loader*/
document.addEventListener("DOMContentLoaded", function() {
    // Simular una carga de 2 segundos
    setTimeout(function(){
        // Ocultar el loader después de 3 segundos
        document.getElementById("loader-wrapper").style.display = "none";

        // Mostrar el contenido de la página
        document.getElementById("content").style.display = "block";
    }, 2000);
});

/*loader*/

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");
const toggle = document.getElementById("toggle");
const containerMain = document.querySelector(".container-main");
const btnswitch = document.querySelector('#switch');

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

/*cursor*/
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
/*cursor*/

btnswitch.addEventListener('click', () => {
	document.body.classList.toggle('ligth');
	btnswitch.classList.toggle('activo')

	// Localstorge
	if(document.body.classList.contains('ligth')) {
	  localStorage.setItem('ligth', 'true');
	 } else {
	  localStorage.setItem('ligth', 'false');
	}

	const imagenLigth = document.querySelector('.logo');
	const imagenDark = document.querySelector('.logoDark')
	const imagenTools = document.querySelector('.logoTools');
	const logoCssTools = document.querySelector('.logoCssTools');
	const logoJavascriptTools = document.querySelector('.logoJavascriptTools');
	const logoSassTools = document.querySelector('.logoSassTools');
	const logoGitTools = document.querySelector('.logoGitTools');
	const logoGithubTools = document.querySelector('.logoGithubTools');
	const logoPhpTools = document.querySelector('.logophpTools');
	const logoVueTools = document.querySelector('.logoVueTools');


	

	if (document.body.classList.contains('ligth')) {
        imagenTools.src = 'assets/tools/htmlon.png';
        logoCssTools.src = 'assets/tools/csson.png';
        logoJavascriptTools.src = 'assets/tools/javascripton.png';
        logoSassTools.src = 'assets/tools/sasson.png';
        logoGitTools.src = 'assets/tools/giton.png';
        logoGithubTools.src = 'assets/tools/githubon.png';
        imagenLigth.src = 'assets/logo/Recurso35on.svg';
        imagenDark.src = 'assets/logo/Recurso30on.png';
		logoPhpTools.src = 'assets/tools/php1.png';
		logoVueTools.src = 'assets/tools/vueoff.png';
    } else {
        imagenTools.src = 'assets/tools/htmloff.png';
        logoCssTools.src = 'assets/tools/cssoff.png';
        logoJavascriptTools.src = 'assets/tools/javascriptoff.png';
        logoSassTools.src = 'assets/tools/sassoff.png';
        logoGitTools.src = 'assets/tools/gitoff.png';
        logoGithubTools.src = 'assets/tools/githuboff.png';
        imagenLigth.src = 'assets/logo/Recurso33off.svg';
        imagenDark.src = 'assets/logo/Recurso32off.png';
		logoPhpTools.src = 'assets/tools/php.png';
		logoVueTools.src = 'assets/tools/vue.png';


    }
});

if(localStorage.getItem('ligth') === 'true') {
	document.body.classList.add('ligth');
	btnswitch.classList.add('activo');

	const imagenLigth = document.querySelector('.logo');
	const imagenDark = document.querySelector('.logoDark')
	const imagenTools = document.querySelector('.logoTools');
	const logoCssTools = document.querySelector('.logoCssTools');
	const logoJavascriptTools = document.querySelector('.logoJavascriptTools');
	const logoSassTools = document.querySelector('.logoSassTools');
	const logoGitTools = document.querySelector('.logoGitTools');
	const logoGithubTools = document.querySelector('.logoGithubTools');
	const logoPhpTools = document.querySelector('.logophpTools');
	const logoVueTools = document.querySelector('.logoVueTools');


	imagenTools.src = 'assets/tools/htmlon.png';
	logoCssTools.src = 'assets/tools/csson.png';
	logoJavascriptTools.src = 'assets/tools/javascripton.png';
	logoSassTools.src = 'assets/tools/sasson.png';
	logoGitTools.src = 'assets/tools/giton.png';
	logoGithubTools.src = 'assets/tools/githubon.png';
	imagenLigth.src = 'assets/logo/Recurso35on.svg';
	imagenDark.src = 'assets/logo/Recurso30on.png';
	logoPhpTools.src = 'assets/tools/php.png';
	logoVueTools.src = 'assets/tools/vue.png';


} else {
	const imagenLigth = document.querySelector('.logo');
	const imagenDark = document.querySelector('.logoDark')
	const imagenTools = document.querySelector('.logoTools');
	const logoCssTools = document.querySelector('.logoCssTools');
	const logoJavascriptTools = document.querySelector('.logoJavascriptTools');
	const logoSassTools = document.querySelector('.logoSassTools');
	const logoGitTools = document.querySelector('.logoGitTools');
	const logoGithubTools = document.querySelector('.logoGithubTools');
	const logoPhpTools = document.querySelector('.logophpTools');
	const logoVueTools = document.querySelector('.logoVueTools');


	imagenTools.src = 'assets/tools/htmloff.png';
	logoCssTools.src = 'assets/tools/cssoff.png';
	logoJavascriptTools.src = 'assets/tools/javascriptoff.png';
	logoSassTools.src = 'assets/tools/sassoff.png';
	logoGitTools.src = 'assets/tools/gitoff.png';
	logoGithubTools.src = 'assets/tools/githuboff.png';
	imagenLigth.src = 'assets/logo/Recurso33off.svg';
	imagenDark.src = 'assets/logo/Recurso32off.png';
	logoPhpTools.src = 'assets/tools/php1.png';
	logoVueTools.src = 'assets/tools/vueoffpng';


}

const buttons = document.querySelectorAll('.menu-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('selected'));
    button.classList.add('selected');
  });
});
buttons[0].classList.add('selected');

async function changeLanguage(language) {
	const requestJson = await fetch(`lenguages/${language}.json`);
	const texts = await requestJson.json();

	for (const textToChange of textsToChange) {
		const section = textToChange.dataset.section;
		const value = textToChange.dataset.value;

		textToChange.innerHTML = texts[section][value];

	}
}

flagsElement.addEventListener("click", (e) => {
	changeLanguage(e.target.parentElement.dataset.language);
});

document.addEventListener('DOMContentLoaded', () => {
	const btnHome = document.getElementById('btn-home');
	const btnAbout = document.getElementById('btn-about');
	const btnResumen = document.getElementById('btn-resumen');
	const btnPortfolio = document.getElementById('btn-portfolio');
	const btnExperiencia = document.getElementById('btn-experiencia');
	const btnContact = document.getElementById('btn-contact');
	const divHome = document.getElementById('content-home');
	const divAbout = document.getElementById('content-about');
	const divResumen = document.getElementById('content-resumen');
	const divPortfolio = document.getElementById('content-portfolio');
	const divExperiencia = document.getElementById('content-experiencia');
	const divContact = document.getElementById('content-contact');


	function checkIfOpen() {
		let btnActive = document.querySelector('.active');
		if (btnActive) {
			btnActive.classList.remove('active');
		}
		let divOpen = document.querySelector('.open');
		if (divOpen) {
			divOpen.classList.remove('open');
			divOpen.classList.add('closed');
		}
	}

	function open(btn, div) {
		if (screen.width <= 1024) {
			console.log("🚀 ~ file: script.js ~ line 79 ~ open ~ div", div)
			// * es pantalla de telefono
			div.scrollIntoView({ behavior: 'smooth' })
			return
		}
		checkIfOpen();
		btn.classList.add('active');
		div.classList.remove('closed');
		div.classList.add('open');
	}

	btnHome.addEventListener('click', () => {
		open(btnHome, divHome);
		// console.log('open', btnHome, divHome);
	});

	btnAbout.addEventListener('click', () => {
		open(btnAbout, divAbout);
		// console.log('open', btnAbout, divAbout);
	});

	btnResumen.addEventListener('click', () => {
		open(btnResumen, divResumen);
		// console.log('open', btnResumen, divResumen);
	});

	btnPortfolio.addEventListener('click', () => {
		open(btnPortfolio, divPortfolio);
	});

	btnExperiencia.addEventListener('click', () => {
		open(btnExperiencia, divExperiencia);
	});

	btnContact.addEventListener('click', () => {
		open(btnContact, divContact);
		// console.log('open', btnContact, divContact);
	});

});

//#region juego

// CONSTANTES
const iniciar = document.getElementById("btn-juego"),
	gamePlayButton = document.getElementById('game-play'),
	player = document.getElementById('player'),
	points = document.getElementById("puntos"),
	timer = document.getElementById("tiempo"),
	closeGame = document.getElementById('close-game'),
	gameContainer = document.querySelector('.contenedorGame')
// VARIABLES
let puntos = 0,
	tiempo = 0,
	necesarios = 30,
	gameClock,
	gameRunning = false

// INICIALIZANDO TEXTOS
points.innerHTML = `Puntos: <b>${puntos}/ ${necesarios}</b>`
timer.innerHTML = `Tiempo: ${tiempo}`

// PLAY BUTTON
gamePlayButton.addEventListener('pointerdown', () => {
	if (gameRunning) {
		// si el juego ya esta corriendo no hacer nada
		return
	}
	// comenzar el juego
	gameRunning = true
	// chequear que no haya un cartel existente
	gameContainer.childNodes.forEach(node => {
		if (node.classList?.contains('message-container')) {
			gameContainer.removeChild(node)
		}
	})
	StartTimer()
	puntos = 0
	tiempo = 60
	points.innerHTML = `Puntos: <b>${puntos}/ ${necesarios}</b>`
	timer.innerHTML = `Tiempo: ${tiempo}`
	player.addEventListener("pointerdown", sumarPuntos);
})

closeGame.addEventListener('pointerdown', e => {
	GameOver()
})

const gameMessage = (message, type) => {
	const container = document.createElement('div')
	container.classList.add('message-container', type == 'win' ? 'win-message' : 'gameover-message')
	const text = document.createElement('h1')
	text.innerText = message
	container.appendChild(text)
	gameContainer.appendChild(container)
	const removeMessage = () => {
		container.removeEventListener('pointerdown', removeMessage, false)
		clearTimeout(msgTimer)
		if (gameContainer.contains(container)) {
			gameContainer.removeChild(container)
		}
	}
	container.addEventListener('pointerdown', removeMessage)
	const msgTimer = setTimeout(() => {
		removeMessage()
	}, 10000);
}

function sumarPuntos() {
	if (!gameRunning) {
		return
	}
	puntos++;
	points.innerHTML = `Puntos: <b>${puntos}/ ${necesarios}</b>`;
	if (puntos >= necesarios) {
		console.log("ganaste");
		gameMessage('ganaste', 'win')
		GameOver()
	}
}

function MoveObjective() {
	// resto 50 px de cada lado porque es el tamaño de la bola y no quiero que se salga del contenedor
	const gameWidth = gameContainer.offsetWidth - 50
	const gameHeight = gameContainer.offsetHeight - 50
	const pos = {
		x: Math.round(Math.random() * gameWidth),
		y: Math.round(Math.random() * gameHeight)
	}
	player.style.marginLeft = `${pos.x}px`;
	player.style.marginTop = `${pos.y}px`;
}

function StartTimer() {
	gameClock = setInterval(() => {
		if (tiempo <= 0) {
			console.log("perdiste maestro");
			gameMessage('Game Over', 'loose')
			tiempo = 0;
			puntos = 0;
			GameOver()
			return
		}
		tiempo--;
		timer.innerHTML = `Tiempo: ${tiempo}`;
		MoveObjective()
	}, 1000);
}

function StopTimer() {
	if (gameClock) {
		clearInterval(gameClock)
	}
}

function GameOver() {
	gameRunning = false
	player.removeEventListener('pointerdown', sumarPuntos, false)
	StopTimer()
}

//#endregion juego