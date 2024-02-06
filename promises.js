// quando queremos fazer uma coisa que não executar imediatamente demora um tempo para executar.       
/*
new promise ((resolve, reject) => {
    // .. 
    // .. se der certo 
    resolve()
    // se der errado 
    reject()

})
*/
const promessaDeUmNumeroQualquer = new Promise((resolve,reject) =>{
    const numero = parseInt(Math.random()*100)
    resolve (numero);
}) 
promessaDeUmNumeroQualquer
.then((value) => {
    console.log(value)
    return value + 10
})
.then((value)=> {  //podemos encadear varios then para manipular os dados   
    console.log(value)
})
.catch((error)=> {
    console.error(error)
})
.finally(()=>{
    console.log('Finalizou!')
})