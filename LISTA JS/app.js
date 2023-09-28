var soma = 10 + 20;
var diferenca = 30 - 10;
var multiplicacao = 15 * 2;
var divisao = 100 / 5;
var restoDivisao = 45 % 6;
var numeros = [15, 25, 35, 45];
var somanumeros = 0;
    for (var i = 0; i < numeros.length; i++) {
        somanumeros += numeros[i];}
var media = somanumeros / numeros.length;
var valor = 80;
var porcentagem = 25;
var resultado = (porcentagem / 100) * valor;

console.log("Soma:", soma);
console.log("Diferença:", diferenca);
console.log("Multiplicação: ", multiplicacao);
console.log("Divisão: ", divisao);
console.log("Resto da divisão: ", restoDivisao);
console.log("Números:", numeros, "Soma dos números:", somanumeros, "Média dos números:", media);
console.log("25% de 80 é igual a:", resultado);