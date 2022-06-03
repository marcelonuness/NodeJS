const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((request, response) => {
    
    let path = url.parse(request.url).pathname
    if (path == "" || path == "/") {
        path = "/index.html"
    }
    let fileName = "." + path

    fs.readFile(fileName, (error, data) => {
        if(error) {
            response.writeHead(404, {"Content-Type": "text/html;charset=utf8"})
            response.end("<h1>Página não encontrada</h1>")
        } else {
            response.writeHead(200, {"Content-Type": "text/html"})
            response.write(data)
            response.end()
        }
    })

}).listen(3000, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('servidor rodando na porta 3000')
    }
})