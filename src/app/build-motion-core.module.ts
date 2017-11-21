import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AngularRulesEngineModule } from 'angular-rules-engine';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    AngularRulesEngineModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  
})
export class BuildMotionCoreModule { }
