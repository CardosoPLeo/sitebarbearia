console.log("\ Trabalhando com condicionais\n")
const idadeComporador = 18;
const estaAcompnhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

if (idadeComporador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1); 
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe") 
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino Existe:", destinoExiste);