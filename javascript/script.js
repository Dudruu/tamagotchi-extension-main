var estado = {
  fome: 10,
  felicidade: 10,
  limpeza: 10
};

function salvaEstado(){
  const estadoJSON = JSON.stringify(estado);
  localStorage.estado = estadoJSON;
  console.log("Salva estado");
}

function recuperaEstado() {
  const estadoRec = localStorage.getItem('estado');
  if (estadoRec) {
    estado = JSON.parse(estadoRec);
    console.log("Estado recuperado:", estado);
  } else {
    salvaEstado();
  }
}

window.onload = function () {
  recuperaEstado();
  verificaGif();
  barras();
}

/* GIF */
const gif = document.getElementById("gif");
const gifDuration = 11800;

function verificaGif() {
  const gifJaExibido = localStorage.getItem('gifJaExibido');
  const sobre = document.getElementById("sobrepoe");


  if (gifJaExibido) {
    console.log("exibido");
    // Se o GIF já foi exibido, mostra a imagem estática e configura os eventos de mouse
    gif.src = 'images/pintinho_parado.png';
    adicionarEventosMouse(sobre); ///DIV NO
  } else {
    // Exibe o GIF e configura a troca para a imagem estática após o tempo definido
    document.querySelector(".navegar-direita").disabled = true;
    document.querySelector(".navegar-esquerda").disabled = true;
    document.querySelector(".navegar-direita").style.display = "none";
    document.querySelector(".navegar-esquerda").style.display = "none";
    gif.src = 'images/teste.gif';
    let gifCarregando = true;
    setTimeout(function () {
      gif.src = 'images/pintinho_parado.png';
      localStorage.setItem('gifJaExibido', 'true');
      adicionarEventosMouse(sobre);
      document.querySelector(".navegar-direita").disabled = false;
      document.querySelector(".navegar-esquerda").disabled = false;
      document.querySelector(".navegar-direita").style.display = "block";
      document.querySelector(".navegar-esquerda").style.display = "block";
      let gifCarregando = false;
    }, gifDuration); // Duração do GIF em milissegundos (11,8 segundos)
  }
}

// Função para adicionar eventos de mouse
function adicionarEventosMouse(element) {
  element.onmouseover = function() {
    gif.src = 'images/pisca.png'; // Imagem quando o mouse está sobre
  }
  element.onmouseout = function() {
    gif.src = 'images/pintinho_parado.png'; // Imagem original quando o mouse sai
  }
}

function barras() {
  document.querySelector('.barintFome').style.width = estado.fome * 10 + "%";
  document.querySelector('.barintBrincar').style.width = estado.felicidade * 10 + "%";
  document.querySelector('.barintLimpeza').style.width = estado.limpeza * 10 + "%";
  salvaEstado();
}

function alimentar() {
  estado.fome = Math.min(estado.fome + 1, 10);
  estado.felicidade = Math.min(estado.felicidade + 1, 10);
  console.log("alimentando: " + estado.fome);
  barras();
}

function brincar() {
  estado.felicidade = Math.min(estado.felicidade + 1, 10);
  estado.limpeza = Math.max(estado.limpeza - 1, 0);
  console.log("FELICIDADE: " + estado.felicidade);
  barras();
}

function limpar() {
  estado.limpeza = 10;
  barras();
}

function decreaseStatus() {
  estado.fome = Math.max(estado.fome - 1, 0);
  estado.felicidade = Math.max(estado.felicidade - 1, 0);
  estado.limpeza = Math.max(estado.limpeza - 1, 0);
  barras();
}

/* Código relacionado ao drag-and-drop */
document.ondragstart = function(event) {
  event.dataTransfer.setData("Text", event.target.id);
  console.log("-->>>> drag start");
};

document.ondragover = function(event) {
  event.preventDefault();
  //console.log("-->>>> drag over");
};
document.ondrop = function(event) {
  console.log("-->>>> drop");
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  console.log("-->>>> ID: " + data);
  if (data == 'alimentar') {
    alimentar();
  } else if (data == 'limpar') {
    limpar();
  } else if (data == 'brincar') {
    brincar();
  }
};

setInterval(decreaseStatus, 5000);

//Piscar aleatoriamente

/*
function piscarAleatorio() {
    // Define o tempo aleatório para o próximo piscar entre 3 e 10 segundos
    const tempoAleatorio = Math.random() * (7000 - 3000) + 3000; // Entre 3000ms (3s) e 7000ms (7s)

    setTimeout(function() {
      // Muda a imagem para o gif de piscar 
      
      gif.src = 'images/pisca.png';
    
      // Após 500ms (ou o tempo de duração do piscar), volta para a imagem original
      setTimeout(function() {
        
      gif.src = 'images/pintinho_parado.png';
      
        
        
        // Chama a função novamente para continuar piscando aleatoriamente
        piscarAleatorio();
      }, 500); // Duração do piscar (ajuste conforme necessário)
      
    }, tempoAleatorio);
}
*/

// Inicializa a função de piscar aleatório ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  verificaGif(); // Chama a função que exibe o gif ou imagem estática
});

//tentativa de fazer funcionar
// Seleciona os elementos
const jogarBtn = document.getElementById('jogar');
const sobrepoe = document.getElementById('sobrepoe');

// Função para iniciar o arraste
jogarBtn.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', ''); // Define o dado a ser transferido, neste caso, uma string vazia.
});

// Permite que o elemento sobrepoe receba o item arrastado
sobrepoe.addEventListener('dragover', (event) => {
    event.preventDefault(); // Impede o comportamento padrão para permitir o drop
});

// Detecta quando o botão é solto em cima do elemento sobrepoe
sobrepoe.addEventListener('drop', () => {
    window.location.href = '/jogos/menu.html'; // Redireciona para a página desejada
});