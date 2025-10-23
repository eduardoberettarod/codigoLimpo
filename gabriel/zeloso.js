const fala = `“Zelo é clareza, é pensar em quem vai ler depois.
Um código limpo fala por si — e evita dor de cabeça.”`;

const codigoOrganizado = `
function calcularMedia() {
  const nome = document.getElementById("nome").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  document.getElementById("nome_resultado").textContent = nome;
  document.getElementById("media").textContent = media.toFixed(1);

  exibirPainel("resultado");
}

function exibirPainel(tipo) {
  const painelResultado = document.getElementById("painel_resultado");
  const painelFormulario = document.getElementById("painel_formulario");

  // Garante que apenas o painel correto esteja visível
  painelResultado.classList.add("close");
  painelFormulario.classList.add("close");

  if (tipo === "resultado") {
    painelResultado.classList.remove("close");
    painelResultado.classList.add("show");
  } else if (tipo === "formulario") {
    painelFormulario.classList.remove("close");
    painelFormulario.classList.add("show");
    limparCampos();
  }
}

function limparCampos() {
  document.getElementById("painel_formulario").reset();
  exibirPainel("formulario");
}

`;

const falaEl = document.getElementById('fala');
const codeEl = document.getElementById('code');

let i = 0;
let j = 0;

function digitarTexto(texto, el, callback) {
  const intervalo = setInterval(() => {
    el.textContent += texto[i];
    i++;
    if (i >= texto.length) {
      clearInterval(intervalo);
      callback();
    }
  }, 40);
}

function digitarCodigo() {
  const intervalo = setInterval(() => {
    codeEl.textContent += codigoOrganizado[j];
    j++;
    if (j >= codigoOrganizado.length) clearInterval(intervalo);
  }, 40);
}

digitarTexto(fala, falaEl, digitarCodigo);

document.getElementById("voltar").addEventListener("click", () => {
  window.location.href = "caos.html";
});
