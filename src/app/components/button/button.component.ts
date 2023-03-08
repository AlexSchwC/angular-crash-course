import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() btnClick = new EventEmitter();
  @Input() text!: string;
  @Input() color!: string;

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
