var LibrosService = (function () {
    function LibrosService($http) {
        var _this = this;
        this.getLibros = function () {
            var url = "http://localhost:3000/libros";
            console.trace('GET ' + url);
            return _this.http.get(url).then(function (res) { return res.data; });
        };
        console.trace('LibrosService constructor');
        this.http = $http;
    }
    LibrosService.prototype.getLibroById = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.deleteLibro = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.crear = function (libro) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.modificar = function (id, libro) {
        throw new Error("Method not implemented.");
    };
    return LibrosService;
}());
//# sourceMappingURL=libros.service.js.map