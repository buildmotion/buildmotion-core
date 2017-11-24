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
                    template: "<div *ngIf=\"hasMessage\">\n  <div class=\"alert {{alertNotification.type}} fade in\">\n    <!--<a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>-->\n    <strong>{{alertNotification.header}}</strong> :: {{alertNotification.title}}\n    <ul>\n      <li *ngFor=\"let message of alertNotification.messages\">{{message}}</li>\n    </ul>\n  </div>\n</div>"
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