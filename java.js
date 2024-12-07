let numeroaleartorio = Math.floor(Math.random() * 100) + 1;

//console.log(numeroaleartorio);

const guesses = document.querySelector(".guesses");
const resultParas = document.querySelector(".resultParas");
const BajoAlto = document.querySelector(".BajoAlto");

const lastResult = document.querySelector(".lastResult");


const enviarnumbuton = document.querySelector(".enviarnumbuton");
const adivina = document.querySelector(".adivinale");

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(adivina.value);
  if (guessCount === 1) {
    guesses.textContent = "Intentos anteriores: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === numeroaleartorio) {
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
    lastResult.style.backgroundColor = "green";
    BajoAlto.textContent = "";
    setGameOver();
  } else if (guessCount === 5) {
    lastResult.textContent = "¡¡¡Fin del juego!!!";
    setGameOver();
  } else {
    lastResult.textContent = "¡Incorrecto!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < numeroaleartorio) {
      BajoAlto.textContent = "¡El número es muy bajo!";
    } else if (userGuess > numeroaleartorio) {
      BajoAlto.textContent = "¡El número es muy grande!";
    }
  }

  guessCount++; 
  adivina.value = "";
  adivina.focus();

}


enviarnumbuton.addEventListener("click", checkGuess);


function setGameOver() {
  adivina.disabled = true;
  enviarnumbuton.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar nuevo juego";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  adivina.disabled = false;
  enviarnumbuton.disabled = false;
  adivina.value = "";
  adivina.focus();

  lastResult.style.backgroundColor = "white";

  numeroaleartorio = Math.floor(Math.random() * 100) + 1;
}
