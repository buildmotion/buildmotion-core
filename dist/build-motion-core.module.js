/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuildMotionFoundationModule } from "@buildmotion/foundation";
import { BuildMotionLoggingModule } from "@buildmotion/logging";
import { AlertComponent } from "./components/alert/alert.component";
var BuildMotionCoreModule = (function () {
    function BuildMotionCoreModule() {
    }
    BuildMotionCoreModule.decorators = [
        { type: NgModule, args: [{
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
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                },] },
    ];
    /** @nocollapse */
    BuildMotionCoreModule.ctorParameters = function () { return []; };
    return BuildMotionCoreModule;
}());
export { BuildMotionCoreModule };
function BuildMotionCoreModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BuildMotionCoreModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BuildMotionCoreModule.ctorParameters;
}
//# sourceMappingURL=build-motion-core.module.js.map