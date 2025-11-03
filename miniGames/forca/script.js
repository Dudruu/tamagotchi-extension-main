let palavras = ["joguinhos", "programa", "girafa", "desafio", "brasil", "vidro", "computador", "carro"];
let palavra, letrasDescobertas, tentativas, letrasErradas;


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const btnAdivinhar = document.getElementById("btnAdivinhar");
        if (btnAdivinhar && btnAdivinhar.style.display !== "none") {
            btnAdivinhar    .click();
        }
    }
});

function iniciarJogo() {
    palavra = palavras[Math.floor(Math.random() * palavras.length)];
    letrasDescobertas = Array(palavra.length).fill("_");
    tentativas = 6;
    letrasErradas = [];

    document.getElementById("palavra").innerHTML = letrasDescobertas.join(" ");
    document.getElementById("tentativas").innerHTML = tentativas;
    document.getElementById("letras-erradas").innerHTML = letrasErradas.join(", ");
    document.getElementById("mensagem").innerHTML = "";

    // Resetar visibilidade dos botões
    document.getElementById("btnAdivinhar").style.display = "inline-block";
    document.getElementById("btnJogarNovamente").style.display = "none";

    // Reativar input
    document.getElementById("letra").disabled = false;
}

function adivinharLetra() {
    let letra = document.getElementById("letra").value.toLowerCase();
    document.getElementById("letra").value = "";

    if (letra === "" || letra.length !== 1) return;

    if (palavra.includes(letra)) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === letra) {
                letrasDescobertas[i] = letra;
            }
        }
    } else {
        if (!letrasErradas.includes(letra)) {
            letrasErradas.push(letra);
            tentativas--;
        }
    }

    document.getElementById("palavra").innerHTML = letrasDescobertas.join(" ");
    document.getElementById("tentativas").innerHTML = tentativas;
    document.getElementById("letras-erradas").innerHTML = letrasErradas.join(", ");

    if (tentativas === 0) {
        document.getElementById("mensagem").innerHTML = "Você perdeu! A palavra era: " + palavra;
        finalizarJogo();
    } else if (!letrasDescobertas.includes("_")) {
        document.getElementById("mensagem").innerHTML = "Parabéns, você venceu!";
        finalizarJogo();
    }
}

function finalizarJogo() {
    // Desabilitar o input
    document.getElementById("letra").disabled = true;

    // Alternar visibilidade dos botões
    document.getElementById("btnAdivinhar").style.display = "none";
    document.getElementById("btnJogarNovamente").style.display = "inline-block";
}

document.getElementById("btnAdivinhar").addEventListener("click", adivinharLetra);
document.getElementById("btnJogarNovamente").addEventListener("click", iniciarJogo);

iniciarJogo();
