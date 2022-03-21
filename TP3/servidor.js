const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hola mundo')
})

const PORT = 8080

const connetedServer = server.listen(PORT, () =>{
    console.log(`Servidor Http escuchando en el puerto ${connetedServer.address().PORT}`)
})