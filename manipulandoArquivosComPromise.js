const fs = require('fs')

const promesaDaLeituraDoArquivo = fs.promises.readFile('./arquivos/tarefas.csv')

promesaDaLeituraDoArquivo
                    .then((arquivo) => arquivo.toString('utf-8'))
                    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
                    .then((linhasSemCabeçalho) => linhasSemCabeçalho.map((linha)=> {
                        const [nome,feito] = linha.split(';')
                        return {
                            nome,
                            feito: feito.trim() === 'true'
                        }
                    }))
                    .then((listaDeTarefas) => console.log(listaDeTarefas))
                    .catch((error) => console.log('deu ruim!',error))


