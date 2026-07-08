"use strict";
(self["webpackChunkloyverse_auth"] = self["webpackChunkloyverse_auth"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_oauth_consent_consent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/oauth/consent/consent.component */ 9968);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/registration/registration.component */ 1795);
/* harmony import */ var _components_oauth_oauth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/oauth/oauth.component */ 5910);
/* harmony import */ var _components_oauth_subscribe_integrations_subscribe_integrations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/oauth/subscribe-integrations/subscribe-integrations.component */ 1818);
/* harmony import */ var _components_oauth_renew_integrations_renew_integrations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/oauth/renew-integrations/renew-integrations.component */ 1699);
/* harmony import */ var _components_oauth_store_not_onboarded_store_not_onboarded_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/oauth/store-not-onboarded/store-not-onboarded.component */ 5309);
/* harmony import */ var _components_oauth_store_unsupported_country_store_unsupported_country_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/oauth/store-unsupported-country/store-unsupported-country.component */ 6999);
/* harmony import */ var _components_oauth_store_inactive_store_inactive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/oauth/store-inactive/store-inactive.component */ 1450);
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./matcher */ 2413);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 5740);
/* harmony import */ var _components_set_new_password_set_new_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/set-new-password/set-new-password.component */ 7765);
/* harmony import */ var _resolvers_cabinet_logged_cabinet_logged_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/cabinet-logged/cabinet-logged.resolver */ 4394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
















const testQueryParams = '?client_id=YjiSdiT6MqA2lZAptxSk&redirect_uri=https:%2F%2Furl1&response_type=code&scope=ITEMS_READ%20INVENTORY_READ%20INVENTORY_WRITE&state=stable';
const routes = [
    { path: ':lang/login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        data: { title: 'LOGIN', description: 'LOGIN', canonical: 'login' },
    },
    { path: ':lang/signup',
        component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent,
        data: { title: 'REGISTRATION', description: 'REGISTRATION', canonical: 'signup' },
        resolve: { dataLogged: _resolvers_cabinet_logged_cabinet_logged_resolver__WEBPACK_IMPORTED_MODULE_12__.CabinetLoggedResolver }
    },
    {
        path: ':lang/resetpswd',
        component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__.ResetPasswordComponent,
        data: { title: 'RESTORE_PASSWORD', canonical: 'resetpassword' }
    },
    {
        path: ':lang/changepswd/:confirmKey',
        component: _components_set_new_password_set_new_password_component__WEBPACK_IMPORTED_MODULE_11__.SetNewPasswordComponent,
        data: { title: 'SET_NEW_PASSWORD', canonical: 'setnewpassword' }
    },
    { path: ':lang/oauth', component: _components_oauth_oauth_component__WEBPACK_IMPORTED_MODULE_3__.OauthComponent, children: [
            { path: 'consent', component: _components_oauth_consent_consent_component__WEBPACK_IMPORTED_MODULE_0__.ConsentComponent, data: { title: 'CONSENT' } },
            { path: 'subscribeintegrations', component: _components_oauth_subscribe_integrations_subscribe_integrations_component__WEBPACK_IMPORTED_MODULE_4__.SubscribeIntegrationsComponent, data: { title: 'UNABLE_TO_CONNECT_APP' } },
            { path: 'renewintegrations', component: _components_oauth_renew_integrations_renew_integrations_component__WEBPACK_IMPORTED_MODULE_5__.RenewIntegrationsComponent, data: { title: 'UNABLE_TO_CONNECT_APP' } },
            { path: 'storenotonboarded', component: _components_oauth_store_not_onboarded_store_not_onboarded_component__WEBPACK_IMPORTED_MODULE_6__.StoreNotOnboardedComponent, data: { title: 'LOYVERSE_PAYMENTS_REQUIRED' } },
            { path: 'storeunsupportedcountry', component: _components_oauth_store_unsupported_country_store_unsupported_country_component__WEBPACK_IMPORTED_MODULE_7__.StoreUnsupportedCountryComponent, data: { title: 'NOT_AVAILABLE_IN_COUNTRY' } },
            { path: 'storeinactive', component: _components_oauth_store_inactive_store_inactive_component__WEBPACK_IMPORTED_MODULE_8__.StoreInactiveComponent, data: { title: 'ACCOUNT_INACTIVE' } },
            { path: '', redirectTo: '/', pathMatch: 'full' }
        ]
    },
    { matcher: _matcher__WEBPACK_IMPORTED_MODULE_9__.matchUrl, component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 4885:
/*!************************************!*\
  !*** ./src/app/app-seo.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSeoService": () => (/* binding */ AppSeoService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/seo/seo.service */ 5163);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/env/environment.service */ 3832);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _constants_constant_seo_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/constant-seo-pages */ 5960);
/* harmony import */ var _constants_constant_alternate_link_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/constant-alternate-link-info */ 9779);
/* harmony import */ var _services_url_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/url/url.service */ 7312);










/**
 * Методы для SEO, запускающиеся в AppComponent
 */
class AppSeoService {
    constructor(seoService, environmentService, router, activatedRoute, translate, seoPages, constantAlternateLinkInfo, urlService) {
        this.seoService = seoService;
        this.environmentService = environmentService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.seoPages = seoPages;
        this.constantAlternateLinkInfo = constantAlternateLinkInfo;
        this.urlService = urlService;
        this.titleUntranslatedRegex = new RegExp('^TITLE\\.');
        this.descriptionUntranslatedRegex = new RegExp('^DESCRIPTION\\.');
        this.pages = this.seoPages.SEO_PAGES;
        this.alternateInfo = this.constantAlternateLinkInfo.ALTERNATE_INFO;
    }
    /**
     * устанавливаем заголовок, описание, канонический url (если они указаны), и открываем страницу для индексации, если это нужно
     */
    setSEOInfo() {
        const seoInfo = {
            title: this.seoService.getTitle(),
            description: this.seoService.getDescription(),
            canonical: '/'
        };
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
            let child = this.activatedRoute.firstChild;
            const lang = child.snapshot.paramMap.get('lang');
            let dataSnapshot;
            while (child) {
                dataSnapshot = child.snapshot.data;
                child = child.firstChild;
            }
            if (dataSnapshot.title) {
                seoInfo.title = dataSnapshot.title;
            }
            if (dataSnapshot.description) {
                seoInfo.description = dataSnapshot.description;
            }
            if (dataSnapshot.canonical) {
                const canonical = dataSnapshot.canonical;
                seoInfo.canonical = this.environmentService.getSiteUrl().concat('/', lang, '/', canonical);
            }
            seoInfo.isIndexed = this.isSEOUrl(this.activatedRoute);
            return seoInfo;
        })).subscribe((info) => {
            this.setTitle(info.title);
            this.setDescription(info.description);
            this.seoService.setCanonical(info.canonical);
            const robots = this.seoService.getRobots();
            if (info.isIndexed) {
                if (robots != null) {
                    this.seoService.removeRobots();
                }
            }
            else {
                if (robots == null) {
                    this.seoService.addRobots();
                }
            }
        });
    }
    /**
     * Относится ли URL к тем, которые нужно оптимизировать для SEO
     */
    isSEOUrl(activatedRoute) {
        const url = this.urlService.getUrlAsString(activatedRoute);
        return this.pages.indexOf(url) !== -1;
    }
    /**
     * Устанавливаем заголовок страницы
     */
    setTitle(title) {
        this.translate.get('TITLE.' + title)
            .subscribe(translation => {
            if (translation.match(this.titleUntranslatedRegex)) {
                this.seoService.setTitle('Loyverse Auth');
            }
            else {
                this.seoService.setTitle(translation);
            }
        });
    }
    /**
     * Устанавливаем описание страницы
     */
    setDescription(desc) {
        this.translate.get('DESCRIPTION.' + desc)
            .subscribe(translation => {
            if (translation.match(this.descriptionUntranslatedRegex)) {
                this.seoService.setDescription('Loyverse Auth');
            }
            else {
                this.seoService.setDescription(translation);
            }
        });
    }
    /**
     * Возвращает информацию для тего <link rel="alternate">. Только для индексируемых страниц.
     */
    getAlternateLinksLangInfo() {
        return this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
            const langInfo = new Map();
            const url = this.urlService.getUrlAsString(this.activatedRoute);
            const siteUrl = this.environmentService.getSiteUrl();
            const isIndexed = this.isSEOUrl(this.activatedRoute);
            if (isIndexed) {
                this.alternateInfo.forEach((value, key) => {
                    langInfo.set(key, siteUrl.concat('/', value, '/', url));
                });
            }
            return langInfo;
        }));
    }
}
AppSeoService.ɵfac = function AppSeoService_Factory(t) { return new (t || AppSeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__.SEOService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_constants_constant_seo_pages__WEBPACK_IMPORTED_MODULE_2__.ConstantSeoPages), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_constants_constant_alternate_link_info__WEBPACK_IMPORTED_MODULE_3__.ConstantAlternateLinkInfo), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_url_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService)); };
AppSeoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AppSeoService, factory: AppSeoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/seo/seo.service */ 5163);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/env/environment.service */ 3832);
/* harmony import */ var _services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/mixpanel/mixpanel.service */ 2954);
/* harmony import */ var _services_sentry_sentry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/sentry/sentry.service */ 6285);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _constants_languages_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/languages-codes */ 3110);
/* harmony import */ var _constants_constant_languages_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/constant-languages-collection */ 202);
/* harmony import */ var _app_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-seo.service */ 4885);
/* harmony import */ var _directives_move_to_head_move_to_head_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/move-to-head/move-to-head.directive */ 1941);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _pipes_safe_url_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/safe-url/safe-url.pipe */ 9594);




















function AppComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "link", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("hreflang", info_r3.key)("href", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, info_r3.value), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeResourceUrl"]);
} }
function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppComponent_ng_container_0_div_1_Template, 3, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r0.alternateInfo));
} }
function AppComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", lang_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](lang_r4.value);
} }
const _c0 = function (a0) { return { "rtl": a0 }; };
class AppComponent {
    constructor(seoService, environmentService, mixpanelService, sentryService, router, activatedRoute, translate, languagesCollection, languagesNames, appSeoService, document) {
        this.seoService = seoService;
        this.environmentService = environmentService;
        this.mixpanelService = mixpanelService;
        this.sentryService = sentryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.languagesCollection = languagesCollection;
        this.languagesNames = languagesNames;
        this.appSeoService = appSeoService;
        this.document = document;
        this.languageURLCode = new Map();
        this.currentLang = 'en';
        translate.addLangs(Array.from(this.languageURLCode.keys()));
        this.languages = this.languagesNames.LANGUAGES;
        this.languageURLCode = this.languagesCollection.CODES;
        this.setCurrentLang();
    }
    ngOnInit() {
        this.appSeoService.setSEOInfo();
        this.setFavicon();
        this.mixpanelService.init();
        this.sentryService.init();
        this.appSeoService.getAlternateLinksLangInfo().subscribe((langInfo) => {
            this.alternateInfo = langInfo;
        });
    }
    /**
     * метод при переключении языков - заменяет в текущем URL языковой параметр, формирует новый URL с другим параметром и перенаправляет на него
     * @param language - выбранный язык
     */
    useLanguage(language) {
        const url = this.router.url;
        const splitted = url.split('/');
        const lang = this.languageURLCode.get(language);
        if (lang) {
            splitted[1] = lang;
            const urlToNavigate = splitted.join('/');
            this.router.navigateByUrl(urlToNavigate);
        }
    }
    /**
     * устанавливаем язык страницы, исходя из параметра в URL
     */
    setCurrentLang() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => {
            const child = this.activatedRoute.firstChild;
            const lang = child.snapshot.paramMap.get('lang');
            let current = 'eng';
            if (lang) {
                const languages = Array.from(this.languageURLCode.keys());
                for (let i = 0, length = languages.length; i < length; i++) {
                    const keyConst = this.languageURLCode.get(languages[i]);
                    if (keyConst && keyConst === lang) {
                        current = languages[i];
                        break;
                    }
                    // если языка в параметре lang нет в списке доступных, перенаправляем пользователя на английскую версию
                    if (i === length - 1) {
                        this.useLanguage('eng');
                    }
                }
            }
            return current;
        })).subscribe((current) => {
            this.setLang(current);
            this.setHTMLLang(this.languageURLCode.get(current));
            this.rtlLang = current === 'ara';
            this.translate.setDefaultLang(this.currentLang);
            this.translate.use(this.currentLang);
        });
    }
    setLang(lang) {
        this.currentLang = lang;
    }
    /**
     * Устанавливаем favicon динамически, т.к. статическая ссылка разрушается из-за перенаправлений
     */
    setFavicon() {
        const favicon = this.document.querySelector('#appIcon');
        const baseUrl = this.environmentService.getBaseUrl();
        favicon.href = baseUrl + 'favicon.ico';
    }
    /**
     * Устанавливаем атрибут lang тега <html>
     */
    setHTMLLang(lang) {
        const htmlTag = this.document.querySelector('#mainEl');
        htmlTag.lang = lang;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_0__.SEOService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_2__.MixpanelService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_sentry_sentry_service__WEBPACK_IMPORTED_MODULE_3__.SentryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_constants_languages_codes__WEBPACK_IMPORTED_MODULE_4__.LanguagesCodes), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_constants_constant_languages_collection__WEBPACK_IMPORTED_MODULE_5__.ConstantLanguagesCollection), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_seo_service__WEBPACK_IMPORTED_MODULE_6__.AppSeoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 6, consts: [[4, "ngIf"], [1, "form-wrap", 3, "ngClass"], [1, "form-lang"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["rel", "alternate", "appMoveToHead", ""], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2)(4, "mat-form-field")(5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.currentLang = $event; })("ngModelChange", function AppComponent_Template_mat_select_ngModelChange_5_listener() { return ctx.useLanguage(ctx.currentLang); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AppComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.alternateInfo && ctx.alternateInfo.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c0, ctx.rtlLang));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.currentLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _directives_move_to_head_move_to_head_directive__WEBPACK_IMPORTED_MODULE_7__.MoveToHeadDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.KeyValuePipe, _pipes_safe_url_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__.SafeUrlPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_oauth_consent_consent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/oauth/consent/consent.component */ 9968);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registration/registration.component */ 1795);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 5740);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-translate-multi-http-loader */ 5048);
/* harmony import */ var _constants_constant_languages_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/constant-languages-collection */ 202);
/* harmony import */ var _constants_languages_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/languages-codes */ 3110);
/* harmony import */ var _components_oauth_subscribe_integrations_subscribe_integrations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/oauth/subscribe-integrations/subscribe-integrations.component */ 1818);
/* harmony import */ var _components_oauth_renew_integrations_renew_integrations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/oauth/renew-integrations/renew-integrations.component */ 1699);
/* harmony import */ var _components_oauth_oauth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/oauth/oauth.component */ 5910);
/* harmony import */ var _components_oauth_store_not_onboarded_store_not_onboarded_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/oauth/store-not-onboarded/store-not-onboarded.component */ 5309);
/* harmony import */ var _components_oauth_store_unsupported_country_store_unsupported_country_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/oauth/store-unsupported-country/store-unsupported-country.component */ 6999);
/* harmony import */ var _components_oauth_store_inactive_store_inactive_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/oauth/store-inactive/store-inactive.component */ 1450);
/* harmony import */ var _directives_move_to_head_move_to_head_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/move-to-head/move-to-head.directive */ 1941);
/* harmony import */ var _directives_phone_number_phone_number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/phone-number/phone-number */ 8755);
/* harmony import */ var _pipes_safe_url_safe_url_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/safe-url/safe-url.pipe */ 9594);
/* harmony import */ var _constants_constant_seo_pages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./constants/constant-seo-pages */ 5960);
/* harmony import */ var _constants_constant_alternate_link_info__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./constants/constant-alternate-link-info */ 9779);
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/config/config.service */ 8939);
/* harmony import */ var _constants_constant_form_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constants/constant-form-constants */ 1052);
/* harmony import */ var _components_set_new_password_set_new_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/set-new-password/set-new-password.component */ 7765);
/* harmony import */ var _constants_constant_countries__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./constants/constant-countries */ 7167);

































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        _constants_constant_languages_collection__WEBPACK_IMPORTED_MODULE_7__.ConstantLanguagesCollection,
        _constants_constant_countries__WEBPACK_IMPORTED_MODULE_23__.ConstantCountries,
        _constants_constant_seo_pages__WEBPACK_IMPORTED_MODULE_18__.ConstantSeoPages,
        _constants_constant_alternate_link_info__WEBPACK_IMPORTED_MODULE_19__.ConstantAlternateLinkInfo,
        _constants_languages_codes__WEBPACK_IMPORTED_MODULE_8__.LanguagesCodes,
        _constants_constant_form_constants__WEBPACK_IMPORTED_MODULE_21__.ConstantFormConstants,
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_24__.APP_INITIALIZER,
            useFactory: _services_config_config_service__WEBPACK_IMPORTED_MODULE_20__.configFactory,
            deps: [_services_config_config_service__WEBPACK_IMPORTED_MODULE_20__.ConfigService],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__.RegistrationComponent,
        _components_oauth_consent_consent_component__WEBPACK_IMPORTED_MODULE_1__.ConsentComponent,
        _components_oauth_subscribe_integrations_subscribe_integrations_component__WEBPACK_IMPORTED_MODULE_9__.SubscribeIntegrationsComponent,
        _components_oauth_renew_integrations_renew_integrations_component__WEBPACK_IMPORTED_MODULE_10__.RenewIntegrationsComponent,
        _components_oauth_store_not_onboarded_store_not_onboarded_component__WEBPACK_IMPORTED_MODULE_12__.StoreNotOnboardedComponent,
        _components_oauth_store_unsupported_country_store_unsupported_country_component__WEBPACK_IMPORTED_MODULE_13__.StoreUnsupportedCountryComponent,
        _components_oauth_store_inactive_store_inactive_component__WEBPACK_IMPORTED_MODULE_14__.StoreInactiveComponent,
        _components_oauth_oauth_component__WEBPACK_IMPORTED_MODULE_11__.OauthComponent,
        _components_oauth_consent_consent_component__WEBPACK_IMPORTED_MODULE_1__.ConsentComponent,
        _directives_move_to_head_move_to_head_directive__WEBPACK_IMPORTED_MODULE_15__.MoveToHeadDirective,
        _directives_phone_number_phone_number__WEBPACK_IMPORTED_MODULE_16__.PhoneNumberDirective,
        _pipes_safe_url_safe_url_pipe__WEBPACK_IMPORTED_MODULE_17__.SafeUrlPipe,
        _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent,
        _components_set_new_password_set_new_password_component__WEBPACK_IMPORTED_MODULE_22__.SetNewPasswordComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule] }); })();
