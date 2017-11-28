(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('buildmotion-foundation'), require('buildmotion-logging'), require('@angular/router'), require('rxjs/add/operator/filter'), require('angular-rules-engine')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'buildmotion-foundation', 'buildmotion-logging', '@angular/router', 'rxjs/add/operator/filter', 'angular-rules-engine'], factory) :
	(factory((global.buildmotionCore = {}),global.ng.core,global.ng.common,global.buildmotionFoundation,global.buildmotionLogging,global.ng.router,null,global.angularRulesEngine));
}(this, (function (exports,core,common,buildmotionFoundation,buildmotionLogging,router,filter,angularRulesEngine) { 'use strict';

/**
 * Use to provide the alert type information for the AlertNotification and AlertComponent.
 */
var AlertTypes = (function () {
    function AlertTypes() {
    }
    AlertTypes.Information = 'alert-info';
    AlertTypes.Warning = 'alert-warning';
    AlertTypes.Danger = 'alert-danger';
    AlertTypes.Success = 'alert-success';
    return AlertTypes;
}());

var AlertNotification = (function () {
    function AlertNotification(header, title, messages, type) {
        this.type = AlertTypes.Information;
        this.messages = new Array();
        this.showAlert = false;
        if (type) {
            this.type = type;
        }
        this.header = header;
        this.title = title;
        if (messages) {
            this.messages = messages;
        }
        if (this.header && this.title) {
            this.showAlert = true; // used to trigger the display of the notification.
        }
    }
    return AlertNotification;
}());

var AlertComponent = (function () {
    function AlertComponent() {
        this.alertNotification = new AlertNotification('', '');
        // @Input() set showAlert(showAlert: boolean){this.hasMessage = showAlert || false; };
        this.hasMessage = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'buildmotion-alert',
                    template: "<div *ngIf=\"hasMessage\">\n  <div class=\"alert {{alertNotification.type}} fade in\">\n    <!--<a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>-->\n    <strong>{{alertNotification.header}}</strong> :: {{alertNotification.title}}\n    <ul>\n      <li *ngFor=\"let message of alertNotification.messages\">{{message}}</li>\n    </ul>\n  </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        "alertNotification": [{ type: core.Input },],
        "hasMessage": [{ type: core.Input },],
    };
    return AlertComponent;
}());

var BuildMotionCoreModule = (function () {
    function BuildMotionCoreModule() {
    }
    BuildMotionCoreModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        buildmotionFoundation.BuildMotionFoundationModule,
                        buildmotionLogging.BuildMotionLoggingModule
                    ],
                    declarations: [
                        AlertComponent
                    ],
                    exports: [
                        AlertComponent
                    ],
                    schemas: [core.NO_ERRORS_SCHEMA],
                },] },
    ];
    /** @nocollapse */
    BuildMotionCoreModule.ctorParameters = function () { return []; };
    return BuildMotionCoreModule;
}());

