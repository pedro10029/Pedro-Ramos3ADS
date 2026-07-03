// =============================================
// 1 - PROGRESSÃO ARITMÉTICA (PA)
// =============================================
function problema1() {
    let inicio = parseInt(prompt("Digite o número inicial:"));
    let razao = parseInt(prompt("Digite a razão da PA:"));
    let limite = parseInt(prompt("Digite o limite:"));

    if (limite <= inicio) {
        alert("ERRO: O limite deve ser superior ao início!");
        return;
    }

    let sequencia = [];
    for (let i = inicio; i <= limite; i += razao) {
        sequencia.push(i);
    }
    alert(`PA: ${sequencia.join(", ")}`);
}

// =============================================
// 2 - MAIOR ENTRE DOIS NÚMEROS
// =============================================
function problema2() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    
    let maior = (num1 > num2) ? num1 : num2;
    alert(`O maior número é: ${maior}`);
}

// =============================================
// 3 - DESCIDAS PARA TOUCHDOWN (Futebol Americano)
// =============================================
function problema3() {
    // Time precisa de 12 jardas, saindo da última jarda (1 jarda)
    // Cada descida ganha em média 3 jardas
    const JARDAS_NECESSARIAS = 12;
    const JARDAS_INICIAL = 1;
    const JARDAS_POR_DESCIDA = 3;
    
    let jardasRestantes = JARDAS_NECESSARIAS - JARDAS_INICIAL;
    let descidasNecessarias = Math.ceil(jardasRestantes / JARDAS_POR_DESCIDA);
    
    // Garantir mínimo de 3 descidas
    if (descidasNecessarias < 3) descidasNecessarias = 3;
    
    alert(`São necessárias ${descidasNecessarias} descidas para fazer um touchdown.`);
}

// =============================================
// 4 - PONTOS NBA vs GOLS BRASILEIRÃO
// =============================================
function problema4() {
    // NBA: 200 pontos em 4 quartos de 12 minutos = 48 minutos
    const PONTOS_NBA = 200;
    const TEMPO_NBA = 48; // minutos
    
    // Brasileirão: 2,53 gols em 96 minutos
    const GOLS_BRASILEIRAO = 2.53;
    const TEMPO_BRASILEIRAO = 96; // minutos
    
    // Pontos por minuto
    let pontosPorMinutoNBA = PONTOS_NBA / TEMPO_NBA;
    let golsPorMinutoBrasileirao = GOLS_BRASILEIRAO / TEMPO_BRASILEIRAO;
    
    // Diferença proporcional
    let diferenca = pontosPorMinutoNBA - golsPorMinutoBrasileirao;
    let proporcao = pontosPorMinutoNBA / golsPorMinutoBrasileirao;
    
    alert(`NBA: ${pontosPorMinutoNBA.toFixed(3)} pontos/minuto`);
    alert(`Brasileirão: ${golsPorMinutoBrasileirao.toFixed(3)} gols/minuto`);
    alert(`Diferença: ${diferenca.toFixed(3)} pontos/minuto a mais`);
    alert(`Proporção: ${proporcao.toFixed(2)}x mais pontos por minuto na NBA`);
}

// =============================================
// 5 - TABUADA
// =============================================
function problema5() {
    let numero = parseInt(prompt("Digite o número da tabuada:"));
    let ate = parseInt(prompt("Até que número você quer a tabuada?"));
    
    let resultado = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= ate; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}

// =============================================
// 6 - FATORIAL
// =============================================
function problema6() {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
    
    if (numero < 0) {
        alert("Não existe fatorial de número negativo!");
        return;
    }
    
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    
    alert(`${numero}! = ${fatorial}`);
}

// =============================================
// 7 - POSITIVO OU NEGATIVO
// =============================================
function problema7() {
    let numero = parseFloat(prompt("Digite um número:"));
    
    if (numero > 0) {
        alert("O número é POSITIVO");
    } else if (numero < 0) {
        alert("O número é NEGATIVO");
    } else {
        alert("O número é ZERO");
    }
}

// =============================================
// 8 - MÉDIA ESCOLAR
// =============================================
function problema8() {
    let notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
        notas.push(nota);
    }
    
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    let media = soma / notas.length;
    
    let status;
    if (media >= 70) {
        status = "APROVADO";
    } else if (media >= 50) {
        status = "RECUPERAÇÃO";
    } else {
        status = "REPROVADO";
    }
    
    alert(`Média: ${media.toFixed(1)}\nStatus: ${status}`);
}

// =============================================
// 9 - REAJUSTE SALARIAL
// =============================================
function problema9() {
    let salarioAtual = parseFloat(prompt("Digite o salário atual: R$"));
    let percentual, aumento, novoSalario;
    
    if (salarioAtual <= 280) {
        percentual = 20;
    } else if (salarioAtual <= 700) {
        percentual = 15;
    } else if (salarioAtual <= 1500) {
        percentual = 10;
    } else {
        percentual = 5;
    }
    
    aumento = salarioAtual * (percentual / 100);
    novoSalario = salarioAtual + aumento;
    
    alert(`=== REAJUSTE SALARIAL ===
Salário antes: R$ ${salarioAtual.toFixed(2)}
Percentual de aumento: ${percentual}%
Valor do aumento: R$ ${aumento.toFixed(2)}
Novo salário: R$ ${novoSalario.toFixed(2)}`);
}

// =============================================
// 10 - IDADE DE FÁBIO
// =============================================
function problema10() {
    // Média de Mariana e Beatriz = 85
    // (Mariana + Beatriz) / 2 = 85
    let somaMB = 85 * 2; // 170
    
    // Média de Beatriz, Mariana e Fábio = 90
    // (Mariana + Beatriz + Fabio) / 3 = 90
    let somaMBF = 90 * 3; // 270
    
    let idadeFabio = somaMBF - somaMB; // 270 - 170 = 100
    
    alert(`A idade de Fábio é ${idadeFabio} anos.`);
}

// =============================================
// MENU PRINCIPAL
// =============================================
function menu() {
    let opcao;
    do {
        opcao = prompt(`=== PROFESSOR WILLIAN DOS REIS ===
Escolha um problema:

1 - Progressão Aritmética (PA)
2 - Maior entre dois números
3 - Descidas para Touchdown
4 - Pontos NBA vs Gols Brasileirão
5 - Tabuada
6 - Fatorial
7 - Positivo ou Negativo
8 - Média Escolar
9 - Reajuste Salarial
10 - Idade de Fábio
0 - Sair`);

        switch(opcao) {
            case "1": problema1(); break;
            case "2": problema2(); break;
            case "3": problema3(); break;
            case "4": problema4(); break;
            case "5": problema5(); break;
            case "6": problema6(); break;
            case "7": problema7(); break;
            case "8": problema8(); break;
            case "9": problema9(); break;
            case "10": problema10(); break;
            case "0": alert("Programa encerrado!"); break;
            default: alert("Opção inválida!"); break;
        }
    } while (opcao !== "0");
}

// Iniciar o programa
menu();