import { AlertTypes } from './alert-types.constants';
var AlertNotification = /** @class */ (function () {
    function AlertNotification(header, title, messages, type) {
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
//# sourceMappingURL=alert-notification.model.js.map