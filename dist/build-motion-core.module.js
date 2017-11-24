import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRulesEngineModule } from 'angular-rules-engine';
import { BuildMotionFoundationModule } from 'buildmotion-foundation';
import { BuildMotionLoggingModule } from 'buildmotion-logging';
import { AlertComponent } from './components/alert/alert.component';
var BuildMotionCoreModule = (function () {
    function BuildMotionCoreModule() {
    }
    BuildMotionCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        AngularRulesEngineModule,
                        BuildMotionFoundationModule,
                        BuildMotionLoggingModule
                    ],
                    declarations: [
                        AlertComponent
                    ],
                    exports: [
                        AlertComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                },] },
    ];
    /** @nocollapse */
    BuildMotionCoreModule.ctorParameters = function () { return []; };
    return BuildMotionCoreModule;
}());
export { BuildMotionCoreModule };
//# sourceMappingURL=build-motion-core.module.js.map