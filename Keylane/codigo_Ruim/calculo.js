const dados = ['10', '5', '8', '3', '15', '7'];

let s = 0;
let maior = -999999;
let menor = 999999;

for (let i = 0; i < dados.length; i++) {
  let n = parseInt(dados[i]);
  s = s + n;
  if (n > maior) maior = n;
  if (n < menor) menor = n;
}

let media = s / dados.length;

console.log('media eh', media);
console.log('maior eh', maior);
console.log('menor eh', menor);
