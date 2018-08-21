import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-calculator-actions',
  templateUrl: './calculator-actions.component.html',
  styleUrls: ['./calculator-actions.component.scss']
})
export class CalculatorActionsComponent implements OnInit {

  public actions: string[] = ["Del", "/", "*", "-", "+"];
  @Output() actionKeyPressed: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }

  onActionKeyPressed(index: number) {
    this.actionKeyPressed.emit(this.actions[index]);
  }
}
