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
    getLibroById(id: number): angular.IPromise<ILibro>;

    /**
     * 
     * @param id 
     */
    deleteLibro(id: number): angular.IPromise<boolean>;

    /**
     * 
     * @param libro 
     */
    crear(libro: ILibro): angular.IPromise<ILibro>;

    /**
     * Modificar un libro ya existente
     * @param id del libro a modificar
     * @param libro nuevos datos del libro
     * @return true si modifica el libro, false si no lo modifica,
     */
    modificar(id: number, libro: ILibro): angular.IPromise<boolean>;  
}

class LibrosService implements ILibrosService{

    private http: ng.IHttpService;

    constructor($http) {
        console.trace('LibrosService constructor');
        this.http = $http;
    }

    //TODO => Poner public a los metodos y tipar correctamente.

    getLibros = (): any => {
        const url = "http://localhost:3000/libros";
        console.trace('GET ' + url);
        return this.http.get(url).then( res => res.data );
    }
    
    
    getLibroById(id: number): angular.IPromise<ILibro> {
        throw new Error("Method not implemented.");
    }

    deleteLibro(id: number): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }

    crear(libro: ILibro): angular.IPromise<ILibro> {
        throw new Error("Method not implemented.");
    }

    modificar(id: number, libro: ILibro): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }


}