//Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.



var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];

function pesquisarPlaneta(nome) {
    return planetas.includes(nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase());
}

function principal() {
    var continuar = true;

    while (continuar) {
        var busca = prompt("Digite o nome de um planeta");

        if (pesquisarPlaneta(busca)) {
            alert("O planeta " + busca + " está na lista de planetas.");
        } else {
            alert("O planeta " + busca + " não está na lista de planetas.");
        }

        var resposta = prompt("Deseja continuar? (s/n)").toLowerCase();
        if (resposta !== "s") {
            continuar = false;
        }
    }
}