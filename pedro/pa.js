document.addEventListener("DOMContentLoaded", function () {
    // Vincula o clique do botão à função de cálculo
    document.getElementById("calcular").addEventListener("click", calcularPA);
});

function calcularPA() {
    // 1. Captura os valores dos inputs e converte para números
    const valorInicial = parseInt(document.getElementById("valor_inicial").value);
    const valorFinal = parseInt(document.getElementById("valor_final").value);
    const razao = parseInt(document.getElementById("razao").value);

    // 2. Validação simples para garantir que os campos foram preenchidos
    if (isNaN(valorInicial) || !valorFinal || isNaN(razao)) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
    }

    // Validação para evitar loops infinitos
    if (razao === 0) {
        alert("A razão não pode ser zero.");
        return;
    }
    if (razao > 0 && valorInicial > valorFinal) {
        alert("Para uma razão positiva, o valor inicial deve ser menor que o final.");
        return;
    }
    if (razao < 0 && valorInicial < valorFinal) {
        alert("Para uma razão negativa, o valor inicial deve ser maior que o final.");
        return;
    }

    // 3. Processamento: Gera a sequência da PA
    let termos = [];
    let termoAtual = valorInicial;

    if (razao > 0) {
        while (termoAtual <= valorFinal) {
            termos.push(termoAtual);
            termoAtual += razao;
        }
    } else {
        while (termoAtual >= valorFinal) {
            termos.push(termoAtual);
            termoAtual += razao; // Soma um número negativo (subtração)
        }
    }

    // 4. Exibição do resultado
    // Remove um resultado anterior se ele já existir na tela
    const resultadoAnterior = document.getElementById("resultado_pa");
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }

    // Cria um novo parágrafo para mostrar a sequência
    const containerResultado = document.createElement("p");
    containerResultado.id = "resultado_pa";
    containerResultado.style.textAlign = "center";
    containerResultado.style.marginTop = "20px";
    containerResultado.style.fontWeight = "bold";
    containerResultado.innerText = "Sequência da PA: " + termos.join(", ");

    // Adiciona o resultado no final da página (body)
    document.body.appendChild(containerResultado);
}
