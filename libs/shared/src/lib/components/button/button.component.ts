import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'dsmn8-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() label: string | undefined;
  @Input() ariaLabel: string | undefined;
  @Input() isPrimary: boolean | undefined;
  @Input() isDisabled: boolean | undefined;
  @Input() isFullWidth = false;
  @Output() clicked = new EventEmitter<boolean>();

  onBtnClick(): void {
    this.clicked.emit(true);
  }
}
