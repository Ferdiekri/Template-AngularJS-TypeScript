interface IContratosController extends ng.IScope{
    vm: ContratosController;
}

class ContratosController implements ng.IController{
    
    public titulo: string;
    public contratos: any;
    public contratosMapeados: Array<IContratoResumen>;
    public contratosSinAcciones: Array<any>;
    public contratosConAcciones: Array<any>;
    public contratosPocasAcciones: Array<any>;
    public contratosMuchasAcciones: Array<any>;
    public contratosNingunaAccion: Array<any>;
    public primerContrato: Array<any>;
    public ultimoContrato: Array<any>;
    public accionesDiferentes: Array<any>;
    public acciones: Array<string>;

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

        // Número de contratos con 0 acciones (hay contratos que tienen ACCIONES pero ese Array está vacía)
        $scope.vm.contratosNingunaAccion = $scope.vm.contratos.filter( (elem) => (elem.ACCIONES  && elem.ACCIONES == 0) );

        // Número de contratos entre 1 y 3 acciones
        $scope.vm.contratosPocasAcciones = $scope.vm.contratosMapeados.filter( (elem) => (elem.numeroAcciones>=1 && elem.numeroAcciones<=3)  );

        // Número de contratos con más acciones.
        $scope.vm.contratosMuchasAcciones = $scope.vm.contratosMapeados.filter( (elem) => elem.numeroAcciones>3 );
        

        // Buscar el primer contrato que tenga en ACCIONES "clave": "SITUACIÓN" 
        $scope.vm.primerContrato = $scope.vm.contratos
            .filter( elem => elem.ACCIONES && elem.ACCIONES.length > 0) // Primero filtramos los contratos que tienen acciones.
            .find( elem => elem.ACCIONES.find( elem => elem.clave == 'SITUACION' ) // Buscamos entre las acciones la clave
        );

        // Buscar el último contrato que tenga en ACCIONES "clave": "SITUACIÓN"	
        $scope.vm.ultimoContrato = $scope.vm.contratos.reverse()
            .filter( elem => elem.ACCIONES && elem.ACCIONES.length > 0) // Primero filtramos los contratos que tienen acciones.
            .find( elem => elem.ACCIONES.find( elem => elem.clave == 'SITUACION' ) // Buscamos entre las acciones la clave
        );

        // Todas las acciones diferentes
        /*
        $scope.vm.accionesDiferentes = $scope.vm.contratosConAcciones
            .map( (elem) => elem.ACCIONES
                .map(e => e.titulo).flat() )
            .flat()
            .filter( (v,i,a) => a.indexOf(v) === i );
        $scope.vm.accionesDiferentes.sort();
        */

        
        // Otra forma de hacerlo pero en vez de utilizar '.flat' utilizamos '.reduce'.

        let accionesDuplicadas: Array<any> = $scope.vm.contratos
            .filter(c => c.ACCIONES && c.ACCIONES.length > 0) // coger solo arrays con datos
            .map(c => c.ACCIONES)                             // quedarnos con las acciones            
            .reduce(function(a, b) {                          // reducir los subarrays a 1 array                             
                return a.concat(b);
            })            
            .map(x => x.titulo);                              // quedarnos con el titulo de la accion

        $scope.vm.acciones = [...new Set(accionesDuplicadas)].sort(); // eliminar duplicados y ordena
        /**/

    } // constructor
}