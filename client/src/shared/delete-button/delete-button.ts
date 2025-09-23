import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  imports: [],
  templateUrl: './delete-button.html',
})
export class DeleteButton {
  disabled = input<boolean>();
  clickEvent = output<Event>();

  onClick(event: Event) {
    this.clickEvent.emit(event);
  }
}
