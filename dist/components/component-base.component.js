import { NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { MessageType } from 'angular-rules-engine';
import { ErrorResponse } from 'buildmotion-foundation';
import { Severity } from 'buildmotion-logging';
import { AlertNotification } from './alert/models/alert-notification.model';
import { AlertTypes } from './alert/models/alert-types.constants';
var ComponentBase = (function () {
    function ComponentBase(componentName, loggingService, router) {
        this.loggingService = loggingService;
        this.router = router;
        this.componentName = componentName;
        this.alertNotification = new AlertNotification('', '');
        var e = this.router.events.filter(function (event) { return event instanceof NavigationEnd; });
        if (e && e instanceof NavigationEnd) {
            this.googleAnalyticsPageview(e);
        }
    }
    ComponentBase.prototype.googleAnalyticsPageview = function (event) {
        window.ga('set', 'page', event.urlAfterRedirects);
        window.ga('send', 'pageview');
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
        this.loggingService.log(this.componentName, Severity.Information, "Preparing to create error response for component.");
        var response = new ErrorResponse();
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
        this.loggingService.log(this.componentName, Severity.Information, "Preparing to handle service errors for component.");
        if (serviceContext && serviceContext.hasErrors()) {
            this.loggingService.log(this.componentName, Severity.Information, "Retrieving error messages from the ServiceContext/ValidationContext;");
            var messages = this.retrieveServiceContextErrorMessages(serviceContext);
            this.alertNotification = new AlertNotification('Errors', errorResponse.Message, messages, AlertTypes.Warning);
        }
        else {
            if (errorResponse && errorResponse.Message) {
                this.loggingService.log(this.componentName, Severity.Information, "Retrieving error messages from the [ErrorResponse].");
                var errors = this.retrieveResponseErrorMessages(errorResponse);
                this.alertNotification = new AlertNotification('Error', errorResponse.Message, errors, AlertTypes.Warning);
                this.loggingService.log(this.componentName, Severity.Error, "Error: " + errorResponse.Message);
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
            if (e.MessageType === MessageType.Error && e.DisplayToUser) {
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
            this.loggingService.log(this.componentName, Severity.Error, "Error while attempting to navigate to [" + routeName + "] route from " + this.componentName + ". Error: " + error.toString());
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
        this.loggingService.log(this.componentName, Severity.Information, this.componentName + ": " + message);
    };
    ComponentBase.prototype.showAlertMessage = function (message) {
        alert(message);
    };
    return ComponentBase;
}());
export { ComponentBase };
//# sourceMappingURL=component-base.component.js.map