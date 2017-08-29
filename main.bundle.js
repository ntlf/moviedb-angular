webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".movie-search {\r\n    text-align: center; \r\n    padding-bottom: 20px;\r\n}\r\n\r\n.movie-item {\r\n    margin: 5px;\r\n}\r\n\r\n.movie-title {\r\n    cursor: pointer;\r\n}\r\n\r\n.movie-results {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center\r\n}\r\n\r\n.movie-list {\r\n    width: 360px; \r\n}\r\n\r\n.movie-detail {\r\n    width: 720px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"movie-search\">\r\n    <h2>MovieDb</h2>\r\n    <input #inputText placeholder=\"movie title\" (keyup.enter)=\"searchMovies(inputText.value)\">\r\n  </div>\r\n\r\n  <div class=\"movie-results\">\r\n    <div class=\"movie-list\">\r\n      <div *ngIf=\"!isLoadingMovies; else loading\">\r\n        <div *ngIf=\"movies !== undefined && !movies[0]\">nothing found</div>\r\n        <div *ngFor=\"let movie of movies\" class=\"movie-item\">\r\n          <span class=\"movie-title\" (click)=\"getMovieDetails(movie)\">{{movie.title}}</span>\r\n          <i>{{movie.date}}</i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"movie-detail\">\r\n      <div *ngIf=\"!isLoadingDetails; else loading\">\r\n        <app-movie-detail [movie]=\"selectedMovie\"></app-movie-detail>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #loading>loading...</ng-template>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_movie_api_service__ = __webpack_require__("../../../../../src/app/providers/movie-api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(movieApiService) {
        this.movieApiService = movieApiService;
        this.isLoadingMovies = false;
        this.isLoadingDetails = false;
    }
    AppComponent.prototype.searchMovies = function (query) {
        var _this = this;
        this.isLoadingMovies = true;
        this.movieApiService.getMovies(query).then(function (data) {
            _this.movies = data;
            _this.isLoadingMovies = false;
        }).catch(function (error) {
            _this.isLoadingMovies = false;
            console.log(error);
        });
    };
    AppComponent.prototype.getMovieDetails = function (movie) {
        var _this = this;
        this.isLoadingDetails = true;
        this.movieApiService.getMovieDetails(movie).then(function (data) {
            _this.selectedMovie = data;
            _this.isLoadingDetails = false;
        }).catch(function (error) {
            _this.isLoadingDetails = false;
            console.log(error);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_movie_api_service__["a" /* MovieApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_movie_api_service__["a" /* MovieApiService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_movie_api_service__ = __webpack_require__("../../../../../src/app/providers/movie-api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__providers_movie_api_service__["a" /* MovieApiService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/movie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());

//# sourceMappingURL=movie.js.map

/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".movie-poster {\r\n    float: left; \r\n    margin-right: 10px; \r\n    margin-bottom: 10px;\r\n    height: 250px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\">\r\n  <img *ngIf=\"movie.imageUrl\" class=\"movie-poster\" [src]=\"movie.imageUrl\">\r\n\r\n  <b>{{movie.title}}</b> \r\n  \r\n  <p>{{movie.wikiText}}</p>\r\n\r\n  <div>\r\n    <a *ngIf=\"movie.wikiId\" target=\"_blank\" [href]=\"'http://en.wikipedia.org/?curid=' + movie.wikiId\">Wikipedia</a>\r\n    <a *ngIf=\"movie.imdbId\" target=\"_blank\" [href]=\"'http://www.imdb.com/title/' + movie.imdbId\">IMDb</a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movie__ = __webpack_require__("../../../../../src/app/models/movie.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieDetailComponent = (function () {
    function MovieDetailComponent() {
    }
    return MovieDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */]) === "function" && _a || Object)
], MovieDetailComponent.prototype, "movie", void 0);
MovieDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-movie-detail',
        template: __webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MovieDetailComponent);

var _a;
//# sourceMappingURL=movie-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/movie-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieApiService = (function () {
    function MovieApiService(http) {
        this.http = http;
    }
    MovieApiService.prototype.getMovies = function (query) {
        var _this = this;
        var paramsTMDb = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        paramsTMDb.set('api_key', '59fce579ddc5abcc2eec6bada8fb6819');
        paramsTMDb.set('language', 'en-US');
        paramsTMDb.set('query', "" + query);
        var url = 'https://api.themoviedb.org/3/search/movie';
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { params: paramsTMDb })
                .map(function (data) { return data.json(); })
                .subscribe(function (data) {
                var hits = new Array();
                for (var _i = 0, _a = data.results; _i < _a.length; _i++) {
                    var hit = _a[_i];
                    hits.push({
                        id: hit.id,
                        title: hit.title,
                        date: hit.release_date,
                        imageUrl: hit.poster_path ? "https://image.tmdb.org/t/p/w500" + hit.poster_path : null
                    });
                }
                resolve(hits);
            }, function (error) {
                reject(error.json());
            });
        });
    };
    MovieApiService.prototype.getMovieDetails = function (movie) {
        var _this = this;
        var paramsWiki = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        var paramsTMDb = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        paramsWiki.set('action', 'query');
        paramsWiki.set('origin', '*');
        paramsWiki.set('prop', 'extracts');
        paramsWiki.set('exintro', '');
        paramsWiki.set('explaintext', '');
        paramsWiki.set('format', 'json');
        paramsWiki.set('titles', "" + movie.title);
        paramsTMDb.set('api_key', '59fce579ddc5abcc2eec6bada8fb6819');
        var wikiUrl = 'https://en.wikipedia.org/w/api.php';
        var movieUrl = "https://api.themoviedb.org/3/movie/" + movie.id;
        return new Promise(function (resolve, reject) {
            var wiki = _this.http.get(wikiUrl, { params: paramsWiki }).map(function (data) { return data.json(); });
            var imdb = _this.http.get(movieUrl, { params: paramsTMDb }).map(function (data) { return data.json(); });
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin([wiki, imdb]).subscribe(function (results) {
                var pageId = (Object.keys(results[0].query.pages))[0];
                movie.wikiId = results[0].query.pages[pageId].pageid;
                movie.wikiText = results[0].query.pages[pageId].extract;
                movie.imdbId = results[1].imdb_id;
                resolve(movie);
            }, function (error) {
                reject(error.json());
            });
        });
    };
    return MovieApiService;
}());
MovieApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], MovieApiService);

var _a;
//# sourceMappingURL=movie-api.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map