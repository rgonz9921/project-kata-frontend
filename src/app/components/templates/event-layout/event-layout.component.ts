import {Component, Input} from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";
import {IEvent} from "../../../models/event.model";

@Component({
  selector: 'tmp-event-layout',
  imports: [
    SharedModule
  ],
  templateUrl: './event-layout.component.html',
  styleUrl: './event-layout.component.scss'
})
export class EventLayoutComponent {
  @Input() event!: IEvent;
}
