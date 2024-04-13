
const lista = [17, 42, 5, 31, 8, 49, 23, 11]

//C. Uma função que devolva o valor da soma dos itens da lista
const somaLista = lista.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log(somaLista)

//A. Uma função que devolve os valores que são maiores que a média
const maiorqueMedia = lista.filter(num => num > somaLista / lista.length)
console.log(maiorqueMedia)

//B. Uma função que devolva o menor valor da lista
function menorValor(lista){
    console.log(Math.min(...lista))
}
menorValor(lista)

//D. Uma função que devolva todos os valores que são menores que 20
const menoresVinte = lista.filter(valor => valor < 20)
console.log(menoresVinte)

//E. Uma função que vai devolver o primeiro e o último valor da lista
function primeiroEultimo(lista){
    lista.forEach((valor, indice) => {
        if(indice == 0){
            console.log(valor)
        }
        if(indice == lista.length-1){
            console.log(valor)
        }
    })
}
primeiroEultimo(lista)