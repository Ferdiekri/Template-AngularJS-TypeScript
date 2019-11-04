var ContratosController = (function () {
    function ContratosController($scope, contratosJson) {
        this.$scope = $scope;
        this.contratosJson = contratosJson;
        console.trace("ContratosController constructor");
        $scope.vm = this;
        $scope.vm.titulo = "Contratos Titulo";
        $scope.vm.contratos = this.contratosJson;
        console.debug("ContratosJson: %o", $scope.vm.contratos);
        $scope.vm.contratosMapeados = $scope.vm.contratos.map(function (elem) {
            return {
                "id": elem.idColumn,
                "nombre": (elem.nombre) ? elem.nombre : "Sin nombre",
                "numeroAcciones": (elem.ACCIONES) ? elem.ACCIONES.length : 0
            };
        });
        $scope.vm.contratosSinAcciones = $scope.vm.contratos.filter(function (elem) { return !elem.ACCIONES; });
        $scope.vm.contratosConAcciones = $scope.vm.contratos.filter(function (elem) { return elem.ACCIONES; });
        $scope.vm.contratosPocasAcciones = $scope.vm.contratosMapeados.filter(function (elem) { return (elem.numeroAcciones >= 1 && elem.numeroAcciones <= 3); });
        $scope.vm.contratosMuchasAcciones = $scope.vm.contratosMapeados.filter(function (elem) { return elem.numeroAcciones > 3; });
        $scope.vm.contratosNingunaAccion = $scope.vm.contratos.filter(function (elem) { return (elem.ACCIONES && elem.ACCIONES == 0); });
        $scope.vm.primerContrato = $scope.vm.contratos.filter(function (elem) {
            if (elem.ACCIONES != undefined) {
                var resul = elem.ACCIONES.filter(function (e) { return e.clave == 'SITUACION'; });
                return (resul.length === 1);
            }
            else {
                return false;
            }
        });
        console.debug("pruebas");
        $scope.vm.pruebas = $scope.vm.primerContrato.find(function (el) { return el.ACCIONES.clave == 'SITUACION'; });
    }
    ContratosController.$inyect = ["$scope·", "contratos"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map