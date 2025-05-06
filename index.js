const n = 14; // Número secreto (puedes cambiarlo o generar uno aleatorio)
const maxAttempts = 5;
let attempts = 0;
let guesses = [];

function checkGuess() {
    const input = document.getElementById("number");
    const result = document.getElementById("result");
    const guessStr = input.value.trim();
    const value = parseInt(guessStr, 10);

    // Validar que el valor sea un número y esté entre 1 y 100
    if (isNaN(value)) {
        result.innerHTML = "Error: Por favor, introduce un número válido.";
        result.style.color = "red";
        return;
    }
    if (value < 1 || value > 100) {
        result.innerHTML = "Por favor, introduce un número entre 1 y 100.";
        result.style.color = "red";
        return;
    }

    // Guardar el intento
    attempts++;
    guesses.push(value);

    // Comprobar el número secreto
    if (value === n) {
        result.innerHTML = `¡¡Felicidades, adivinaste el número secreto!!<br> Números ingresados antes de acertar: ${guesses.slice(0, -1).join(", ")}`;
        result.style.color = "green";
        // Deshabilitar el botón para que no siga intentando
        document.getElementById("guessButton").disabled = true;
        input.disabled = true;
    } else {
        if (attempts >= maxAttempts) {
            result.innerHTML = `Has alcanzado el máximo de intentos. El número secreto era ${n}.<br> Números ingresados: ${guesses.join(", ")}`;
            result.style.color = "red";
            document.getElementById("guessButton").disabled = true;
            input.disabled = true;
        } else {
            let hint = value < n ? "Demasiado bajo" : "Demasiado alto";
            result.innerHTML = `Ups, (${hint}) el número secreto es incorrecto, vuelve a intentarlo.<br> Intentos restantes: ${maxAttempts - attempts}`;
            result.style.color = "red";
        }
    }
    input.value = "";
    input.focus();
}
