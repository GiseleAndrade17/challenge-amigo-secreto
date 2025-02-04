//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  const campo = document.getElementById("amigo");
  const nome = campo.value.trim();

  if (nome === "") {
    alert("Por favor insira um nome.");
    return;
  }

  amigos.push(nome);

  campo.value = "";
  console.log("Lista de amigos:", amigos);

  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];

    lista.appendChild(li);
  }
}

function sortearAmigos() {
  if (amigos.length === 0) {
    alert("Nenhum amigo disponível para ser sorteado.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").textContent =
    "Amigo sorteado:" + amigoSorteado;
}
