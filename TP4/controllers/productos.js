const productos = [
    {
        "id": 1,
        "title": "Philco Smart TV 50",
        "price": 68000,
        "thumbnail": "https://philco.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/9/1/91pld50us21api_01_1_2.jpg"
        
    },
    {
        "title": "Smart TV FHD 43' LG ",
        "price": 60000,
        "thumbnail":"https://images.fravega.com/f1000/e1159ac5d160119bcf628556b667081b.jpg"
    },
    {
        "title": "Smart Tv 75 Pulgadas Kanji Led 4k Ultra Hd",
        "price": 220000,
        "thumbnail": "https://images.fravega.com/f500/7c140f883aa580488eb91720954f7e9c.jpg",
    }
]

export const getProductos = () => {
    return productos;
};

export const getProducto = (id) => {
    const index = productos.findIndex(producto => producto.id === parseInt(id));
    if (index === -1) {
        return 'no existe el id buscado';
    }
    return productos[index];
}

export const deleteProducto = (id) => {
    const index = productos.findIndex(producto => producto.id === parseInt(id));
    if (index === -1) {
        return 'no existe el id buscado';
    }
    productos.splice(index, 1);
    return `el producto con id ${id} fue eliminado correctamente`
}

export const addProducto = producto => {
    const productoNuevo = { ...producto, id: productos.length + 1 };
    productos.push(productoNuevo);
    return `el producto ${productoNuevo.title} fue agregado, con un precio de $${productoNuevo.price} y un thumbnail de ${productoNuevo.thumbnail}, su id asignado es ${productoNuevo.id}`
};

export const updateProducto = (id, productoNuevo) => {
    const index = productos.findIndex(prod => prod.id === parseInt(id));
    if (index === -1) {
        return 'no existe el id buscado';
    }
    if (productoNuevo.title){productos[index].title = productoNuevo.title};
    if (productoNuevo.price){productos[index].price = productoNuevo.price};
    if (productoNuevo.thumbnail){productos[index].thumbnail = productoNuevo.thumbnail};
    return `el producto ${productoNuevo.title} fue actualizado correctamente`;
}