// required for AOT compilation
function HttpLoaderFactory(http) {
    // const assetsUrl = new EnvironmentService(configService).getAssetsUrl();
    return new ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_30__.MultiTranslateHttpLoader(http, [
        { prefix: './assets/i18n/main/', suffix: '.json' },
        { prefix: './assets/i18n/scope/scope_', suffix: '.json' },
        { prefix: './assets/i18n/countries/country_', suffix: '.json' }
    ]);
}


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _validators_trimmed_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/trimmed.validator */ 9955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/env/environment.service */ 3832);
/* harmony import */ var _services_url_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/url/url.service */ 7312);
/* harmony import */ var _services_site_redirect_site_redirect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/site-redirect/site-redirect.service */ 7974);
/* harmony import */ var _services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mixpanel/mixpanel.service */ 2954);
/* harmony import */ var _services_sentry_sentry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sentry/sentry.service */ 6285);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/local-storage/local-storage.service */ 7635);
/* harmony import */ var _services_common_requests_common_requests_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common-requests/common-requests.service */ 1558);
/* harmony import */ var _constants_constant_form_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/constant-form-constants */ 1052);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
























function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS." + ctx_r0.formError));
} }
function LoginComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.VALID_EMAIL"));
} }
function LoginComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
const _c0 = function () { return { "number": 96 }; };
function LoginComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MAXIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c0)));
} }
const _c1 = function () { return { "number": 6 }; };
function LoginComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MINIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c1)));
} }
function LoginComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
class LoginComponent {
    constructor(loginService, environmentService, urlService, siteRedirectService, mixpanelService, sentryService, translate, localStorageService, commonRequestsService, formConstants, document) {
        this.loginService = loginService;
        this.environmentService = environmentService;
        this.urlService = urlService;
        this.siteRedirectService = siteRedirectService;
        this.mixpanelService = mixpanelService;
        this.sentryService = sentryService;
        this.translate = translate;
        this.localStorageService = localStorageService;
        this.commonRequestsService = commonRequestsService;
        this.formConstants = formConstants;
        this.document = document;
        this.isOauth = false;
        this.isBO = false;
        this.isDeveloper = false;
        this.formError = '';
        this.hidePassword = true;
        this.submitting = false;
        this.translate.onLangChange.subscribe((params) => {
            this.setLinks();
        });
        this.emailPattern = formConstants.EMAIL_PATTERN;
    }
    ngOnInit() {
        this.queryParams = this.urlService.getQueryParams();
        this.setLoginFormGroup(this.queryParams);
        this.backOfficeUrl = this.environmentService.getBackOfficeUrl();
        this.developerUrl = this.environmentService.getDeveloperUrl();
        this.setFormType(this.queryParams);
        this.setLinks();
        // this.redirectIfLogged();
        this.mixpanelService.track('Sign in form (Backoffice)');
    }
    /**
     * Логин OAuth
     * @param captchaResponse ответ капчи
     */
    loginOauth(captchaResponse) {
        const formData = new FormData();
        const authorizeUrl = this.environmentService.getAuthorizeUrl();
        formData.append('username', this.requestData.email);
        formData.append('password', this.requestData.password);
        formData.append('recaptchaResponse', captchaResponse);
        formData.append('rememberMe', '' + this.requestData.rememberMe);
        if (!this.requestData.rememberMe) {
            this.localStorageService.setLocalStorageItem('rememberMe', 'false');
        }
        else {
            this.localStorageService.removeLocalStorageItem('rememberMe');
        }
        this.loginService.loginOauth(formData).subscribe({
            next: (response) => {
                if (response.result === 'ok') {
                    this.formError = '';
                    const paramsAsString = this.queryParams.keys
                        .filter((key) => {
                        const oauthParams = [
                            'scope',
                            'client_id',
                            'redirect_uri',
                            'response_type',
                            'state',
                            'nonce',
                            'prompt',
                        ];
                        return oauthParams.indexOf(key) !== -1;
                    })
                        .map((key) => key + '=' + this.queryParams.get(key))
                        .join('&');
                    const urlAfter = authorizeUrl + '?' + paramsAsString;
                    this.document.location.assign(urlAfter);
                }
                else if (response.result === 'error' &&
                    response.message === 'user_password_not_found') {
                    this.formError = 'WRONG_EMAIL_PASSWORD';
                    this.allowResubmit();
                }
            },
            error: (err) => {
                this.handleUnexpectedError(err);
            },
        });
    }
    /**
     * Логин в бэк-офис
     * @param captchaResponse ответ капчи
     */
    loginToBackOffice(captchaResponse) {
        const redirectToIntegrations = this.queryParams.has('url') &&
            this.queryParams.get('url') === 'integrations-management';
        this.sentryService.setUser({ email: this.requestData.email });
        const data = Object.assign(Object.assign({}, this.requestData), { recaptchaResponse: captchaResponse, devId: this.getDevId(this.queryParams), cabinetLang: this.translate.currentLang, type: 'pos' });
        if (!this.requestData.rememberMe) {
            this.localStorageService.setLocalStorageItem('rememberMe', 'false');
        }
        else {
            this.localStorageService.removeLocalStorageItem('rememberMe');
        }
        this.loginService.loginToBackOffice(data).subscribe({
            next: (response) => {
                if (response.result === 'ok') {
                    switch (response.loginResult) {
                        case 'ok':
                            const dontRemember = this.requestData.rememberMe ? 'No' : 'Yes';
                            this.mixpanelService.identify(String(response.ownerId));
                            this.mixpanelService.track('Sign in successful (Backoffice)', {
                                'Do not remember me': dontRemember,
                            });
                            this.formError = '';
                            if (redirectToIntegrations) {
                                this.document.location.assign(this.backOfficeUrl + '/dashboard/#/integrations/management');
                            }
                            else {
                                this.document.location.assign(this.backOfficeUrl + '/dashboard/#/home');
                            }
                            break;
                        case 'user_password_not_found':
                            this.formError = 'WRONG_EMAIL_PASSWORD';
                            this.allowResubmit();
                            break;
                        case 'service_unavailable_in_country':
                            this.formError = 'NOT_AVAILABLE_IN_THIS_COUNTRY';
                            this.allowResubmit();
                            break;
                        default:
                            this.handleUnexpectedError(response);
                    }
                }
            },
            error: (err) => {
                if (err.status === 451) {
                    this.formError = 'COUNTRY_UNAVAILABLE_RESTRICTION';
                    this.allowResubmit();
                }
                else {
                    this.handleUnexpectedError(err);
                }
            },
        });
    }
    /**
     * Логин в кабинет разработчика
     * @param captchaResponse ответ капчи
     */
    loginToDevCabinet(captchaResponse) {
        const data = Object.assign(Object.assign({}, this.requestData), { recaptchaResponse: captchaResponse });
        if (!this.requestData.rememberMe) {
            this.localStorageService.setLocalStorageItem('rememberMe', 'false');
        }
        else {
            this.localStorageService.removeLocalStorageItem('rememberMe');
        }
        this.loginService.loginToDevCabinet(data).subscribe({
            next: (response) => {
                if (response.result === 'ok') {
                    switch (response.loginResult) {
                        case 'ok':
                            this.formError = '';
                            this.document.location.assign(this.developerUrl + '/apps');
                            break;
                        case 'wrong_password':
                            this.formError = 'WRONG_EMAIL_PASSWORD';
                            this.allowResubmit();
                            break;
                        default:
                            this.handleUnexpectedError(response);
                    }
                }
            },
            error: (err) => {
                this.handleUnexpectedError(err);
            },
        });
    }
    /**
     * Общая функция логина, логинит либо OAuth либо в бэк-офис
     * @param captchaResponse ответ капчи
     */
    login(captchaResponse) {
        this.formError = '';
        if (this.isOauth) {
            this.loginOauth(captchaResponse);
        }
        else if (this.isDeveloper) {
            this.loginToDevCabinet(captchaResponse);
        }
        else {
            this.loginToBackOffice(captchaResponse);
        }
    }
    /**
     * Определяет тип формы - OAuth, логин в бэк-офис либо в кабинет разработчика
     * @param queryParams параметры запроса
     */
    setFormType(queryParams) {
        if (queryParams.has('app')) {
            const appType = queryParams.get('app');
            if (appType === 'developer') {
                this.isDeveloper = true;
            }
            else if (appType === 'oauth') {
                this.isOauth = true;
            }
            else {
                this.isBO = true;
            }
        }
        else {
            this.isBO = true;
        }
    }
    /**
     * Получение параметра devId в числовом виде
     * @param params параметры запроса
     * @return devId
     */
    getDevId(params) {
        return parseInt(params.get('devId'), 10);
    }
    /**
     * Получение email пользователя в виде строки
     * @param params параметры запроса
     * @return email пользователя, либо пустая строка, если его нет в параметрах запроса
     */
    getUsername(params) {
        const email = params.get('email');
        return email !== null ? email : '';
    }
    /**
     * Устанавливает ссылки на восстановление пароля и форму регистрации сайта
     */
    setLinks() {
        const lang = this.urlService.getLangForUrl();
        this.siteLangHomepageUri =
            this.environmentService.getSiteUrl() +
                this.siteRedirectService.getPathForSite(lang);
    }
    /**
     * Редирект в бэк-офис / кабинет разработчика, если пользователь уже залогинен
     */
    redirectIfLogged() {
        if (this.isDeveloper) {
            this.loginService.isDeveloperLogged().subscribe((response) => {
                if (response.logged) {
                    this.document.location.assign(this.developerUrl + '/apps');
                }
            });
        }
        else if (this.isBO) {
            this.commonRequestsService.isCabinetLogged().subscribe((response) => {
                if (response.status) {
                    this.document.location.assign(this.backOfficeUrl + '/dashboard/#/home');
                }
            });
        }
    }
    setLoginFormGroup(params) {
        const rememberMe = localStorage.getItem('rememberMe');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.getUsername(params), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(96),
                (0,_validators_trimmed_validator__WEBPACK_IMPORTED_MODULE_1__.trimmedValidator)(this.emailPattern, true),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(40),
            ]),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(!(rememberMe && rememberMe === 'false')),
        });
    }
    /**
     * Go to Reset Password page
     */
    goResetPassword() {
        this.urlService.navigateToState('resetpswd');
        return false;
    }
    /**
     * Go to registration
     */
    goRegistration() {
        this.urlService.navigateToState('signup');
        return false;
    }
    /**
     * Submit form
     * @param loginNgForm
     */
    onFormSubmit(loginNgForm) {
        if (loginNgForm.valid) {
            if (this.submitting) {
                return;
            }
            this.submitting = true;
            this.requestData = {
                email: this.loginForm.get('username').value.trim(),
                password: this.loginForm.get('password').value,
                recaptchaResponse: '',
                rememberMe: this.loginForm.get('rememberMe').value,
            };
            this.login('');
        }
    }
    allowResubmit() {
        this.submitting = false;
    }
    handleUnexpectedError(err) {
        this.formError = 'UNEXPECTED_ERROR';
        this.sentryService.captureMessage(JSON.stringify(err));
        this.allowResubmit();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_2__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_url_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_site_redirect_site_redirect_service__WEBPACK_IMPORTED_MODULE_4__.SiteRedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_5__.MixpanelService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_sentry_sentry_service__WEBPACK_IMPORTED_MODULE_6__.SentryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_requests_common_requests_service__WEBPACK_IMPORTED_MODULE_8__.CommonRequestsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_constants_constant_form_constants__WEBPACK_IMPORTED_MODULE_9__.ConstantFormConstants), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService])], decls: 51, vars: 32, consts: [["class", "form-error login-error", 4, "ngIf"], [1, "mat-card-forms"], [1, "form-logo", "login-logo"], [1, "form-logo-link", "login-logo-link", 3, "href"], ["alt", "Loyverse POS", "src", "./assets/img/logo.svg", "width", "142", "height", "38", 1, "form-logo-img", "login-logo-img"], [1, "form-title", "login-title"], [1, "form-h1"], [1, "form", "login-form"], ["action", "", "name", "loginForm", "novalidate", "", 3, "formGroup", "ngSubmit"], ["loginNgForm", "ngForm"], [1, "form-field", "login-form-field"], ["hideRequiredMarker", "", 1, "mat-full-width"], ["type", "text", "formControlName", "username", "matInput", ""], [4, "ngIf"], ["formControlName", "password", "matInput", "", 3, "type"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Visibility Off", "type", "button", 3, "click"], ["aria-hidden", "false", "aria-label", "Visibility Off"], [1, "login-form-bottom"], [1, "login-form-remember"], ["formControlName", "rememberMe", 1, "mat-checkbox-auth"], [1, "login-form-buttons", "buttons-block"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "login-form-button-signin", "mat-primary-submit", 3, "disabled"], ["id", "sforg-submit"], [1, "form-links", "login-links"], [1, "form-link-wrap", "login-link-wrap"], [1, "form-link", "login-link", "link", 3, "click"], [1, "form-error", "login-error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 7)(10, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11); return ctx.onFormSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10)(13, "mat-form-field", 11)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 3, 3, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, LoginComponent_mat_error_19_Template, 3, 3, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, LoginComponent_mat_error_20_Template, 3, 5, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 10)(22, "mat-form-field", 11)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() { return ctx.hidePassword = !ctx.hidePassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, LoginComponent_mat_error_30_Template, 3, 5, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, LoginComponent_mat_error_31_Template, 3, 3, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 17)(33, "div", 18)(34, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 20)(38, "button", 21)(39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 23)(43, "div", 24)(44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_44_listener() { return ctx.goResetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 24)(48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_48_listener() { return ctx.goRegistration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formError.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", ctx.siteLangHomepageUri, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 18, "LOGIN.HEADER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 20, "FORMS.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loginForm.hasError("trimmed", "username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loginForm.hasError("required", "username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loginForm.hasError("maxlength", "username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 22, "FORMS.PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](!ctx.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loginForm.hasError("minlength", "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loginForm.hasError("required", "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 24, "FORMS.REMEMBER_ME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](41, 26, "BUTTONS.SIGN_IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](46, 28, "FORMS.LINKS.FORGOT_PW"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](50, 30, "FORMS.LINKS.NEW_TO_LOYVERSE"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckbox], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".login-form-bottom[_ngcontent-%COMP%] {\n  display: flex;\n}\n.login-form-remember[_ngcontent-%COMP%] {\n  flex: auto;\n  align-self: center;\n  padding: 20px 12px 0 0;\n}\n.login-form-buttons[_ngcontent-%COMP%] {\n  flex: none;\n  padding-top: 20px;\n}\n.login-form-button-signin[_ngcontent-%COMP%] {\n  min-width: 88px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtBQUROO0FBR0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUROO0FBR0k7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUdJO0VBQ0UsZUFBQTtBQUROIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgJi1mb3JtIHtcbiAgICAmLWJvdHRvbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAmLXJlbWVtYmVyIHtcbiAgICAgIGZsZXg6IGF1dG87XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyMHB4IDEycHggMCAwO1xuICAgIH1cbiAgICAmLWJ1dHRvbnMge1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cbiAgICAmLWJ1dHRvbi1zaWduaW4ge1xuICAgICAgbWluLXdpZHRoOiA4OHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 3071:
/*!***************************************************!*\
  !*** ./src/app/components/login/login.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/env/environment.service */ 3832);




class LoginService {
    constructor(http, environmentService) {
        this.http = http;
        this.environmentService = environmentService;
        this.oauthPath = this.environmentService.getPathForOauthRequests();
        this.backOfficePath = this.environmentService.getPathForBackOfficeRequests();
        this.developerPath = this.environmentService.getPathForDeveloperRequests();
    }
    /**
     * Логин Oauth
     * @param data информация для отправки на сервер
     */
    loginOauth(data) {
        return this.http.post(this.oauthPath + '/login', data, { withCredentials: true });
    }
    /**
     * Логин в бэк-офис
     * @param data информация для отправки на сервер
     */
    loginToBackOffice(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.backOfficePath + '/cabinetlogin', data, { headers, withCredentials: true });
    }
    /**
     * Логин в кабинет разработчика
     * @param data информация для отправки на сервер
     */
    loginToDevCabinet(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.developerPath + '/login', data, { headers, withCredentials: true });
    }
    /**
     * Проверка, залогинен ли пользователь в кабинет разработчика
     */
    isDeveloperLogged() {
        return this.http.get(this.developerPath + '/logged', { withCredentials: true });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9968:
/*!***************************************************************!*\
  !*** ./src/app/components/oauth/consent/consent.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsentComponent": () => (/* binding */ ConsentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/env/environment.service */ 3832);
/* harmony import */ var _services_url_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/url/url.service */ 7312);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 7514);







const _c0 = ["sendPermissions"];
function ConsentComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 11);
} if (rf & 2) {
    const param_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", param_r3.key)("value", param_r3.value);
} }
function ConsentComponent_ul_11_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "SCOPE." + permission_r5));
} }
function ConsentComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConsentComponent_ul_11_li_1_Template, 3, 3, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.scope);
} }
const _c1 = function (a0) { return { "appName": a0 }; };
class ConsentComponent {
    constructor(environmentService, urlService) {
        this.environmentService = environmentService;
        this.urlService = urlService;
    }
    ngOnInit() {
        this.authParams = this.urlService.getQueryParams();
        this.authorizeUrl = this.environmentService.getAuthorizeUrl();
        this.scope = this.urlService.getScopeParams(this.authParams.get('scope'));
        this.paramMap = this.urlService.paramsToMap(this.authParams);
        this.appName = this.paramMap.get('app_name');
    }
    sendForm(approve) {
        this.paramMap.set('user_oauth_approval', String(approve));
        this.sendPermissionsElement.nativeElement.submit();
    }
}
ConsentComponent.ɵfac = function ConsentComponent_Factory(t) { return new (t || ConsentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_url_url_service__WEBPACK_IMPORTED_MODULE_1__.UrlService)); };
ConsentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConsentComponent, selectors: [["app-consent"]], viewQuery: function ConsentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sendPermissionsElement = _t.first);
    } }, decls: 19, vars: 20, consts: [[1, "mat-card-forms"], ["id", "sendPermissions", "ngNoForm", "", "method", "post", 3, "action"], ["sendPermissions", ""], ["type", "hidden", 3, "name", "value", 4, "ngFor", "ngForOf"], [1, "consent-wrap"], [1, "header-h1"], [1, "consent-text", "form-text", 3, "innerHtml"], ["class", "consent-list", 4, "ngIf"], [1, "consent-buttons", "buttons-block", "buttons-block-bottom"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "primary", 1, "mat-primary-submit", 3, "click"], ["type", "hidden", 3, "name", "value"], [1, "consent-list"], ["class", "consent-list-item", 4, "ngFor", "ngForOf"], [1, "consent-list-item"]], template: function ConsentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ConsentComponent_input_3_Template, 1, 2, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ConsentComponent_ul_11_Template, 2, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConsentComponent_Template_button_click_13_listener() { return ctx.sendForm(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConsentComponent_Template_button_click_16_listener() { return ctx.sendForm(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("action", ctx.authorizeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, ctx.paramMap));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, "CONSENT.HEADER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 11, "CONSENT.TEXT", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c1, ctx.appName)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.scope.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 14, "BUTTONS.CANCEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 16, "BUTTONS.ALLOW"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".consent-list[_ngcontent-%COMP%] {\n  list-style-position: inside;\n  padding: 0;\n  margin: 0 0 16px;\n}\n.consent-list-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRU07RUFDRSxtQkFBQTtBQUFSIiwiZmlsZSI6ImNvbnNlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uc2VudCB7XG4gICYtbGlzdCB7XG4gICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgICAmLWl0ZW0ge1xuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5910:
/*!*****************************************************!*\
  !*** ./src/app/components/oauth/oauth.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OauthComponent": () => (/* binding */ OauthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class OauthComponent {
    constructor() { }
    ngOnInit() {
    }
}
OauthComponent.ɵfac = function OauthComponent_Factory(t) { return new (t || OauthComponent)(); };
OauthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OauthComponent, selectors: [["app-oauth"]], decls: 1, vars: 0, template: function OauthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1699:
/*!*************************************************************************************!*\
  !*** ./src/app/components/oauth/renew-integrations/renew-integrations.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewIntegrationsComponent": () => (/* binding */ RenewIntegrationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_url_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/url/url.service */ 7312);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/env/environment.service */ 3832);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 7514);








function RenewIntegrationsComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 9);
} if (rf & 2) {
    const param_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", param_r1.key)("value", param_r1.value);
} }
const _c0 = function (a0) { return { "appName": a0 }; };
class RenewIntegrationsComponent {
    constructor(urlService, environmentService, document) {
        this.urlService = urlService;
        this.environmentService = environmentService;
        this.document = document;
    }
    ngOnInit() {
        this.authParams = this.urlService.getQueryParams();
        this.appName = this.authParams.get('app_name');
        this.backOfficeUrl = this.environmentService.getBackOfficeUrl();
        this.authorizeUrl = this.environmentService.getAuthorizeUrl();
        this.paramMap = this.urlService.paramsToMap(this.authParams);
        this.paramMap.set('user_oauth_approval', 'false');
    }
    /**
     * В случае согласия перенаправляем пользователя в бэк-офис, на страницу биллинга и подписок
     * Поскольку эта страница отображается в случае, когда аккаунт заблокирован, то даже если он не залогинен в бэк-офис, его перебросит на форму логина, а после логина - на страницу биллинга
     */
    goToSubscriptions() {
        const redirectUrl = this.backOfficeUrl + '/dashboard/#/settings/account';
        this.document.location.assign(redirectUrl);
    }
}
RenewIntegrationsComponent.ɵfac = function RenewIntegrationsComponent_Factory(t) { return new (t || RenewIntegrationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_url_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
RenewIntegrationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RenewIntegrationsComponent, selectors: [["app-renew-integrations"]], decls: 18, vars: 19, consts: [[1, "mat-card-forms"], ["id", "cancelRenewIntegrations", "ngNoForm", "", "method", "post", 3, "action"], ["type", "hidden", 3, "name", "value", 4, "ngFor", "ngForOf"], [1, "integration-wrap"], [1, "header-h1"], [1, "integration-text", "form-text"], [1, "integration-buttons", "buttons-block", "buttons-block-bottom"], ["mat-button", "", "type", "submit", "form", "cancelRenewIntegrations"], ["mat-button", "", "color", "primary", 1, "mat-primary-submit", 3, "click"], ["type", "hidden", 3, "name", "value"]], template: function RenewIntegrationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RenewIntegrationsComponent_input_2_Template, 1, 2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RenewIntegrationsComponent_Template_button_click_15_listener() { return ctx.goToSubscriptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("action", ctx.authorizeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, ctx.paramMap));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, "TITLE.UNABLE_TO_CONNECT_APP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 10, "INTEGRATION.RENEW_TEXT", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.appName)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 13, "BUTTONS.CANCEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 15, "BUTTONS.GO_SUBSCRIPTIONS"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW5ldy1pbnRlZ3JhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1450:
/*!*****************************************************************************!*\
  !*** ./src/app/components/oauth/store-inactive/store-inactive.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreInactiveComponent": () => (/* binding */ StoreInactiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/env/environment.service */ 3832);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 7514);






class StoreInactiveComponent {
    constructor(environmentService, document) {
        this.environmentService = environmentService;
        this.document = document;
    }
    ngOnInit() {
        this.hardwareStoreUrl = this.environmentService.getHardwareStoreUrl();
        this.backOfficeUrl = this.environmentService.getBackOfficeUrl();
    }
    goToStore() {
        this.document.location.assign(this.hardwareStoreUrl);
    }
    goToBackOffice() {
        this.document.location.assign(this.environmentService.getBackOfficeOAuthAuthorizeUrl('/dashboard/#/payments'));
    }
}
StoreInactiveComponent.ɵfac = function StoreInactiveComponent_Factory(t) { return new (t || StoreInactiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
StoreInactiveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoreInactiveComponent, selectors: [["app-store-inactive"]], decls: 15, vars: 12, consts: [[1, "mat-card-forms"], [1, "store-gate-wrap"], [1, "header-h1"], [1, "store-gate-text", "form-text"], [1, "store-gate-buttons", "buttons-block", "buttons-block-bottom"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "primary", 1, "mat-primary-submit", 3, "click"]], template: function StoreInactiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreInactiveComponent_Template_button_click_9_listener() { return ctx.goToStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreInactiveComponent_Template_button_click_12_listener() { return ctx.goToBackOffice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "STORE_GATE.INACTIVE_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "STORE_GATE.INACTIVE_TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "BUTTONS.MAYBE_LATER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "BUTTONS.GO_BACK_OFFICE"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS1pbmFjdGl2ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5309:
/*!***************************************************************************************!*\
  !*** ./src/app/components/oauth/store-not-onboarded/store-not-onboarded.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreNotOnboardedComponent": () => (/* binding */ StoreNotOnboardedComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/env/environment.service */ 3832);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 7514);






class StoreNotOnboardedComponent {
    constructor(environmentService, document) {
        this.environmentService = environmentService;
        this.document = document;
    }
    ngOnInit() {
        this.hardwareStoreUrl = this.environmentService.getHardwareStoreUrl();
        this.backOfficeUrl = this.environmentService.getBackOfficeUrl();
    }
    goToStore() {
        this.document.location.assign(this.hardwareStoreUrl);
    }
    goToBackOffice() {
        this.document.location.assign(this.environmentService.getBackOfficeOAuthAuthorizeUrl('/dashboard/#/payments'));
    }
}
StoreNotOnboardedComponent.ɵfac = function StoreNotOnboardedComponent_Factory(t) { return new (t || StoreNotOnboardedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
StoreNotOnboardedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoreNotOnboardedComponent, selectors: [["app-store-not-onboarded"]], decls: 15, vars: 12, consts: [[1, "mat-card-forms"], [1, "store-gate-wrap"], [1, "header-h1"], [1, "store-gate-text", "form-text"], [1, "store-gate-buttons", "buttons-block", "buttons-block-bottom"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "primary", 1, "mat-primary-submit", 3, "click"]], template: function StoreNotOnboardedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreNotOnboardedComponent_Template_button_click_9_listener() { return ctx.goToStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreNotOnboardedComponent_Template_button_click_12_listener() { return ctx.goToBackOffice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "STORE_GATE.NOT_ONBOARDED_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "STORE_GATE.NOT_ONBOARDED_TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "BUTTONS.MAYBE_LATER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "BUTTONS.GO_BACK_OFFICE"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS1ub3Qtb25ib2FyZGVkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6999:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/oauth/store-unsupported-country/store-unsupported-country.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreUnsupportedCountryComponent": () => (/* binding */ StoreUnsupportedCountryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/env/environment.service */ 3832);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 7514);






class StoreUnsupportedCountryComponent {
    constructor(environmentService, document) {
        this.environmentService = environmentService;
        this.document = document;
    }
    ngOnInit() {
        this.hardwareStoreUrl = this.environmentService.getHardwareStoreUrl();
    }
    goToStore() {
        this.document.location.assign(this.hardwareStoreUrl);
    }
    joinWaitlist() {
        window.open('https://14psi.share.hsforms.com/2oc3VqzYoR6-goqcbOTRB4g', '_blank');
    }
}
StoreUnsupportedCountryComponent.ɵfac = function StoreUnsupportedCountryComponent_Factory(t) { return new (t || StoreUnsupportedCountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
StoreUnsupportedCountryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoreUnsupportedCountryComponent, selectors: [["app-store-unsupported-country"]], decls: 15, vars: 12, consts: [[1, "mat-card-forms"], [1, "store-gate-wrap"], [1, "header-h1"], [1, "store-gate-text", "form-text"], [1, "store-gate-buttons", "buttons-block", "buttons-block-bottom"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "primary", 1, "mat-primary-submit", 3, "click"]], template: function StoreUnsupportedCountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreUnsupportedCountryComponent_Template_button_click_9_listener() { return ctx.goToStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreUnsupportedCountryComponent_Template_button_click_12_listener() { return ctx.joinWaitlist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "STORE_GATE.UNSUPPORTED_COUNTRY_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "STORE_GATE.UNSUPPORTED_COUNTRY_TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "BUTTONS.MAYBE_LATER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "BUTTONS.JOIN_WAITLIST"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS11bnN1cHBvcnRlZC1jb3VudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1818:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/oauth/subscribe-integrations/subscribe-integrations.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeIntegrationsComponent": () => (/* binding */ SubscribeIntegrationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_url_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/url/url.service */ 7312);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/env/environment.service */ 3832);
/* harmony import */ var _services_common_requests_common_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common-requests/common-requests.service */ 1558);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);










function SubscribeIntegrationsComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 9);
} if (rf & 2) {
    const param_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", param_r1.key)("value", param_r1.value);
} }
const _c0 = function (a0) { return { "appName": a0 }; };
class SubscribeIntegrationsComponent {
    constructor(urlService, environmentService, commonRequestsService, router, document) {
        this.urlService = urlService;
        this.environmentService = environmentService;
        this.commonRequestsService = commonRequestsService;
        this.router = router;
        this.document = document;
    }
    ngOnInit() {
        this.authParams = this.urlService.getQueryParams();
        this.appName = this.authParams.get('app_name');
        this.backOfficeUrl = this.environmentService.getBackOfficeUrl();
        this.siteUrl = this.environmentService.getSiteUrl();
        this.authorizeUrl = this.environmentService.getAuthorizeUrl();
        this.paramMap = this.urlService.paramsToMap(this.authParams);
        this.paramMap.set('user_oauth_approval', 'false');
    }
    /**
     * В случае согласия перенаправляем пользователя на промо-страницу интеграций в бэк-офисе или на форму логина, если он не залогинен в бэк-офис
     */
    goToSubscription() {
        this.commonRequestsService.isCabinetLogged().subscribe((response) => {
            if (response.status) {
                const redirectUrl = this.backOfficeUrl + '/dashboard/#/integrations/management';
                this.document.location.assign(redirectUrl);
            }
            else {
                const langUrl = this.urlService.getLangForUrl();
                this.router.navigate([langUrl, '/login'], { queryParams: { url: 'integrations-management' } });
            }
        });
    }
}
SubscribeIntegrationsComponent.ɵfac = function SubscribeIntegrationsComponent_Factory(t) { return new (t || SubscribeIntegrationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_url_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_requests_common_requests_service__WEBPACK_IMPORTED_MODULE_2__.CommonRequestsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT)); };
SubscribeIntegrationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubscribeIntegrationsComponent, selectors: [["app-subscribe-integrations"]], decls: 18, vars: 19, consts: [[1, "mat-card-forms"], ["id", "cancelSubscribeIntegrations", "ngNoForm", "", "method", "post", 3, "action"], ["type", "hidden", 3, "name", "value", 4, "ngFor", "ngForOf"], [1, "integration-wrap"], [1, "header-h1"], [1, "integration-text", "form-text"], [1, "integration-buttons", "buttons-block", "buttons-block-bottom"], ["mat-button", "", "type", "submit", "form", "cancelSubscribeIntegrations"], ["mat-button", "", "color", "primary", 1, "mat-primary-submit", 3, "click"], ["type", "hidden", 3, "name", "value"]], template: function SubscribeIntegrationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubscribeIntegrationsComponent_input_2_Template, 1, 2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubscribeIntegrationsComponent_Template_button_click_15_listener() { return ctx.goToSubscription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("action", ctx.authorizeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, ctx.paramMap));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, "TITLE.UNABLE_TO_CONNECT_APP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 10, "INTEGRATION.SUBSCRIBE_TEXT", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ctx.appName)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 13, "BUTTONS.CANCEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 15, "BUTTONS.GO_SUBSCRIPTION"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpYmUtaW50ZWdyYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1795:
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _validators_trimmed_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../validators/trimmed.validator */ 9955);
/* harmony import */ var _validators_blocked_values_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/blocked-values.validator */ 5414);
/* harmony import */ var _validators_brands_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/brands.validator */ 5964);
/* harmony import */ var _validators_email_except_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/email-except-validator */ 199);
/* harmony import */ var _validators_noemoji_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/noemoji.validator */ 3066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration.service */ 6775);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/env/environment.service */ 3832);
/* harmony import */ var _services_url_url_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/url/url.service */ 7312);
/* harmony import */ var _services_site_redirect_site_redirect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/site-redirect/site-redirect.service */ 7974);
/* harmony import */ var _services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/mixpanel/mixpanel.service */ 2954);
/* harmony import */ var _services_sentry_sentry_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/sentry/sentry.service */ 6285);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _constants_constant_countries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/constant-countries */ 7167);
/* harmony import */ var _constants_constant_form_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/constant-form-constants */ 1052);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/local-storage/local-storage.service */ 7635);
/* harmony import */ var _services_aws_waf_aws_waf_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/aws-waf/aws-waf.service */ 3409);
/* harmony import */ var _services_recaptcha_enterprise_recaptcha_enterprise_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/recaptcha-enterprise/recaptcha-enterprise.service */ 6153);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _directives_phone_number_phone_number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../directives/phone-number/phone-number */ 8755);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
































