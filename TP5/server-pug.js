const express = require('express')
const app = express()


// Configuracion de Router
const api = require('./routes/api')
app.use(api)

// Configuración de Carpeta Publica
app.use(express.static('public'))

// Codificación 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Entorno de Motor de Plantilla 

app.set('view engine', 'pug')
app.set('views', './views')


// Server 

PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`escuchando desde ${server.address().port}`)
})
server.on('error', error => console.log('error', error))