interface ILibrosController extends ng.IScope{
    vm: LibrosController;
}

class LibrosController implements ng.IController{

    public static $inyect = ["$scope·", "contratos"];
    
    constructor(private $scope: ILibrosController){
        
        console.trace("LibrosController constructor");
        $scope.vm = this;
        

    } // constructor
}

