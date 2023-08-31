class Pessoa {
  cumprimento() {
    return "Olá";
  }
}

class Professor extends Pessoa {
  cumprimento() {
    return "Olá turma!"
  }
}

class Funcionario extends Pessoa {
  cumprimento() {
    return "Bom dia, chefe!"
  }
}

const f = new Funcionario();
console.log(f.cumprimento());

const p = new Professor();
console.log(p.cumprimento());

console.log(p instanceof Pessoa);
console.log(f instanceof Pessoa);