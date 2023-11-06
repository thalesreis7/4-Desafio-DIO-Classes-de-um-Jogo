class hero {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar() {
      let ataque
      if (this.tipo === "Mago") {
        ataque = "magia"
      } else if (this.tipo === "Guerreiro") {
        ataque = "espada"
      } else if (this.tipo === "Monge") {
        ataque = "artes marciais"
      } else if (this.tipo === "Ninja") {
        ataque =  "shuriken"
      } else {
        ataque = "um ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  
  const hero1 = new hero('Herói 1', 25, 'Mago');
  const hero2 = new hero('Herói 2', 30, 'Guerreiro');
  
  hero1.atacar(); 
  hero2.atacar(); 
  