console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false;
const temPassgemComprada = true;
console.log("Possivei Destinos:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else {
//     if (estaAcompanhado == true) {
//         console.log("Comprador é menor de idade mas está acompanhado");
//         listaDeDestinos.splice(1, 1);
//     } else {
//         console.log("Não será possível vender a passagem pois o comprador é menor de idade e não está acompanhado");
//     }
// }

console.log("Compra da Passagem!\n\n")
if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não será possível vender a passagem pois o comprador é menor de idade e não está acompanhado");
}
console.log("Embarque \n\n");
if(idadeComprador <18 && temPassgemComprada == true){
    console.log("Boa viagem!")
}else{
    console.log("Você não poderar viajar!")
}
console.log(listaDeDestinos);

