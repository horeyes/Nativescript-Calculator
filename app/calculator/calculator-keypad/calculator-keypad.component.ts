import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-calculator-keypad',
  templateUrl: './calculator-keypad.component.html',
  styleUrls: ['./calculator-keypad.component.scss']
})
export class CalculatorKeypadComponent implements OnInit {

  @Output() public keyPressed: EventEmitter<string> = new EventEmitter<string>();
  public firstRow: string[] = ["7", "8", "9"];
  public secondRow: string[] = ["4", "5", "6"];
  public thirdRow: string[] = ["1", "2", "3"];
  public fourthRow: string[] = [".", "0", "="];

  constructor() { }

  ngOnInit() {
    console.log("Keypad");
  }

  onKeyPressed(i: number, row: string) {
    switch (row) {
      case "firstRow":
        this.keyPressed.emit(this.firstRow[i]);
        break;

      case "secondRow":
        this.keyPressed.emit(this.secondRow[i]);
        break;

      case "thirdRow":
        this.keyPressed.emit(this.thirdRow[i]);
        break;

      case "fourthRow":
        this.keyPressed.emit(this.fourthRow[i]);
    }
  }
}
