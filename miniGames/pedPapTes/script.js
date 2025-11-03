function jogar(escolhaJogador) {
    
    document.getElementById("btnPedra").style.borderWidth = 0;
    document.getElementById("btnPapel").style.borderWidth = 0;
    document.getElementById("btnTesoura").style.borderWidth = 0;
    document.getElementById("btn"+escolhaJogador).style.borderBottom = "5px solid darkgreen";
    escolhaJogador = escolhaJogador.toLowerCase();

    let opcoes = ['pedra', 'papel', 'tesoura'];
    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    // Define o caminho completo para as imagens
    const caminhoImagem = "../../images/";
    const imagemComputador = document.getElementById("imagemComputador");
    
    imagemComputador.src = caminhoImagem + escolhaComputador + ".png"; // Define o caminho da imagem
    imagemComputador.alt = "Computador  escolheu  " + escolhaComputador;
    imagemComputador.style.display = 'block'; // Exibe a imagem

    // Verificação no console para depuração
    console.log("Escolha do computador:", escolhaComputador);
    console.log("Caminho da imagem:", imagemComputador.src);

    let resultado = '';
    if (escolhaJogador === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Você perdeu!";
    }

    document.getElementById("resultado").innerHTML = "Pintinho  escolheu   " + escolhaComputador + ".<br><strong>" + resultado + "</strong>";
    
}

// Adiciona os event listeners aos botões
document.getElementById("btnPedra").addEventListener("click", () => jogar('Pedra'));
document.getElementById("btnPapel").addEventListener("click", () => jogar('Papel'));
document.getElementById("btnTesoura").addEventListener("click", () => jogar('Tesoura'));
