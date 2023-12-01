class personagemDoRpg {
    constructor(nome,idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log(`O héroi de nome: ${this.nome}, com idade: ${this.idade} da classe de: ${this.tipo}, atacou usando: ${this.ataque}.`)
    }
}
let personagem1 = new personagemDoRpg("Júnior", 42,"Mago", "magia")
let personagem2 = new personagemDoRpg("Wyllhyan", 18,"guerreiro", "espada")
let personagem3 = new personagemDoRpg("Marciana", 40,"momge", "artes marciais")
let personagem4 = new personagemDoRpg("Syndel", 13,"ninja", "shurikem")


personagem1.atacar()
personagem2.atacar()
personagem3.atacar()
personagem4.atacar()
