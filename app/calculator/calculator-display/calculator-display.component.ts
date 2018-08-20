import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss']
})
export class CalculatorDisplayComponent implements OnInit {

  @Input() value: string = "0";
  constructor() { }

  ngOnInit() { }

}
