interface ILibrosController extends ng.IScope{
    vm: LibrosController;
}

class LibrosController implements ng.IController{

    public static $inyect = ["$scope·"];
    public libros: Array<ILibro>;
    public libroFormulario: ILibro;
    public tituloseccion: string;
    public formatos: any;
    public formatosElegidos: any;
    public mensaje: string;
    public libroBorrar: ILibro;
    public temp:any;

   
    //funcion
    public editarLibro: any;
    public borrarLibro: any;
    public guardarLibro: any;
    public obternerFormatos: any;
    
    constructor(private $scope: ILibrosController, private librosService: ILibrosService){
        
        console.trace("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];
        $scope.vm.tituloseccion = "Nuevo Libro:";

        librosService.getLibros().then( datos => { 
            $scope.vm.libros = datos;
            this.obternerFormatos();
        });  
        
        console.trace("Formatos");
        

        // funciones
        
        this.editarLibro = ( lib: ILibro ) => {
            console.trace("editarLibro & %o", lib);
            this.$scope.vm.libroFormulario = angular.copy(lib); // Hace una copia del objeto y así no se modifica el original.
            $scope.vm.tituloseccion = "Editar Libro: #" + lib.id;
        } // editarLibro()

        this.borrarLibro = ( ) => {
            console.trace("borrarLibro & %s", $scope.vm.libroBorrar.id);
            librosService.deleteLibro($scope.vm.libroBorrar.id).then(
                ( data ) => {
                    console.warn("Libro eliminado. %o", data);
                    $scope.vm.mensaje = "Libro eliminado correctamente.";
                    let indice = $scope.vm.libros.indexOf($scope.vm.libroBorrar); 
                    $scope.vm.libros.splice(indice, 1);
                },
                ( res ) => {
                    console.warn("No se ha podido eliminar el libro. %o", res);
                    $scope.vm.mensaje = "No se ha podido eliminar el libro.";
                }
            );
        } // borrarLibro()

        this.guardarLibro = () => {
            console.trace("guardarLibro");
            let lib = $scope.vm.libroFormulario; 
            if( lib.id ){
                // modificar
                librosService.modificarLibro(lib.id, lib).then(
                    ( data ) => {
                        console.warn("Libro modificado. %o", data);
                        $scope.vm.mensaje = "Libro modificado correctamente.";
                        let indice = $scope.vm.libros.indexOf(lib); 
                        $scope.vm.libros.indexOf[indice] = data;
                        $scope.vm.libroFormulario = undefined;                        
                    },
                    ( res ) => {
                        console.warn("No se ha podido modificar el libro. %o", res);
                        $scope.vm.mensaje = "No se ha podido modificar el libro.";
                    } 
                );

            } else {
                // insertar
                librosService.crearLibro($scope.vm.libroFormulario).then(
                    ( data ) => {
                        console.warn("Libro creado. %o", data);
                        $scope.vm.mensaje = "Libro modificado correctamente.";
                        $scope.vm.libros.push(data); 
                        $scope.vm.libroFormulario = undefined;
                    },
                    ( res ) => {
                        console.warn("No se ha podido crear el libro. %o", res);
                        $scope.vm.mensaje = "No se ha podido crear el libro.";
                    } 
                );

            }
        } // guardarLibro()

        $scope.vm.obternerFormatos = () =>{
            $scope.vm.temp = $scope.vm.libros.filter((elem)=>elem.formatos != undefined);
            let temporal = $scope.vm.temp.map((elem)=>elem.formatos).flat();
            console.debug('temporales %o', temporal);
          
            $scope.vm.formatos = temporal.filter((v,i,a)=>a.indexOf(v)===i);
            console.debug("formatos %o", $scope.vm.formatos);

            /*

            let sacarFormatos = $scope.vm.libros
            .filter( elem => elem.formatos )
                .map( elem => elem.formatos != undefined )
                    //.reduce( (a,b) => a.concat(b) )
            ;
            $scope.vm.formatos = [ ...new Set(sacarFormatos) ].sort();

            */
        } // obtenerFormato()

        
       

    } // constructor

  

    

    
}

