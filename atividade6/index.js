
class Estudante{
    constructor(nome, email, ra, curso, disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = []
    }
    primeiraDisciplina(){
            console.log(`A primeira disciplina é ${this.disciplinas[0]}`)
            }
    ultimaDisciplina(){
            console.log(`A última disciplina é ${this.disciplinas[this.disciplinas.length-1]}`)
    }
}

const pessoa1 = new Estudante("pessoa1", "pessoa1@gmail.com", 202401, "ADS")
pessoa1.disciplinas = ["LP", "Calculo", "SI", "SO", "ES"]
const pessoa2 = new Estudante("pessoa2", "pessoa2@outlook.com", 202402, "ADM")
pessoa2.disciplinas =  ["MKT", "RH", "Financeiro", "Operações"]

console.log(pessoa1)
console.log(pessoa2)

pessoa1.primeiraDisciplina()
pessoa2.ultimaDisciplina()