class Conta {
  #numeroConta;
  constructor(nome, cpf){
    this.nome = nome
    this.cpf = cpf
    this.numeroConta = Utils.numeroConta();
  }
  get numeroConta() {
    return this.#numeroConta;
  }
  set numeroConta(numero) {
    this.#numeroConta = numero;
  }
}

class Utils {
  static totalContas = 0;
  constructor(){}

  static numeroConta() {
    return ++Utils.totalContas;
  }
}

const c = new Conta('Bruno', 123456789);

console.log(c.numeroConta)
const a = Utils.numeroConta()
console.log(a)
const c1 = new Conta('Leonardo', 123456258);

console.log(c1.numeroConta)