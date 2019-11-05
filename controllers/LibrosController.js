var LibrosController = (function () {
    function LibrosController($scope) {
        this.$scope = $scope;
        console.trace("LibrosController constructor");
        $scope.vm = this;
    }
    LibrosController.$inyect = ["$scope·", "contratos"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map