const lista = ["JavaScript", "HTML", "CSS", "NODE.JS"];

const body = document.querySelector("body");

function adicionarBody(i) {
  body.innerHTML += "<li>" + i + "</li>";
}

lista.forEach(adicionarBody);
