var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
        $scope.vm.contratosNingunaAccion = $scope.vm.contratos.filter(function (elem) { return (elem.ACCIONES && elem.ACCIONES == 0); });
        $scope.vm.contratosPocasAcciones = $scope.vm.contratosMapeados.filter(function (elem) { return (elem.numeroAcciones >= 1 && elem.numeroAcciones <= 3); });
        $scope.vm.contratosMuchasAcciones = $scope.vm.contratosMapeados.filter(function (elem) { return elem.numeroAcciones > 3; });
        $scope.vm.primerContrato = $scope.vm.contratos
            .filter(function (elem) { return elem.ACCIONES && elem.ACCIONES.length > 0; })
            .find(function (elem) { return elem.ACCIONES.find(function (elem) { return elem.clave == 'SITUACION'; }); });
        $scope.vm.ultimoContrato = $scope.vm.contratos.reverse()
            .filter(function (elem) { return elem.ACCIONES && elem.ACCIONES.length > 0; })
            .find(function (elem) { return elem.ACCIONES.find(function (elem) { return elem.clave == 'SITUACION'; }); });
        var accionesDuplicadas = $scope.vm.contratos
            .filter(function (c) { return c.ACCIONES && c.ACCIONES.length > 0; })
            .map(function (c) { return c.ACCIONES; })
            .reduce(function (a, b) {
            return a.concat(b);
        })
            .map(function (x) { return x.titulo; });
        $scope.vm.acciones = __spread(new Set(accionesDuplicadas)).sort();
    }
    ContratosController.$inyect = ["$scope·", "contratos"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map