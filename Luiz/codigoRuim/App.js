
var estado = 0;

function mudar() {
  
  if (estado === 0) {
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.getElementById("t").innerHTML = "Modo Escuro";
    estado = 1;
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
    document.getElementById("t").innerHTML = "Modo Claro";
    estado = 0;
  }
}


