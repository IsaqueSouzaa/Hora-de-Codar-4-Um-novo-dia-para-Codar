//Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".


var frutas = ["uva", " banana", " morango", " abacaxi", " inga"];
function lista(elemento) {

    return frutas.includes(elemento)
}

function principal() {
    var continuar = true;

    while (continuar) {
        alert(frutas)
        var elemento = prompt("Qual elemento deseja remover?");


        if (lista(elemento)) {
            frutas.splice(frutas.indexOf(elemento), 1)
            alert("Fruta foi retirada da lista")
            if (frutas.length == 0) {
                alert("Lista de compras finalizada")
                continuar = false;
            }


        }

        else {
            alert("Fruta indisponível no nosso mercado")

        }

    }

}
principal()