const _c0 = function (a0) { return { "no-error": a0 }; };
const _c1 = function (a0) { return { partnerName: a0 }; };
function RegistrationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](5, _c0, !ctx_r0.formError));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 2, "SIGNUP.PARTNER_TEXT", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](7, _c1, ctx_r0.partnerName)));
} }
function RegistrationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS." + ctx_r1.formError));
} }
function RegistrationComponent_form_11_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
function RegistrationComponent_form_11_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.VALID_EMAIL"));
} }
const _c2 = function () { return { "number": 96 }; };
function RegistrationComponent_form_11_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MAXIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](4, _c2)));
} }
function RegistrationComponent_form_11_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.VALID_EMAIL"));
} }
const _c3 = function () { return { "number": 8 }; };
function RegistrationComponent_form_11_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MINIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](4, _c3)));
} }
const _c4 = function () { return { "number": 40 }; };
function RegistrationComponent_form_11_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MAXIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](4, _c4)));
} }
function RegistrationComponent_form_11_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
function RegistrationComponent_form_11_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.SPACES_AROUND"));
} }
function RegistrationComponent_form_11_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
function RegistrationComponent_form_11_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BUSINESS_NAME_INVALID"));
} }
function RegistrationComponent_form_11_div_33_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
function RegistrationComponent_form_11_div_33_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.PHONE_SHORT"));
} }
function RegistrationComponent_form_11_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 15)(1, "mat-form-field", 16)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, RegistrationComponent_form_11_div_33_mat_error_6_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, RegistrationComponent_form_11_div_33_mat_error_7_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 3, "FORMS.PHONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r15.signUpForm.hasError("required", "phoneNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r15.signUpForm.hasError("minlength", "phoneNumber"));
} }
function RegistrationComponent_form_11_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", country_r21.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](country_r21.name);
} }
function RegistrationComponent_form_11_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
function RegistrationComponent_form_11_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.COUNTRY_UNAVAILABLE"));
} }
const _c5 = function (a0) { return { "mat-checkbox-auth-error": a0 }; };
const _c6 = function (a0, a1) { return { termsUrl: a0, privacyUrl: a1 }; };
function RegistrationComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "form", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_form_11_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](1); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r22.onFormSubmit(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 15)(3, "mat-form-field", 16)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, RegistrationComponent_form_11_mat_error_8_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, RegistrationComponent_form_11_mat_error_9_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, RegistrationComponent_form_11_mat_error_10_Template, 3, 5, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, RegistrationComponent_form_11_mat_error_11_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 15)(13, "mat-form-field", 16)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RegistrationComponent_form_11_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r24.hidePassword = !ctx_r24.hidePassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, RegistrationComponent_form_11_mat_error_21_Template, 3, 5, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](22, RegistrationComponent_form_11_mat_error_22_Template, 3, 5, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, RegistrationComponent_form_11_mat_error_23_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](24, RegistrationComponent_form_11_mat_error_24_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 15)(26, "mat-form-field", 16)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](30, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](31, RegistrationComponent_form_11_mat_error_31_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](32, RegistrationComponent_form_11_mat_error_32_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](33, RegistrationComponent_form_11_div_33_Template, 8, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 24)(35, "mat-form-field", 16)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selectionChange", function RegistrationComponent_form_11_Template_mat_select_selectionChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r25.addCountryToAgreementLinks($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](40, RegistrationComponent_form_11_mat_option_40_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, RegistrationComponent_form_11_mat_error_41_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](42, RegistrationComponent_form_11_mat_error_42_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "div", 27)(44, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function RegistrationComponent_form_11_Template_mat_checkbox_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r26.onTermsCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](45, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "div", 30)(48, "button", 31)(49, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "div", 33)(53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](56, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RegistrationComponent_form_11_Template_a_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r27.goSignInForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r2.signUpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 27, "FORMS.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("required", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("trimmed", "email") || ctx_r2.signUpForm.hasError("except", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("maxlength", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("brandName", "email") && !ctx_r2.signUpForm.hasError("trimmed", "email") && !ctx_r2.signUpForm.hasError("maxlength", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](16, 29, "FORMS.PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("type", ctx_r2.hidePassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](!ctx_r2.hidePassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("minlength", "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("maxlength", "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("required", "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("pattern", "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](29, 31, "FORMS.BUSINESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("required", "businessName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("pattern", "businessName") || ctx_r2.signUpForm.hasError("noEmoji", "businessName") || ctx_r2.signUpForm.hasError("brandName", "businessName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.displayPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](38, 33, "FORMS.COUNTRY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r2.countriesTranslated);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("required", "selectedCountry"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.hasError("valueBlocked", "selectedCountry"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](44, _c5, ctx_r2.termsNoAgree));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](46, 35, "FORMS.TERMS_PRIVACY_TEXT", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](46, _c6, ctx_r2.termsOfUseUrl.toString(), ctx_r2.privacyPolicyUrl.toString())), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](51, 38, "BUTTONS.SIGNUP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](55, 40, "FORMS.ALREADY_HAVE_ACCOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](58, 42, "BUTTONS.SIGN_IN"), "");
} }
function RegistrationComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "form", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_form_12_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r28.goBackOffice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 30)(2, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 39)(6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RegistrationComponent_form_12_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r30.showRegistrationForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 2, "BUTTONS.GO_BACK_OFFICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 4, "FORMS.LINKS.CREATE_ACCOUNT"));
} }
class RegistrationComponent {
    constructor(registrationService, environmentService, urlService, siteRedirectService, mixpanelService, sentryService, translate, countriesCollection, formConstants, document, route, localStorageService, awsWafService, recaptchaEnterpriseService) {
        this.registrationService = registrationService;
        this.environmentService = environmentService;
        this.urlService = urlService;
        this.siteRedirectService = siteRedirectService;
        this.mixpanelService = mixpanelService;
        this.sentryService = sentryService;
        this.translate = translate;
        this.countriesCollection = countriesCollection;
        this.formConstants = formConstants;
        this.document = document;
        this.route = route;
        this.localStorageService = localStorageService;
        this.awsWafService = awsWafService;
        this.recaptchaEnterpriseService = recaptchaEnterpriseService;
        this.formError = null;
        this.hidePassword = true;
        this.blockedCountries = [];
        this.selectedCountry = '';
        this.referralString = null;
        this.partnerName = null;
        this.termsNoAgree = false;
        this.submitting = false;
        this.countriesTranslatedStream = this.getCountriesTranslationsStream();
        this.translate.onLangChange.subscribe((params) => {
            this.setSiteHomepage();
            this.sortCountriesTranslated(this.countriesTranslatedStream);
        });
        this.trackFbPixel = false;
    }
    ngOnInit() {
        this.sortCountriesTranslated(this.countriesTranslatedStream);
        this.isLogged = this.route.snapshot.data.dataLogged.status;
        this.blockedCountries =
            this.route.snapshot.data.dataLogged.blockedCountries;
        this.trackFbPixel = ['th', 'id', 'ar', 'es', 'en']
            .includes(this.route.snapshot.params.lang);
        if (this.trackFbPixel) {
            const scriptElem = document.createElement('script');
            const inlineCode = document.createTextNode(`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init','233980610754606');
        fbq('track','PageView');
      `);
            scriptElem.appendChild(inlineCode);
            document.head.appendChild(scriptElem);
            document.head.appendChild(createNoScriptElement('https://www.facebook.com/tr?id=233980610754606&ev=PageView&noscript=1'));
            function createNoScriptElement(src) {
                const noScriptElem = document.createElement('noscript');
                const imgElem = document.createElement('img');
                imgElem.height = 1;
                imgElem.width = 1;
                imgElem.style.display = 'none';
                imgElem.src = src;
                noScriptElem.appendChild(imgElem);
                return noScriptElem;
            }
        }
        this.awsWafService.loadSdk();
        this.recaptchaEnterpriseService.loadSdk();
        this.setSignUpForm();
        this.backOfficeUrl = this.environmentService.getBackOfficeUrl();
        this.siteUrl = this.environmentService.getSiteUrl();
        this.setAgreementLinks();
        this.setCountryWithGeoIp();
        this.queryParams = this.urlService.getQueryParams();
        this.mixpanelService.track('Sign up form (Backoffice)');
        if (this.queryParams.has('ref')) {
            this.showPartnerName(this.queryParams);
        }
        console.table({
            'logged in': this.isLogged,
        });
    }
    registration() {
        if (this.submitting) {
            return;
        }
        this.submitting = true;
        this.formError = null;
        const countryControl = this.signUpForm.get('selectedCountry');
        const data = {
            email: this.signUpForm.get('email').value.trim(),
            password: this.signUpForm.get('password').value,
            businessName: this.signUpForm.get('businessName').value,
            phoneNumber: countryControl.value === 'us' ? this.signUpForm.get('phoneNumber').value : null,
            country: countryControl.value,
            cabinetLang: this.translate.getDefaultLang(),
            timeZoneName: Intl.DateTimeFormat().resolvedOptions().timeZone,
            tsZoneOffset: new Date().getTimezoneOffset() * 6000 * -1,
            referrerUrl: this.getReferrerUrl(),
        };
        if (this.referralString && this.partnerName) {
            data.referralString = this.referralString;
        }
        Promise.all([
            this.awsWafService.getToken(),
            this.recaptchaEnterpriseService.execute('signup'),
        ]).then(([wafToken, recaptchaToken]) => {
            const wafBlocked = this.awsWafService.isEnabled() && !wafToken;
            const recaptchaBlocked = this.recaptchaEnterpriseService.isEnabled() && !recaptchaToken;
            if (wafBlocked || recaptchaBlocked) {
                this.formError = 'VERIFICATION_BLOCKED';
                this.submitting = false;
                return;
            }
            data.recaptchaResponse = recaptchaToken;
            this.submitRegistration(data, wafToken);
        });
    }
    submitRegistration(data, wafToken) {
        this.registrationService.registration(data, wafToken).subscribe({
            next: (response) => this.handleRegistrationResponse(response),
            error: (err) => {
                this.submitting = false;
                if (err.status === 403) {
                    this.formError = 'REQUEST_BLOCKED';
                    return;
                }
                if (err.status === 0) {
                    this.formError = 'VERIFICATION_BLOCKED';
                    return;
                }
                this.formError = err.status === 451
                    ? 'COUNTRY_UNAVAILABLE_RESTRICTION'
                    : 'UNEXPECTED_ERROR';
                this.sentryService.captureException(err);
                this.sentryService.captureMessage('Server response ' + err.message);
            },
        });
    }
    handleRegistrationResponse(response) {
        if (response.regResult !== 'ok') {
            this.submitting = false;
        }
        switch (response.regResult) {
            case 'ok':
                this.mixpanelService.identify(String(response.ownerId));
                this.mixpanelService.track('Sign up successful (Backoffice)');
                this.document.cookie = 'user=intercom-session-re5afjv3; max-age=0';
                if (this.trackFbPixel) {
                    const scriptElem = document.createElement('script');
                    const inlineCode = document.createTextNode(`
            fbq('track', 'CompleteRegistration', {locale: '${this.route.snapshot.params.lang}'});
          `);
                    scriptElem.appendChild(inlineCode);
                    document.head.appendChild(scriptElem);
                }
                if (document.referrer.includes('advanced-inventory')) {
                    this.document.location.assign(this.backOfficeUrl + '/dashboard/#/inventory/invmanagement');
                }
                else {
                    this.goBackOffice();
                }
                break;
            case 'owner_already_exists':
            case 'merchant_already_exists':
                this.formError = 'EMAIL_EXISTS';
                break;
            case 'service_unavailable_in_country':
                this.signUpForm.get('selectedCountry').setErrors({ valueBlocked: true });
                break;
            case 'email_is_blocked':
                this.formError = 'SOMETHING_WRONG';
                break;
            case 'recaptcha_failed':
                this.formError = 'RECAPTCHA_NOT_VERIFIED';
                break;
            case 'owner_exists_in_saltId':
                this.formError = 'OWNER_EXISTS_IN_SALTID';
                break;
        }
    }
    /**
     * Sets links for text in "I agree" checkbox
     */
    setAgreementLinks() {
        this.termsOfUseUrl = new URL(`${this.siteUrl}/terms-use`);
        this.privacyPolicyUrl = new URL(`${this.siteUrl}/privacy-policy`);
    }
    /**
     * Adds `country` query param to links object
     */
    addCountryToAgreementLinks(country) {
        this.termsOfUseUrl.searchParams.set('country', country);
        this.privacyPolicyUrl.searchParams.set('country', country);
        this.translate.use(this.translate.currentLang);
        this.displayPhoneNumber = country === 'us';
        const phoneControl = this.signUpForm.get('phoneNumber');
        phoneControl.setValidators(country === 'us' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.minLength(8)] : []);
        phoneControl.updateValueAndValidity();
    }
    /**
     * Sets site homepage URL (used for logo)
     */
    setSiteHomepage() {
        const lang = this.document.location.pathname.substring(1).split('/')[0];
        this.siteLangHomepageUri =
            this.siteUrl + this.siteRedirectService.getPathForSite(lang);
    }
    /**
     * Get all countries translated names in stream
     */
    getCountriesTranslationsStream() {
        const countries = this.countriesCollection.COUNTRIES;
        const translationStrings = countries.map((countryCode) => {
            return 'COUNTRY.' + countryCode.toUpperCase();
        });
        return this.translate.stream(translationStrings);
    }
    /**
     * Sort countries names in stream
     * @param stream - countries translated names stream
     */
    sortCountriesTranslated(stream) {
        stream.subscribe((translations) => {
            this.countriesTranslated = [];
            for (const key in translations) {
                const lastTwoKeySymbols = key
                    .substring(key.length - 2, key.length)
                    .toLowerCase();
                this.countriesTranslated.push({
                    code: lastTwoKeySymbols,
                    name: translations[key],
                });
            }
            this.countriesTranslated.sort((a, b) => {
                return a['name'].localeCompare(b['name']);
            });
        });
    }
    /**
     * Set Sign Up form
     */
    setSignUpForm() {
        const fragment = this.urlService.getUrlFragment();
        const email = fragment ? fragment : '';
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.maxLength(96),
                (0,_validators_trimmed_validator__WEBPACK_IMPORTED_MODULE_0__.trimmedValidator)(this.formConstants.EMAIL_PATTERN, true),
                (0,_validators_trimmed_validator__WEBPACK_IMPORTED_MODULE_0__.trimmedValidator)(this.formConstants.EMAIL_DOMAINS_PATTERN, false),
                (0,_validators_brands_validator__WEBPACK_IMPORTED_MODULE_2__.emailBrandValidator)(),
                (0,_validators_email_except_validator__WEBPACK_IMPORTED_MODULE_3__.emailExceptValidator)()
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.maxLength(40),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.formConstants.PASSWORD_PATTERN),
            ]),
            businessName: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.formConstants.BUSINESS_TYPE_PATTERN),
                (0,_validators_noemoji_validator__WEBPACK_IMPORTED_MODULE_4__.noemojiValidator)(),
                (0,_validators_brands_validator__WEBPACK_IMPORTED_MODULE_2__.businessNameBrandValidator)(),
            ]),
            selectedCountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this.selectedCountry, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                (0,_validators_blocked_values_validator__WEBPACK_IMPORTED_MODULE_1__.blockedValuesValidator)(this.blockedCountries),
            ]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.minLength(8)
            ]),
            reCaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null),
            checkboxPrivacyPolicy: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.requiredTrue]),
        });
    }
    /**
     * Go to Sign In page
     */
    goSignInForm() {
        this.urlService.navigateToState('login');
        return false;
    }
    /**
     * Set country using geoip library
     */
    setCountryWithGeoIp() {
        this.registrationService.getCountryByIp().subscribe({
            next: (res) => {
                if (res['status'] === 'success') {
                    const country = res['countryCode'].toLowerCase();
                    this.selectedCountry = this.countriesCollection.COUNTRIES.includes(country)
                        ? country
                        : '';
                }
            },
            complete: () => {
                this.signUpForm.get('selectedCountry').setValue(this.selectedCountry);
                this.addCountryToAgreementLinks(this.selectedCountry);
            },
        });
    }
    /**
     * Show partner name, only if referral string exists
     * @param queryParams
     */
    showPartnerName(queryParams) {
        this.referralString = queryParams.get('ref');
        this.registrationService
            .getPartnerName({ referralString: this.referralString })
            .subscribe({
            next: (res) => {
                if (res.refResult === 'ok') {
                    this.partnerName = res.partnerName;
                }
                else if (res.refResult === 'wrong_referral_string') {
                    this.formError = 'INVALID_REFERRAL_STRING';
                }
            },
            error: (err) => {
                this.formError = 'UNEXPECTED_ERROR';
            },
        });
    }
    /**
     * On form submit method
     * @param signUpNgForm
     */
    onFormSubmit(signUpNgForm) {
        if (signUpNgForm.submitted &&
            this.signUpForm.hasError('required', 'checkboxPrivacyPolicy')) {
            this.formError = 'AGREE_TERMS';
            this.termsNoAgree = true;
        }
        else {
            this.formError = null;
            this.termsNoAgree = false;
        }
        if (signUpNgForm.valid) {
            this.formError = null;
            this.registration();
        }
    }
    /**
     * Removing error on terms checkbox change
     * @param event
     */
    onTermsCheckboxChange(event) {
        if (event.checked &&
            this.formError === 'AGREE_TERMS' &&
            this.termsNoAgree) {
            this.formError = null;
            this.termsNoAgree = false;
        }
    }
    /**
     * Go to backoffice homepage
     */
    goBackOffice() {
        this.document.location.assign(this.backOfficeUrl + '/dashboard/#/home');
    }
    showRegistrationForm() {
        this.isLogged = false;
    }
    getReferrerUrl() {
        return this.localStorageService.getLocalStorageItem('referrerUrl');
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_5__.RegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_6__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_url_url_service__WEBPACK_IMPORTED_MODULE_7__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_site_redirect_site_redirect_service__WEBPACK_IMPORTED_MODULE_8__.SiteRedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_9__.MixpanelService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_sentry_sentry_service__WEBPACK_IMPORTED_MODULE_10__.SentryService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_constants_constant_countries__WEBPACK_IMPORTED_MODULE_11__.ConstantCountries), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_constants_constant_form_constants__WEBPACK_IMPORTED_MODULE_12__.ConstantFormConstants), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_13__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_aws_waf_aws_waf_service__WEBPACK_IMPORTED_MODULE_14__.AwsWafService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_recaptcha_enterprise_recaptcha_enterprise_service__WEBPACK_IMPORTED_MODULE_15__.RecaptchaEnterpriseService)); };
RegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 13, vars: 8, consts: [["class", "registration-form-invitation", 3, "ngClass", 4, "ngIf"], ["class", "form-error", 4, "ngIf"], [1, "mat-card-forms"], [1, "form-logo"], [1, "form-logo-link", 3, "href"], ["alt", "Loyverse POS", "src", "./assets/img/logo.svg", "width", "142", "height", "38", 1, "form-logo-img"], [1, "form-title", "registration-form-title"], [1, "form-h1"], [1, "form"], ["action", "", "name", "signUpForm", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "registration-form-invitation", 3, "ngClass"], [1, "form-error"], ["action", "", "name", "signUpForm", "novalidate", "", 3, "formGroup", "ngSubmit"], ["signUpNgForm", "ngForm"], [1, "form-field", "registration-form-field"], ["hideRequiredMarker", "", 1, "mat-full-width"], ["type", "text", "formControlName", "email", "matInput", ""], [4, "ngIf"], ["formControlName", "password", "matInput", "", 3, "type"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Visibility Off", "type", "button", 3, "click"], ["aria-hidden", "false", "aria-label", "Visibility Off"], ["type", "text", "formControlName", "businessName", "matInput", "", "maxlength", "64"], ["class", "form-field registration-form-field", 4, "ngIf"], [1, "registration-form-select"], ["formControlName", "selectedCountry", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-hint", "registration-form-checkbox"], ["formControlName", "checkboxPrivacyPolicy", 1, "mat-checkbox-auth", "registration-form-auth", 3, "ngClass", "change"], [3, "innerHtml"], [1, "registration-form-button", "buttons-block"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "mat-primary-submit", "mat-full-width", 3, "disabled"], ["id", "rf-submit"], [1, "form-hint", "registration-form-login-text"], [1, "form-link", "link", "login-link", 3, "click"], ["type", "text", "formControlName", "phoneNumber", "appPhoneNumber", "", "matInput", ""], [3, "value"], [3, "ngSubmit"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "mat-primary-submit", "mat-full-width"], [1, "registration-form-go"], [1, "link", 3, "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, RegistrationComponent_div_0_Template, 3, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RegistrationComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "mat-card", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, RegistrationComponent_form_11_Template, 59, 49, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, RegistrationComponent_form_12_Template, 9, 6, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.partnerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("href", ctx.siteLangHomepageUri, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](9, 6, !ctx.isLogged ? "SIGNUP.CREATE" : "SIGNUP.HEADER_SIGNED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxLengthValidator, _directives_phone_number_phone_number__WEBPACK_IMPORTED_MODULE_16__.PhoneNumberDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: [".registration-form-title[_ngcontent-%COMP%] {\n  padding: 0 0 28px;\n}\n.registration-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.registration-form-select[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.registration-form-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.registration-form-button[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.registration-form-login-text[_ngcontent-%COMP%], .registration-form-go[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.registration-form-invitation[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 28px;\n  font-weight: 300;\n  line-height: 34px;\n}\n.registration-form-invitation.no-error[_ngcontent-%COMP%] {\n  margin-bottom: 44px;\n}\n@media screen and (max-width: 599px) {\n  .registration-form-invitation.no-error[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGlCQUFBO0FBRE47QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFLSTtFQUNFLGtCQUFBO0FBSE47QUFLSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFITjtBQUlNO0VBQ0UsbUJBQUE7QUFGUjtBQUdRO0VBRkY7SUFHSSxtQkFBQTtFQUFSO0FBQ0YiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJhdGlvbiB7XG4gICYtZm9ybSB7XG4gICAgJi10aXRsZSB7XG4gICAgICBwYWRkaW5nOiAwIDAgMjhweDtcbiAgICB9XG5cbiAgICAmLWZpZWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgfVxuXG4gICAgJi1zZWxlY3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICB9XG4gICAgJi1jaGVja2JveCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgICAmLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgICAmLWxvZ2luLXRleHQsICYtZ28ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAmLWludml0YXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgJi5uby1lcnJvciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 6775:
/*!*****************************************************************!*\
  !*** ./src/app/components/registration/registration.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationService": () => (/* binding */ RegistrationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/env/environment.service */ 3832);




class RegistrationService {
    constructor(http, environmentService) {
        this.http = http;
        this.environmentService = environmentService;
        this.backOfficePath = this.environmentService.getPathForBackOfficeRequests();
    }
    /**
     * Registration
     * @param data информация для отправки на сервер
     */
    registration(data, wafToken = '') {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        if (wafToken) {
            headers = headers.set('X-Aws-Waf-Token', wafToken);
        }
        return this.http.post(this.backOfficePath + '/cabinetregistration', data, { headers, withCredentials: true });
    }
    /**
     * Get country by user's IP
     */
    getCountryByIp() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().appendAll({ 'key': 'UffuXtcBlFY2kZo', 'fields': 'status,message,countryCode' });
        return this.http.get('https://pro.ip-api.com/json', { params });
    }
    /**
     * Get partner name - for referral link registration
     */
    getPartnerName(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.backOfficePath + '/getPartnerName', data, { headers, withCredentials: true });
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService)); };
RegistrationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5740:
/*!***********************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _validators_trimmed_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../validators/trimmed.validator */ 9955);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _constants_constant_form_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/constant-form-constants */ 1052);
/* harmony import */ var _services_url_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/url/url.service */ 7312);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _reset_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.service */ 5878);
/* harmony import */ var _services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mixpanel/mixpanel.service */ 2954);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/env/environment.service */ 3832);
/* harmony import */ var _services_recaptcha_enterprise_recaptcha_enterprise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/recaptcha-enterprise/recaptcha-enterprise.service */ 6153);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);

















function ResetPasswordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS." + ctx_r0.formError));
} }
function ResetPasswordComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "RESET_PW.TEXT_BEFORE_SENDING"));
} }
function ResetPasswordComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "RESET_PW.TEXT_AFTER_SENDING"));
} }
function ResetPasswordComponent_div_11_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.VALID_EMAIL"));
} }
function ResetPasswordComponent_div_11_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
const _c0 = function () { return { "number": 96 }; };
function ResetPasswordComponent_div_11_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MAXIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0)));
} }
function ResetPasswordComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_div_11_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.resetPasswordForm.valid ? ctx_r8.executeCaptcha() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 14)(3, "mat-form-field", 15)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ResetPasswordComponent_div_11_mat_error_8_Template, 3, 3, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ResetPasswordComponent_div_11_mat_error_9_Template, 3, 3, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ResetPasswordComponent_div_11_mat_error_10_Template, 3, 5, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 18)(12, "button", 19)(13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r3.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, "FORMS.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.resetPasswordForm.hasError("trimmed", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.resetPasswordForm.hasError("required", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.resetPasswordForm.hasError("maxlength", "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 9, "BUTTONS.CONTINUE"));
} }
function ResetPasswordComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ResetPasswordComponent_div_12_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.goSignInForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, "FORMS.LINKS.BACK_TO_SIGN_IN"));
} }
const _c1 = function (a0) { return { "reset-form-title-sent": a0 }; };
class ResetPasswordComponent {
    constructor(formConstants, urlService, translate, resetPasswordService, mixpanelService, environmentService, document, recaptchaEnterpriseService) {
        this.formConstants = formConstants;
        this.urlService = urlService;
        this.translate = translate;
        this.resetPasswordService = resetPasswordService;
        this.mixpanelService = mixpanelService;
        this.environmentService = environmentService;
        this.document = document;
        this.recaptchaEnterpriseService = recaptchaEnterpriseService;
        this.requestSent = false;
        this.formError = '';
        this.submitting = false;
        this.emailPattern = formConstants.EMAIL_PATTERN;
    }
    ngOnInit() {
        this.recaptchaEnterpriseService.loadSdk();
        this.setResetPasswordFormGroup();
        this.mixpanelService.track("Back office page visit", { "Property": "Reset password?" });
    }
    /**
     * Sets page form group
     */
    setResetPasswordFormGroup() {
        this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(96),
                (0,_validators_trimmed_validator__WEBPACK_IMPORTED_MODULE_0__.trimmedValidator)(this.emailPattern, true)
            ])
        });
    }
    /**
     * Go to Sign In page
     */
    goSignInForm() {
        this.urlService.navigateToState('login');
        return false;
    }
    /**
     * Submit form
     */
    submitResetPassword(captchaResponse = "") {
        this.formError = '';
        const data = {
            email: this.resetPasswordForm.get('email').value.trim(),
            lang: this.translate.currentLang,
            recaptchaResponse: captchaResponse
        };
        this.resetPasswordService.resetPassword(data).subscribe({
            next: (response) => {
                this.submitting = false;
                switch (response.result) {
                    case 'ok':
                        this.mixpanelService.track("Back office page visit", { "Property": "Reset password email sent" });
                        this.requestSent = true;
                        break;
                    case 'recaptcha_not_verified':
                        this.formError = 'RECAPTCHA_NOT_VERIFIED';
                        break;
                    default:
                        this.formError = 'UNEXPECTED_ERROR';
                }
            },
            error: (err) => {
                this.submitting = false;
                this.formError = 'UNEXPECTED_ERROR';
            }
        });
    }
    /**
     * Execute captcha
     */
    executeCaptcha() {
        if (this.submitting) {
            return;
        }
        this.submitting = true;
        this.recaptchaEnterpriseService.execute('password_reset').then((token) => {
            if (this.recaptchaEnterpriseService.isEnabled() && !token) {
                this.formError = 'VERIFICATION_BLOCKED';
                this.submitting = false;
                return;
            }
            this.submitResetPassword(token);
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_constants_constant_form_constants__WEBPACK_IMPORTED_MODULE_1__.ConstantFormConstants), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_url_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_reset_password_service__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_4__.MixpanelService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_5__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_recaptcha_enterprise_recaptcha_enterprise_service__WEBPACK_IMPORTED_MODULE_6__.RecaptchaEnterpriseService)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 13, vars: 11, consts: [["class", "form-error login-error", 4, "ngIf"], [1, "mat-card-forms"], [1, "form-logo"], ["href", "/", 1, "form-logo-img"], ["src", "/assets/img/logo.svg", "alt", "Loyverse POS", "width", "142", "height", "38", 1, "form-logo-img"], [1, "form-title", "reset-form-title", 3, "ngClass"], [1, "form-h1"], ["class", "form-title-text", 4, "ngIf"], ["class", "form reset-form", 4, "ngIf"], ["class", "form-links", 4, "ngIf"], [1, "form-error", "login-error"], [1, "form-title-text"], [1, "form", "reset-form"], ["action", "", "name", "resetPasswordForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-field"], ["hideRequiredMarker", "", 1, "mat-full-width"], ["type", "text", "formControlName", "email", "matInput", ""], [4, "ngIf"], [1, "form-bottom", "buttons-block"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "mat-full-width", "mat-primary-submit", 3, "disabled"], ["id", "sf-submit"], [1, "form-links"], [1, "form-link-wrap"], [1, "form-link", "link", "login-link", 3, "click"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ResetPasswordComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ResetPasswordComponent_div_9_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ResetPasswordComponent_div_10_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ResetPasswordComponent_div_11_Template, 16, 11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ResetPasswordComponent_div_12_Template, 5, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formError.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c1, ctx.requestSent));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 7, "RESET_PW.HEADER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.requestSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.requestSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.requestSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.requestSent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".reset-form-title-sent[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsaUJBQUE7QUFGUiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldCB7XG4gICYtZm9ybSB7XG4gICAgJi10aXRsZSB7XG4gICAgICAmLXNlbnQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5878:
/*!*********************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordService": () => (/* binding */ ResetPasswordService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/env/environment.service */ 3832);




class ResetPasswordService {
    constructor(http, environmentService) {
        this.http = http;
        this.environmentService = environmentService;
        this.backOfficePath = this.environmentService.getPathForBackOfficeRequests();
    }
    resetPassword(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.backOfficePath + '/cabrestorepassword', data, { headers, withCredentials: true });
    }
}
ResetPasswordService.ɵfac = function ResetPasswordService_Factory(t) { return new (t || ResetPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService)); };
ResetPasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ResetPasswordService, factory: ResetPasswordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7765:
/*!***************************************************************************!*\
  !*** ./src/app/components/set-new-password/set-new-password.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetNewPasswordComponent": () => (/* binding */ SetNewPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _validators_compare_two_fields_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../validators/compare-two-fields.validator */ 4819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_url_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/url/url.service */ 7312);
/* harmony import */ var _set_new_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-new-password.service */ 2126);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 7514);














function SetNewPasswordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS." + ctx_r0.formError));
} }
function SetNewPasswordComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "SET_NEW_PW.HEADER"));
} }
function SetNewPasswordComponent_h1_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "SET_NEW_PW.HEADER_CHANGED"));
} }
function SetNewPasswordComponent_div_8_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
const _c0 = function () { return { "number": 8 }; };
function SetNewPasswordComponent_div_8_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MINIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0)));
} }
const _c1 = function () { return { "number": 40 }; };
function SetNewPasswordComponent_div_8_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MAXIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1)));
} }
function SetNewPasswordComponent_div_8_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.BLANK_FIELD"));
} }
function SetNewPasswordComponent_div_8_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MINIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0)));
} }
function SetNewPasswordComponent_div_8_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, "FORMS.ERRORS.MAXIMUM_CHARACTERS", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1)));
} }
function SetNewPasswordComponent_div_8_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "FORMS.ERRORS.PASSWORDS_NOT_MATCH"));
} }
function SetNewPasswordComponent_div_8_button_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25)(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "BUTTONS.CHANGE_PASSWORD"));
} }
function SetNewPasswordComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SetNewPasswordComponent_div_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.setNewPasswordForm.valid ? ctx_r14.submitSetNewPassword() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14)(3, "mat-form-field", 15)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetNewPasswordComponent_div_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.hideNewPassword = !ctx_r16.hideNewPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SetNewPasswordComponent_div_8_mat_error_11_Template, 3, 3, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SetNewPasswordComponent_div_8_mat_error_12_Template, 3, 5, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SetNewPasswordComponent_div_8_mat_error_13_Template, 3, 5, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 20)(15, "mat-form-field", 15)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetNewPasswordComponent_div_8_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.hideConfirmPassword = !ctx_r17.hideConfirmPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SetNewPasswordComponent_div_8_mat_error_23_Template, 3, 3, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, SetNewPasswordComponent_div_8_mat_error_24_Template, 3, 5, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, SetNewPasswordComponent_div_8_mat_error_25_Template, 3, 5, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, SetNewPasswordComponent_div_8_mat_error_26_Template, 3, 3, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, SetNewPasswordComponent_div_8_button_31_Template, 4, 3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r3.setNewPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 16, "FORMS.NEW_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r3.hideNewPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!ctx_r3.hideNewPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.setNewPasswordForm.hasError("required", "passwordNew"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.setNewPasswordForm.hasError("minlength", "passwordNew"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.setNewPasswordForm.hasError("maxlength", "passwordNew"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 18, "FORMS.CONFIRM_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r3.hideConfirmPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!ctx_r3.hideConfirmPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.setNewPasswordForm.hasError("required", "passwordConfirm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.setNewPasswordForm.hasError("minlength", "passwordConfirm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.setNewPasswordForm.hasError("maxlength", "passwordConfirm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.setNewPasswordForm.hasError("compareTwoFields", "passwordConfirm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 20, "SET_NEW_PW.HINT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.setNewPasswordSuccess);
} }
function SetNewPasswordComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetNewPasswordComponent_div_9_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.goSignInForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "FORMS.LINKS.BACK_TO_SIGN_IN"));
} }
function SetNewPasswordComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetNewPasswordComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.goSignInForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "BUTTONS.BACK_TO_SIGN_IN"));
} }
class SetNewPasswordComponent {
    constructor(urlService, setNewPasswordService, activatedRoute) {
        this.urlService = urlService;
        this.setNewPasswordService = setNewPasswordService;
        this.activatedRoute = activatedRoute;
        this.hideNewPassword = true;
        this.hideConfirmPassword = true;
        this.setNewPasswordSuccess = false;
        this.formError = '';
    }
    ngOnInit() {
        this.setNewPasswordFormGroup();
        this.confirmKey = this.activatedRoute.snapshot.paramMap.get('confirmKey');
    }
    /**
     * Set Form Group
     */
    setNewPasswordFormGroup() {
        this.setNewPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            passwordNew: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(40)
            ]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(40)
            ])
        }, (0,_validators_compare_two_fields_validator__WEBPACK_IMPORTED_MODULE_0__.compareTwoFieldsValidator)('passwordNew', 'passwordConfirm'));
    }
    /**
     * Go to Sign In page
     */
    goSignInForm() {
        this.urlService.navigateToState('login');
        return false;
    }
    /**
     * Submit form
     */
    submitSetNewPassword() {
        const data = {
            ticket: this.confirmKey,
            password: this.setNewPasswordForm.get('passwordNew').value
        };
        this.setNewPasswordService.setNewPassword(data).subscribe({
            next: (res) => {
                switch (res.result) {
                    case 'ok':
                        this.formError = '';
                        this.setNewPasswordSuccess = true;
                        break;
                    case 'ticketNotFound':
                        this.formError = 'TICKET_NOT_FOUND';
                        break;
                    case 'ticketAlreadyUsed':
                        this.formError = 'TICKET_ALREADY_USED';
                        break;
                    default:
                        this.formError = 'UNEXPECTED_ERROR';
                }
            },
            error: (error => {
                this.formError = 'UNEXPECTED_ERROR';
            })
        });
    }
}
SetNewPasswordComponent.ɵfac = function SetNewPasswordComponent_Factory(t) { return new (t || SetNewPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_url_url_service__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_set_new_password_service__WEBPACK_IMPORTED_MODULE_2__.SetNewPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
SetNewPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SetNewPasswordComponent, selectors: [["app-set-new-password"]], decls: 11, vars: 6, consts: [["class", "form-error login-error", 4, "ngIf"], [1, "mat-card-forms"], [1, "form-logo"], ["href", "/", 1, "form-logo-img"], ["src", "/assets/img/logo.svg", "alt", "Loyverse POS", "width", "142", "height", "38", 1, "form-logo-img"], [1, "form-title"], ["class", "form-h1", 4, "ngIf"], ["class", "form", 4, "ngIf"], ["class", "form-links", 4, "ngIf"], ["class", "set-password-form-back-button", 4, "ngIf"], [1, "form-error", "login-error"], [1, "form-h1"], [1, "form"], ["action", "/", "name", "setNewPasswordForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-field", "set-password-form-field"], ["hideRequiredMarker", "", 1, "mat-full-width"], ["formControlName", "passwordNew", "matInput", "", 3, "type"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Visibility Off", "type", "button", 3, "click"], ["aria-hidden", "false", "aria-label", "Visibility Off"], [4, "ngIf"], [1, "form-field", "set-password-form-field-last"], ["formControlName", "passwordConfirm", "matInput", "", 3, "type"], [1, "form-hint", "set-password-form-hint"], [1, "form-bottom", "buttons-block"], ["class", "mat-full-width mat-primary-submit", "mat-raised-button", "", "color", "primary", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "mat-full-width", "mat-primary-submit"], ["id", "sf-submit"], [1, "form-links"], [1, "form-link-wrap"], [1, "form-link", "link", "login-link", 3, "click"], [1, "set-password-form-back-button"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "mat-full-width", "mat-primary-submit", 3, "click"], ["id", "sf-submitted-back"]], template: function SetNewPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SetNewPasswordComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SetNewPasswordComponent_h1_6_Template, 3, 3, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SetNewPasswordComponent_h1_7_Template, 3, 3, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SetNewPasswordComponent_div_8_Template, 32, 22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SetNewPasswordComponent_div_9_Template, 5, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SetNewPasswordComponent_div_10_Template, 5, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formError.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.setNewPasswordSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.setNewPasswordSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.setNewPasswordSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.setNewPasswordSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.setNewPasswordSuccess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".set-password-form-hint[_ngcontent-%COMP%] {\n  margin: 2px 0 18px;\n}\n.set-password-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.set-password-form-field-last[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC1uZXctcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxrQkFBQTtBQUROO0FBR0k7RUFDRSxtQkFBQTtBQUROO0FBRU07RUFDRSxnQkFBQTtBQUFSIiwiZmlsZSI6InNldC1uZXctcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0LXBhc3N3b3JkIHtcbiAgJi1mb3JtIHtcbiAgICAmLWhpbnQge1xuICAgICAgbWFyZ2luOiAycHggMCAxOHB4O1xuICAgIH1cbiAgICAmLWZpZWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAmLWxhc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 2126:
/*!*************************************************************************!*\
  !*** ./src/app/components/set-new-password/set-new-password.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetNewPasswordService": () => (/* binding */ SetNewPasswordService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/env/environment.service */ 3832);




class SetNewPasswordService {
    constructor(http, environmentService) {
        this.http = http;
        this.environmentService = environmentService;
        this.backOfficePath = this.environmentService.getPathForBackOfficeRequests();
    }
    setNewPassword(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.backOfficePath + '/cabrestorepassword/confirm', data, { headers, withCredentials: true });
    }
}
SetNewPasswordService.ɵfac = function SetNewPasswordService_Factory(t) { return new (t || SetNewPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService)); };
SetNewPasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SetNewPasswordService, factory: SetNewPasswordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9779:
/*!***********************************************************!*\
  !*** ./src/app/constants/constant-alternate-link-info.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantAlternateLinkInfo": () => (/* binding */ ConstantAlternateLinkInfo)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Константа с информацией для аттрибутов hreflang и href тега <link rel="alternate">
 */
class ConstantAlternateLinkInfo {
    constructor() {
        this.ALTERNATE_INFO = new Map([
            ['id', 'id'],
            ['my', 'ms'],
            ['de', 'de'],
            ['en', 'en'],
            ['es', 'es'],
            ['fr', 'fr'],
            ['it', 'it'],
            ['pl', 'pl'],
            ['pt', 'pt'],
            ['ro', 'ro'],
            ['vi', 'vi'],
            ['el', 'el'],
            ['ru', 'ru'],
            ['ar', 'ar'],
            ['th', 'th'],
            ['ko', 'ko'],
            ['ja', 'ja'],
            ['zh-Hant', 'zh-tw'],
            ['zh-Hans', 'zh-cn']
        ]);
    }
}
ConstantAlternateLinkInfo.ɵfac = function ConstantAlternateLinkInfo_Factory(t) { return new (t || ConstantAlternateLinkInfo)(); };
ConstantAlternateLinkInfo.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantAlternateLinkInfo, factory: ConstantAlternateLinkInfo.ɵfac });


/***/ }),

/***/ 7167:
/*!*************************************************!*\
  !*** ./src/app/constants/constant-countries.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantCountries": () => (/* binding */ ConstantCountries)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConstantCountries {
    constructor() {
        this.COUNTRIES = [
            "af",
            "ax",
            "al",
            "dz",
            "as",
            "ad",
            "ao",
            "ai",
            "ag",
            "ar",
            "am",
            "aw",
            "au",
            "at",
            "az",
            "bs",
            "bh",
            "bd",
            "bb",
            "by",
            "be",
            "bz",
            "bj",
            "bm",
            "bt",
            "bo",
            "ba",
            "bw",
            "br",
            "io",
            "vg",
            "bn",
            "bg",
            "bf",
            "bi",
            "kh",
            "cm",
            "ca",
            "ic",
            "cv",
            "ky",
            "cf",
            "td",
            "cl",
            "cn",
            "cx",
            "cc",
            "co",
            "km",
            "cg",
            "cd",
            "ck",
            "cr",
            "ci",
            "hr",
            "cu",
            "cw",
            "cy",
            "cz",
            "dk",
            "dj",
            "dm",
            "do",
            "ec",
            "eg",
            "sv",
            "gq",
            "er",
            "ee",
            "sz",
            "et",
            "fk",
            "fo",
            "fj",
            "fi",
            "fr",
            "gf",
            "pf",
            "ga",
            "gm",
            "ge",
            "de",
            "gh",
            "gi",
            "gr",
            "gl",
            "gd",
            "gp",
            "gu",
            "gt",
            "gg",
            "gn",
            "gw",
            "gy",
            "ht",
            "hn",
            "hk",
            "hu",
            "is",
            "in",
            "id",
            "ir",
            "iq",
            "ie",
            "im",
            "il",
            "it",
            "jm",
            "jp",
            "je",
            "jo",
            "kz",
            "ke",
            "ki",
            "xk",
            "kw",
            "kg",
            "la",
            "lv",
            "lb",
            "ls",
            "lr",
            "ly",
            "li",
            "lt",
            "lu",
            "mo",
            "mg",
            "mw",
            "my",
            "mv",
            "ml",
            "mt",
            "mh",
            "mq",
            "mr",
            "mu",
            "yt",
            "mx",
            "fm",
            "md",
            "mc",
            "mn",
            "me",
            "ms",
            "ma",
            "mz",
            "mm",
            "na",
            "nr",
            "np",
            "nl",
            "nc",
            "nz",
            "ni",
            "ne",
            "ng",
            "nu",
            "nf",
            "mk",
            "mp",
            "no",
            "om",
            "pk",
            "pw",
            "ps",
            "pa",
            "pg",
            "py",
            "pe",
            "ph",
            "pn",
            "pl",
            "pt",
            "pr",
            "qa",
            "re",
            "ro",
            "ru",
            "rw",
            "ws",
            "sm",
            "st",
            "sa",
            "sn",
            "rs",
            "sc",
            "sl",
            "sg",
            "sx",
            "sk",
            "si",
            "sb",
            "so",
            "za",
            "kr",
            "ss",
            "es",
            "lk",
            "bl",
            "sh",
            "kn",
            "lc",
            "mf",
            "pm",
            "vc",
            "sd",
            "sr",
            "sj",
            "se",
            "ch",
            "sy",
            "tw",
            "tj",
            "tz",
            "th",
            "tl",
            "tg",
            "tk",
            "to",
            "tt",
            "tn",
            "tr",
            "tm",
            "tc",
            "tv",
            "um",
            "vi",
            "ug",
            "ua",
            "ae",
            "gb",
            "us",
            "uy",
            "uz",
            "vu",
            "ve",
            "vn",
            "wf",
            "eh",
            "ye",
            "zm",
            "zw"
        ];
    }
}
ConstantCountries.ɵfac = function ConstantCountries_Factory(t) { return new (t || ConstantCountries)(); };
ConstantCountries.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantCountries, factory: ConstantCountries.ɵfac });


/***/ }),

/***/ 1052:
/*!******************************************************!*\
  !*** ./src/app/constants/constant-form-constants.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantFormConstants": () => (/* binding */ ConstantFormConstants)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Constants for forms
 */
class ConstantFormConstants {
    constructor() {
        this.EMAIL_PATTERN = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
        this.EMAIL_DOMAINS_PATTERN = new RegExp('@(.)\\1+\\.\\1+$|\\.((.)|(con)|(con.)|(c0m)|(ccom)|(ciom)|(cok)|(cin)|(coom)|(c9m)|(gom)|(fom)|(ocm)|(xom)|(ckm)|(col)|(cpm)|(comcom)|(com.)|(cim)|(clm)|(com\\.te)|(vom)|(rt)|(ry)|(ri)|(ruu)|(rru)|(tu)|(messi)|(laak))$|@(((gamil\\.com)|(gmailcom)|(g\\.mail)))$');
        this.PASSWORD_PATTERN = new RegExp('^\\S+(\\s+\\S+)*$');
        this.BUSINESS_TYPE_PATTERN = new RegExp('^.*((?:[0-9]|[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]).*){2,64}$');
    }
}
ConstantFormConstants.ɵfac = function ConstantFormConstants_Factory(t) { return new (t || ConstantFormConstants)(); };
ConstantFormConstants.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantFormConstants, factory: ConstantFormConstants.ɵfac });


/***/ }),

/***/ 202:
/*!************************************************************!*\
  !*** ./src/app/constants/constant-languages-collection.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantLanguagesCollection": () => (/* binding */ ConstantLanguagesCollection)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConstantLanguagesCollection {
    constructor() {
        this.LANGUAGES = [
            {
                key: 'ind',
                value: 'Bahasa Indonesia'
            },
            {
                key: 'msa',
                value: 'Bahasa Melayu'
            },
            {
                key: 'deu',
                value: 'Deutsch'
            },
            {
                key: 'eng',
                value: 'English'
            },
            {
                key: 'spa',
                value: 'Español'
            },
            {
                key: 'fra',
                value: 'Français'
            },
            {
                key: 'ita',
                value: 'Italiano'
            },
            {
                key: 'pol',
                value: 'Polski'
            },
            {
                key: 'por',
                value: 'Portuguesa'
            },
            {
                key: 'ron',
                value: 'Romana'
            },
            {
                key: 'vie',
                value: 'Tiếng Việt'
            },
            {
                key: 'ell',
                value: 'Ελληνικά'
            },
            {
                key: 'mkd',
                value: 'Македонски'
            },
            {
                key: 'rus',
                value: 'Русский'
            },
            {
                key: 'ara',
                value: 'اللغة العربية'
            },
            {
                key: 'tha',
                value: 'ภาษาไทย'
            },
            {
                key: 'kor',
                value: '한국어'
            },
            {
                key: 'jpn',
                value: '日本語'
            },
            {
                key: 'chn',
                value: '中文 (简体)'
            },
            {
                key: 'zho',
                value: '中文 (繁體)'
            }
        ];
    }
}
ConstantLanguagesCollection.ɵfac = function ConstantLanguagesCollection_Factory(t) { return new (t || ConstantLanguagesCollection)(); };
ConstantLanguagesCollection.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantLanguagesCollection, factory: ConstantLanguagesCollection.ɵfac });


