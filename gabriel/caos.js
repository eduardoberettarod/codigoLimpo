const sound = document.getElementById("som-digitando");

const fala = `“Ah, funcionou? Beleza! Quem liga se tá feio?
Variável x, y, z... tudo igual!
O importante é rodar!”`;

const codigoBaguncado = `
function blabla1() {
  let xpto = "", qwe = 0, asd = 0, zxc = 0, rty = 0, lol = 0

  xpto = document.getElementById("nome").value
  qwe = parseFloat(document.getElementById("nota1").value)
  asd = parseFloat(document.getElementById("nota2").value)
  zxc = parseFloat(document.getElementById("nota3").value)
  rty = parseFloat(document.getElementById("nota4").value)
  lol = (qwe + asd + zxc + rty)/4

  document.getElementById("nome_resultado").innerHTML = xpto
  document.getElementById("media").innerHTML = lol.toFixed(1)
  zap("res")
}

function zap(foo) {
  let bar = document.getElementById("painel_resultado")
  let baz = document.getElementById("painel_formulario")

  bar.classList.add("close")
  baz.classList.add("close")

  if(foo=="res"){
    bar.classList.remove("close")
    bar.classList.add("show")
  } else if(foo=="form"){
    baz.classList.remove("close")
    baz.classList.add("show")
    qux()
  }
}

function qux() {
  document.getElementById("painel_formulario").reset()
  zap("form")
}

`;

const falaEl = document.getElementById("fala");
const codeEl = document.getElementById("code");

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
    codeEl.textContent += codigoBaguncado[j];
    j++;
    if (j >= codigoBaguncado.length) clearInterval(intervalo);
  }, 40);
}

digitarTexto(fala, falaEl, digitarCodigo);

document.getElementById("transformar").addEventListener("click", () => {
  window.location.href = "zeloso.html";
});
