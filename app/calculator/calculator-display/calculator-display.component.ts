import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss']
})
export class CalculatorDisplayComponent implements OnInit, OnChanges {

  @Input() value: string = "0";
  @Input() total: string = "0";
  @Output() valueCheck: EventEmitter<string> = new EventEmitter<string>();
  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() { }

  ngOnChanges() {
    this._changeDetectorRef.detectChanges();
    this.valueCheck.emit(this.value);
  }
}
