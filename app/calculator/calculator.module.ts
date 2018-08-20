import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CalculatorRoutingModule, CalculatorComponents } from "~/calculator/calculator.routing";
import { CalculatorComponent } from "~/calculator/calculator.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    imports: [
        CalculatorRoutingModule,
        NativeScriptCommonModule
    ],
    declarations: [
        ...CalculatorComponents
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class CalculatorModule { 
}
