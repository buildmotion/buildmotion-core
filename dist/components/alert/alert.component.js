/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { AlertNotification } from "./models/alert-notification.model";
var AlertComponent = (function () {
    function AlertComponent() {
        this.alertNotification = new AlertNotification('', '');
        // @Input() set showAlert(showAlert: boolean){this.hasMessage = showAlert || false; };
        this.hasMessage = false;
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'buildmotion-alert',
                    template: "<div *ngIf=\"hasMessage \" class=\"alert {{alertNotification.type}} \" role=\"alert \">\n  <div class=\"container \">\n    <div class=\"alert-icon \">\n      <i class=\"now-ui-icons ui-1_bell-53 \"></i>\n    </div>\n    <strong>{{alertNotification.header}}</strong> :: {{alertNotification.title}}\n    <ul>\n      <li *ngFor=\"let message of alertNotification.messages \">{{message}}</li>\n    </ul>\n    <button type=\"button \" class=\"close \" data-dismiss=\"alert \" aria-label=\"Close \">\n      <span aria-hidden=\"true \">\n        <i class=\"now-ui-icons ui-1_simple-remove \"></i>\n      </span>\n    </button>\n  </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        "alertNotification": [{ type: Input },],
        "hasMessage": [{ type: Input },],
    };
    return AlertComponent;
}());
export { AlertComponent };
function AlertComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AlertComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AlertComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AlertComponent.propDecorators;
    /** @type {?} */
    AlertComponent.prototype.alertNotification;
    /** @type {?} */
    AlertComponent.prototype.hasMessage;
}
//# sourceMappingURL=alert.component.js.map