const botao = document.querySelector("button");

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Resultado máximo é 9.");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
