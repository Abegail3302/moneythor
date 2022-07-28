"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-edit-data_add-edit-data_module_ts"],{

/***/ 4671:
/*!***************************************************************!*\
  !*** ./src/app/add-edit-data/add-edit-data-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditDataPageRoutingModule": () => (/* binding */ AddEditDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_edit_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-data.page */ 2301);




const routes = [
    {
        path: '',
        component: _add_edit_data_page__WEBPACK_IMPORTED_MODULE_0__.AddEditDataPage
    }
];
let AddEditDataPageRoutingModule = class AddEditDataPageRoutingModule {
};
AddEditDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddEditDataPageRoutingModule);



/***/ }),

/***/ 9312:
/*!*******************************************************!*\
  !*** ./src/app/add-edit-data/add-edit-data.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditDataPageModule": () => (/* binding */ AddEditDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_edit_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-data-routing.module */ 4671);
/* harmony import */ var _add_edit_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-data.page */ 2301);







let AddEditDataPageModule = class AddEditDataPageModule {
};
AddEditDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_edit_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddEditDataPageRoutingModule
        ],
        declarations: [_add_edit_data_page__WEBPACK_IMPORTED_MODULE_1__.AddEditDataPage]
    })
], AddEditDataPageModule);



/***/ }),

/***/ 2301:
/*!*****************************************************!*\
  !*** ./src/app/add-edit-data/add-edit-data.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditDataPage": () => (/* binding */ AddEditDataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_edit_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-data.page.html?ngResource */ 6307);
/* harmony import */ var _add_edit_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-data.page.scss?ngResource */ 4910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AddEditDataPage = class AddEditDataPage {
    constructor() { }
    ngOnInit() {
    }
};
AddEditDataPage.ctorParameters = () => [];
AddEditDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-add-edit-data',
        template: _add_edit_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_edit_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditDataPage);



/***/ }),

/***/ 4910:
/*!******************************************************************!*\
  !*** ./src/app/add-edit-data/add-edit-data.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  font-size: 2rem;\n}\n\nion-icon:focus {\n  outline: none;\n}\n\n.main-section h3 {\n  padding-bottom: 0;\n}\n\n.main-section .form {\n  border: 1px solid #000000;\n  border-radius: 7px;\n}\n\n.main-section .form ion-select {\n  border: 1px solid #dddddd;\n  border-radius: 17px;\n}\n\n.main-section .form ion-input {\n  border: 1px solid #dddddd;\n  margin: 20px 0;\n  border-radius: 17px;\n  --padding-start: 23px;\n}\n\n.main-section .form ion-button {\n  width: 100%;\n  --border-radius: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUVJO0VBQ0ksaUJBQUE7QUFDUjs7QUFDSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFDUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFDWjs7QUFFUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBWjs7QUFHUTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQURaIiwiZmlsZSI6ImFkZC1lZGl0LWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuaW9uLWljb246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubWFpbi1zZWN0aW9uIHtcclxuICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5mb3JtIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuXHJcbiAgICAgICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDIzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 6307:
/*!******************************************************************!*\
  !*** ./src/app/add-edit-data/add-edit-data.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-icon name=\"arrow-back-outline\" class=\"ion-padding\" routerLink=\"/home\"></ion-icon>\n  <div class=\"main-section\">\n    <h3 class=\"ion-padding\">Add/Edit Data</h3>\n    <div class=\"form ion-padding ion-margin\">\n      \n      <ion-select interface=\"action-sheet\" placeholder=\"Select type\">\n        <ion-select-option value=\"income\">Income</ion-select-option>\n        <ion-select-option value=\"expense\">Expense</ion-select-option>\n      </ion-select>\n  \n      <ion-input placeholder=\"Title\"></ion-input>\n      <ion-input placeholder=\"Sub title\"></ion-input>\n      <ion-input placeholder=\"Amount\" type=\"number\"></ion-input>\n  \n      <ion-button color=\"dark\">Add</ion-button>\n    </div>\n  </div>\n</ion-content>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_add-edit-data_add-edit-data_module_ts.js.map