/***/ }),

/***/ 5960:
/*!*************************************************!*\
  !*** ./src/app/constants/constant-seo-pages.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantSeoPages": () => (/* binding */ ConstantSeoPages)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConstantSeoPages {
    constructor() {
        this.SEO_PAGES = new Array('login');
    }
}
ConstantSeoPages.ɵfac = function ConstantSeoPages_Factory(t) { return new (t || ConstantSeoPages)(); };
ConstantSeoPages.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantSeoPages, factory: ConstantSeoPages.ɵfac });


/***/ }),

/***/ 3110:
/*!**********************************************!*\
  !*** ./src/app/constants/languages-codes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagesCodes": () => (/* binding */ LanguagesCodes)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LanguagesCodes {
    constructor() {
        this.CODES = new Map([
            ['eng', 'en'],
            ['fra', 'fr'],
            ['ron', 'ro'],
            ['jpn', 'ja'],
            ['ell', 'el'],
            ['deu', 'de'],
            ['spa', 'es'],
            ['ind', 'id'],
            ['msa', 'ms'],
            ['pol', 'pl'],
            ['por', 'pt'],
            ['mkd', 'mk'],
            ['vie', 'vi'],
            ['rus', 'ru'],
            ['tha', 'th'],
            ['ara', 'ar'],
            ['chn', 'zh-cn'],
            ['zho', 'zh-tw'],
            ['kor', 'ko'],
            ['ita', 'it']
        ]);
    }
}
LanguagesCodes.ɵfac = function LanguagesCodes_Factory(t) { return new (t || LanguagesCodes)(); };
LanguagesCodes.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguagesCodes, factory: LanguagesCodes.ɵfac });


/***/ }),

/***/ 4036:
/*!******************************************************!*\
  !*** ./src/app/constants/site-languages.constant.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteLanguages": () => (/* binding */ SiteLanguages)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// Константа языковых кодов в env сайта, которые не соответствуют кодам в env приложения авторизации
class SiteLanguages {
    constructor() {
        this.SITELANGS = new Map([
            ['en', 'en'],
            ['fr', 'fr'],
            ['ro', 'ro'],
            ['ja', 'jp'],
            ['el', 'gr'],
            ['de', 'de'],
            ['es', 'es'],
            ['id', 'id'],
            ['it', 'it'],
            ['pl', 'pl'],
            ['pt', 'br'],
            ['vi', 'vn'],
            ['ru', 'ru'],
            ['th', 'th'],
            ['ar', 'ar'],
            ['zh-tw', 'zh'],
            ['ko', 'ko']
        ]);
    }
}
SiteLanguages.ɵfac = function SiteLanguages_Factory(t) { return new (t || SiteLanguages)(); };
SiteLanguages.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SiteLanguages, factory: SiteLanguages.ɵfac });


/***/ }),

/***/ 1941:
/*!*******************************************************************!*\
  !*** ./src/app/directives/move-to-head/move-to-head.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoveToHeadDirective": () => (/* binding */ MoveToHeadDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class MoveToHeadDirective {
    constructor(renderer, elementRef, document) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.document = document;
    }
    ngOnInit() {
        const parent = this.renderer.parentNode(this.elementRef.nativeElement);
        this.renderer.appendChild(this.document.head, this.elementRef.nativeElement);
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'appmovetohead');
        this.renderer.removeChild(this.document.body, parent);
    }
    ngOnDestroy() {
        this.renderer.removeChild(this.document.head, this.elementRef.nativeElement);
    }
}
MoveToHeadDirective.ɵfac = function MoveToHeadDirective_Factory(t) { return new (t || MoveToHeadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
MoveToHeadDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MoveToHeadDirective, selectors: [["", "appMoveToHead", ""]] });


/***/ }),

/***/ 8755:
/*!*********************************************************!*\
  !*** ./src/app/directives/phone-number/phone-number.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNumberDirective": () => (/* binding */ PhoneNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PhoneNumberDirective {
    constructor() {
        this.validationPattern = '^\\+?[0-9]*$';
    }
    // Blocks invalid keys from being typed
    onKeyDown(event) {
        // Allow functional navigation/editing keys
        const exemptKeys = [
            'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
            'ArrowLeft', 'ArrowRight', 'Home', 'End'
        ];
        const currentVal = event.target['value'];
        const isStartPosition = event.target['selectionStart'] === 0;
        let startPlus = currentVal[0] === '+';
        if (exemptKeys.includes(event.key)) {
            return;
        }
        // Allow typical shortcuts like Ctrl+A, Ctrl+C, Ctrl+V
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        // Evaluate the typed key against your regex pattern
        const regex = new RegExp(this.validationPattern);
        if (event.key === '+') {
            if (!isStartPosition) {
                event.preventDefault();
            }
            else if (startPlus) {
                event.preventDefault();
            }
            else {
                startPlus = true;
            }
        }
        if (currentVal.length >= (startPlus ? 16 : 15)) {
            event.preventDefault();
        }
        if (!regex.test(event.key)) {
            event.preventDefault();
        }
    }
    // Blocks invalid text from being pasted into the element
    onPaste(event) {
        const inputElement = event.target;
        const prevVal = inputElement['value'];
        setTimeout(() => {
            // set timeout to get input value after paste operation
            let currentVal = inputElement['value'];
            const startPlus = currentVal[0] === '+';
            const allowedLength = startPlus ? 16 : 15;
            if (currentVal.length > allowedLength) {
                currentVal = currentVal.substring(0, allowedLength);
            }
            const regex = new RegExp(this.validationPattern);
            inputElement['value'] = regex.test(currentVal) ? currentVal : prevVal;
        }, 0);
    }
}
PhoneNumberDirective.ɵfac = function PhoneNumberDirective_Factory(t) { return new (t || PhoneNumberDirective)(); };
PhoneNumberDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PhoneNumberDirective, selectors: [["", "appPhoneNumber", ""]], hostBindings: function PhoneNumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PhoneNumberDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function PhoneNumberDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); });
    } } });


/***/ }),

/***/ 2413:
/*!****************************!*\
  !*** ./src/app/matcher.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchUrl": () => (/* binding */ matchUrl)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _constants_languages_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/languages-codes */ 3110);


function matchUrl(url) {
    const languagesCodes = new _constants_languages_codes__WEBPACK_IMPORTED_MODULE_0__.LanguagesCodes();
    const languagesTwoLetters = Array.from(languagesCodes.CODES.values());
    // TODO: сделать автоматическое получение списка всех URL
    const urls = new Array('login', 'signup', 'resetpswd', 'oauth/consent', 'oauth/subscribeintegrations', 'oauth/renewintegrations', 'oauth/storenotonboarded', 'oauth/storeunsupportedcountry', 'oauth/storeinactive');
    // если в url два параметра, проверяем, есть ли такой язык; если нет, подставляем английский
    // также проверяем, есть ли такая страница; если нет, подставляем страницу логина
    if (url.length === 2) {
        if (languagesTwoLetters.indexOf(url[0].path) === -1) {
            url[0].path = 'en';
        }
        if (urls.indexOf(url[1].path) === -1) {
            url[1].path = 'login';
        }
    }
    // если в url один параметр, берем язык из браузера; если такой страницы нет, перенаправляем на страницу логина
    else if (url.length === 1) {
        const langFromBrowserLocale = window.navigator.languages && window.navigator.languages.length ? window.navigator.languages[0].split('-')[0] : window.navigator.language;
        const lang = languagesTwoLetters.indexOf(langFromBrowserLocale) !== -1 ? langFromBrowserLocale : 'en';
        const langSegment = new _angular_router__WEBPACK_IMPORTED_MODULE_1__.UrlSegment(lang, {});
        url.splice(0, 0, langSegment);
        if (urls.indexOf(url[1].path) === -1) {
            url[1].path = 'login';
        }
    }
    // если в url три и больше параметра, сразу перенаправляем на страницу логина
    else {
        url.splice(0, url.length);
        url[0] = new _angular_router__WEBPACK_IMPORTED_MODULE_1__.UrlSegment('en', {});
        url[1] = new _angular_router__WEBPACK_IMPORTED_MODULE_1__.UrlSegment('login', {});
    }
    return ({ consumed: url });
}


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);








const MaterialComponents = [
    _angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInputModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelectModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[MaterialComponents], _angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule] }); })();


/***/ }),

/***/ 9594:
/*!*************************************************!*\
  !*** ./src/app/pipes/safe-url/safe-url.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeUrlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });


/***/ }),

/***/ 4394:
/*!*********************************************************************!*\
  !*** ./src/app/resolvers/cabinet-logged/cabinet-logged.resolver.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CabinetLoggedResolver": () => (/* binding */ CabinetLoggedResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_common_requests_common_requests_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/common-requests/common-requests.service */ 1558);



class CabinetLoggedResolver {
    constructor(commonRequestsService) {
        this.commonRequestsService = commonRequestsService;
    }
    resolve(route, state) {
        return this.commonRequestsService.isCabinetLogged().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ status: false, blockedCountries: [] });
        }));
    }
}
CabinetLoggedResolver.ɵfac = function CabinetLoggedResolver_Factory(t) { return new (t || CabinetLoggedResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_common_requests_common_requests_service__WEBPACK_IMPORTED_MODULE_0__.CommonRequestsService)); };
CabinetLoggedResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CabinetLoggedResolver, factory: CabinetLoggedResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4139:
/*!*******************************!*\
  !*** ./src/app/scope.enum.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scope": () => (/* binding */ Scope)
/* harmony export */ });
var Scope;
(function (Scope) {
    Scope["ITEMS_READ"] = "ITEMS_READ";
    Scope["ITEMS_WRITE"] = "ITEMS_WRITE";
    Scope["CUSTOMERS_READ"] = "CUSTOMERS_READ";
    Scope["CUSTOMERS_WRITE"] = "CUSTOMERS_WRITE";
    Scope["EMPLOYEES_READ"] = "EMPLOYEES_READ";
    Scope["INVENTORY_READ"] = "INVENTORY_READ";
    Scope["INVENTORY_WRITE"] = "INVENTORY_WRITE";
    Scope["POS_DEVICES_READ"] = "POS_DEVICES_READ";
    Scope["POS_DEVICES_WRITE"] = "POS_DEVICES_WRITE";
    Scope["RECEIPTS_READ"] = "RECEIPTS_READ";
    Scope["RECEIPTS_WRITE"] = "RECEIPTS_WRITE";
    Scope["SHIFTS_READ"] = "SHIFTS_READ";
    Scope["STORES_READ"] = "STORES_READ";
    Scope["PAYMENT_TYPES_READ"] = "PAYMENT_TYPES_READ";
    Scope["TAXES_READ"] = "TAXES_READ";
    Scope["TAXES_WRITE"] = "TAXES_WRITE";
    Scope["MERCHANT_READ"] = "MERCHANT_READ";
    Scope["SUPPLIERS_READ"] = "SUPPLIERS_READ";
    Scope["SUPPLIERS_WRITE"] = "SUPPLIERS_WRITE";
    Scope["OPENID"] = "OPENID";
})(Scope || (Scope = {}));


/***/ }),

/***/ 3409:
/*!*****************************************************!*\
  !*** ./src/app/services/aws-waf/aws-waf.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsWafService": () => (/* binding */ AwsWafService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/environment.service */ 3832);


class AwsWafService {
    constructor(environmentService) {
        this.environmentService = environmentService;
        this.integrationUrl = this.environmentService.getAwsWafIntegrationUrl();
        this.enabled = !!this.integrationUrl && !this.environmentService.isAutomationEnabled();
        this.sdkLoad = null;
    }
    loadSdk() {
        if (!this.enabled) {
            return Promise.resolve();
        }
        if (this.sdkLoad) {
            return this.sdkLoad;
        }
        this.sdkLoad = new Promise((resolve) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.integrationUrl.replace(/\/+$/, '') + '/challenge.js';
            script.defer = true;
            script.onload = () => resolve();
            script.onerror = () => resolve();
            document.head.appendChild(script);
        });
        return this.sdkLoad;
    }
    isEnabled() {
        return this.enabled;
    }
    getToken() {
        if (!this.enabled) {
            return Promise.resolve('');
        }
        const token = this.loadSdk()
            .then(() => (window.AwsWafIntegration ? window.AwsWafIntegration.getToken() : ''))
            .catch(() => '');
        const timeout = new Promise((resolve) => setTimeout(() => resolve(''), 5000));
        return Promise.race([token, timeout]);
    }
}
AwsWafService.ɵfac = function AwsWafService_Factory(t) { return new (t || AwsWafService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService)); };
AwsWafService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AwsWafService, factory: AwsWafService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1558:
/*!*********************************************************************!*\
  !*** ./src/app/services/common-requests/common-requests.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonRequestsService": () => (/* binding */ CommonRequestsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/environment.service */ 3832);



class CommonRequestsService {
    constructor(http, environmentService) {
        this.http = http;
        this.environmentService = environmentService;
        this.backOfficePath = this.environmentService.getPathForBackOfficeRequests();
    }
    /**
     * Проверка, залогинен ли пользователь в бэк-офис
     */
    isCabinetLogged() {
        return this.http.get(this.backOfficePath + '/iscabinetlogged', { withCredentials: true });
    }
}
CommonRequestsService.ɵfac = function CommonRequestsService_Factory(t) { return new (t || CommonRequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService)); };
CommonRequestsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonRequestsService, factory: CommonRequestsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8939:
/*!***************************************************!*\
  !*** ./src/app/services/config/config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService),
/* harmony export */   "configFactory": () => (/* binding */ configFactory)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class ConfigService {
    constructor(http) {
        this.http = http;
    }
    loadConfig() {
        const time = new Date().getTime();
        const configObservable = this.http.get('/assets/env.json?' + time);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(configObservable).then((config) => {
            this.config = Object.assign(Object.assign({}, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(config, 'enableAutomation')), { enableAutomation: config.enableAutomation === 'true' });
            console.table(this.config);
        });
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
const configFactory = (configService) => {
    return () => configService.loadConfig();
};


/***/ }),

/***/ 3832:
/*!*****************************************************!*\
  !*** ./src/app/services/env/environment.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvironmentService": () => (/* binding */ EnvironmentService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.service */ 8939);


/**
 * Service containing methods that return data depending on the environment
 */
class EnvironmentService {
    constructor(configService) {
        this.config = configService.config;
    }
    /**
     * @return base URL of the authorization application
     */
    getBaseUrl() {
        return this.config.baseUrl;
    }
    /**
     * @return site URL
     */
    getSiteUrl() {
        return this.config.siteUrl;
    }
    /**
     * @return back office URL
     */
    getBackOfficeUrl() {
        return this.config.backOfficeUrl;
    }
    /**
     * @return developer cabinet URL
     */
    getDeveloperUrl() {
        return this.config.developerUrl;
    }
    /**
     * @return whether this is the production environment
     */
    isProduction() {
        return this.config.production;
    }
    /**
     * @return URL for OAuth requests
     */
    getPathForOauthRequests() {
        return this.config.apiUrl + '/oauth';
    }
    /**
     * @return URL for back office requests
     */
    getPathForBackOfficeRequests() {
        return this.getBackOfficeUrl() + '/data';
    }
    /**
     * @return URL for developer cabinet requests
     */
    getPathForDeveloperRequests() {
        return this.getDeveloperUrl() + '/data/devcab';
    }
    /**
     * @return OAuth authorization URL
     */
    getAuthorizeUrl() {
        return this.getPathForOauthRequests() + '/authorize';
    }
    /**
     * @return path to the assets folder
     */
    getAssetsUrl() {
        return this.config.assetsUrl;
    }
    /**
     * @return Mixpanel API token
     */
    getMixpanelToken() {
        return this.config.mixpanelToken;
    }
    getHardwareStoreUrl() {
        return this.config.hardwareStoreUrl;
    }
    getBackOfficeOAuthAuthorizeUrl(returnPath) {
        const redirectUri = encodeURIComponent(this.config.backofficeOAuthRedirectUri);
        const state = encodeURIComponent(returnPath);
        return this.config.apiUrl
            + '/oauth/authorize?client_id=loyverse-backoffice'
            + '&redirect_uri=' + redirectUri
            + '&response_type=code'
            + '&scope=openid+email'
            + '&state=' + state;
    }
    /**
     * @return AWS WAF integration base URL (empty string means integration is disabled)
     */
    getAwsWafIntegrationUrl() {
        return this.config.awsWafIntegrationUrl || '';
    }
    /**
     * @return reCAPTCHA Enterprise site key (empty string means reCAPTCHA is disabled)
     */
    getRecaptchaEnterpriseSiteKey() {
        return this.config.recaptchaEnterpriseSiteKey || '';
    }
    /**
     * @return whether automation is enabled (true on dev to let Selenium bypass bot protection)
     */
    isAutomationEnabled() {
        return this.config.enableAutomation;
    }
}
EnvironmentService.ɵfac = function EnvironmentService_Factory(t) { return new (t || EnvironmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
EnvironmentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EnvironmentService, factory: EnvironmentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7635:
/*!*****************************************************************!*\
  !*** ./src/app/services/local-storage/local-storage.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Обертка для методов Local Storage
 */
class LocalStorageService {
    constructor() { }
    setLocalStorageItem(key, value) {
        localStorage.setItem(key, value);
    }
    getLocalStorageItem(key) {
        return localStorage.getItem(key);
    }
    removeLocalStorageItem(key) {
        localStorage.removeItem(key);
    }
    clearLocalStorage() {
        localStorage.clear();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2954:
/*!*******************************************************!*\
  !*** ./src/app/services/mixpanel/mixpanel.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MixpanelService": () => (/* binding */ MixpanelService)
/* harmony export */ });
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mixpanel-browser */ 5069);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env/environment.service */ 3832);



