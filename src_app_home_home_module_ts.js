"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".main-div h1 {\n  font-size: 1.7rem;\n}\n.main-div .list {\n  margin-top: 30px;\n}\n.main-div .list ion-item:part(native) {\n  padding: 0;\n}\n.main-div .list ion-item {\n  margin-top: 20px;\n  color: #676767;\n  --border-color: #ddd;\n}\n.main-div .list ion-item ion-label {\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n.main-div .list ion-item ion-label p {\n  font-size: 0.8rem;\n  margin-top: 5px;\n}\n.main-div .list ion-item ion-label p.expense {\n  color: red;\n}\n.main-div .list ion-item ion-label p.income {\n  color: green;\n}\n.main-div .list ion-item p.amount {\n  color: black;\n  font-weight: 700;\n}\n.main-div .list ion-item-sliding:last-child {\n  margin-bottom: 50px;\n}\n.main-div .list ion-item-sliding.item-sliding-active-option-end ion-item {\n  padding-right: 20px;\n}\n.main-div .list ion-item-option {\n  border-radius: 40px;\n  height: 38px;\n  width: 38px;\n  margin-top: 30px;\n  margin-trim: 4px;\n}\n.main-div ion-fab-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUNJO0VBQ0UsVUFBQTtBQUNOO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNOO0FBQU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFEUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUdWO0FBRFE7RUFDRSxVQUFBO0FBR1Y7QUFEUTtFQUNFLFlBQUE7QUFHVjtBQUFNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRVI7QUFDSTtFQUNBLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgaDF7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaW9uLWl0ZW06cGFydChuYXRpdmUpIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBjb2xvcjogIzY3Njc2NztcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZGRkO1xuICAgICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgcC5leHBlbnNle1xuICAgICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgfVxuICAgICAgICBwLmluY29tZXtcbiAgICAgICAgICBjb2xvcjpncmVlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcC5hbW91bnR7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taXRlbS1zbGlkaW5nOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgaW9uLWl0ZW0tc2xpZGluZy5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbi1lbmQgaW9uLWl0ZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgaW9uLWl0ZW0tb3B0aW9ue1xuICAgIGJvcmRlci1yYWRpdXM6NDBweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tdHJpbTogNHB4O1xuICB9XG4gIH1cbiAgaW9uLWZhYi1idXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbToyMHB4O1xuICAgIHJpZ2h0OjIwcHg7XG4gIH1cbiAgfVxuIl19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"main-div ion-padding\">\n    <h1 class=\"ion-padding\">Moneythor</h1>\n\n    <div class=\"list\">\n      <ion-list>\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>\n              Lunch\n              <p class=\"expense\">Food</p>\n            </ion-label>\n              <p class=\"amount\">₱15</p>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-item-option>\n            <ion-item-option color=\"dark\">\n              <ion-icon name=\"create-outline\" routerLink=\"/add-edit-data/edit\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>\n              Gym Membership\n              <p class=\"expense\">Gym</p>\n            </ion-label>\n              <p class=\"amount\">₱15</p>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-item-option>\n            <ion-item-option color=\"dark\">\n            <ion-icon name=\"create-outline\" routerLink=\"/add-edit-data/edit\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>\n              Monthly Salary\n              <p class=\"income\">Job</p>\n            </ion-label>\n              <p class=\"amount\">₱15</p>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-item-option>\n            <ion-item-option color=\"dark\">\n            <ion-icon name=\"create-outline\" routerLink=\"/add-edit-data/edit\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>\n              Bonus Salary\n              <p class=\"income\">Job</p>\n            </ion-label>\n              <p class=\"amount\">₱15</p>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-item-option>\n            <ion-item-option color=\"dark\">\n            <ion-icon name=\"create-outline\" routerLink=\"/add-edit-data/edit\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n  </div>\n  <ion-fab-button color=\"dark\">\n      <ion-icon name=\"add-outline\" routerLink=\"/add-edit-data/add\"></ion-icon>\n    </ion-fab-button>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map