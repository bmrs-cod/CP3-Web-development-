let jogos = [
    "Dark Souls 3",
    "Pokémon X",
    "Celeste"
];

function renderizarLista() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < jogos.length; i++) {

        lista.innerHTML += `
            <li>
                ${jogos[i]}

                <button onclick="editarItem(${i})">
                    Editar
                </button>

                <button onclick="removerItem(${i})">
                    Remover
                </button>
            </li>
        `;
    }
}

function fazerLogin() {

    let usuario =
        document.getElementById("usuario").value;

    let senha =
        document.getElementById("senha").value;

    let erro =
        document.getElementById("erroLogin");

    erro.innerHTML = "";

    if (usuario === "" || senha === "") {

        erro.innerHTML =
            "Preencha todos os campos.";

        return;
    }

    if (
        usuario === "aluno" &&
        senha === "fiap2025"
    ) {

        document.getElementById("login")
            .style.display = "none";

        document.getElementById("crud")
            .style.display = "block";

        renderizarLista();

    } else {

        erro.innerHTML =
            "Usuário ou senha incorretos.";
    }
}

function adicionarFinal() {

    let campo =
        document.getElementById("novoItem");

    let erro =
        document.getElementById("erroItem");

    erro.innerHTML = "";

    if (campo.value === "") {

        erro.innerHTML =
            "Digite um jogo.";

        return;
    }

    jogos.push(campo.value);

    campo.value = "";

    renderizarLista();
}

function adicionarInicio() {

    let campo =
        document.getElementById("novoItem");

    let erro =
        document.getElementById("erroItem");

    erro.innerHTML = "";

    if (campo.value === "") {

        erro.innerHTML =
            "Digite um jogo.";

        return;
    }

    jogos.unshift(campo.value);

    campo.value = "";

    renderizarLista();
}

function editarItem(posicao) {

    let novoNome = prompt(
        "Editar jogo:",
        jogos[posicao]
    );

    if (
        novoNome === null ||
        novoNome === ""
    ) {
        return;
    }

    jogos[posicao] = novoNome;

    renderizarLista();
}

function removerItem(posicao) {

    jogos.splice(posicao, 1);

    renderizarLista();
}