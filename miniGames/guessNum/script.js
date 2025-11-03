let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const btnAdivinhar = document.getElementById("btnAdivinhar");
        if (btnAdivinhar && btnAdivinhar.style.display !== "none") {
            btnAdivinhar    .click();
        }
    }
});
function adivinhar() {
    let palpiteCampo = document.getElementById("palpite").value;
    let palpite = parseInt(palpiteCampo);

    // Verificar se o palpite é um número válido
    if (isNaN(palpite)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido!";
        return; // Sai da função se o palpite for inválido
    }

    tentativas++;

    if (palpite < numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Muito baixo!";
    } else if (palpite > numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Muito alto!";
    } else {
        document.getElementById("resultado").innerHTML = "Parabéns! Você acertou em " + tentativas + " tentativas.";
        document.getElementById("btnAdivinhar").disabled = true;
        document.getElementById("palpite").disabled = true;
        document.getElementById("btnJogarNovamente").style.display = "inline";
    }
}

function jogarNovamente() {
    // Reinicia o jogo
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;

    // Reseta o campo de entrada e o resultado
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("palpite").value = "";

    // Habilita o botão e o campo de entrada novamente
    document.getElementById("btnAdivinhar").disabled = false;
    document.getElementById("palpite").disabled = false;

    // Esconde o botão "Jogar de Novo"
    document.getElementById("btnJogarNovamente").style.display = "none";
}

document.getElementById("btnAdivinhar").addEventListener("click", adivinhar);
document.getElementById("btnJogarNovamente").addEventListener("click", jogarNovamente);
