import { Router, NavigationEnd } from '@angular/router';
import { LoggingService } from 'buildmotion-logging';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import { MessageType } from 'angular-rules-engine';
import { ServiceContext } from 'angular-rules-engine';
import { ServiceMessage } from 'angular-rules-engine';
import { ErrorResponse } from 'buildmotion-foundation';
import { Severity } from 'buildmotion-logging';
import { AlertNotification } from './alert/models/alert-notification.model';
import { AlertTypes } from './alert/models/alert-types.constants';

export class ComponentBase {
    componentName: string;
    alertNotification: AlertNotification;
    navSubscription: Subscription;

    constructor(
        componentName: string,
        public loggingService: LoggingService,
        public router: Router
    ) {
        this.componentName = componentName;
        this.alertNotification = new AlertNotification('', '');

        var e = this.router.events.filter(event => event instanceof NavigationEnd);
        if(e && e instanceof NavigationEnd) {
            this.googleAnalyticsPageview(e);
        }
    }

    googleAnalyticsPageview(event: NavigationEnd) {
        if(event && event.urlAfterRedirects) {
            this.loggingService.log(this.componentName, Severity.Information, `Preparing to set [Google Analytics] page view for [${event.urlAfterRedirects}].`);
            (<any>window).ga('set', 'page', event.urlAfterRedirects);
            (<any>window).ga('send', 'pageview');
        } else {
            this.loggingService.log(this.componentName, Severity.Warning, `Failed to set [Google Analytics] page view.`);
        }

    }

    /**
     * Use to create a simple [ErrorResponse] with the specified message.
     * @param message The message to display to the user.
     */
    createErrorResponse(message: string): ErrorResponse {
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to create error response for component.`)
        let response: ErrorResponse = new ErrorResponse();
        response.Message = message;
        return response;
    }

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
    handleServiceErrors(errorResponse: ErrorResponse, serviceContext?: ServiceContext) {
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to handle service errors for component.`)
        if (serviceContext && serviceContext.hasErrors()) {
            this.loggingService.log(this.componentName, Severity.Information, `Retrieving error messages from the ServiceContext/ValidationContext;`)
            const messages = this.retrieveServiceContextErrorMessages(serviceContext);
            this.alertNotification = new AlertNotification('Errors', errorResponse.Message, messages, AlertTypes.Warning);
        } else {
            if (errorResponse && errorResponse.Message) {
                this.loggingService.log(this.componentName, Severity.Information, `Retrieving error messages from the [ErrorResponse].`)
                const errors = this.retrieveResponseErrorMessages(errorResponse);
                this.alertNotification = new AlertNotification('Error', errorResponse.Message, errors, AlertTypes.Warning);
                this.loggingService.log(this.componentName, Severity.Error, `Error: ${errorResponse.Message}`);
            }
        }
    }

    /**
     * Use to retrieve the error messages from the specified [ServiceContext]. 
     *
     * @parm: serviceContext: A context object containing messages for the specified request.
     */
    retrieveServiceContextErrorMessages(serviceContext: ServiceContext): Array<string> {
        const messages = Array<string>();
        serviceContext.Messages.forEach(e => {
            if (e.MessageType === MessageType.Error && e.DisplayToUser) {
                messages.push(e.Message);
            }
        });

        return messages;
    }

    /**
     * Use to retrieve the error messages from the specified Web API response. 
     */
    retrieveResponseErrorMessages(errorResponse: ErrorResponse) {
        const errors = new Array<string>();
        if (errorResponse && errorResponse.Errors) {
            errorResponse.Errors.forEach(e => {
                if (e.DisplayToUser) {
                    errors.push(e.Message);
                }
            });
        }
        return errors;
    }

    /**
     * Use to reset the [AlertNotification] to the initial state. Removes
     * existing messages and hides the AlertComponent.
     */
    resetAlertNotifications() {
        this.alertNotification = new AlertNotification('', '');
    }

    /**
     * Use to navigate to the specified route.
     * @parm routeName: The name of the target route.
     */
    public routeTo(routeName: string) {
        try {
            this.router.navigate([routeName]);
        } catch (error) {
            this.loggingService.log(this.componentName, Severity.Error, `Error while attempting to navigate to [${routeName}] route from ${this.componentName}. Error: ${error.toString()}`);
        }
    }

    /**
     * Use to retrieve and show any response error messages.
     */
    showResponseErrors(response: ErrorResponse) {
        // let messages = this.retrieveResponseErrorMessages(response);
        // this.alertNotification = new AlertNotification('Errors', response.Message, messages, AlertTypes.Warning);
        this.handleServiceErrors(response, undefined);
    }

    finishRequest(message: string): void {
        this.loggingService.log(this.componentName, Severity.Information, `${this.componentName}: ${message}`);
    }

    protected showAlertMessage(message: string): void {
        alert(message);
    }
}
