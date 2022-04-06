(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js ***!
  \************************************************************************/
/*! exports provided: SlickCarouselComponent, SlickCarouselModule, SlickItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselComponent", function() { return SlickCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselModule", function() { return SlickCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function() { return SlickItemDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




/**
 * @fileoverview added by tsickle
 * Generated from: slick.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Slick component
 */
class SlickCarouselComponent {
    /**
     * Constructor
     * @param {?} el
     * @param {?} zone
     * @param {?} platformId
     */
    constructor(el, zone, platformId) {
        this.el = el;
        this.zone = zone;
        this.platformId = platformId;
        this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // access from parent component can be a problem with change detection timing. Please use afterChange output
        this.currentIndex = 0;
        this.slides = [];
        this.initialized = false;
        this._removedSlides = [];
        this._addedSlides = [];
    }
    /**
     * On component destroy
     * @return {?}
     */
    ngOnDestroy() {
        this.unslick();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngAfterViewChecked();
    }
    /**
     * On component view checked
     * @return {?}
     */
    ngAfterViewChecked() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
            /** @type {?} */
            const nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
            if (!this.initialized) {
                if (nextSlidesLength > 0) {
                    this.initSlick();
                }
                // if nextSlidesLength is zere, do nothing
            }
            else if (nextSlidesLength === 0) { // unslick case
                this.unslick();
            }
            else {
                this._addedSlides.forEach((/**
                 * @param {?} slickItem
                 * @return {?}
                 */
                slickItem => {
                    this.slides.push(slickItem);
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this.$instance.slick('slickAdd', slickItem.el.nativeElement);
                    }));
                }));
                this._addedSlides = [];
                this._removedSlides.forEach((/**
                 * @param {?} slickItem
                 * @return {?}
                 */
                slickItem => {
                    /** @type {?} */
                    const idx = this.slides.indexOf(slickItem);
                    this.slides = this.slides.filter((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => s !== slickItem));
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this.$instance.slick('slickRemove', idx);
                    }));
                }));
                this._removedSlides = [];
            }
        }
    }
    /**
     * init slick
     * @return {?}
     */
    initSlick() {
        this.slides = this._addedSlides;
        this._addedSlides = [];
        this._removedSlides = [];
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance = jQuery(this.el.nativeElement);
            this.$instance.on('init', (/**
             * @param {?} event
             * @param {?} slick
             * @return {?}
             */
            (event, slick) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.init.emit({ event, slick });
                }));
            }));
            this.$instance.slick(this.config);
            this.zone.run((/**
             * @return {?}
             */
            () => {
                var _a;
                this.initialized = true;
                this.currentIndex = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.initialSlide) || 0;
            }));
            this.$instance.on('afterChange', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} currentSlide
             * @return {?}
             */
            (event, slick, currentSlide) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.afterChange.emit({
                        event,
                        slick,
                        currentSlide,
                        first: currentSlide === 0,
                        last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
                    });
                    this.currentIndex = currentSlide;
                }));
            }));
            this.$instance.on('beforeChange', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} currentSlide
             * @param {?} nextSlide
             * @return {?}
             */
            (event, slick, currentSlide, nextSlide) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.beforeChange.emit({ event, slick, currentSlide, nextSlide });
                    this.currentIndex = nextSlide;
                }));
            }));
            this.$instance.on('breakpoint', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} breakpoint
             * @return {?}
             */
            (event, slick, breakpoint) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.breakpoint.emit({ event, slick, breakpoint });
                }));
            }));
            this.$instance.on('destroy', (/**
             * @param {?} event
             * @param {?} slick
             * @return {?}
             */
            (event, slick) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.destroy.emit({ event, slick });
                    this.initialized = false;
                }));
            }));
        }));
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */
    addSlide(slickItem) {
        this._addedSlides.push(slickItem);
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */
    removeSlide(slickItem) {
        this._removedSlides.push(slickItem);
    }
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    slickGoTo(index) {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickGoTo', index);
        }));
    }
    /**
     * @return {?}
     */
    slickNext() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickNext');
        }));
    }
    /**
     * @return {?}
     */
    slickPrev() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickPrev');
        }));
    }
    /**
     * @return {?}
     */
    slickPause() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickPause');
        }));
    }
    /**
     * @return {?}
     */
    slickPlay() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickPlay');
        }));
    }
    /**
     * @return {?}
     */
    unslick() {
        if (this.$instance) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.$instance.slick('unslick');
            }));
            this.$instance = undefined;
        }
        this.initialized = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.initialized) {
            /** @type {?} */
            const config = changes['config'];
            if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
                /** @type {?} */
                const refresh = config.currentValue['refresh'];
                /** @type {?} */
                const newOptions = Object.assign({}, config.currentValue);
                delete newOptions['refresh'];
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    this.$instance.slick('slickSetOption', newOptions, refresh);
                }));
            }
        }
    }
}
SlickCarouselComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ngx-slick-carousel',
                exportAs: 'slick-carousel',
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                         * @return {?}
                         */
                        () => SlickCarouselComponent)),
                        multi: true
                    }],
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
SlickCarouselComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
SlickCarouselComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    afterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    beforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    breakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
if (false) {}
class SlickItemDirective {
    /**
     * @param {?} el
     * @param {?} platformId
     * @param {?} carousel
     */
    constructor(el, platformId, carousel) {
        this.el = el;
        this.platformId = platformId;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.addSlide(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.removeSlide(this);
        }
    }
}
SlickItemDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[ngxSlickItem]',
            },] }
];
/** @nocollapse */
SlickItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: SlickCarouselComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlickCarouselModule {
}
SlickCarouselModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                declarations: [
                    SlickCarouselComponent,
                    SlickItemDirective,
                ],
                exports: [
                    SlickCarouselComponent,
                    SlickItemDirective,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-slick-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-slick-carousel.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\r\n  <div class=\"login-container\">\r\n    <div class=\"login-logo\">\r\n      <img [src]=\"mainLogo\">\r\n    </div>\r\n    <div class=\"body-login-container\">\r\n      <div class=\"left-section\">\r\n        <div class=\"title\">\r\n          Login To vaLu\r\n        </div>\r\n        <form class=\"input-login-container\" [formGroup]=\"loginFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"input\">\r\n            <app-custom-input labelText=\"User Name\" [isRequired]=\"true\" inputType=\"text\" \r\n              [controlName]=\"'userName'\" [formGroup]=\"loginFormGroup\" [validationErrors]=\"validationErrorMessages?.userName\">\r\n            </app-custom-input>\r\n          </div>\r\n          <div class=\"input\">\r\n            <app-custom-input labelText=\"Password\" [showTogglePassword]=\"true\" [isRequired]=\"true\" inputType=\"password\"\r\n               [controlName]=\"'password'\" [formGroup]=\"loginFormGroup\" [validationErrors]=\"validationErrorMessages?.password\">\r\n            </app-custom-input>\r\n          </div>\r\n          <div class=\"login-button\">\r\n            <button type=\"submit\">Login</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"right-section\">\r\n        <div class=\"swiper-card-container\">\r\n          <div class=\"swiper-item-container\">\r\n          <ngx-slick-carousel  [config]=\"slideConfig\">\r\n            <div ngxSlickItem class=\"slide\" *ngFor=\"let slide of slides\">\r\n              <app-carousel-slide [image]=\"slide.image\" [title]=\"slide.title\" [hasAction]=\"slide.hasAction\"\r\n                  [actionName]=\"slide.actionName\" (actionEventEmitter)=\"handlePageClick(slide)\">\r\n                </app-carousel-slide>\r\n            </div>\r\n          </ngx-slick-carousel>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/models/loggedInUser.ts":
/*!****************************************!*\
  !*** ./src/app/models/loggedInUser.ts ***!
  \****************************************/
/*! exports provided: LoggedInUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInUser", function() { return LoggedInUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LoggedInUser {
    constructor(id, firstName, lastName, role, isAdmin) {
        this.id = id;
        this.fullName = firstName;
        this.email = lastName;
        this.role = role;
        this.isAdmin = isAdmin;
    }
}


/***/ }),

