/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "./app.component";
import * as i3 from "./messages/messages.component.ngfactory";
import * as i4 from "./auth/authentication.component.ngfactory";
import * as i5 from "./auth/signup.component.ngfactory";
import * as i6 from "./auth/signin.component.ngfactory";
import * as i7 from "./auth/logout.component.ngfactory";
import * as i8 from "./app.component.ngfactory";
import * as i9 from "@angular/common";
import * as i10 from "@angular/platform-browser";
import * as i11 from "@angular/forms";
import * as i12 from "@angular/http";
import * as i13 from "@angular/router";
import * as i14 from "./errors/error.service";
import * as i15 from "./auth/auth.service";
import * as i16 from "./messages/messages.component";
import * as i17 from "./auth/authentication.component";
import * as i18 from "./auth/signup.component";
import * as i19 from "./auth/signin.component";
import * as i20 from "./auth/logout.component";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.MessagesComponentNgFactory, i4.AuthenticationComponentNgFactory, i5.SignupComponentNgFactory, i6.SigninComponentNgFactory, i7.LogoutComponentNgFactory, i8.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵq, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i9.NgLocalization, i9.NgLocaleLocalization, [i0.LOCALE_ID, [2, i9.ɵa]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵi, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵn, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵo, []), i0.ɵmpd(4608, i10.DomSanitizer, i10.ɵe, [i9.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i10.DomSanitizer]), i0.ɵmpd(4608, i10.HAMMER_GESTURE_CONFIG, i10.HammerGestureConfig, []), i0.ɵmpd(5120, i10.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i10.ɵDomEventsPlugin(p0_0, p0_1), new i10.ɵKeyEventsPlugin(p1_0), new i10.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i9.DOCUMENT, i0.NgZone, i9.DOCUMENT, i9.DOCUMENT, i10.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i10.EventManager, i10.EventManager, [i10.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i10.ɵDomSharedStylesHost, i10.ɵDomSharedStylesHost, [i9.DOCUMENT]), i0.ɵmpd(4608, i10.ɵDomRendererFactory2, i10.ɵDomRendererFactory2, [i10.EventManager, i10.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i10.ɵDomRendererFactory2]), i0.ɵmpd(6144, i10.ɵSharedStylesHost, null, [i10.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i10.Meta, i10.Meta, [i9.DOCUMENT]), i0.ɵmpd(4608, i10.Title, i10.Title, [i9.DOCUMENT]), i0.ɵmpd(4608, i11.ɵi, i11.ɵi, []), i0.ɵmpd(4608, i11.FormBuilder, i11.FormBuilder, []), i0.ɵmpd(4608, i12.BrowserXhr, i12.BrowserXhr, []), i0.ɵmpd(4608, i12.ResponseOptions, i12.BaseResponseOptions, []), i0.ɵmpd(5120, i12.XSRFStrategy, i12.ɵa, []), i0.ɵmpd(4608, i12.XHRBackend, i12.XHRBackend, [i12.BrowserXhr, i12.ResponseOptions, i12.XSRFStrategy]), i0.ɵmpd(4608, i12.RequestOptions, i12.BaseRequestOptions, []), i0.ɵmpd(5120, i12.Http, i12.ɵb, [i12.XHRBackend, i12.RequestOptions]), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵf, [i13.Router]), i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵi, [i13.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i14.ErrorService, i14.ErrorService, []), i0.ɵmpd(4608, i15.AuthService, i15.AuthService, [i12.Http, i14.ErrorService]), i0.ɵmpd(512, i9.CommonModule, i9.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i10.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i13.ɵb()]; }, []), i0.ɵmpd(512, i13.ɵg, i13.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0) { return [i10.ɵh(p0_0), i13.ɵh(p1_0)]; }, [[2, i0.NgProbeToken], i13.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i10.BrowserModule, i10.BrowserModule, [[3, i10.BrowserModule]]), i0.ɵmpd(512, i11.ɵba, i11.ɵba, []), i0.ɵmpd(512, i11.FormsModule, i11.FormsModule, []), i0.ɵmpd(1024, i13.ɵa, i13.ɵd, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i9.LocationStrategy, i13.ɵc, [i9.PlatformLocation, [2, i9.APP_BASE_HREF], i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i9.Location, i9.Location, [i9.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i13.ROUTES, function () { return [[{ path: "", redirectTo: "/messages", pathMatch: "full" }, { path: "messages", component: i16.MessagesComponent }, { path: "auth", component: i17.AuthenticationComponent, children: [{ path: "", redirectTo: "signup", pathMatch: "full" }, { path: "signup", component: i18.SignupComponent }, { path: "signin", component: i19.SigninComponent }, { path: "logout", component: i20.LogoutComponent }] }]]; }, []), i0.ɵmpd(1024, i13.Router, i13.ɵe, [i0.ApplicationRef, i13.UrlSerializer, i13.ChildrenOutletContexts, i9.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy], [2, i13.RouteReuseStrategy]]), i0.ɵmpd(512, i13.RouterModule, i13.RouterModule, [[2, i13.ɵa], [2, i13.Router]]), i0.ɵmpd(512, i11.ReactiveFormsModule, i11.ReactiveFormsModule, []), i0.ɵmpd(512, i12.HttpModule, i12.HttpModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
