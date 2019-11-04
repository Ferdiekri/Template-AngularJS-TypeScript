interface IContratosController extends ng.IScope{
    vm: ContratosController;
}

interface IContratoResumen {
    id: string;
    nombre: string;
    numeroAcciones: number;
}

class ContratosController implements ng.IController{
    
    public titulo: string;
    public contratos: any;
    public contratosMapeados: Array<IContratoResumen>;
    public contratosSinAcciones: any;
    public contratosConAcciones: any;
    public contratosPocasAcciones: any;
    public contratosMuchasAcciones: any;
    public contratosNingunaAccion: any;
    public primerContrato: any;
    public ultimoContrato: any;
    public pruebas: any;

    public static $inyect = ["$scope·", "contratos"];
    
    constructor(private $scope: IContratosController, private contratosJson: any){
        
        console.trace("ContratosController constructor");
        $scope.vm = this;
        $scope.vm.titulo = "Contratos Titulo";
        $scope.vm.contratos = this.contratosJson;
        console.debug("ContratosJson: %o", $scope.vm.contratos);

        $scope.vm.contratosMapeados = $scope.vm.contratos.map( (elem) => {
            return {
                "id": elem.idColumn,
                "nombre": (elem.nombre) ? elem.nombre : "Sin nombre",
                "numeroAcciones": (elem.ACCIONES) ? elem.ACCIONES.length : 0
            }
        });

        // Número de contratos sin (y con) acciones.
        $scope.vm.contratosSinAcciones = $scope.vm.contratos.filter( (elem) => !elem.ACCIONES );
        $scope.vm.contratosConAcciones = $scope.vm.contratos.filter( (elem) => elem.ACCIONES );

        // Número de contratos entre 1 y 3 acciones
        $scope.vm.contratosPocasAcciones = $scope.vm.contratosMapeados.filter( (elem) => (elem.numeroAcciones>=1 && elem.numeroAcciones<=3)  );

        // Número de contratos con más acciones.
        $scope.vm.contratosMuchasAcciones = $scope.vm.contratosMapeados.filter( (elem) => elem.numeroAcciones>3 );
        $scope.vm.contratosNingunaAccion = $scope.vm.contratos.filter( (elem) => (elem.ACCIONES  && elem.ACCIONES == 0) );

        // Buscar el primer contrato que tenga en ACCIONES "clave": "SITUACIÓN"
        
        $scope.vm.primerContrato = $scope.vm.contratos.filter( elem => {
            if ( elem.ACCIONES != undefined ){
              let resul = elem.ACCIONES.filter( e => e.clave == 'SITUACION' );
                return (resul.length === 1); // true si es verdadero.
            }else{
              return false
            }            
          });
          console.debug("pruebas");
          $scope.vm.pruebas = $scope.vm.primerContrato.find(el => el.ACCIONES.clave == 'SITUACION');

        // Buscar el último contrato que tenga en ACCIONES "clave": "SITUACIÓN"	
        //$scope.vm.ultimoContrato: any;

        // Todas las acciones diferentes



    } // constructor
}