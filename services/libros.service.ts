interface ILibrosService{

    /**
     * Peticion GET para obtener todos los libros
     * @return Promesa con array de ILibro
     */
    getLibros(): angular.IPromise<ILibro[]>; //angular.IPromise<Array<ILibro>>

    /**
     * Peticion GET consultar un libro por su id.
     * @param id del libro a recoger
     */
    getLibroById(id: number): angular.IPromise<any>;

    /**
     * Peticion DELETE para borrar un libro.
     * @param id del libro a borrar
     */
    deleteLibro(id: number): angular.IPromise<any>;

    /**
     * Peticion PUT para insertar un libro.
     * @param libro a crear
     */
    crearLibro(libro: ILibro): angular.IPromise<any>;

    /**
     * Peticion PUT para modificar un libro ya existente.
     * @param id del libro a modificar
     * @param libro nuevos datos del libro
     */
    modificarLibro(id: number, libro: ILibro): angular.IPromise<any>;  
}

class LibrosService implements ILibrosService{

    private http: ng.IHttpService;
    private URL: string;

    constructor($http) {
        console.trace('LibrosService constructor');
        this.http = $http;
        this.URL = "http://localhost:3000/libros/";
    }

    public getLibros = (): any => {
        console.trace('GET ' + this.URL);
        return this.http.get(this.URL).then( res => res.data );
    }
    
    
    public getLibroById = (id: number): angular.IPromise<any> => {
        throw new Error("Method not implemented.");
    }

    public deleteLibro = (id: number): angular.IPromise<any> => {
        let ruta = this.URL + id;
        console.trace('DELETE ' + ruta);
        return this.http.delete(ruta).then(
            (res) => {
                console.debug("Petición Rest correcta.");
                return res.data;
            });
    }

    public crearLibro = (libro: ILibro): angular.IPromise<any> => {
        console.trace('POST ' + this.URL);
        return this.http.post(this.URL, libro).then(
            (res) => {
                console.debug("Petición Rest correcta.");
                return res.data;
            });
    }

    public modificarLibro = (id: number, libro: ILibro): angular.IPromise<any> => {
        let ruta = this.URL + id;
        console.trace('PUT ' + ruta);
        return this.http.put(ruta, libro).then(
            (res) => {
                console.debug("Petición Rest correcta.");
                return res.data;
            });
    }


}

/**
 * -1 Lenguaje de programación
 * -1 Novedades ES6 -> todas
 * -1 Resolve (then consume, resolve construye)
 * 
 * 
 * 
*/