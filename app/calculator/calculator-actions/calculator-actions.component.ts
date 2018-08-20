import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-calculator-actions',
  templateUrl: './calculator-actions.component.html',
  styleUrls: ['./calculator-actions.component.scss']
})
export class CalculatorActionsComponent implements OnInit {

  public actions: string[] = ["Del", "/", "*", "-", "+"]
  constructor() { }

  ngOnInit() { }

}