var ComponentBase = (function () {
    function ComponentBase(componentName, loggingService, router$$1) {
        this.loggingService = loggingService;
        this.router = router$$1;
        this.componentName = componentName;
        this.alertNotification = new AlertNotification('', '');
        var e = this.router.events.filter(function (event) { return event instanceof router.NavigationEnd; });
        if (e && e instanceof router.NavigationEnd) {
            this.googleAnalyticsPageview(e);
        }
    }
    ComponentBase.prototype.googleAnalyticsPageview = function (event) {
        if (event && event.urlAfterRedirects) {
            this.loggingService.log(this.componentName, buildmotionLogging.Severity.Information, "Preparing to set [Google Analytics] page view for [" + event.urlAfterRedirects + "].");
            window.ga('set', 'page', event.urlAfterRedirects);
            window.ga('send', 'pageview');
        }
        else {
            this.loggingService.log(this.componentName, buildmotionLogging.Severity.Warning, "Failed to set [Google Analytics] page view.");
        }
    };
    /**
     * Use to create a simple [ErrorResponse] with the specified message.
     * @param message The message to display to the user.
     */
    /**
         * Use to create a simple [ErrorResponse] with the specified message.
         * @param message The message to display to the user.
         */
    ComponentBase.prototype.createErrorResponse = /**
         * Use to create a simple [ErrorResponse] with the specified message.
         * @param message The message to display to the user.
         */
    function (message) {
        this.loggingService.log(this.componentName, buildmotionLogging.Severity.Information, "Preparing to create error response for component.");
        var response = new buildmotionFoundation.ErrorResponse();
        response.Message = message;
        return response;
    };
    /**
     * Use to handle service errors. These are error response [See: ErrorResponse] from
     * the application business layers (Action(s) or Http) that will bubble up to the
     * caller (i.e., a component) in a specified format:
     *
     * IsSuccess: boolean = false; // default for ErrorResponse
     * Message: string;
     * Errors: Array<ServiceError> = new Array<ServiceError>();
     * Exception: any;
     */
    /**
         * Use to handle service errors. These are error response [See: ErrorResponse] from
         * the application business layers (Action(s) or Http) that will bubble up to the
         * caller (i.e., a component) in a specified format:
         *
         * IsSuccess: boolean = false; // default for ErrorResponse
         * Message: string;
         * Errors: Array<ServiceError> = new Array<ServiceError>();
         * Exception: any;
         */
    ComponentBase.prototype.handleServiceErrors = /**
         * Use to handle service errors. These are error response [See: ErrorResponse] from
         * the application business layers (Action(s) or Http) that will bubble up to the
         * caller (i.e., a component) in a specified format:
         *
         * IsSuccess: boolean = false; // default for ErrorResponse
         * Message: string;
         * Errors: Array<ServiceError> = new Array<ServiceError>();
         * Exception: any;
         */
    function (errorResponse, serviceContext) {
        this.loggingService.log(this.componentName, buildmotionLogging.Severity.Information, "Preparing to handle service errors for component.");
        if (serviceContext && serviceContext.hasErrors()) {
            this.loggingService.log(this.componentName, buildmotionLogging.Severity.Information, "Retrieving error messages from the ServiceContext/ValidationContext;");
            var messages = this.retrieveServiceContextErrorMessages(serviceContext);
            this.alertNotification = new AlertNotification('Errors', errorResponse.Message, messages, AlertTypes.Warning);
        }
        else {
            if (errorResponse && errorResponse.Message) {
                this.loggingService.log(this.componentName, buildmotionLogging.Severity.Information, "Retrieving error messages from the [ErrorResponse].");
                var errors = this.retrieveResponseErrorMessages(errorResponse);
                this.alertNotification = new AlertNotification('Error', errorResponse.Message, errors, AlertTypes.Warning);
                this.loggingService.log(this.componentName, buildmotionLogging.Severity.Error, "Error: " + errorResponse.Message);
            }
        }
    };
    /**
     * Use to retrieve the error messages from the specified [ServiceContext].
     *
     * @parm: serviceContext: A context object containing messages for the specified request.
     */
    /**
         * Use to retrieve the error messages from the specified [ServiceContext].
         *
         * @parm: serviceContext: A context object containing messages for the specified request.
         */
    ComponentBase.prototype.retrieveServiceContextErrorMessages = /**
         * Use to retrieve the error messages from the specified [ServiceContext].
         *
         * @parm: serviceContext: A context object containing messages for the specified request.
         */
    function (serviceContext) {
        var messages = Array();
        serviceContext.Messages.forEach(function (e) {
            if (e.MessageType === angularRulesEngine.MessageType.Error && e.DisplayToUser) {
                messages.push(e.Message);
            }
        });
        return messages;
    };
    /**
     * Use to retrieve the error messages from the specified Web API response.
     */
    /**
         * Use to retrieve the error messages from the specified Web API response.
         */
    ComponentBase.prototype.retrieveResponseErrorMessages = /**
         * Use to retrieve the error messages from the specified Web API response.
         */
    function (errorResponse) {
        var errors = new Array();
        if (errorResponse && errorResponse.Errors) {
            errorResponse.Errors.forEach(function (e) {
                if (e.DisplayToUser) {
                    errors.push(e.Message);
                }
            });
        }
        return errors;
    };
    /**
     * Use to reset the [AlertNotification] to the initial state. Removes
     * existing messages and hides the AlertComponent.
     */
    /**
         * Use to reset the [AlertNotification] to the initial state. Removes
         * existing messages and hides the AlertComponent.
         */
    ComponentBase.prototype.resetAlertNotifications = /**
         * Use to reset the [AlertNotification] to the initial state. Removes
         * existing messages and hides the AlertComponent.
         */
    function () {
        this.alertNotification = new AlertNotification('', '');
    };
    /**
     * Use to navigate to the specified route.
     * @parm routeName: The name of the target route.
     */
    /**
         * Use to navigate to the specified route.
         * @parm routeName: The name of the target route.
         */
    ComponentBase.prototype.routeTo = /**
         * Use to navigate to the specified route.
         * @parm routeName: The name of the target route.
         */
    function (routeName) {
        try {
            this.router.navigate([routeName]);
        }
        catch (error) {
            this.loggingService.log(this.componentName, buildmotionLogging.Severity.Error, "Error while attempting to navigate to [" + routeName + "] route from " + this.componentName + ". Error: " + error.toString());
        }
    };
    /**
     * Use to retrieve and show any response error messages.
     */
    /**
         * Use to retrieve and show any response error messages.
         */
    ComponentBase.prototype.showResponseErrors = /**
         * Use to retrieve and show any response error messages.
         */
    function (response) {
        // let messages = this.retrieveResponseErrorMessages(response);
        // this.alertNotification = new AlertNotification('Errors', response.Message, messages, AlertTypes.Warning);
        this.handleServiceErrors(response, undefined);
    };
    ComponentBase.prototype.finishRequest = function (message) {
        this.loggingService.log(this.componentName, buildmotionLogging.Severity.Information, this.componentName + ": " + message);
    };
    ComponentBase.prototype.showAlertMessage = function (message) {
        alert(message);
    };
    return ComponentBase;
}());

exports.BuildMotionCoreModule = BuildMotionCoreModule;
exports.AlertComponent = AlertComponent;
exports.AlertNotification = AlertNotification;
exports.AlertTypes = AlertTypes;
exports.ComponentBase = ComponentBase;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=buildmotion-core.umd.js.map
