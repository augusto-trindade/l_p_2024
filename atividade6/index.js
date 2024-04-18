
class Estudante{
    constructor(nome, email, ra, curso, disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }
    primeiraDisciplina(disciplinas){
        disciplinas.forEach((valor, indice) => {
            if(indice == 0){
                console.log(`A primeira disciplina é ${this.disciplinas[0]}`)
            }
        })
    }
    ultimaDisciplina(disciplinas){
        disciplinas.forEach((valor, indice) => {
            if(indice == lista.length-1){
                console.log(`A última disciplina é ${this.disciplinas[lista.length-1]}`)
            }
        })
    }
}

const pessoa1 = new Estudante("pessoa1", "pessoa1@gmail.com", 202401, "ADS", ["LP", "Calculo", "SI", "SO", "ES"])
const pessoa2 = new Estudante("pessoa2", "pessoa2@outlook.com", 202402, "ADM", ["MKT", "RH", "Financeiro", "Operações"])

pessoa1.primeiraDisciplina()
