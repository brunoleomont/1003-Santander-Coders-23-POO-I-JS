class Pessoa {
  cumprimento() {
    return "Olá";
  }
}

const p = new Pessoa();

Pessoa.prototype.Hello = function (){
  return 'hello 123';
}

console.log(p.Hello())