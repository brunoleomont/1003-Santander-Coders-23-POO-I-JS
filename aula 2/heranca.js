class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Cidadao extends Pessoa {
  constructor(nome, idade, cpf, rg) {
    super(nome, idade);
    this.cpf = cpf;
    this.rg = rg;
  }
}

class Empresa extends Pessoa {
  constructor(nome, idade, cnpj, im) {
    super(nome, idade)
    this.cnpj = cnpj;
    this.im = im;
  }
}

const p = new Cidadao('bruno', 30, 123, 456)
console.log(p)

console.log(typeof '123' === 'number')