/***/ "./src/app/pages/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/auth/login/login.component.ts");




// components
const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/pages/auth/auth-routing.module.ts");
/* harmony import */ var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






// components


let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"],
            src_app_components_component_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_loggedInUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/loggedInUser */ "./src/app/models/loggedInUser.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_helper_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helper/app-config */ "./src/app/helper/app-config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");



// services




let LoginComponent = class LoginComponent {
    constructor(authService, formBuilder, httpService) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.mainLogo = src_app_helper_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].logo.toString();
        this.slides = [
            { title: "The Leading Buy Now Pay Later Solution", image: "assets/images/products.png", hasAction: true, actionName: "Read More" },
            { title: "The Leading Buy Now Pay Later Solution 2", image: "assets/images/products.png", hasAction: false },
            { title: "The Leading Buy Now Pay Later Solution 3", image: "assets/images/products.png", hasAction: false },
        ];
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "dots": true,
            "infinite": false,
            "arrows": false
        };
        this.validationErrorMessages = {
            "userName": [
                { type: "required", message: "User name is required" }
            ],
            "password": [
                { type: "required", message: "Password is required" },
                { type: "minlength", message: "Password must be at least 6 characters long" }
            ]
        };
    }
    ngOnInit() {
        this.prepareForm();
    }
    prepareForm() {
        this.loginFormGroup = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
        });
    }
    get f() { return this.loginFormGroup.controls; }
    checkUserNameAndPassword(loginRequset) {
        return this.httpService.post("login", loginRequset);
    }
    onSubmit() {
        const loginRequset = {
            'UserName': this.loginFormGroup.controls['userName'].value,
            'Password': this.loginFormGroup.controls['password'].value
        };
        this.checkUserNameAndPassword(loginRequset).subscribe(res => {
            debugger;
            if (res.isSuccess) {
                let data = res.data;
                const userInfo = new src_app_models_loggedInUser__WEBPACK_IMPORTED_MODULE_2__["LoggedInUser"](data.id, data.fullName, data.email, data.role, data.isAdmin);
                this.authService.login(userInfo);
            }
            else {
                console.log(res.message);
            }
        });
    }
    handlePageClick(page) {
        console.log({ page });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module-es2015.js.map