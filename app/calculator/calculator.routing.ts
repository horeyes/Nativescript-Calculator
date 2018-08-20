import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator.component";
import { CalculatorDisplayComponent } from "./calculator-display/calculator-display.component";
import { CalculatorKeypadComponent } from "~/calculator/calculator-keypad/calculator-keypad.component";

const routes: Routes = [
    { path: "", component: CalculatorComponent }
];

export const CalculatorComponents: any = [
    CalculatorComponent,
    CalculatorDisplayComponent,
    CalculatorKeypadComponent
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CalculatorRoutingModule {
}

