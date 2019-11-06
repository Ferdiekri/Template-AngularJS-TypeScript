var LibrosService = (function () {
    function LibrosService($http) {
        var _this = this;
        this.getLibros = function () {
            console.trace('GET ' + _this.URL);
            return _this.http.get(_this.URL).then(function (res) { return res.data; });
        };
        console.trace('LibrosService constructor');
        this.http = $http;
        this.URL = "http://localhost:3000/libros/";
    }
    LibrosService.prototype.getLibroById = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.deleteLibro = function (id) {
        var ruta = this.URL + id;
        console.trace('DELETE ' + ruta);
        return this.http.delete(ruta).then(function (res) {
            console.debug("Petición Rest correcta.");
            return res.data;
        });
    };
    LibrosService.prototype.crearLibro = function (libro) {
        console.trace('POST ' + this.URL);
        return this.http.post(this.URL, libro).then(function (res) {
            console.debug("Petición Rest correcta.");
            return res.data;
        });
    };
    LibrosService.prototype.modificarLibro = function (id, libro) {
        var ruta = this.URL + id;
        console.trace('PUT ' + ruta);
        return this.http.put(ruta, libro).then(function (res) {
            console.debug("Petición Rest correcta.");
            return res.data;
        });
    };
    return LibrosService;
}());
//# sourceMappingURL=libros.service.js.map