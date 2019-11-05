interface ILibrosController extends ng.IScope{
    vm: LibrosController;
}

class LibrosController implements ng.IController{

    public static $inyect = ["$scope·"];
    public libros: Array<ILibro>;
    public libroFormulario: ILibro;

   
    //funcion
    public editarLibro: any;
    public hola: any;
    
    constructor(private $scope: ILibrosController, private librosService: ILibrosService){
        
        console.trace("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];

        librosService.getLibros().then( datos => $scope.vm.libros = datos );   

        this.editarLibro = (lib: ILibro) => {
            console.trace("Click & %o",lib);
            this.$scope.vm.libroFormulario = lib;
        } // hola
       

    } // constructor

  

    

    
}

