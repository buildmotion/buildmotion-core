import { AlertTypes } from './alert-types.constants';
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
//# sourceMappingURL=alert-notification.model.js.map