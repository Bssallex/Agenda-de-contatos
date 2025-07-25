const contatos = [];

function formatarNumero(telefone) {
    telefone = telefone.replace(/\D/g, "");
    return telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
}

function adicionarContato() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;

    telefone = formatarNumero(telefone);

    const contato = {
        nome: nome,
        telefone: telefone
    }

    if (nome === "" && telefone === "") {
        alert("Adicione um contato");
    } else if (contatos.some(c => c.nome === nome)) {
        alert("Esse nome já existe nos registros");
        document.getElementById('nome').value = "";
        return;
    } else if (contatos.some(c => c.telefone === telefone)) {
        alert("Esse número já existe nos registros");
        document.getElementById('telefone').value = "";
        return;
    } else if (telefone.length < 14) {
        alert("Número de telefone inválido. 11 dígitos são necessários.");
        document.getElementById('telefone').value = "";
        return;
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

