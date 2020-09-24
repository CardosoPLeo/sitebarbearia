//Modo novo de ocmo fazer a importação de modulos para isso adiconamos 
//"tyoe":"module" no package.json  e usamos a syntaxe que está comentada na linha de baixo.
/*import {Cliente} from "./Modulo3/Cliente.js";
import {ContaCorrente} from "./Modulo3/ContaCorrente.js"*/ 



const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo);













/*class Cleinte{
    nome;
    cpf;
    
}

class contaCorrente{
    agencia;
    //usamos o underline para dizer que o atributi é peivado, quando for assim não podemos usar esse atributi fora da classe
    saldo = 0;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0) return;//early return:Usamos para dar melhor visbilidade ao código
        this.saldo += valor;
    }
}

const cliente1 = new Cleinte();
const cliente2 = new Cleinte();
const cliente3 = new Cleinte();

cliente1.nome = "Leonardo";
cliente1.cpf = 11122233301;

cliente2.nome = "Maria";
cliente2.cpf = 11122233302;

cliente3.nome = "Isabel";
cliente3.cpf = 11122233303;

const contaCorrenteLeo = new contaCorrente();
contaCorrenteLeo.depositar(100);
contaCorrenteLeo.agencia = 1001
console.log(contaCorrenteLeo)

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);*/