const Conta = require('./Conta.js');
class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }
}
module.exports = {ContaPoupanca}