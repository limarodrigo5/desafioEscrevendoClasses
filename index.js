const readline = require("readline");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nomeHero;
let idadeHero;
let tipoHero;

class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let tipoLower = this.tipo.toLowerCase();
    if (tipoLower == "mago") {
      console.log(`o ${tipoLower} atacou usando magia`);
    } else if (tipoLower == "guerreiro") {
      console.log(`o ${tipoLower} atacou usando espada`);
    } else if (tipoLower == "monge") {
      console.log(`o ${tipoLower} atacou usando artes marciais`);
    } else if (tipoLower == "ninja") {
      console.log(`o ${tipoLower} atacou usando shuriken`);
    } else {
      console.log(`o ${tipoLower} atacou usando a força do ódio`);
    }
  }
}

readlineInterface.question("Informe o nome do herói: ", (nome) => {
  nomeHero = nome;
  readlineInterface.question("Informe a idade do herói: ", (idade) => {
    idadeHero = idade;
    readlineInterface.question("Informe o tipo do herói: ", (tipo) => {
      tipoHero = tipo;
      const novoHero = new Hero(nomeHero, idadeHero, tipoHero);
      novoHero.atacar();
      readlineInterface.close();
    });
  });
});
