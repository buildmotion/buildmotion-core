/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { AlertTypes } from "./alert-types.constants";
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
export { AlertNotification };
function AlertNotification_tsickle_Closure_declarations() {
    /** @type {?} */
    AlertNotification.prototype.type;
    /** @type {?} */
    AlertNotification.prototype.header;
    /** @type {?} */
    AlertNotification.prototype.title;
    /** @type {?} */
    AlertNotification.prototype.messages;
    /** @type {?} */
    AlertNotification.prototype.showAlert;
}
//# sourceMappingURL=alert-notification.model.js.map