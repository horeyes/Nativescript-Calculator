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

  changeValue(){
    this.value = "1";
  }

}
