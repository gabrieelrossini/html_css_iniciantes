const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkien";

const nomeFilme = "O senhor dos Anéis: A Sociedade do Anel";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};

const filme = {
  nome: "O Senhor dos Anéis: A Sociedade do Anel",
  ano: 2001,
  diretor: "Peter Jackson",
};

console.log(livro);
console.log(filme.ano);
console.log(filme.nome + ". Dirigido por: " + filme.diretor);

const texto = document.querySelector("p");

console.log(texto.innerHTML);
console.log(texto.clientHeight);

console.log(autor.length);
console.log(autor.toUpperCase());

const decimal = 123.99;
const arredondado = decimal.toFixed();

console.log(arredondado);
console.log(arredondado + 3);
console.log(Number(arredondado) + 3);

const total = decimal.toFixed().length.toFixed().length.toFixed(); // 123.99 - "130" - 3 - "3" - 1 - "1"
console.log(total);
