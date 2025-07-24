/*
1. Gerenciador de Contatos Simples

Crie um sistema no console para CADASTRAR, LISTAR e REMOVER contatos.

Requisitos: Um array de objetos contatos[]. 
Cada contato tem: const contatos = nome: "telefone".

Funções:
adicionarContato() = OK
listarContatos() = OK
removerContato() = OK
*/

const contatos = [];

function adicionarContato() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;

    const contato = {
        nome: nome,
        telefone: telefone
    }

    if (nome === "" && telefone === "") {
        alert("Adicione um contato");
    } else if (contatos.some(c => c.telefone === telefone)) {
        alert("Esse número já existe nos registros");
    } else {
        contatos.push(contato);
    }

    document.getElementById('nome').value = "";
    document.getElementById('telefone').value = "";
}

function listarContatos() {

    let lista = document.getElementById('listaContatos');
    lista.innerHTML = "";

    if (contatos.length === 0) {
        lista.textContent = "A lista está vazia";
        setTimeout(() => {
            lista.textContent = "";
        }, 2000);
        return;
    }

    contatos.forEach(c => {
        const div = document.createElement("div");
        div.className = "contato";
        div.textContent = `Nome: ${c.nome} | Telefone: ${c.telefone}`;
        lista.appendChild(div);
    });
}

function removerContato() {

    let nome = document.getElementById('nomeRemover').value;
    const index = contatos.findIndex(c => c.nome === nome)

    if (index !== -1) {
        contatos.splice(index, 1);
        console.log("Contato removido")
    } else {
        console.log("Contato não encontrado")
    }

    listarContatos();
    document.getElementById('nomeRemover').value = "";
}
