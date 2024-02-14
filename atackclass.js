class Heroe {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {

    let ataque;


    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque indefinido';
    }

    console.log(`O ${this.tipo} ${ataque}`);
  }
}

const heroe1 = new Heroe('Eragon', 30, 'guerreiro');
heroi1.atacar(); 

const heroe2 = new Heroe('Gandalf', 1000, 'mago');
heroi2.atacar(); 
