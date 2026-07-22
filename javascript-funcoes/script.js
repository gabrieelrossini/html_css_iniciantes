// function livro(nome, ano, autor) {
//   const nomeUpper = nome.toUpperCase();
//   const anoConta = 2050 - ano;
//   const frase = nome + " por " + autor;
//   const objeto = {
//     nome: nomeUpper,
//     anoConta,
//     frase,
//   };
//   return objeto;
// }

// function livro(nome, ano, autor) {
//   const objeto = {
//     nome: nome.toUpperCase(),
//     anoConta: 2050 - ano,
//     frase: nome + " por " + autor,
//   };
//   return objeto;
// }

function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    anoConta: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const funcao = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(funcao.frase);
