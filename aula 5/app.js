class Catalogo {
    static #nome;
    static #quantidade;
    static #preco;
    static #tableBody;
    constructor(){}
    static init(){
        this.#nome = document.querySelector("#nome");
        this.#quantidade = document.querySelector("#quantidade");
        this.#preco = document.querySelector("#preco");

        this.formCadastro = document.querySelector("form");
        this.formCadastro.addEventListener("submit", Estoque.cadastrarProdutos);

        this.#tableBody = document.querySelector("table tbody");
    }
    static imprimir() {
        this.#tableBody.innerHTML = "";
        for(let i = 0; Estoque.produtos.length; i++){
            const produto = Estoque.produtos[i];
            const tr = document.createElement("tr");
            const nomeTd = document.createElement("td");
            const quantidadeTd = document.createElement("td");
            const precoTd = document.createElement("td");
            const actionTd = document.createElement("td");

            const edtBtn = document.createElement("button");
            edtBtn.innerHTML = "Editar";
            edtBtn.className = "btn btn-primary"
            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Deletar";
            deleteBtn.className = "btn btn-danger"

            nomeTd.innerHTML = produto.nome;
            quantidadeTd.innerHTML = produto.quantidade;
            precoTd.innerHTML = produto.preco;

            deleteBtn.addEventListener("click", () => {
                    Estoque.deletarProduto(produto.nome)
                }
            );

            actionTd.appendChild(edtBtn);
            actionTd.appendChild(deleteBtn);

            tr.appendChild(nomeTd);
            tr.appendChild(quantidadeTd);
            tr.appendChild(precoTd);
            tr.appendChild(actionTd);
            
            this.#tableBody.appendChild(tr);
        }
    }
    static get nome() {
        return this.#nome;
    }
    static get quantidade() {
        return this.#quantidade;
    }
    static get preco() {
        return this.#preco;
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

class Estoque {
    static #produtos = [];
    constructor(){}
    static cadastrarProdutos(e) {
        e.preventDefault();
        const p = new Produto(
            Catalogo.nome.value,
            Catalogo.quantidade.value,
            Catalogo.preco.value);
        Estoque.produtos.push(p);
        Catalogo.imprimir();
    }
    static deletarProduto(produtoNome) {
        this.#produtos = Estoque.produtos.filter((produto) => produto.nome != produtoNome);
        Catalogo.imprimir();
    }
    static get produtos(){
        return this.#produtos;
    }
    get produtos() {
        return this.#produtos;
    }
}

Catalogo.init();