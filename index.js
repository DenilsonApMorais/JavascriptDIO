class Pessoa {
    constructor(nome){
        this.name = nome 
    }
}

const lista  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  // Criando uma lista
const listaPessoa = [new Pessoa('denilson'),new Pessoa('Andressa'),new Pessoa('victor'),new Pessoa('jose'),new Pessoa('Amanda')]
//forEach é responsável por percorrer a lista 

// valor, indice e referencia para lista 
lista.forEach((value, i, listRef) => {
    console.log(value, i , listRef)
})
console.log(lista)

// filter vai filtrar a lista e retornar uma lista com apenas os numeros pares 
let numerosPares = lista.filter((element) => {
    return (element % 2 === 0) 
})
console.log(numerosPares)
console.log(listaPessoa)
// map realiza a conversão de um objeto em outro.
const listaNomes = listaPessoa.map((element) => {
    return element.name
})
 
console.log(listaNomes)
// se eu quiser retornar uma lista de html
const listaEmHTML = listaPessoa.map((element) => {
    return`
        <li> 
            ${element.name}
        </li>
    `
})

console.log(listaEmHTML)

//reduce reduz a lista em um único valor 
const somaDeTodosOsNumeros = lista.reduce((previous, current)=>{
    return previous + current
})
console.log(somaDeTodosOsNumeros)

// join 

const lista3 = [1,2,3]
console.log(lista3.join('/'))
console.log(listaPessoa.map((element) => element.name).join('; '))

            //pega o elemento da lista pessoa e retorna o elemento.nome dele 
console.log(listaPessoa.map(element => element.name).filter((element)=>element.startsWith ('A')).join('; '))

//Agora retornando em html.

const elementosEmHTML = listaPessoa
                                    .filter((element)=> element.name.startsWith('A'))
                                    .map((element)=> `<li>${element.name}</li>`)
                                    .join('')
console.log(elementosEmHTML)