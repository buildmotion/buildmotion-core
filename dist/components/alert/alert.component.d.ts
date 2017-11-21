import { OnInit } from '@angular/core';
import { AlertNotification } from './models/alert-notification.model';
export declare class AlertComponent implements OnInit {
    alertNotification: AlertNotification;
    hasMessage: boolean;
    constructor();
    ngOnInit(): void;
}
