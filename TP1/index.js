class Usuario{

    constructor(nombre, apellido, libros = null, mascotas = null) {
        this.nombre = nombre;
        this.apellido =apellido;
        this.libros = libros || [];
        this.mascotas = mascotas || [];
        
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMacota(){
        return this.mascotas.length;
    }

    addBook(nombreLibro, nombreAutor){
        this.libros.push({nombre:nombreLibro, autor:nombreAutor})
    }

    getBookNames(){
        return this.libros.map(x=>x.nombre)
    }

}

const user = new Usuario ("Anabel", "Amad");
console.log(user.getFullName());

user.addMascota("loky");
user.addMascota("Akira");
console.log(user.countMacota());

user.addBook("1772", "El arte de la guerra");
user.addBook("El Principito","La cinta roja");
const nombresLibros = user.getBookNames();
nombresLibros.map(libro=>console.log(libro))


