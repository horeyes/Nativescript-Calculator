import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-calculator-keypad',
  templateUrl: './calculator-keypad.component.html',
  styleUrls: ['./calculator-keypad.component.scss']
})
export class CalculatorKeypadComponent implements OnInit {

  public firstRow: string[] = ["7", "8", "9"] ;
  public secondRow: string[] = ["4", "5", "6"];
  public thirdRow: string[] = ["1", "2", "3"];
  public fourthRow: string[] = [".", "0", "="];

  constructor() { }

  ngOnInit() {
    console.log("Keypad");
  }

}
