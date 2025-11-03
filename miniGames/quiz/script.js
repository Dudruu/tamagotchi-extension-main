let perguntas = [
    { pergunta: "Quem foi o autor do famoso romance 'Dom Quixote'?", resposta: "Miguel de Cervantes", opcoes: ["Gabriel Garcia Marquez", "Jorge Luis Borges", "Miguel de Cervantes", "Mario Vargas Llosa"] },
    { pergunta: "Qual elemento químico tem o símbolo 'Hg'?", resposta: "Mercúrio", opcoes: ["Hidrogênio", "Mercúrio", "Hélio", "Manganês"] },
    { pergunta: "Em que ano a Revolução Francesa começou?", resposta: "1789", opcoes: ["1776", "1799", "1789", "1804"] },
    { pergunta: "Qual é o número atômico do Oxigênio?", resposta: "8", opcoes: ["16", "8", "2", "12"] },
    { pergunta: "Qual é o segundo maior oceano da Terra?", resposta: "Oceano Atlântico", opcoes: ["Oceano Pacífico", "Oceano Índico", "Oceano Atlântico", "Oceano Ártico"] },
    { pergunta: "Qual dos seguintes filósofos foi mentor de Alexandre, o Grande?", resposta: "Aristóteles", opcoes: ["Platão", "Sócrates", "Aristóteles", "Pitágoras"] },
    { pergunta: "Qual é a capital da Austrália?", resposta: "Canberra", opcoes: ["Sydney", "Melbourne", "Canberra", "Brisbane"] },
    // { pergunta: "Qual é o melhor prof de informática do IF?", resposta: ["Luis", "Michelle", "Ismael"], opcoes: ["Luis", "Michelle", "Fieno", "Ismael"] },
    { pergunta: "Quem pintou a obra 'A Última Ceia'?", resposta: "Leonardo da Vinci", opcoes: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Vincent van Gogh"] },
    { pergunta: "Qual é o maior planeta do sistema solar?", resposta: "Júpiter", opcoes: ["Saturno", "Júpiter", "Urano", "Netuno"] },
    { pergunta: "Em que ano o homem pisou na Lua pela primeira vez?", resposta: "1969", opcoes: ["1965", "1969", "1972", "1963"] },
    { pergunta: "Qual é o símbolo químico do Ouro?", resposta: "Au", opcoes: ["Ag", "Au", "Cu", "Fe"] },
    { pergunta: "Quem escreveu o romance '1984'?", resposta: "George Orwell", opcoes: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.R.R. Tolkien"] },
    { pergunta: "Em qual continente está localizada a nação de Egito?", resposta: "África", opcoes: ["Ásia", "África", "América", "Europa"] },
    { pergunta: "Qual é a capital do Japão?", resposta: "Tóquio", opcoes: ["Seul", "Tóquio", "Pequim", "Bangcoc"] },
    { pergunta: "Quem foi o criador da teoria da relatividade?", resposta: "Albert Einstein", opcoes: ["Isaac Newton", "Galileu Galilei", "Albert Einstein", "Nikola Tesla"] },
    { pergunta: "Qual é o maior rio do mundo em volume de água?", resposta: "Amazônia", opcoes: ["Nilo", "Amazônia", "Yangtsé", "Mississipi"] },
    { pergunta: "Qual é o nome da maior floresta tropical do mundo?", resposta: "Amazônica", opcoes: ["Congo", "Amazônica", "Taiga", "Boreal"] },
    { pergunta: "Qual cidade é conhecida como 'A Cidade Luz'?", resposta: "Paris", opcoes: ["Londres", "Paris", "Roma", "Berlim"] },
    { pergunta: "Qual país é famoso por sua tulipas e moinhos de vento?", resposta: "Países Baixos", opcoes: ["Suíça", "Países Baixos", "Bélgica", "Dinamarca"] },
    { pergunta: "Quem foi o primeiro presidente dos Estados Unidos?", resposta: "George Washington", opcoes: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"] },
    { pergunta: "Qual é a camada mais externa da Terra?", resposta: "Crosta", opcoes: ["Manto", "Crosta", "Núcleo", "Litosfera"] },
    { pergunta: "Qual é a língua oficial do Brasil?", resposta: "Português", opcoes: ["Espanhol", "Português", "Francês", "Inglês"] },
    { pergunta: "Quem escreveu a obra 'Dom Quixote'?", resposta: "Miguel de Cervantes", opcoes: ["Gabriel Garcia Marquez", "Miguel de Cervantes", "Jorge Luis Borges", "Mario Vargas Llosa"] },
    { pergunta: "Qual dos planetas é o mais próximo do Sol?", resposta: "Mercúrio", opcoes: ["Vênus", "Terra", "Marte", "Mercúrio"] },
    { pergunta: "Quem é considerado o 'pai' da psicanálise?", resposta: "Sigmund Freud", opcoes: ["Carl Jung", "Sigmund Freud", "Jean Piaget", "Alfred Adler"] },
    { pergunta: "Qual é o maior oceano do mundo?", resposta: "Pacífico", opcoes: ["Atlântico", "Pacífico", "Índico", "Ártico"] },
    { pergunta: "Qual é o número atômico do elemento carbono?", resposta: "6", opcoes: ["6", "12", "8", "4"] },
    { pergunta: "Em qual país as Olimpíadas modernas começaram?", resposta: "Grécia", opcoes: ["Itália", "França", "Grécia", "Inglaterra"] },
    { pergunta: "Em que ano começou a Segunda Guerra Mundial?", resposta: "1939", opcoes: ["1914", "1939", "1945", "1936"] },
    { pergunta: "Qual é o maior deserto quente do mundo?", resposta: "Saara", opcoes: ["Saara", "Gobi", "Atacama", "Deserto da Arábia"] },
    { pergunta: "Qual é a fórmula química da água?", resposta: "H₂O", opcoes: ["H₂O", "CO₂", "NaCl", "O₂"] },
    { pergunta: "Qual gás é essencial para a respiração dos seres humanos?", resposta: "Oxigênio", opcoes: ["Oxigênio", "Hidrogênio", "Nitrogênio", "Dióxido de carbono"] },
    { pergunta: "Qual é o animal terrestre mais rápido do mundo?", resposta: "Guepardo", opcoes: ["Guepardo", "Leão", "Cavalo", "Elefante"] },
    { pergunta: "Quem é conhecido como o pai da psicanálise?", resposta: "Sigmund Freud", opcoes: ["Carl Jung", "Sigmund Freud", "Jean Piaget", "Alfred Adler"] },
    { pergunta: "Em qual país a Torre Eiffel está localizada?", resposta: "França", opcoes: ["Itália", "França", "Espanha", "Inglaterra"] },
    { pergunta: "Quantos planetas há no sistema solar?", resposta: "8", opcoes: ["7", "8", "9", "10"] },
    { pergunta: "Qual é a camada mais externa da Terra?", resposta: "Crosta", opcoes: ["Manto", "Crosta", "Núcleo", "Litosfera"] },
    { pergunta: "Qual é o nome do maior oceano do mundo?", resposta: "Pacífico", opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"] },
    { pergunta: "Quem é o autor do livro 'Dom Quixote'?", resposta: "Miguel de Cervantes", opcoes: ["Gabriel García Márquez", "Miguel de Cervantes", "Pablo Neruda", "Jorge Luis Borges"] },
    { pergunta: "Em que ano ocorreu a Revolução Francesa?", resposta: "1789", opcoes: ["1776", "1789", "1804", "1815"] },
    { pergunta: "Qual metal é conhecido pelo símbolo químico 'Fe'?", resposta: "Ferro", opcoes: ["Prata", "Ferro", "Ouro", "Cobre"] },
    { pergunta: "Em que ano começou a Segunda Guerra Mundial?", resposta: "1939", opcoes: ["1914", "1939", "1945", "1950"] },
    { pergunta: "Qual é a capital do Canadá?", resposta: "Ottawa", opcoes: ["Toronto", "Vancouver", "Montreal", "Ottawa"] },
    { pergunta: "Qual é o maior órgão interno do corpo humano?", resposta: "Fígado", opcoes: ["Coração", "Fígado", "Pulmão", "Intestino"] },
    { pergunta: "Em que ano o Brasil ganhou sua primeira Copa do Mundo?", resposta: "1958", opcoes: ["1954", "1958", "1962", "1970"] },
    { pergunta: "Qual é o nome do rio mais extenso da Europa?", resposta: "Volga", opcoes: ["Danúbio", "Volga", "Reno", "Seine"] },
    { pergunta: "Quem escreveu a peça 'Hamlet'?", resposta: "William Shakespeare", opcoes: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"] }
];


let perguntaAtual = 0;

// Função para embaralhar um array
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Embaralha as perguntas no início
perguntas = embaralhar(perguntas);

function mostrarPergunta() {
    let perguntaElem = document.getElementById("pergunta");
    let opcoesElem = document.getElementById("opcoes");

    // Exibe a pergunta atual
    perguntaElem.innerHTML = perguntas[perguntaAtual].pergunta;
    opcoesElem.innerHTML = "";

    // Embaralha as opções de resposta
    let opcoesEmbaralhadas = embaralhar([...perguntas[perguntaAtual].opcoes]);

    // Cria os botões das opções
    opcoesEmbaralhadas.forEach(opcao => {
        let btnOpcao = document.createElement("button");
        btnOpcao.innerHTML = opcao;
        btnOpcao.className = "opcao";
        btnOpcao.addEventListener("click", () => selecionarOpcao(btnOpcao, opcao));
        opcoesElem.appendChild(btnOpcao);
    });
}

function selecionarOpcao(botaoSelecionado, opcaoSelecionada) {
    const respostasCorretas = perguntas[perguntaAtual].resposta;
    const opcoesElem = document.getElementById("opcoes");

    // Altera as cores das opções
    Array.from(opcoesElem.children).forEach(botao => {
        if (respostasCorretas.includes(botao.innerHTML)) {
            botao.style.backgroundColor = "green";  // Respostas corretas em verde
        } else if (botao === botaoSelecionado && !respostasCorretas.includes(opcaoSelecionada)) {
            botao.style.backgroundColor = "red";  // Resposta incorreta em vermelho
        }
    });

    // Avança para a próxima pergunta após um tempo
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        setTimeout(() => {
            mostrarPergunta();
        }, 2000);
    } else {
        const mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = "Quiz finalizado!";
        document.getElementById("pergunta").innerHTML = "";
        document.getElementById("opcoes").style.display = "none";
    }
}

// Inicializa o quiz mostrando a primeira pergunta
mostrarPergunta();