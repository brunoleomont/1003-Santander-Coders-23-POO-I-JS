const agenda = {
  contatos: [
    {
        nome: 'contato1',
        telefone: 'telefone1',
        email: 'email1@teste.com'
    },
    {
      nome: 'contato2',
      telefone: 'telefone2',
      email: 'email2@teste.com'
    },
    {
      nome: 'contato3',
      telefone: 'telefone3',
      email: 'email3@teste.com'
    },
    {
      nome: 'contato4',
      telefone: 'telefone4',
      email: 'email4@teste.com'
    }
  ],
  adicionar: function(contato){
      this.contatos.push(contato)
  }
}

const a = agenda;
a.adicionar({nome: 'bruno', telefone: '3939', email: 'email@email'})
console.log(a.contatos[4]);


class Agenda {
  #contatos = [];
  constructor(){}
  adicionarContato(contato){
    if (contato.nome.trim() === "")
        return;
    this.contatos = contato;
  }
  get contatos(){
    return this.#contatos;
  }
  set contatos(contato) {
    this.#contatos.push(contato);
  }
}

const ag = new Agenda();

ag.contatos = {nome: 'bruno 1', telefone: '123', email: 'email'};
ag.adicionarContato({nome: 'bruno 2', telefone: '123', email: 'email'});

console.log(ag.contatos);