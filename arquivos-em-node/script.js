let fs = require('fs')



// o método WriteFile substitui tudo do arquivo, gerando um novo
fs.writeFile('teste.txt', 'Hello World', function (error) {
    if (error) {throw error}

    console.log("arquivo criado com sucesso!")
})



//o método appendFile apenas acrescenta informações ao arquivo
fs.appendFile('teste.txt', '- Olá Mundo', function (error) {
    if (error) {throw error}

    console.log("arquivo criado com sucesso!")
})



// o método unlink apaga o arquivo criado
fs.unlink('teste.txt', function (error) {
    if (error) {throw error}

    console.log("arquivo apagado com sucesso!")
})



// o método rename renomeia um arquivo já criado
fs.rename('teste.txt', 'NovoNome.txt', function (error) {
    if (error) {throw error}

    console.log("arquivo apagado com sucesso!")
})



//o método readFile lê o que está dentro do arquivo indicado
fs.readFile('NovoNome.txt', 'UTF8', function (error, data) {
    if (error) {throw error}

    console.log(data)
})
