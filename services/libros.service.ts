interface ILibrosService{

    //TODO detallar los métodos
    /**
     * Peticion GET para obtener todos los libros
     * @return Promesa con array de ILibro
     */
    getLibros(): angular.IPromise<ILibro[]>; //angular.IPromise<Array<ILibro>>

    /**
     * 
     * @param id 
     */
    getLibroById(id: number): angular.IPromise<any>;

    /**
     * 
     * @param id 
     */
    deleteLibro(id: number): angular.IPromise<any>;

    /**
     * 
     * @param libro 
     */
    crearLibro(libro: ILibro): angular.IPromise<any>;

    /**
     * Modificar un libro ya existente
     * @param id del libro a modificar
     * @param libro nuevos datos del libro
     * @return true si modifica el libro, false si no lo modifica,
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

    //TODO => Poner public a los metodos y tipar correctamente.

    getLibros = (): any => {
        console.trace('GET ' + this.URL);
        return this.http.get(this.URL).then( res => res.data );
    }
    
    
    getLibroById(id: number): angular.IPromise<any> {
        throw new Error("Method not implemented.");
    }

    deleteLibro(id: number): angular.IPromise<any> {
        let ruta = this.URL + id;
        console.trace('DELETE ' + ruta);
        return this.http.delete(ruta).then(
            (res) => {
                console.debug("Petición Rest correcta.");
                return res.data;
            });
    }

    crearLibro(libro: ILibro): angular.IPromise<any> {
        console.trace('POST ' + this.URL);
        return this.http.post(this.URL, libro).then(
            (res) => {
                console.debug("Petición Rest correcta.");
                return res.data;
            });
    }

    modificarLibro(id: number, libro: ILibro): angular.IPromise<any> {
        let ruta = this.URL + id;
        console.trace('PUT ' + ruta);
        return this.http.put(ruta, libro).then(
            (res) => {
                console.debug("Petición Rest correcta.");
                return res.data;
            });
    }


}