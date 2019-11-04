var ContratosController = (function () {
    function ContratosController($scope, contratosJson) {
        this.$scope = $scope;
        this.contratosJson = contratosJson;
        console.trace("ContratosController constructor");
        $scope.vm = this;
        $scope.vm.titulo = "Contratos Titulo";
        $scope.vm.contratos = this.contratosJson;
        console.debug("ContratosJson: %o", $scope.vm.contratos);
    }
    ContratosController.$inyect = ["$scope·", "contratos"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map