(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth0_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth0.guard */ "./src/app/services/auth0.guard.ts");
/* harmony import */ var _componentes_auth0_callback_callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/auth0/callback/callback.component */ "./src/app/componentes/auth0/callback/callback.component.ts");
/* harmony import */ var _componentes_auth0_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/auth0/perfil/perfil.component */ "./src/app/componentes/auth0/perfil/perfil.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'profile',
        component: _componentes_auth0_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"],
        canActivate: [
            _services_auth0_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
        ]
    },
    { path: 'callback', component: _componentes_auth0_callback_callback_component__WEBPACK_IMPORTED_MODULE_4__["CallbackComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            declarations: [],
            providers: [
                _services_auth0_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1 col-sm-1\" style=\"width: 12.499999995%\">\r\n  <app-menu></app-menu>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/menu/menu.module.ts");
/* harmony import */ var _componentes_auth0_callback_callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/auth0/callback/callback.component */ "./src/app/componentes/auth0/callback/callback.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth0_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth0.service */ "./src/app/services/auth0.service.ts");
/* harmony import */ var _componentes_auth0_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/auth0/perfil/perfil.component */ "./src/app/componentes/auth0/perfil/perfil.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Services



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _componentes_auth0_callback_callback_component__WEBPACK_IMPORTED_MODULE_5__["CallbackComponent"],
                _componentes_auth0_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__["PerfilComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
                _services_auth0_service__WEBPACK_IMPORTED_MODULE_7__["Auth0Service"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/auth0/callback/callback.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/auth0/callback/callback.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/auth0/callback/callback.component.html":
/*!********************************************************************!*\
  !*** ./src/app/componentes/auth0/callback/callback.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  callback works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/componentes/auth0/callback/callback.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/auth0/callback/callback.component.ts ***!
  \******************************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth0_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/auth0.service */ "./src/app/services/auth0.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        auth.handleLoginCallback();
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInSub = this.auth.loggedIn$.subscribe(function (loggedIn) { return loggedIn ? _this.router.navigate(['/']) : null; });
    };
    CallbackComponent.prototype.ngOnDestroy = function () {
        this.loggedInSub.unsubscribe();
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/componentes/auth0/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/componentes/auth0/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__["Auth0Service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/componentes/auth0/perfil/perfil.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/auth0/perfil/perfil.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/auth0/perfil/perfil.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/auth0/perfil/perfil.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{auth.userProfile.name}}</h1>\r\n\r\n<ul>\r\n  <li *ngFor=\"let profileProp of profileArray\">\r\n    <code>{{profileProp}}</code>\r\n  </li>\r\n</ul>\r\n\r\n<p>\r\n  <a routerLink=\"/\" href>Back to Home</a>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/componentes/auth0/perfil/perfil.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/auth0/perfil/perfil.component.ts ***!
  \**************************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth0_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/auth0.service */ "./src/app/services/auth0.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(auth) {
        this.auth = auth;
        this.profileArray = this._makeProfileArray(this.auth.userProfile);
    }
    PerfilComponent.prototype.ngOnInit = function () {
        console.log(this.auth.userProfile);
    };
    PerfilComponent.prototype._makeProfileArray = function (obj) {
        var keyPropArray = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                keyPropArray.push(key + ': ' + obj[key]);
            }
        }
        return keyPropArray;
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/componentes/auth0/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/componentes/auth0/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__["Auth0Service"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n  height: 99%;\r\n}\r\n\r\nnav.sidebar, .main {\r\n  transition: margin 200ms ease-out;\r\n}\r\n\r\n.main {\r\n  padding: 10px 10px 0 10px;\r\n}\r\n\r\n@media (min-width: 765px) {\r\n  .main {\r\n    position: absolute;\r\n    width: calc(100% - 40px);\r\n    margin-left: 40px;\r\n    float: right;\r\n  }\r\n\r\n  nav.sidebar:hover + .main {\r\n    margin-left: 200px;\r\n  }\r\n\r\n  nav.sidebar.navbar.sidebar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\r\n    margin-left: 0px;\r\n  }\r\n\r\n  nav.sidebar .navbar-brand, nav.sidebar .navbar-header {\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  nav.sidebar a {\r\n    padding-right: 13px;\r\n  }\r\n\r\n  nav.sidebar .navbar-nav > li:first-child {\r\n    border-top: 1px #e5e5e5 solid;\r\n  }\r\n\r\n  nav.sidebar .navbar-nav > li {\r\n    border-bottom: 1px #e5e5e5 solid;\r\n  }\r\n\r\n  nav.sidebar .navbar-nav .open .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n    width: auto;\r\n    margin-top: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n    box-shadow: none;\r\n  }\r\n\r\n  nav.sidebar .navbar-collapse, nav.sidebar .container-fluid {\r\n    padding: 0 0px 0 0px;\r\n  }\r\n\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #777;\r\n  }\r\n\r\n  nav.sidebar {\r\n    width: 200px;\r\n    height: 100%;\r\n    margin-left: -160px;\r\n    float: left;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n    nav.sidebar li {\r\n      width: 100%;\r\n    }\r\n\r\n    nav.sidebar:hover {\r\n      margin-left: 0px;\r\n    }\r\n\r\n  .forAnimate {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1330px) {\r\n  .main {\r\n    width: calc(100% - 200px);\r\n    margin-left: 200px;\r\n  }\r\n\r\n  nav.sidebar {\r\n    margin-left: 0px;\r\n    float: left;\r\n  }\r\n\r\n    nav.sidebar .forAnimate {\r\n      opacity: 1;\r\n    }\r\n}\r\n\r\nnav.sidebar .navbar-nav .open .dropdown-menu > li > a:hover, nav.sidebar .navbar-nav .open .dropdown-menu > li > a:focus {\r\n  color: #ccc;\r\n  background-color: transparent;\r\n}\r\n\r\nnav:hover .forAnimate {\r\n  opacity: 1;\r\n}\r\n\r\nsection {\r\n  padding-left: 15px;\r\n}\r\n\r\n#master {\r\n  color: black;\r\n}\r\n\r\n#branch {\r\n  color: #f00;\r\n}\r\n\r\n.logo {\r\n  width: 120px;\r\n  height: 60px;\r\n}\r\n\r\n.margen-derecho {\r\n  margin-right: 20px;\r\n}\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.nopointer {\r\n  cursor: context-menu;\r\n}\r\n\r\n.router-link-portal {\r\n  color: #da7863;\r\n  background-color: #da7863;\r\n}\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<nav class=\"navbar navbar-default sidebar margen-derecho\" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Menu</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li routerLinkActive=\"active\">\r\n        <a href=\"#\">\r\n          Home\r\n          <span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-home\"></span>\r\n        </a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\" *ngIf=\"!auth.authenticated\">\r\n        <a class=\"pointer\" (click)=\"auth.login()\">\r\n          Login\r\n          <span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-log-in\"></span>\r\n        </a>\r\n      </li>\r\n\r\n      <li routerLinkActive=\"active\" *ngIf=\"auth.authenticated\">\r\n        <a class=\"pointer\" (click)=\"auth.logout()\">\r\n          Logout\r\n          <span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-log-out\"></span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth0_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth0.service */ "./src/app/services/auth0.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(auth) {
        this.auth = auth;
    }
    MenuComponent.prototype.ngOnInit = function () {
        // Subscribe to login status subject
        // If authenticated, subscribe to dragons data observable
        // If not authenticated, unsubscribe from dragons data
        this.authSubscription = this.auth.loggedIn$
            .subscribe(function (loggedIn) {
            if (loggedIn) {
                console.log("Logueado");
            }
            else {
                console.log("NO Logueado");
            }
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from observables
        this.authSubscription.unsubscribe();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth0_service__WEBPACK_IMPORTED_MODULE_1__["Auth0Service"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]],
            exports: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth0.service */ "./src/app/services/auth0.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.baseUrl = 'http://localhost:8080/api/';
    }
    ApiService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Unable to retrieve data';
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMsg);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_service__WEBPACK_IMPORTED_MODULE_3__["Auth0Service"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth0-variables.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth0-variables.ts ***!
  \*********************************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    CLIENT_ID: 'UAN7a6NXyx2VQcWgzRw1uHW9UPPSA8FS',
    CLIENT_DOMAIN: 'jackercito.eu.auth0.com',
    RESPONSE_TYPE: 'token id_token',
    AUDIENCE: 'https://jackercito.eu.auth0.com/userinfo',
    REDIRECT: 'http://localhost:8080/callback',
    SCOPE: 'open email',
    RETURN_URL: 'http://localhost:8080'
};


/***/ }),

/***/ "./src/app/services/auth0.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/services/auth0.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth0.service */ "./src/app/services/auth0.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.authenticated) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth0_service__WEBPACK_IMPORTED_MODULE_2__["Auth0Service"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth0.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/auth0.service.ts ***!
  \*******************************************/
/*! exports provided: Auth0Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth0Service", function() { return Auth0Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/src/index.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth0_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth0-variables */ "./src/app/services/auth0-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




window.global = window;
var Auth0Service = /** @class */ (function () {
    function Auth0Service() {
        this._Auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["WebAuth"]({
            clientID: _auth0_variables__WEBPACK_IMPORTED_MODULE_3__["AUTH_CONFIG"].CLIENT_ID,
            domain: _auth0_variables__WEBPACK_IMPORTED_MODULE_3__["AUTH_CONFIG"].CLIENT_DOMAIN,
            responseType: _auth0_variables__WEBPACK_IMPORTED_MODULE_3__["AUTH_CONFIG"].RESPONSE_TYPE,
            redirectUri: _auth0_variables__WEBPACK_IMPORTED_MODULE_3__["AUTH_CONFIG"].REDIRECT,
            audience: _auth0_variables__WEBPACK_IMPORTED_MODULE_3__["AUTH_CONFIG"].AUDIENCE,
            scope: ""
        });
        this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.loggedIn);
    }
    Auth0Service.prototype._setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    Auth0Service.prototype.login = function () {
        // Auth0 authorize request
        this._Auth0.authorize();
    };
    Auth0Service.prototype.handleLoginCallback = function () {
        var _this = this;
        // When Auth0 hash parsed, get profile
        this._Auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken) {
                window.location.hash = '';
                _this.getUserInfo(authResult);
            }
            else if (err) {
                console.error("Error: " + err.error);
            }
        });
    };
    Auth0Service.prototype.getUserInfo = function (authResult) {
        var _this = this;
        // Use access token to retrieve user's profile and set session
        this._Auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            _this._setSession(authResult, profile);
        });
    };
    Auth0Service.prototype._setSession = function (authResult, profile) {
        // Save session data and update login status subject
        this.expiresAt = authResult.expiresIn * 1000 + Date.now();
        this.accessToken = authResult.accessToken;
        this.userProfile = profile;
        this._setLoggedIn(true);
    };
    Auth0Service.prototype.logout = function () {
        // Remove token and profile, update login status subject,
        // and log out of Auth0 authentication session
        // This does a refresh and redirects back to homepage
        // Make sure you have the returnTo URL in your Auth0
        // Dashboard Application settings in Allowed Logout URLs
        this._Auth0.logout({
            returnTo: _auth0_variables__WEBPACK_IMPORTED_MODULE_3__["AUTH_CONFIG"].RETURN_URL,
            clientID: _auth0_variables__WEBPACK_IMPORTED_MODULE_3__["AUTH_CONFIG"].CLIENT_ID
        });
    };
    Object.defineProperty(Auth0Service.prototype, "authenticated", {
        get: function () {
            // Check if current date is greater than
            // expiration and user is currently logged in
            return (Date.now() < this.expiresAt) && this.loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Auth0Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Auth0Service);
    return Auth0Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\palonso\source\repos\app-spin\spin-mnr\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map