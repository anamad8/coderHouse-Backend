const express = require('express')
const app = express()


//  Configuración de Carpeta Publica 
app.use(express.static('public'))

// Codificación
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuracion de Router
const api = require('./routes/api')
app.use(api)


// Entorno de Motor de Plantilla
app.set('view engine', 'ejs')
app.set('views', './views')


// Server 
PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`escuchando desde ${server.address().port}`)
})
server.on('error', error => console.log('error', error))