import { Component, Input } from '@angular/core';
import { AlertNotification } from './models/alert-notification.model';
var AlertComponent = (function () {
    function AlertComponent() {
        this.alertNotification = new AlertNotification('', '');
        // @Input() set showAlert(showAlert: boolean){this.hasMessage = showAlert || false; };
        this.hasMessage = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'buildmotion-alert',
                    template: "<div *ngIf=\"hasMessage \" class=\"alert {{alertNotification.type}} \" role=\"alert \">\n  <div class=\"container \">\n    <button type=\"button \" class=\"close \" data-dismiss=\"alert \" aria-label=\"Close \">\n      <span aria-hidden=\"true \">\n        <i class=\"now-ui-icons ui-1_simple-remove \"></i>\n      </span>\n    </button>\n    <div class=\"alert-icon \">\n      <i class=\"now-ui-icons ui-1_bell-53 \"></i>\n    </div>\n    <strong>{{alertNotification.header}}</strong> :: {{alertNotification.title}}\n    <ul>\n      <li *ngFor=\"let message of alertNotification.messages \">{{message}}</li>\n    </ul>\n  </div>\n</div>"
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
//# sourceMappingURL=alert.component.js.map