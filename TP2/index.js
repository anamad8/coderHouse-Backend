const fs = require('fs');

class Contenedor{
    constructor(filename){
        this.filename = filename;
    }

    async _getLastId(content=null){
        if (content == null){
            content = await this.getAll();
        }
        let lastId = 1
        if (content.length > 0){
            const ids = content.map(x=>x.id);
            lastId = Math.max(...ids);
        }
        return lastId;
    }

    async save(object){
        try{
            const content = await this.getAll();
            const lastId = await this._getLastId(content);

            object.id = lastId + 1;

            content.push(object);

            try{
                await fs.promises.writeFile(this.filename,JSON.stringify(content),"utf-8");
            }
            catch(error){
                throw `Error when writing to file: ${error}`;
            }

            return lastId;
        }
        catch(error){
            throw `Error while saving elements: ${error}`;
        }
    }

    async getById(id){
        try{
            const content = await this.getAll();
            return content.filter(el => el.id == id);
        }
        catch(error){
            throw `Error while getting all elements: ${error}`;
        }
    }

    async getAll(){
        try{
            const content = await fs.promises.readFile(this.filename,'utf-8');
            try{
                const objets =  JSON.parse(content);
                return objets;
            }
            catch(parseError){
                //En caso de que el archivo esté vacio agarro ese error y retorno simplemente un array vacio
                return [];
            }
        }
        catch(error){
            throw `Error while reading file: ${error}`;
        }
    }

    async deleteById(id){
        try{
            const content = await this.getAll();
            const idx = content.findIndex(el=>el.id==id);

            //En caso que de -1 es que no existe el item
            if (idx < 0){
                throw `Item with id ${id} not found`;
            }

            delete content[idx];

            try{
                await fs.promises.writeFile(this.filename,JSON.stringify(content),"utf-8");
            }
            catch(error){
                throw `Error when writing to file: ${error}`;
            }
        }
        catch(error){
            throw `Error while getting all elements: ${error}`;
        }
    }

    async deleteAll(){
        try{
            await fs.promises.writeFile(this.filename,"[]","utf-8");
        }
        catch(error){
            throw `Error when writing to file: ${error}`;
        }
    }
}


async function testContenedor(contenedor){
    try{
        const lastId = await contenedorProductos.save({
            "title": "Smart TV Kanji 9809B DLED 4K 60' ",                                                                                                                              
            "price": 74000,
            "thumbnail": "https://http2.mlstatic.com/D_NQ_NP_865885-MLA43620333626_092020-V.jpg"})
        console.log(lastId)
        
        const element = await contenedorProductos.getById(4);
        console.log(JSON.stringify(element,null,4));

        
        const elementsBeforeDelete = await contenedorProductos.getAll();

        await contenedorProductos.deleteById(5);
        await contenedorProductos.deleteAll();

        const elementsAfterDelete = await contenedorProductos.getAll();

        console.log("Before Deletion:");
        console.log(JSON.stringify(elementsBeforeDelete,null,4));
        console.log("After Deletion:");
        console.log(JSON.stringify(elementsAfterDelete,null,4));
    }
    catch(error){
        console.error(error);
    }
}

const contenedorProductos = new Contenedor('./productos.json');


testContenedor(contenedorProductos);