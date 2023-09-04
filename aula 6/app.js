class Catalogo {
    static #nome;
    static #quantidade;
    static #preco;
    static #tableBody;

    static #id;
    static #nomeEdt;
    static #quantidadeEdt;
    static #precoEdt;
    static #updateBtn;
    static #cancelBtn;
    constructor() { }
    static init() {
        this.#nome = document.querySelector("#nome");
        this.#quantidade = document.querySelector("#quantidade");
        this.#preco = document.querySelector("#preco");

        this.#id = document.querySelector("#id");
        this.#nomeEdt = document.querySelector("#nomeEdt");
        this.#quantidadeEdt = document.querySelector("#quantidadeEdt");
        this.#precoEdt = document.querySelector("#precoEdt");

        this.#updateBtn = document.getElementById("update-btn");
        this.#cancelBtn = document.getElementById("cancel-btn");

        this.id.style.display = "none";
        this.nomeEdt.style.display = "none";
        this.quantidadeEdt.style.display = "none";
        this.precoEdt.style.display = "none";

        this.updateBtn.style.display = "none";
        this.cancelBtn.style.display = "none";

        document.getElementById("edit-container").style.display = "none"

        this.formCadastro = document.querySelector("form");
        this.formCadastro.addEventListener("submit", Estoque.cadastrarProdutos);

        this.#tableBody = document.querySelector("table tbody");
    }
    static imprimir() {
        this.#tableBody.innerHTML = "";
        for (let i = 0; i < Estoque.produtos.length; i++) {
            const produto = Estoque.produtos[i];
            const tr = document.createElement("tr");
            const idTd = document.createElement("td");
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

            idTd.innerHTML = produto.id;
            nomeTd.innerHTML = produto.nome;
            quantidadeTd.innerHTML = produto.quantidade;
            precoTd.innerHTML = produto.preco;

            edtBtn.addEventListener("click", () => {
                Catalogo.exibirUpdateForm(produto.id)
            }
            );
            deleteBtn.addEventListener("click", () => {
                Estoque.deletarProduto(produto.id)
            }
            );

            actionTd.appendChild(edtBtn);
            actionTd.appendChild(deleteBtn);

            tr.appendChild(idTd);
            tr.appendChild(nomeTd);
            tr.appendChild(quantidadeTd);
            tr.appendChild(precoTd);
            tr.appendChild(actionTd);

            this.#tableBody.appendChild(tr);
        }
        this.limparCampos();
    }
    static exibirUpdateForm(idProduto){
        const produto = Estoque.produtos.find((produto) => produto.id === idProduto);
        if(produto) {
            document.querySelector("form").style.display = "none";
            document.getElementById("edit-container").style.display = "block";
            this.id.value = produto.id;
            this.nomeEdt.value = produto.nome;
            this.quantidadeEdt.value = produto.quantidade;
            this.precoEdt.value = produto.preco;

            this.#updateBtn.addEventListener("click", () => {
                Catalogo.atualizarProduto();
            }
            );
            this.cancelBtn.addEventListener("click", () => {
                Catalogo.cancelUpdateForm();
            }
            );

            this.id.style.display = "inline-block";
            this.nomeEdt.style.display = "inline-block";
            this.quantidadeEdt.style.display = "inline-block";
            this.precoEdt.style.display = "inline-block";

            this.updateBtn.style.display = "inline-block";
            this.cancelBtn.style.display = "inline-block";
        }
    }
    static atualizarProduto() {
        const p = new Produto(
            this.nomeEdt.value,
            this.quantidadeEdt.value,
            this.precoEdt.value
        );
        p.id = this.id.value;
        Estoque.atualizarProduto(p);
        Catalogo.cancelUpdateForm();
    }
    static cancelUpdateForm(){
        document.querySelector("form").style.display = "block";
        document.getElementById("edit-container").style.display = "none";
        this.limparCampos();
    }
    static limparCampos() {
        this.nome.value = '';
        this.quantidade.value = '';
        this.preco.value = '';

        this.nome.focus();
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
    static get id() {
        return this.#id;
    }
    static get nomeEdt() {
        return this.#nomeEdt;
    }
    static get quantidadeEdt() {
        return this.#quantidadeEdt;
    }
    static get precoEdt() {
        return this.#precoEdt;
    }
    static get updateBtn() {
        return this.#updateBtn;
    }
    static get cancelBtn() {
        return this.#cancelBtn;
    }
}

class Produto {
    #id;
    #nome;
    #quantidade;
    #preco;
    constructor(nome, quantidade, preco) {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }
    get nome() {
        return this.#nome;
    }
    get quantidade() {
        return this.#quantidade;
    }
    get preco() {
        return this.#preco;
    }
    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }
}

class Estoque {
    static #produtos = [];
    static ids = 0;
    constructor() { }
    static cadastrarProdutos(e) {
        e.preventDefault();
        const p = new Produto(
            Catalogo.nome.value,
            Catalogo.quantidade.value,
            Catalogo.preco.value);
        p.id = ++Estoque.ids;
        Estoque.produtos.push(p);
        Catalogo.imprimir();
    }
    static deletarProduto(produtoId) {
        this.#produtos = Estoque.produtos.filter((produto) => produto.id != produtoId);
        Catalogo.imprimir();
    }
    static atualizarProduto(novoProduto) {
        this.#produtos.slice(novoProduto.id-1, 1);
        this.#produtos[novoProduto.id-1] = novoProduto;
        Catalogo.imprimir();
    }
    static get produtos() {
        return this.#produtos;
    }
    get produtos() {
        return this.#produtos;
    }
}

Catalogo.init();