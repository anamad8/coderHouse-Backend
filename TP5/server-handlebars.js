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


// Importar Handlebars
const handlebars = require('express-handlebars')
// Configuracion Motor de Plantilla
app.engine('hbs', handlebars.engine(
    {
        extname: 'hbs',
        defaultLayout: 'main.hbs',
        layoutsDir: '/views/layouts',
    }
))
// Entorno de Motor de Plantilla

app.set('view engine', 'hbs')
app.set('views', '/views')


// Server 

PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`escuchando desde ${server.address().port}`)
})
server.on('error', error => console.log('error', error))