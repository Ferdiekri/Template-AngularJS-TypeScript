interface IContratosController extends ng.IScope{
    vm: ContratosController;
}

class ContratosController implements ng.IController{
    
    public titulo: string;
    public contratos: any;

    public static $inyect = ["$scope·", "contratos"];
    
    constructor(private $scope: IContratosController, private contratosJson: any){
        
        console.trace("ContratosController constructor");
        $scope.vm = this;
        $scope.vm.titulo = "Contratos Titulo";
        $scope.vm.contratos = this.contratosJson;
        console.debug("ContratosJson: %o", $scope.vm.contratos);

    } // constructor
}