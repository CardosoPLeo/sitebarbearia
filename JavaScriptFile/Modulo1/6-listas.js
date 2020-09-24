console.log("Trabalhando com listas");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`)//Adicionando um item na lista

console.log(listaDeDestinos);

//Remoção de itens de uma lista(Posição, Quantidade)
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1])//Exibindo somente um item da lista
