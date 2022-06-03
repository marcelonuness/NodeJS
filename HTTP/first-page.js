const http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end('<h1>Hello World!</h1>')
}).listen(3000, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('servidor rodando na porta 3000')
    }
})