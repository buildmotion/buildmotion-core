import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { BuildMotionFoundationModule } from 'buildmotion-foundation';
import { BuildMotionLoggingModule } from 'buildmotion-logging';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    BuildMotionFoundationModule,
    BuildMotionLoggingModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  
})
export class BuildMotionCoreModule { }
