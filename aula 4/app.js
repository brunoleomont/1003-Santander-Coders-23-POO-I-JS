class Catalogo {
    constructor(){}
    static imprimir() {
        const lista = produtos.reduce((acc, val) => {
            return acc + `<tr>
                    <td>${val.nome}</td>
                    <td>${val.quantidade}</td>
                    <td>${val.preco}</td>
                    <td></td>
                </tr>`}, "");
        document.querySelector("table tbody").innerHTML = lista;
    }
}

class Produto {
    #nome;
    #quantidade;
    #preco;
    constructor(nome, quantidade, preco){
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }
    get nome(){
        return this.#nome;
    }
    get quantidade(){
        return this.#quantidade;
    }
    get preco(){
        return this.#preco;
    }
}

const duna = new Produto("Duna", 7, 75);
const harry = new Produto("Harry Potter", 10, 56);
const pai = new Produto("Pai rico, pai pobre", 5, 45);

const produtos = [duna, harry, pai];

Catalogo.imprimir();