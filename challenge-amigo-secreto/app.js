let listaNomes = []; // lista para adicionar os nomes dos amigos

function adicionarAmigo() {
    let novoAmigo = document.getElementById('amigo'); // encontra o campo onde o nome é escrito
    let nome = novoAmigo.value; // pega o nome digitado

    if (!nome) { // caso o campo esteja vazio
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaNomes.push(nome); // adiciona o nome na lista de amigos
    novoAmigo.value = ""; // volta a deixar o campo em branco
    atualizarLista(); // atualiza a lista incluindo o nome do novo amigo
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpa a lista antes de atualizá-la, para que ela não apareça duplicada na tela
    
    listaNomes.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let posicaoAmigo = Math.floor(Math.random() * listaNomes.length);
    let amigoSorteado = listaNomes[posicaoAmigo];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> Seu amigo secreto é: ${amigoSorteado}!</li>`;

    // esconde a lista de nomes ao sortear um amigo
    document.getElementById('listaAmigos').style.display = "none";
}