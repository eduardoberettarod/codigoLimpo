/**
 * Calcula média, maior e menor valor de uma lista de números.
 * @param {number[]} numeros 
 * @returns {{ media: number, maior: number, menor: number }}
 */
function calcularEstatisticas(numeros) {
  if (!numeros || numeros.length === 0) {
    throw new Error('A lista de números não pode estar vazia.');
  }

  const soma = numeros.reduce((acc, n) => acc + n, 0);
  const media = soma / numeros.length;
  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);

  return { media, maior, menor };
}

module.exports = { calcularEstatisticas };
