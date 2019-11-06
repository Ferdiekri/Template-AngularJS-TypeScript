var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        var _this = this;
        this.$scope = $scope;
        this.librosService = librosService;
        console.trace("LibrosController constructor");
        this.$scope.vm = this;
        $scope.vm.libros = [];
        $scope.vm.tituloseccion = "Nuevo Libro:";
        librosService.getLibros().then(function (datos) {
            $scope.vm.libros = datos;
            _this.obternerFormatos();
        });
        console.trace("Formatos");
        this.editarLibro = function (lib) {
            console.trace("editarLibro & %o", lib);
            _this.$scope.vm.libroFormulario = angular.copy(lib);
            $scope.vm.tituloseccion = "Editar Libro: #" + lib.id;
        };
        this.borrarLibro = function () {
            console.trace("borrarLibro & %s", $scope.vm.libroBorrar.id);
            librosService.deleteLibro($scope.vm.libroBorrar.id).then(function (data) {
                console.warn("Libro eliminado. %o", data);
                $scope.vm.mensaje = "Libro eliminado correctamente.";
                var indice = $scope.vm.libros.indexOf($scope.vm.libroBorrar);
                $scope.vm.libros.splice(indice, 1);
            }, function (res) {
                console.warn("No se ha podido eliminar el libro. %o", res);
                $scope.vm.mensaje = "No se ha podido eliminar el libro.";
            });
        };
        this.guardarLibro = function () {
            console.trace("guardarLibro");
            var lib = $scope.vm.libroFormulario;
            if (lib.id) {
                librosService.modificarLibro(lib.id, lib).then(function (data) {
                    console.warn("Libro modificado. %o", data);
                    $scope.vm.mensaje = "Libro modificado correctamente.";
                    var indice = $scope.vm.libros.indexOf(lib);
                    $scope.vm.libros.indexOf[indice] = data;
                    $scope.vm.libroFormulario = undefined;
                }, function (res) {
                    console.warn("No se ha podido modificar el libro. %o", res);
                    $scope.vm.mensaje = "No se ha podido modificar el libro.";
                });
            }
            else {
                librosService.crearLibro($scope.vm.libroFormulario).then(function (data) {
                    console.warn("Libro creado. %o", data);
                    $scope.vm.mensaje = "Libro modificado correctamente.";
                    $scope.vm.libros.push(data);
                    $scope.vm.libroFormulario = undefined;
                }, function (res) {
                    console.warn("No se ha podido crear el libro. %o", res);
                    $scope.vm.mensaje = "No se ha podido crear el libro.";
                });
            }
        };
        $scope.vm.obternerFormatos = function () {
            $scope.vm.temp = $scope.vm.libros.filter(function (elem) { return elem.formatos != undefined; });
            var temporal = $scope.vm.temp.map(function (elem) { return elem.formatos; }).flat();
            console.debug('temporales %o', temporal);
            $scope.vm.formatos = temporal.filter(function (v, i, a) { return a.indexOf(v) === i; });
            console.debug("formatos %o", $scope.vm.formatos);
        };
    }
    LibrosController.$inyect = ["$scope·"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map