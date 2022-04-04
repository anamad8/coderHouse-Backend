
const express = require('express')

// DB 

const Contenedor = require('../db/contenedor.js')
const path = './db/productos.txt'
const productos = new Contenedor(path)

//----------- API Router ---------------------------------

const api = express.Router()
module.exports = api


//----------API Route ------------------------------------

api.get('/api/productos', (_, res) => {
    productos.getAll().then((result) => {
        let title = 'Peliculas'
        res.render('productos', { title, result } || { error: "producto no encontrado" })
    })
})

api.get('/api/productos/:id', (req, res) => {
    const { id } = req.params
    productos.getById(Number(id))
        .then((result) => { res.send(result || { error: "producto no encontrado" }) })
})

api.post('/api/productos', (req, res) => {
    const nuevoProd = req.body
    productos.save(nuevoProd)
    res.send({ Productos: 'Guardados' })
})

api.put('/api/productos/:id', (req, res) => {
    productos.modifyById(req.body)
    res.send({ obj: 'Producto modificado!' })
})

api.delete('/api/productos/:id', (req, res) => {
    const { id } = req.params
    productos.deleteById(Number(id))
    res.send('' || { error: 'producto no encontrado' })
})
