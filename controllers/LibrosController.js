var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        var _this = this;
        this.$scope = $scope;
        this.librosService = librosService;
        console.trace("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];
        $scope.vm.tituloseccion = "Nuevo Libro:";
        librosService.getLibros().then(function (datos) { return $scope.vm.libros = datos; });
        this.editarLibro = function (lib) {
            console.trace("Click & %o", lib);
            _this.$scope.vm.libroFormulario = lib;
            $scope.vm.tituloseccion = "Editar Libro: " + lib.id;
        };
    }
    LibrosController.$inyect = ["$scope·"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map