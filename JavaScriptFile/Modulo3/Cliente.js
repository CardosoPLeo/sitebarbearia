//Usamos a plavra exporta antes da palavra class no novo modo
class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
module.exports = {Cliente};