// 2. Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.

var maior = [];
var menor = [];

for (i = 1; i <= 12; i++) {
    var num = parseInt(prompt("Ola usuario! Por favor, digite um numero:"));

    if (num > 50) {
        maior.push(num);
        
    } else if (num < 50) {
        menor.push(num);
    }
}

document.write("Numeros maiores que cinquenta: " + maior + "<br>");
document.write("Numeros menores que cinquenta: " + menor);