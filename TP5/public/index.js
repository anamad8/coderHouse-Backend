const inputs = document.getElementById('inputs')

function ingresar() {
    let ingresar = document.createElement('div')
    ingresar.innerHTML = `<form class="d-flex flex-column m-4" action="/api/productos" method="post">
                <input type="text" placeholder="Titulo del Producto" name="title" required>
                <input type="number" placeholder="Precio" name="price" required>
                <input type="url" placeholder="link del Producto" name="thumbail">
                <button type="submit" class="m-3">Agregar</button>
            </form>`
    inputs.innerHTML = ''
    inputs.append(ingresar)
}

function modificar() {
    let modificar = document.createElement('div')
    modificar.innerHTML = `<form class="d-flex flex-column m-4" action="/api/productos/:id" method="post">
                <input type="number" placeholder="Id" name="id" required>
                <input type="text" placeholder="Titulo del Producto" name="title" required>
                <input type="number" placeholder="Precio" name="price" required>
                <input type="url" placeholder="link del Producto" name="thumbail">
                <button type="submit" class="m-3">Modificar</button>
            </form>`
    inputs.innerHTML = ''
    inputs.append(modificar)
}