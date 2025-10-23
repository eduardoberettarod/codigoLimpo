const fs = require('fs');
const path = require('path');
const { calcularEstatisticas } = require('./utils/calculos');

function carregarNumeros(caminhoArquivo) {
  const conteudo = fs.readFileSync(caminhoArquivo, 'utf8');
  return conteudo
    .split('\n')
    .map(linha => linha.trim())
    .filter(linha => linha !== '')
    .map(Number);
}

function exibirResultados({ media, maior, menor }) {
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Maior valor: ${maior}`);
  console.log(`Menor valor: ${menor}`);
}

try {
  const caminho = path.join(__dirname, 'data', 'numeros.txt');
  const numeros = carregarNumeros(caminho);
  const estatisticas = calcularEstatisticas(numeros);
  exibirResultados(estatisticas);
} catch (erro) {
  console.error(`Erro ao processar: ${erro.message}`);
}
