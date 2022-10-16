// 3. Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha um inventário para cada um dos dois aventureiros - esse inventário será um array.
// Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência em seu inventário e nessa ordem. 
// Torper terá uma capa da invisibilidade, uma pedra do despertar,  uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência e nessa ordem. 

// No meio de sua jornada, Torper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 
// Descreva cada uma das ações acima. utilizando código (utilize comentários para ficar mais claro). 

// No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.
// Descreva cada uma das ações acima. utilizando código.

// Exiba o resultado final de cada um dos inventários utilizando "document.write". 

var Drofo = ["Anel da invisibilidade", "Um par de botas mágicas", "Um par de botas mágicas", "Poção do sono", "Poção da inocência", "Poção da inocência"];
var Torper = ["Capa da invisibilidade", "Pedra do despertar", "Varinha das varinhas", "Poção da inocência", "Poção da mentira", "Poção da mentira", "Poção anti-inteligência"];

//removendo pocao e pedra
Torper.splice(4,1);
Torper.splice(1,1);

//adicionando escudo, espada e um par de botas do Drofo
Torper.push(Drofo[1], "Escudo mágico", "Espada mágica");

//adicionando par de botas, ovo e coxinha
Drofo.push("Um par de botas mágicas", "Ovo de dragão", "Coxinha");

//removendo par de botas e pocao, consumindo pocao do Toper
Drofo.splice(1,1);
Drofo.splice(2,1);
Torper.splice(4,1);

document.write("Inventário de Drofo depois da jornada: " + Drofo + "<br>");
document.write("Inventário de Torper depois da jornada: " + Torper);