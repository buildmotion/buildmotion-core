import { Component, Input, OnInit } from '@angular/core';

import { AlertNotification } from './models/alert-notification.model';

@Component({
  selector: 'buildmotion-alert',
  template: `<div *ngIf="hasMessage">
  <div class="alert {{alertNotification.type}} fade in">
    <!--<a href="#" class="close" data-dismiss="alert">&times;</a>-->
    <strong>{{alertNotification.header}}</strong> :: {{alertNotification.title}}
    <ul>
      <li *ngFor="let message of alertNotification.messages">{{message}}</li>
    </ul>
  </div>
</div>`
})
export class AlertComponent implements OnInit {
  @Input() alertNotification: AlertNotification = new AlertNotification('', '');
  // @Input() set showAlert(showAlert: boolean){this.hasMessage = showAlert || false; };
  @Input() hasMessage: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
