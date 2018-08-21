import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

function splitMulti(str, tokens) {
  var tempChar = tokens[0]; // We can use the first token as a temporary join character
  for (var i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
}


var splitOrig = String.prototype.split; // Maintain a reference to inbuilt fn
String.prototype.split = function () {
  if (arguments[0].length > 0) {
    if (Object.prototype.toString.call(arguments[0]) == "[object Array]") { // Check if our separator is an array
      return splitMulti(this, arguments[0]);  // Call splitMulti
    }
  }
  return splitOrig.apply(this, arguments); // Call original split maintaining context
};

@Component({
  moduleId: module.id,
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public value: string = "0";

  constructor() { }

  ngOnInit() {
    console.log("Component");
  }

  onValueChangeCheck(value: string) {
    console.log("Changed: " + value);
  }

  onKeyPressed(keyPressed: string) {

    switch (keyPressed) {
      case "=":
        this.calculator();
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
    console.log("Case: " + keyPresed);

    switch (keyPresed) {
      case "Del":
        if (this.value.length <= 1) {
          this.value = "0";
        }
        else {
          this.value = this.value.slice(0, -1);
        };
        break

      case "/":
        this.value += "/";
        break;

      case "*":
        this.value += "*";
        break;

      case "-":
        this.value += "-";
        break;

      case "+":
        this.value += "+";
        break;
    };
  }

  calculator() {
    let n
    console.log("Includes: " + this.value.includes("/", n))
    this.value.includes("/");
  }
}
