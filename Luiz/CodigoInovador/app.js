// script.js — versão inovadora com boas práticas e soluções modernas

const corpo = document.body;
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botaoTema");

// Função: aplica tema baseado no estado atual
function aplicarTema(modoEscuro) {
  corpo.classList.toggle("modo-escuro", modoEscuro);
  titulo.textContent = modoEscuro ? "Modo Escuro" : "Modo Claro";
  botao.textContent = modoEscuro ? "🌙 Modo Escuro Ativo" : "🌞 Alternar Tema";
  // Salva preferência do usuário
  localStorage.setItem("temaEscuro", modoEscuro);
}

// Função: alterna o tema ao clicar
function alternarTema() {
  const modoEscuro = !corpo.classList.contains("modo-escuro");
  aplicarTema(modoEscuro);
}

// Inicialização automática com base no que o usuário escolheu antes
function inicializarTema() {
  const temaSalvo = localStorage.getItem("temaEscuro") === "true";
  aplicarTema(temaSalvo);
}

// Evento de clique no botão
botao.addEventListener("click", alternarTema);

// Inicializa quando o site carrega
inicializarTema();
