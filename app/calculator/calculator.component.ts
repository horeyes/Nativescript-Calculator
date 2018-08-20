import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public value: string = "0"

  constructor() { }

  ngOnInit() {
    console.log("Component");
  }

  onValueChangeCheck(value: string) {
    console.log("Changed: " + value);
  }

  onKeyPressed(keyPressed: string) {
    if (this.value != "0") {
      this.value = this.value + keyPressed
    } else {
      this.value = keyPressed;
    }
  }

}
