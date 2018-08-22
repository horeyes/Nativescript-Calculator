import { Component, OnInit, ChangeDetectorRef } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public value: string = "0";
  public opCounter: number = 0;
  public storeValue: number = 0;
  public total: string = "0";

  constructor() { }

  ngOnInit() {
    console.log("Component");
  }

  onValueChangeCheck(value: string) {
  }

  onKeyPressed(keyPressed: string) {

    switch (keyPressed) {
      case "=":
        break;

      default:
        if (this.value != "0") {
          this.value = this.value + keyPressed
        }
        else {
          this.value = keyPressed;
        };
        break;
    }
  }

  onActionKeyPressed(keyPresed: string) {
    let value = Number(this.value);
    switch (keyPresed) {
      case "Del":
        if (this.value.length <= 1) {
          this.value = "0";
          this.opCounter = 0;
        }
        else {
          this.value = this.value.slice(0, -1);
        };
        break

      case "/":
        this.value = "0";
        this.operation(value, "/")
        this.operationCounter();

        break;

      case "*":
        this.value = "0";
        this.operation(value, "*")
        this.operationCounter();
        break;

      case "-":
        this.value = "0";
        this.operation(value, "-")
        this.operationCounter();
        break;

      case "+":
        this.value = "0";
        this.operation(value, "+")
        this.operationCounter();
        break;
    };
  }

  operationCounter() {
    this.opCounter += 1;
  }

  operation(value, operation) {

    if (this.opCounter >= 1) {
      let currentValue = Number(this.value);
      switch (operation) {
        case "/":
          this.total = (this.storeValue / value).toString();
          this.storeValue = Number(this.total);
          break;
        case "*":
          this.total = (this.storeValue * value).toString();
          this.storeValue = Number(this.total);
          break;
        case "-":
          this.total = (this.storeValue - value).toString();
          this.storeValue = Number(this.total);
          break;
        case "+":
          this.total = (this.storeValue + value).toString();
          this.storeValue = Number(this.total);
          break;
      }
    }
    else {
      this.storeValue = value;
    }
  }

}