class MixpanelService {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    /**
     * Initialize mixpanel.
     */
    init() {
        const token = this.environmentService.getMixpanelToken();
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0___default().init(token);
    }
    /**
     * Identify user
     */
    identify(userToken) {
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0___default().identify(userToken);
    }
    /**
     * Push new action to mixpanel.
     */
    track(id, action = {}) {
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0___default().track(id, action);
    }
}
MixpanelService.ɵfac = function MixpanelService_Factory(t) { return new (t || MixpanelService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService)); };
MixpanelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MixpanelService, factory: MixpanelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6153:
/*!*******************************************************************************!*\
  !*** ./src/app/services/recaptcha-enterprise/recaptcha-enterprise.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecaptchaEnterpriseService": () => (/* binding */ RecaptchaEnterpriseService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/environment.service */ 3832);


class RecaptchaEnterpriseService {
    constructor(environmentService) {
        this.environmentService = environmentService;
        this.siteKey = this.environmentService.getRecaptchaEnterpriseSiteKey();
        this.enabled = !!this.siteKey && !this.environmentService.isAutomationEnabled();
        this.sdkLoad = null;
    }
    isEnabled() {
        return this.enabled;
    }
    loadSdk() {
        if (!this.enabled) {
            return Promise.resolve();
        }
        if (this.sdkLoad) {
            return this.sdkLoad;
        }
        this.sdkLoad = new Promise((resolve) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.google.com/recaptcha/enterprise.js?render=' + this.siteKey;
            script.defer = true;
            script.onload = () => resolve();
            script.onerror = () => resolve();
            document.head.appendChild(script);
        });
        return this.sdkLoad;
    }
    execute(action) {
        if (!this.enabled) {
            return Promise.resolve('');
        }
        const token = this.loadSdk()
            .then(() => this.executeWhenReady(action))
            .catch(() => '');
        const timeout = new Promise((resolve) => setTimeout(() => resolve(''), 5000));
        return Promise.race([token, timeout]);
    }
    executeWhenReady(action) {
        const grecaptcha = window.grecaptcha;
        if (!grecaptcha || !grecaptcha.enterprise) {
            return Promise.resolve('');
        }
        return new Promise((resolve, reject) => {
            grecaptcha.enterprise.ready(() => {
                grecaptcha.enterprise.execute(this.siteKey, { action }).then(resolve, reject);
            });
        });
    }
}
RecaptchaEnterpriseService.ɵfac = function RecaptchaEnterpriseService_Factory(t) { return new (t || RecaptchaEnterpriseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_0__.EnvironmentService)); };
RecaptchaEnterpriseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecaptchaEnterpriseService, factory: RecaptchaEnterpriseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6285:
/*!***************************************************!*\
  !*** ./src/app/services/sentry/sentry.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SentryService": () => (/* binding */ SentryService)
/* harmony export */ });
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/angular */ 5395);
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/angular */ 2604);
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/angular */ 594);
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/tracing */ 3298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env/environment.service */ 3832);




class SentryService {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    init() {
        const isProduction = this.environmentService.isProduction();
        let dsnLink;
        if (isProduction) {
            dsnLink = 'https://cc72108f2f254e2aa6f007b83c344f81@o164757.ingest.sentry.io/5675793';
        }
        else {
            dsnLink = 'https://7856eb0a44184ca0a8e7e7a45d259f35@o164757.ingest.sentry.io/5675796';
        }
        _sentry_angular__WEBPACK_IMPORTED_MODULE_2__.init({
            dsn: dsnLink,
            integrations: [
                // Registers and configures the Tracing integration,
                // which automatically instruments your application to monitor its
                // performance, including custom Angular routing instrumentation
                new _sentry_tracing__WEBPACK_IMPORTED_MODULE_0__.Integrations.BrowserTracing({
                    routingInstrumentation: _sentry_angular__WEBPACK_IMPORTED_MODULE_3__.routingInstrumentation
                }),
            ],
            tracesSampleRate: 0.0,
            ignoreErrors: [
                'Non-Error exception captured',
                'Non-Error promise rejection captured'
            ]
        });
    }
    setUser(user) {
        _sentry_angular__WEBPACK_IMPORTED_MODULE_4__.setUser(user);
    }
    captureMessage(message) {
        _sentry_angular__WEBPACK_IMPORTED_MODULE_4__.captureMessage(message);
    }
    captureException(exception) {
        _sentry_angular__WEBPACK_IMPORTED_MODULE_4__.captureException(exception);
    }
}
SentryService.ɵfac = function SentryService_Factory(t) { return new (t || SentryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_env_environment_service__WEBPACK_IMPORTED_MODULE_1__.EnvironmentService)); };
SentryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SentryService, factory: SentryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5163:
/*!*********************************************!*\
  !*** ./src/app/services/seo/seo.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEOService": () => (/* binding */ SEOService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);



/**
 * Методы для SEO
 */
class SEOService {
    constructor(title, meta, document) {
        this.title = title;
        this.meta = meta;
        this.document = document;
    }
    setTitle(title) {
        this.title.setTitle(title);
    }
    setDescription(description) {
        this.meta.updateTag({ name: 'description', content: description });
    }
    setCanonical(canonical) {
        const link = this.getCanonical();
        link.href = canonical;
    }
    getTitle() {
        return this.title.getTitle();
    }
    getDescription() {
        return this.meta.getTag('name=\'description\'');
    }
    getCanonical() {
        return this.document.querySelector('#canonicalLink');
    }
    getRobots() {
        return this.meta.getTag('name=\'robots\'');
    }
    addRobots() {
        this.meta.addTag({ name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet' });
    }
    removeRobots() {
        this.meta.removeTag('name=\'robots\'');
    }
}
SEOService.ɵfac = function SEOService_Factory(t) { return new (t || SEOService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
SEOService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SEOService, factory: SEOService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7974:
/*!*****************************************************************!*\
  !*** ./src/app/services/site-redirect/site-redirect.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteRedirectService": () => (/* binding */ SiteRedirectService)
/* harmony export */ });
/* harmony import */ var _constants_site_languages_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/site-languages.constant */ 4036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class SiteRedirectService {
    constructor() { }
    /**
     * @return относительная ссылка на сайт с языковым кодом в зависимости от языка в приложении авторизации
     */
    getPathForSite(lang) {
        const siteLanguages = new _constants_site_languages_constant__WEBPACK_IMPORTED_MODULE_0__.SiteLanguages();
        let langForSite = '';
        // если выбран английский или какой-то из языков, которых нет на сайте, возвращаем ссылку на английскую версию сайта без языкового вода
        if (lang === 'en' || Array.from(siteLanguages.SITELANGS.keys()).indexOf(lang) === -1) {
            return '';
        }
        else {
            const siteSpecificLanguages = this.getSiteSpecificLanguages();
            if (Array.from(siteSpecificLanguages.keys()).indexOf(lang) !== -1) {
                langForSite = siteSpecificLanguages.get(lang);
            }
            else {
                langForSite = lang;
            }
        }
        return '/' + langForSite;
    }
    /**
     * @return список языков сайта, коды которых отличаются от кодов, используемых в приложении авторизации
     */
    getSiteSpecificLanguages() {
        const siteLanguages = new _constants_site_languages_constant__WEBPACK_IMPORTED_MODULE_0__.SiteLanguages();
        const siteSpecificLanguages = new Map();
        for (const key of siteLanguages.SITELANGS.keys()) {
            if (key !== siteLanguages.SITELANGS.get(key)) {
                siteSpecificLanguages.set(key, siteLanguages.SITELANGS.get(key));
            }
        }
        return siteSpecificLanguages;
    }
}
SiteRedirectService.ɵfac = function SiteRedirectService_Factory(t) { return new (t || SiteRedirectService)(); };
SiteRedirectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SiteRedirectService, factory: SiteRedirectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7312:
/*!*********************************************!*\
  !*** ./src/app/services/url/url.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var _scope_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope.enum */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _constants_languages_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/languages-codes */ 3110);





/**
 * Методы, связанные с получением данных из URL
 */
class UrlService {
    constructor(route, router, translate, languagesCollection) {
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.languagesCollection = languagesCollection;
    }
    /**
     * @return параметры запроса
     */
    getQueryParams() {
        return this.route.snapshot.queryParamMap;
    }
    /**
     * @return fragment after hash
     */
    getUrlFragment() {
        return this.route.snapshot.fragment;
    }
    /**
     * @param scopeFromUri параметр Scope из URL
     * @return массив с правами из Scope
     */
    getScopeParams(scopeFromUri) {
        const scope = decodeURIComponent(scopeFromUri).split(' ');
        const scopeParams = [];
        scope.forEach(param => {
            if (_scope_enum__WEBPACK_IMPORTED_MODULE_0__.Scope[param] != null) {
                if (!((_scope_enum__WEBPACK_IMPORTED_MODULE_0__.Scope[param] === 'MERCHANT_READ' && scopeParams.indexOf('OPENID') > -1)
                    || (_scope_enum__WEBPACK_IMPORTED_MODULE_0__.Scope[param] === 'OPENID' && scopeParams.indexOf('MERCHANT_READ') > -1))) {
                    scopeParams.push(_scope_enum__WEBPACK_IMPORTED_MODULE_0__.Scope[param]);
                }
            }
        });
        return scopeParams;
    }
    /**
     * Превращает ParamMap в обычный Map
     * @param params ParamsMap
     * @return Map
     */
    paramsToMap(params) {
        const paramMap = new Map();
        params.keys.forEach(item => paramMap.set(item, params.get(item)));
        return paramMap;
    }
    /**
     * Возвращает текущий url страницы в виде строки (без языкового параметра)
     * @param activatedRoute ActivatedRoute
     * @return string url страницы
     */
    getUrlAsString(activatedRoute) {
        const paths = new Array();
        let child = activatedRoute.firstChild;
        let count = 0;
        while (child) {
            const uriSnapshot = child.snapshot.url;
            uriSnapshot.forEach((segment, index) => {
                if (!(count === 0 && index === 0)) {
                    paths.push(segment.path);
                }
            });
            child = child.firstChild;
            count++;
        }
        return paths.join('/');
    }
    /**
     * @return url for current lang
     */
    getLangForUrl() {
        const lang = this.translate.getDefaultLang();
        const langCodes = this.languagesCollection.CODES;
        return langCodes.get(lang) ? langCodes.get(lang) : 'en';
    }
    /**
     * Navigates to state by URL
     * @param url - state URL
     */
    navigateToState(url) {
        const lang = this.getLangForUrl();
        this.router.navigate([lang, url]);
    }
}
UrlService.ɵfac = function UrlService_Factory(t) { return new (t || UrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_constants_languages_codes__WEBPACK_IMPORTED_MODULE_1__.LanguagesCodes)); };
UrlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UrlService, factory: UrlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5414:
/*!********************************************************!*\
  !*** ./src/app/validators/blocked-values.validator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockedValuesValidator": () => (/* binding */ blockedValuesValidator)
/* harmony export */ });
/**
 * Validator checks if array contains value, if so, value is invalid
 * @param blocked - blocked values array
 */
function blockedValuesValidator(blocked) {
    return (control) => {
        const valueBlocked = blocked.includes(control.value);
        return valueBlocked ? { valueBlocked: { value: control.value } } : null;
    };
}


/***/ }),

/***/ 5964:
/*!************************************************!*\
  !*** ./src/app/validators/brands.validator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "businessNameBrandValidator": () => (/* binding */ businessNameBrandValidator),
/* harmony export */   "emailBrandValidator": () => (/* binding */ emailBrandValidator)
/* harmony export */ });
const emailBrandValidator = () => ({ value: input }) => {
    const domainPart = input.split("@")[1];
    if (domainPart && domainPart.toLowerCase() === "loyverse.com") {
        return null;
    }
    else {
        return /loyverse/i.test(domainPart)
            ? { brandName: true }
            : null;
    }
};
const businessNameBrandValidator = () => ({ value: input }) => /loyverse/i.test(input) ? { brandName: true } : null;


/***/ }),

/***/ 4819:
/*!************************************************************!*\
  !*** ./src/app/validators/compare-two-fields.validator.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareTwoFieldsValidator": () => (/* binding */ compareTwoFieldsValidator)
/* harmony export */ });
function compareTwoFieldsValidator(value1, value2) {
    return (control) => {
        var _a;
        const control1 = control.get(value1);
        const control2 = control.get(value2);
        const valueToReturn = control1.value !== control2.value ? { compareTwoFields: true } : null;
        if (valueToReturn && !control2.errors) {
            control2.setErrors({ compareTwoFields: control2.value });
        }
        if (!valueToReturn && ((_a = control2.errors) === null || _a === void 0 ? void 0 : _a.compareTwoFields)) {
            control2.setErrors(null);
        }
        return valueToReturn;
    };
}


/***/ }),

/***/ 199:
/*!******************************************************!*\
  !*** ./src/app/validators/email-except-validator.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailExceptValidator": () => (/* binding */ emailExceptValidator)
/* harmony export */ });
/**
 * Validator checks specific values for registration email
 */
function emailExceptValidator() {
    return (control) => {
        const valueTrimmed = control.value.trim();
        const isInvalid = /@.*test.*$/.test(valueTrimmed) && !/@ritest.es$/.test(valueTrimmed);
        return isInvalid ? { except: true } : null;
    };
}


/***/ }),

/***/ 3066:
/*!*************************************************!*\
  !*** ./src/app/validators/noemoji.validator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noemojiValidator": () => (/* binding */ noemojiValidator)
/* harmony export */ });
/**
 * Validator checks if input contains emoji, if so, input is invalid
 */
function noemojiValidator() {
    return (control) => {
        const emojiRegex = /[\u{1F600}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}]/u;
        const hasEmoji = emojiRegex.test(control.value);
        return hasEmoji ? { noEmoji: true } : null;
    };
}


/***/ }),

/***/ 9955:
/*!*************************************************!*\
  !*** ./src/app/validators/trimmed.validator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trimmedValidator": () => (/* binding */ trimmedValidator)
/* harmony export */ });
/**
 * Validation of trimmed value by regex
 * @param regExp - regular expression
 * @param notMatch - true if value is invalid when it doesn't match regExp, false if it's invalid when matches regExp
 */
function trimmedValidator(regExp, notMatch) {
    return (control) => {
        const valueTrimmed = control.value.trim();
        const valueMatches = regExp.test(valueTrimmed);
        const invalid = valueTrimmed.length > 0 && (notMatch ? !valueMatches : valueMatches);
        return invalid ? { trimmed: { value: control.value } } : null;
    };
}


/***/ }),

/***/ 7645:
/*!***********************************************!*\
  !*** ./src/environments/environment.stage.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    apiUrl: 'https://stageapi.loyverse.com',
    baseUrl: 'https://stage.loyverse.com/login/',
    siteUrl: 'https://stage.loyverse.com',
    backOfficeUrl: 'https://stager.loyverse.com',
    developerUrl: 'https://stagedeveloper.loyverse.com',
    assetsUrl: '/login/assets'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment_stage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment.stage */ 7645);




if (_environments_environment_stage__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map