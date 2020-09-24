//Usamos a plavra exporta antes da palavra class no novo modo
const Conta = require('./Conta.js');

class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
module.exports = {ContaCorrente};