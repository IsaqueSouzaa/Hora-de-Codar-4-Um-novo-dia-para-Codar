//Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 




var estudantes = [];
function cadastrarEstudante(nome) {
estudantes.push(nome);
}

function exibirListaEstudantes() {
document.write("Quantidade de estudantes cadastrados\n " + estudantes.length+"\n");
document.write("Lista de estudantes:\n "+estudantes );

};

function principal() {
var continuar = true;
while (continuar) {
    let nome = prompt("Digite o nome do estudante ou 'PARE' para encerrar");


    if (nome.toUpperCase() === "PARE") {
        continuar = false;
    } else {
        cadastrarEstudante(nome);
    }
}


exibirListaEstudantes();
}


principal();